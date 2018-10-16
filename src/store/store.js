import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/counter';
import Test from './modules/test';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter: Counter,
    test: Test
  }
});
