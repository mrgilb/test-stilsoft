import { list } from "@/assets/js/entity";
import { faker } from "@faker-js/faker";
import { generateUniqueId } from "@/tools";

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
      state.currentPage = 1;
      state.searchValue = value;
    },

    deleteCardById(state, id) {
      state.list = state.list.filter((item) => item.id !== id);
      state.currentPage = Math.ceil(state.list.length / state.perPage);
    },

    addCard(state, { text, enumValue }) {
      const card = {
        name: text,
        id: generateUniqueId(state.list),
        boolean: faker.datatype.boolean(),
        date: faker.date.past().toISOString(),
        enum: Number(enumValue),
        img: faker.image.url(),
      };

      state.list.push(card);
    },
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
