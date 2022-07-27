import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollStatus: true,
  },
  getters: {
  },
  mutations: {
    updateScrollStatus(state, status) {
      state.scrollStatus = status;
    },
  },
  actions: {
  },
  modules: {
  },
});
