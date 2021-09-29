import { createStore } from 'vuex'
import { lang } from './modules/lang'
import { user } from './modules/user'

export default createStore({
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    lang,
    user
  }
})
