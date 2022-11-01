<template>
  <div class="user-details p-20">
    <router-link to="/">
      <img
        src="../assets/back.png"
        class="icon-back mr-5 float-left"
        alt="Avatar"
      />
    </router-link>
    <img :src="getImageUrl" alt="Avatar" />
    <div>
      <a :href="userData.html_url" target="_blank" class="github">
        {{ userData.login }}
      </a>
    </div>
    <table style="width: 75%" class="p-20">
      <th style="width: 80%">Repo Name</th>
      <th style="width: 10%">Watchers</th>
      <th style="width: 10%">Stars</th>
      <tr v-for="(repo, index) in repoData" :key="index">
        <td>
          <a :href="userData.html_url" target="_blank" class="github">
          {{ repo.name }}
          </a>
        </td>
        <td>
          <img
            src="../assets/lens.png"
            class="icon-custom mr-5"
            alt="Avatar"
          />{{ repo.watchers_count }}
        </td>
        <td>
          <img
            src="../assets/star.png"
            class="icon-custom mr-5"
            alt="Avatar"
          />{{ repo.stargazers_count }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Repo {
  watchers_count: number;
  name: string;
  stargazers_count: number;
}

export default defineComponent({
  name: "UserDetails",
  data() {
    return {
      username: this.$route.params.username,
      userData: {} as User,
      repoData: [] as Repo[],
    };
  },
  async created() {
    const response = await axios.get(
      "https://api.github.com/users/" + this.username
    );
    this.userData = response.data;
    const repoRes = await axios.get(
      "https://api.github.com/users/" + this.username + "/repos"
    );
    this.repoData = repoRes.data;
  },
  computed: {
    getImageUrl():string {
      return this.userData.avatar_url
        ? this.userData.avatar_url
        : require("../assets/duck.png");
    },
  },
});
</script>
