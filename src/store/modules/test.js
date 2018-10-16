const TEST = {
  namespaced: true,
  state: {
    count: 10
  },
  mutations: {
    PLUS_COUNT(state) {
      state.count += 1;
    },
    MINUS_COUNT(state) {
      state.count -= 1;
    }
  },
  actions: {
    plusCount: ({ commit }) => {
      commit("PLUS_COUNT");
    },
    minusCount: ({ commit }) => {
      commit("MINUS_COUNT");
    }
  },
  getters: {
    count: state => state.count
  }
};

export default TEST;
