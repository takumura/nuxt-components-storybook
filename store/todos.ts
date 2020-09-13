import { MutationTree } from 'vuex'

export interface Todo {
  name: string
  done: boolean
}

export const state = () => ({
  list: [] as Todo[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  add(state, test: string) {
    const todo: Todo = { name: test, done: false }
    state.list.push(todo)
  },
  remove(state, todo: Todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo: Todo) {
    todo.done = !todo.done
  },
}
