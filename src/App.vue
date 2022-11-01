<template>
  <div>
    <div class="fixed-header">
      <div class="header-link">
        <a
          rel=""
          class="color-fg-default"
          aria-hidden="true"
          tabindex="-1"
          href="/"
        >
          <img src="./assets/github.png" class="icon-back mr-5" alt="Avatar" />
        </a>
        <div class="home-link">
          <router-link to="/">Github Userboard</router-link>
        </div>
      </div>
      <div class="header-search">
        <input
          type="text"
          class="search-user"
          v-model="searchTerm"
          placeholder="Search.."
          @keyup="updateSearch()"
        />
      </div>
    </div>
    <div class="container">
      <router-view default="{name: 'usersList'}"></router-view>
    </div>
    <div class="fixed-footer">
      <a
        href="https://github.com"
        target="_blank"
        class="github color-fg-default"
      >
      <img src="./assets/github.png" class="icon-back mr-5" alt="Avatar" />
      </a>
      <div class="m-5">Copyright &copy; 2022</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import store from "./store/index";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    updateSearch() {
      store.dispatch({
        type: "search",
        search: this.searchTerm,
      });
    },
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
