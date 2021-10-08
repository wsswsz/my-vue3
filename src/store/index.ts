import { createStore } from "vuex"

export const store = createStore({
  state() {
    return {
      counter: 12
    }
  },
  mutations: {
    add(state) {
      state.counter++;
    }
  }
})