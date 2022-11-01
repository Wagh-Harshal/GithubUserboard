<template>
  <div class="card">
    <img :src="getImageUrl" alt="Avatar" />
    <div class="username">
      <router-link :to="'/' + userData.login">{{ userData.login }}</router-link>
    </div>
    <a :href="userData.html_url" target="_blank" class="github">
      <img
        src="../assets/link.png"
        class="icon-custom mr-5"
        alt="Avatar"
      />
      github
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCard",
  props: ["userData"],
  computed: {
    getImageUrl(): string {
      return this.userData.avatar_url
        ? this.userData.avatar_url
        : require("../assets/duck.png");
    },
  },
});
</script>
