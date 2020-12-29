import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { RootState } from '~/store'

export interface Todo {
  id?: number
  name: string
  running: boolean
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
  runTask: ({ commit }, todo: Todo) => {
    commit('runTask', todo)
  },
  toggle: ({ commit }, todo: Todo) => {
    commit('toggle', todo)
  },
}

export const mutations: MutationTree<TodoState> = {
  add(state, description: string) {
    const todo: Todo = { name: description, running: false, done: false }
    state.list.push(todo)
  },
  remove(state, todo: Todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  runTask(state, todo: Todo) {
    const isRunning = todo.running
    state.list
      .filter((x) => x.running)
      .forEach((x) => {
        x.running = false
      })
    todo.running = !isRunning
  },
  toggle(state, todo: Todo) {
    todo.done = !todo.done
  },
}
