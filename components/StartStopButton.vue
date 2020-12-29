<template>
  <v-btn small depressed :color="buttonColor" v-on:click="runTask">
    {{ buttonMessage }}
  </v-btn>
</template>
<script lang="ts">
import Vue from 'vue'
import { Todo } from '~/store/todos'

export default Vue.extend({
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
  },
  computed: {
    buttonColor() {
      if (this.todo.running) {
        return 'warning'
      } else {
        return 'primary'
      }
    },
    buttonMessage() {
      if (this.todo.running) {
        return 'stop'
      } else {
        return 'start'
      }
    },
  },
  methods: {
    runTask: function () {
      this.$store.dispatch('todos/runTask', this.todo)
    },
  },
})
</script>
<style></style>
