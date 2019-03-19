<template>
  <form class="todo-input">
    <input
      type="text"
      v-model="newtodo.msg"
      placeholder="Digite um todo"
    />
    <button
      type="submit"
      class="btn btn-success"
      @click="addTodo"
    >Adicionar</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      newtodo: { msg: '' }
    }
  },
  methods: {
    addTodo () {
      this.$emit('newTodo', this.newtodo)
      this.newtodo = ''
    }
  }
}
</script>

<style>
.todo-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.todo-input * {
  padding: 3px;
  margin: 2px;
  border-radius: 5px;
}
</style>
