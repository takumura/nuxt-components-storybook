<template>
  <v-list>
    <v-list-item v-for="task in getTasks" :key="task.name">
      <v-list-item-content>
        <div>
          <span>{{ task.name }}</span>
          <v-btn small depressed color="primary">start</v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getTasks: 'tasks/getTasks',
    }),
  },
}
</script>
<style></style>
