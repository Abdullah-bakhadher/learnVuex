import Vue from "vue";
import Vuex from "vuex";
import {likesModules} from "./likesModules";
import {usersModules} from "./usersModules";
import {videosModules} from "./videosModules";

Vue.use(Vuex);
// const likesModules = {
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
// };
// const usersModules = {
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
// };
// const videosModules = {
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
// };
const store = new Vuex.Store({
  namespaces: true,
  state: {
    fullName: "Mohammed Ba khader",
    toDolist: [
      { id: 0, ex: "Homwork", done: true },
      { id: 1, ex: "update ", done: false },
      { id: 2, ex: "walk", done: true },
    ],
    count: 0,
  },

  getters: {
    //Properties
    todoListDone: (state) => {
      return state.toDolist.filter((v) => v.done == true);
    },
    todoListNOTDone: (state) => {
      return state.toDolist.filter((v) => v.done == false);
    },
    //access getters function inside getters.(state)is must
    countAlltodoListDone: (state, getters) => {
      return getters.todoListDone.length;
    },
    //methods

    //func take parameter
    getTodoListById: (state) => (id) => {
      return state.toDolist.filter((v) => v.id === id);
    },
  },
  mutations: {
    //this called type
    increment(state) {
      //this called handler
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    n_increment(state, n) {
      //this called handler
      state.count += n;
    },
    n_decrement(state, payload) {
      //this called handler
      state.count -= payload.decreaseBy5;
    },
  },
  //we use dispatch to call the actions
  //actions wait for sync data but mutation will not wait for response

  actions: {
    a_increment({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    a_decrement({ commit }) {
      setTimeout(() => {
        commit("decrement");
      }, 1000);
    },
    a_increment_By({ commit }, v) {
      commit("n_increment", v);
    },
  },
  modules: {
    like: likesModules,
    users: usersModules,
    videos:videosModules,
  },
});
export default store;

// export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
