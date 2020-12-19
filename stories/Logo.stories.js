import { storiesOf } from '@storybook/vue'
import Logo from '@/components/Logo.vue'

storiesOf('Example/Logo', module).add(
  'Logo',
  () => ({
    components: { Logo },
    template: `
    <logo />
`,
  }),
  {
    info: true,
    notes: `
        # Logo
        Nuxt.js default logo
      `,
  }
)
