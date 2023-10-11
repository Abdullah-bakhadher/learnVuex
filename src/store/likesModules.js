export const likesModules = {
  state: {
    numOfLikes: 10,
    like: false,
  },
  getters: {
    numOfLikes: (state) => {
      return state.numOfLikes;
    },
    like: (state) => {
      return state.like;
    },
  },
  mutations: {
    increaseLikes: (state) => {
      state.numOfLikes += 1;
    },
    decreaseLikes: (state) => {
      state.numOfLikes -= 1;
    },
    toggleLikes(state) {
      state.like = !state.like;
    },
  },
  actions: {
    a_toggleLikes(context) {
      context.commit("toggleLikes");
      if (context.state.like) {
        context.commit("increaseLikes");
      } else {
        context.commit("decreaseLikes");
      }
    },
  },
};
