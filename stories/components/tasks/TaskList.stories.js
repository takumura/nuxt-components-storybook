import Vuex from 'vuex'
import TaskList from '../../../components/TaskList'

const store = new Vuex.Store({
  modules: {
    tasks: {
      namespaced: true,
      state: {
        list: [
          { name: 'task1', done: false },
          { name: 'task2', done: true },
          { name: 'task3', done: true },
          { name: 'task4', done: true },
        ],
      },
      getters: {
        getTasks: (state) => {
          return state.list
        },
      },
    },
  },
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TaskList },
  template: '<task-list />',
  store,
})

export const taskList = Template.bind({})
