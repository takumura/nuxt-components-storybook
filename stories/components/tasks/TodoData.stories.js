import TodoData from '../../../components/TodoData.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoData },
  template: '<todo-data :todo="todo" :duration="time" />',
})

export const todoData = Template.bind({})
todoData.args = {
  todo: { name: 'task1', done: false },
  time: 50000,
}
