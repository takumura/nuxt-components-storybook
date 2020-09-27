import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { RootState } from '~/store'

export interface Todo {
  name: string
  done: boolean
}

export interface TodoState {
  list: Todo[]
}

export const state = () => ({
  list: [],
})

export const getters: GetterTree<TodoState, RootState> = {
  getTodoList: (state: TodoState) => {
    return state.list
  },
}

export const actions: ActionTree<TodoState, RootState> = {
  add: ({ commit }, description: string) => {
    commit('add', description)
  },
  remove: ({ commit }, todo: Todo) => {
    commit('remove', todo)
  },
  toggle: ({ commit }, todo: Todo) => {
    commit('toggle', todo)
  },
}

export const mutations: MutationTree<TodoState> = {
  add(state, description: string) {
    const todo: Todo = { name: description, done: false }
    state.list.push(todo)
  },
  remove(state, todo: Todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo: Todo) {
    todo.done = !todo.done
  },
}
