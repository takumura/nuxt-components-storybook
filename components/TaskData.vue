<template>
  <v-card class="mx-auto">
    <v-container class="ma-0 pa-0">
      <v-row class="px-2">
        <v-col class="d-flex align-center">
          {{ task.name }}
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn small depressed color="primary" class="mx-1">start</v-btn>
        </v-col>
        <v-col>
          <duration-time :duration="duration" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import { Task } from '../store/tasks'
import DurationTime from './DurationTime.vue'
import StartStopButton from './StartStopButton.vue'

export default {
  props: {
    task: {
      type: Object as () => Task,
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
}
</script>
<style></style>
