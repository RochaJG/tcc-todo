<template>
  <div class="todos center-flex">
    <h1>
      Tarefas Concluídas
      <button
        class="btn btn-outline-danger"
        @click="clearDoneTodos"
      >Limpar</button>
    </h1>
    <ul>
      <todo-item
        class="item-done"
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  components: {
    TodoItem
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    clearDoneTodos () {
      this.todos = []
      localStorage.setItem('listaTodosDone', JSON.stringify(this.todos))
    }
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('listaTodosDone')) || []
  }
}
</script>

<style scoped>
.todos {
  padding-top: 100px;
}

.item-done {
  text-decoration: line-through;
}
</style>
