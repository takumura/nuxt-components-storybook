import WeatherCard from '../components/WeatherCard.vue'

export default {
  title: 'Components/Vuetify',
  component: WeatherCard,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { WeatherCard },
  template: '<weather-card :day-of-the-week-labels="dayOfTheWeekLabels"/>',
})

export const WeatherCardComponent = Template.bind({})
WeatherCardComponent.args = {
  dayOfTheWeekLabels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
}
