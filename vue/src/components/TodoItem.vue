<template>
  <li>
    <button
      class="btn btn-danger"
      @click="$emit('removeTodo', todo)"
    >
      Excluir
    </button>
    <span class="todo-text">{{ todo.msg }}</span>
  </li>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
li {
  list-style: none;
}

span.todo-text {
  padding: 0 8px;
}
</style>
