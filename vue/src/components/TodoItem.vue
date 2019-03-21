<template>
  <li>
    <button
      class="btn btn-danger"
      v-if="editable"
      @click="$emit('removeTodo', todo)"
    >
      X
    </button>
    <button
      class="btn btn-warning"
      v-if="editable"
      @click="$emit('editTodo', todo)"
    >Edit</button>
    <span class="todo-text">{{ todo.msg }}</span>
    <button
      class="btn btn-success"
      v-if="editable"
      @click="$emit('doneTodo', todo)"
    >OK</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: { type: Object },
    editable: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  padding: 2px 0;
}

span.todo-text {
  padding: 0 8px;
}
</style>
