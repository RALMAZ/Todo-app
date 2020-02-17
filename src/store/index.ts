import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { TodoState } from '../types/store'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store: StoreOptions<TodoState> = {
  state: {
    isCollapse: false,
    auth: {
      token: ''
    }
  },

  mutations: {
    setCollapse(state, p) {
      state.isCollapse = p
    },

    setToken(state, p) {
      state.auth.token = p
    }
  },
  // @ts-ignore
  plugins: [ vuexLocal.plugin ]
}

export default new Vuex.Store<TodoState>(store)
