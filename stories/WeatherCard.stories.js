import WeatherCard from '../components/WeatherCard.vue'

export default {
  title: 'Example/VuetifyComponent',
  component: WeatherCard,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WeatherCard },
  template: '<weather-card :day-of-the-week-labels="dayOfTheWeekLabels"/>',
})

export const weatherCard = Template.bind({})
weatherCard.args = {
  dayOfTheWeekLabels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
}
