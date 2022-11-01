<template>
  <div>
    <h1>Top Users</h1>
    <div class="d-flex flex-wrap pb-20" v-if="users.length > 0">
      <div v-for="(user, index) in users" :key="index">
        <UserCard :user-data="user"></UserCard>
      </div>
    </div>
    <div v-else>
      <img
        src="../assets/user_not_found.png"
        class="user-not-found mr-5"
        alt="Avatar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "./UserCard.vue";
import axios from "axios";
import { mapState } from "vuex";

export default defineComponent({
  name: "UsersList",
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      originalUsers: [],
    };
  },
  async created() {
    const response = await axios.get(
      "https://api.github.com/users?per_page=50"
    );
    this.users = response.data;
    this.originalUsers = response.data;
  },
  methods: {
    filterUsers(searchKey: string): void {
      if (searchKey != "") {
        this.users = this.originalUsers.filter((user: { login: string }) => {
          return user.login.includes(searchKey);
        });
      } else {
        this.users = this.originalUsers;
      }
    },
  },
  computed: mapState({
    searchTerm: function (state: { searchKey: string }) {
      return state.searchKey;
    },
  }),
  watch: {
    searchTerm(newTerm: string, oldTerm: string) {
      this.filterUsers(newTerm);
    },
  },
});
</script>
