<template>
  <div class="center-flex">
    <nav class="menu-nav">
      <ul class="menu-links">
        <menu-link
          goto="/"
          linkName="ToDos"
        />
        <menu-link
          goto="/concluidos"
          linkName="Concluídos"
        />
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuLink from './components/MenuLink'
import dados from './assets/dados.json'

export default {
  name: 'app',
  components: {
    MenuLink
  },
  beforeCreate () {
    localStorage.setItem('listaTodos', JSON.stringify(dados))
    localStorage.setItem('listaTodosDone', '[]')
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

.menu-nav {
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
}

.menu-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
