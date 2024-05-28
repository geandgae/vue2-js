<!-- Login.vue -->
<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <button @click="login2">Login</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    login2() {
      this.login({name: this.username});
    },
  },
};
</script>
