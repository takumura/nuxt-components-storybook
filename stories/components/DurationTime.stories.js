import DurationTime from '../../components/DurationTime.vue'

export default {
  title: 'Components/Task',
  component: DurationTime,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DurationTime },
  template: '<duration-time :duration="duration" />',
})

export const DurationTimeComponent = Template.bind({})
DurationTimeComponent.args = {
  duration: 70000,
}
