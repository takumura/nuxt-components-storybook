import Task from '../../components/Task'
import Vuex from 'vuex'

export default {
  title: 'Components/Task',
  component: Task,
  argTypes: {},
}

const store = new Vuex.Store({
  modules: {
    tasks: {
      namespaced: true,
      state: {
        list: [
          { name: 'task1', done: false },
          { name: 'task2', done: true },
          { name: 'task3', done: true },
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
  components: { Task },
  template: '<task />',
  store,
})

export const TaskComponent = Template.bind({})
