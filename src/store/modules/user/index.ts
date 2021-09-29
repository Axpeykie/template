interface userStateType {
  name: string
  age: number
}

const userState: userStateType = {
  name: 'Tom',
  age: 18
}
const mutations = {
  addAge(state: userStateType) {
    state.age += 1
  }
}
const actions = {
  addAge(store: any) {
    store.commit('addAge')
  }
}

export const user = {
  namespaced: true,
  state: userState,
  mutations,
  actions
}
