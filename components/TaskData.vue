<template>
  <div>
    <span class="mx-6 task-name-field">{{ task.name }}</span>
    <v-btn small depressed color="primary" class="mx-1">start</v-btn>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style>
.task-name-field {
  vertical-align: middle;
}
</style>
