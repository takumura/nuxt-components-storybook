<template>
  <div>
    <span>{{ minutes | pad }}</span>
    <span>:</span>
    <span>{{ seconds | pad }}</span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    duration: {
      type: Number,
      required: false,
    },
  },
  computed: {
    minutes(): number {
      if (this.duration) {
        return Math.trunc(this.duration / 1000 / 60)
      } else {
        return 0
      }
    },
    seconds(): number {
      if (this.duration) {
        return Math.trunc(this.duration / 1000) % 60
      } else {
        return 0
      }
    },
  },
  filters: {
    pad(timeValue: number) {
      return timeValue.toString().padStart(2, '0')
    },
  },
})
</script>
