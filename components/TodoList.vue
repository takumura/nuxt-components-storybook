<template>
  <v-container>
    <v-list>
      <v-list-item v-for="todoData in getTodoList" :key="todoData.name">
        <v-list-item-content class="px-2">
          <todo-data :todo="todoData" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script lang="ts">
import { mapMutations, mapGetters, mapActions } from 'vuex'
import TodoData from './TodoData.vue'

export default {
  computed: {
    ...mapGetters({
      getTodoList: 'todos/getTodoList',
    }),
  },
  components: {
    TodoData: TodoData,
  },
}
</script>
<style></style>
