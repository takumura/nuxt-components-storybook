import { getAccessorType } from 'typed-vuex'
import * as todos from '~/store/todos'
import * as tasks from '~/store/tasks'

export const state = () => ({
  version: 0,
})

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  //
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    todos,
    tasks,
  },
})
