import store from '@/.storybook/preview'
import TodoList from '~/components/TodoList'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoList },
  template: '<todo-list />',
  store,
})

export const todoList = Template.bind({})
