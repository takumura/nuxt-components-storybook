<template>
  <v-list>
    <v-list-item v-for="taskData in getTasks" :key="taskData.name">
      <v-list-item-content>
        <task-data :task="taskData" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import TaskData from './TaskData'

export default {
  computed: {
    ...mapGetters({
      getTasks: 'tasks/getTasks',
    }),
  },
  components: {
    TaskData: TaskData,
  },
}
</script>
<style></style>
