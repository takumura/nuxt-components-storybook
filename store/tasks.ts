import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export interface Task {
  name: string
  done: boolean
}

export interface TaskState {
  list: Task[]
}

export const state = () => ({
  list: [] as Task[],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  getTasks: (state: TaskState) => state.list,
})
