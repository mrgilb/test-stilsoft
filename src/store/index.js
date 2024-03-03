import Vue from 'vue'
import Vuex from 'vuex'
import entity from "@/store/entity";
import modal from "@/store/modal";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    entity,
    modal
  }
})
