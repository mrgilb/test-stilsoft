import { list } from "@/assets/js/entity";

export default {
  state: () => ({
    list: list,
    perPage: 12,
  }),

  mutations: {
    setList(state, value) {
      state.list = value;
    },
  },

  actions: {
    defineList({ commit }, value) {
      commit("setList", value);
    },
  },

  getters: {
    getList(state) {
      return state.list;
    },

    geListByPage:
      (state) =>
      (page = 1) => {
        const lastIndex = page * state.perPage;
        const firstIndex = lastIndex - state.perPage;

        return state.list.slice(firstIndex, lastIndex);
      },
  },
};
