import {scrollLock} from "@/tools";

export default {
  state: () => ({
    isOpen: false,
    currentModal: 0,
    handlerConfirm: null,
  }),

  mutations: {
    setStateModal(state, { isOpen, currentModal, handlerConfirm = null }) {
      state.isOpen = isOpen;
      state.currentModal = currentModal;
      state.handlerConfirm = handlerConfirm;
      scrollLock(isOpen);
    },
  },

  getters: {
    getState(state) {
      return state.isOpen;
    },

    getCurrentModal(state) {
      return state.currentModal;
    },

    getHandlerConfirm(state) {
      return state.handlerConfirm;
    },
  },
};
