import { createStore, Store } from 'vuex'
import { lang, langStateType } from './modules/lang'
import { user, userStateType } from './modules/user'

interface stateType {
  lang: langStateType
  user: userStateType
}

export const store: Store<stateType> = createStore({
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    lang,
    user
  }
})
export default store
