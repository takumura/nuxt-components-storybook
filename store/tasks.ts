import { GetterTree } from 'vuex'
import { RootState } from '~/store'

export interface Task {
  name: string
  done: boolean
}

export interface TaskState {
  list: Task[]
}

export const state = () => ({
  list: [],
})

export const getters: GetterTree<TaskState, RootState> = {
  getTasks: (state: TaskState) => {
    return state.list
  },
}
