import Vuex from 'vuex'
import TodoList from '~/components/TodoList'

const store = new Vuex.Store({
  modules: {
    todos: {
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
        getTodoList: (state) => {
          return state.list
        },
      },
    },
  },
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoList },
  template: '<todo-list />',
  store,
})

export const todoList = Template.bind({})
