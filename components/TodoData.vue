<template>
  <v-card class="mx-auto">
    <v-container class="ma-0 pa-0">
      <v-row class="px-2">
        <v-col class="d-flex align-center">
          {{ todo.name }}
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <start-stop-button :todo="todo"></start-stop-button>
        </v-col>
        <v-col>
          <duration-time :duration="duration" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import { Todo } from '../store/todos'
import DurationTime from './DurationTime.vue'
import StartStopButton from './StartStopButton.vue'

export default Vue.extend({
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
    },
  },
  components: {
    DurationTime: DurationTime,
    StartStopButton: StartStopButton,
  },
})
</script>
<style></style>
