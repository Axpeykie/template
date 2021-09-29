interface langStateType {
  code: string
  language: string
}

const langState: langStateType = {
  code: 'zh-CN',
  language: '中文'
}
const mutations = {
  changeLanguage(state: langStateType) {
    state.code = 'en-GB'
    state.language = 'English'
  }
}
const actions = {
  changeLanguage(store: any) {
    store.commit('changeLanguage')
  }
}

export const lang = {
  namespaced: true,
  state: langState,
  mutations,
  actions
}
