<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <router-link to="/">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
      </v-navigation-drawer>
      <v-toolbar color="teal" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer">
          <v-icon large color="white" v-if="drawer">clear</v-icon>
          <v-icon large color="white" v-else>add</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title>Tape Chart</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import store from './store/index'
import router from './router'

export default {
  name: 'App',
  store,
  router,
  data() {
    return {
      drawer: true
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #fff;
  text-decoration: none;
  transition: all .3s;
}
a .list__tile__title {
  color: #666;
}
</style>
