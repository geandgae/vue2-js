<!-- AnotherComponent.vue -->
<template>
  <div>
    <button @click="likes">Like</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions("state", ["incrementLikes"]),
    likes() {
      this.incrementLikes(1);
    },
  },
  // methods: {
  //   incrementLikes() {
  //     this.$store.dispatch("incrementLikes");
  //   },
  // },
};
</script>
