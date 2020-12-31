<template>
  <div>
    <v-text-field
      @keyup.enter="addTodo"
      label="Todo"
      hint="What needs to be done?"
    ></v-text-field>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoList from '~/components/TodoList.vue'

export default Vue.extend({
  methods: {
    addTodo(e: Event): void {
      if (e.target instanceof HTMLInputElement) {
        this.$accessor.todos.add(e.target.value)
        e.target.value = ''
      }
    },
  },
  components: {
    TodoList,
  },
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
