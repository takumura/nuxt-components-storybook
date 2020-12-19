<template>
  <v-container>
    <v-list>
      <v-list-item v-for="taskData in getTasks" :key="taskData.name">
        <v-list-item-content class="px-2">
          <task-data :task="taskData" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script lang="ts">
import { mapMutations, mapGetters, mapActions } from 'vuex'
import TaskData from './TaskData.vue'

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
