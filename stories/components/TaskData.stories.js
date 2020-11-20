import TaskData from '../../components/TaskData.vue'

export default {
  title: 'Components/Task',
  component: TaskData,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TaskData },
  template: '<task-data :task="task" />',
})

export const TaskDataComponent = Template.bind({})
TaskDataComponent.args = {
  task: { name: 'task1', done: false },
}
