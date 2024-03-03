import Vue from 'vue'
import Vuex from 'vuex'
import entity from "@/store/entity";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    entity
  }
})
