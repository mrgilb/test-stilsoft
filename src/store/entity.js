import { list } from "@/assets/js/entity";
import {faker} from "@faker-js/faker";

export default {
  state: () => ({
    list: list,
    perPage: 12,
    currentPage: 1,
    searchValue: "",
  }),

  mutations: {
    setList(state, value) {
      state.list = value;
    },

    setCurrentPage(state, value) {
      state.currentPage = value;
    },

    setSearchValue(state, value) {
      state.searchValue = value;
    },

    deleteCardById(state, id) {
      state.list = state.list.filter(item => item.id !== id)
    },

    addCard(state, value) {
      console.log(value)
      const card = {
        name: faker.person.fullName(), // Случайное имя
        id: state.list.length + 1, // ID
        boolean: faker.datatype.boolean(), // True или false
        date: faker.date.past().toISOString(), // Дата в формате ISO 8601
        enum: faker.number.int({ min: 1, max: 5 }), // Случайное число из массива [1, 2, 3, 4, 5] для enum
        img: faker.image.url(),
      }

      console.log(card)
    }
  },

  getters: {
    getList(state) {
      return state.list;
    },

    getSearchValue(state) {
      return state.searchValue;
    },

    getFilteredList(state) {
      return state.list.filter((item) =>
        state.searchValue
          ? item.name.toLowerCase().includes(state.searchValue)
          : true
      );
    },

    geListByPage(state, getters) {
      const lastIndex = state.currentPage * state.perPage;
      const firstIndex = lastIndex - state.perPage;

      return getters.getFilteredList.slice(firstIndex, lastIndex);
    },

    getSortedListByPage(state, getters) {
      const sortedList = getters.getFilteredList
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));

      const lastIndex = state.currentPage * state.perPage;
      const firstIndex = lastIndex - state.perPage;

      return sortedList.slice(firstIndex, lastIndex);
    },

    getCurrentPage(state) {
      return state.currentPage;
    },

    getTotalPages(state, getters) {
      return Math.ceil(getters.getFilteredList.length / state.perPage);
    },
  },
};
