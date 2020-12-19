import TaskData from '../../../components/TaskData.vue'

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TaskData },
  template: '<task-data :task="task" :duration="500000" />',
})

export const taskData = Template.bind({})
taskData.args = {
  task: { name: 'task1', done: false },
}
