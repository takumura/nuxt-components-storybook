<template>
  <ul>
    <li v-for="todo in getList" :key="todo.id">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
      <span :class="{ done: todo.done }">{{ todo.name }}</span>
      <button @click="removeTodo(todo)">remove</button>
    </li>
    <li>
      <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getList: 'todos/getTodoList',
    }),
  },
  methods: {
    ...mapActions({
      removeTodo: 'todos/remove',
      toggle: 'todos/toggle',
    }),
    addTodo(e) {
      this.$store.dispatch('todos/add', e.target.value)
      e.target.value = ''
    },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
