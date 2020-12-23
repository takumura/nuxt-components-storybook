<template>
  <v-btn small depressed :color="color" v-on:click="toggle">
    {{ buttonMessage }}
  </v-btn>
</template>
<script lang="ts">
export default {
  data: function () {
    return { running: false, buttonMessage: 'start', color: 'primary' }
  },
  methods: {
    toggle: function () {
      if (this.running) {
        this.running = !this.running
        this.buttonMessage = 'start'
        this.color = 'primary'
      } else {
        this.running = !this.running
        this.buttonMessage = 'stop'
        this.color = 'warning'
      }
    },
  },
}
</script>
<style></style>
