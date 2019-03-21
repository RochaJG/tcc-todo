<template>
  <div class="todos center-flex">
    <h1>Lista de Tarefas</h1>
    <new-todo @newTodo="addTodo" />
    <ul>
      <todo-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @removeTodo="removeTodo"
        @editTodo="editTodo"
        @doneTodo="doneTodo"
        editable
      />
    </ul>
  </div>
</template>

<script>
import NewTodo from '@/components/NewTodo.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
    NewTodo,
    TodoItem
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (newtodo) {
      this.todos.unshift(newtodo)
      localStorage.setItem('listaTodos', JSON.stringify(this.todos))
    },
    removeTodo (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
      localStorage.setItem('listaTodos', JSON.stringify(this.todos))
    },
    editTodo (todo) {
      const newTodo = { msg: prompt('Informe o novo texto do item:', todo.msg) }
      this.todos.splice(this.todos.indexOf(todo), 1, newTodo)
    },
    doneTodo (todo) {
      const doneTodos = JSON.parse(localStorage.getItem('listaTodosDone')) || []
      this.todos.splice(this.todos.indexOf(todo), 1)
      localStorage.setItem('listaTodos', JSON.stringify(this.todos))

      doneTodos.push(todo)
      localStorage.setItem('listaTodosDone', JSON.stringify(doneTodos))
    }
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('listaTodos')) || []
  }
}
</script>

<style scoped>
.todos {
  padding-top: 100px;
}
</style>
