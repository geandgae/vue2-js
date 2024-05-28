<!-- PostList.vue -->
<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <button @click="fetchPosts">Fetch Posts</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters("posts", ["posts"]),
  },
  methods: {
    ...mapActions("posts", ["fetchPosts"]),
  },
};
</script>
