<template>
  <div class="center-flex">
    <new-todo @newTodo="addTodo" />
    <ul>
      <todo-item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @removeTodo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import NewTodo from './components/NewTodo.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
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
    }
  },
  created () {
    this.todos = JSON.parse(localStorage.getItem('listaTodos')) || []
  }
}
</script>

<style>
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>
