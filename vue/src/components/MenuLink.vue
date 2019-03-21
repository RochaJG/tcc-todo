<template>
  <li>
    <router-link :to="goto">{{linkName}}</router-link>
  </li>
</template>

<script>
export default {
  props: ['goto', 'linkName']
}
</script>

<style scoped>
li {
  list-style: none;
  padding: 10px;
}

a {
  cursor: pointer;
  color: #00bc8c;
  text-decoration: none;
  background-color: transparent;
}

.router-link-exact-active.router-link-active {
  color: #424242;
}

.router-link-active:hover {
  color: #c2eca5;
}
</style>
