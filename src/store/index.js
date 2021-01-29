import { createStore } from 'vuex'

const state = {
  user: ''
};

export default createStore({
  state,
  getters: {
    user: (state) =>{
      return state.user;
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    }
  },
  mutations: {
    user(state, user){
      state.user = user;
    }
  },
  modules: {
  }
})
