<!-- UserProfile.vue -->
<template>
  <div>
    <p v-if="isAuthenticated">Welcome, {{ user.name }}</p>
    <p v-else>Please log in</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated", "user"]),
  },
};
</script>
