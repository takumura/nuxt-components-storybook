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

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import TodoList from '../components/TodoList'

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
  components: {
    TodoList,
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
