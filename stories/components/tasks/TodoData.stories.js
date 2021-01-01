import TodoData from '~/components/TodoData.vue'
import store from '@/.storybook/preview'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoData },
  template: '<todo-data :todo="todo" />',
  store,
})

export const todoData = Template.bind({})
todoData.args = {
  todo: { name: 'task1', running: false, done: false },
}
