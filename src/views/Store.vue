<template>
  <v-container>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <p>Likes: {{ likes }}</p>
      <!-- <button @click="incrementLikes">Like</button> -->
    </div>
    <StoreComp></StoreComp>
  </v-container>
</template>

<script>
import StoreComp from "@/components/StoreComp";
import {mapGetters} from "vuex";

export default {
  name: "store",
  components: {
    StoreComp,
  },
  computed: {
    ...mapGetters("state", ["title", "content", "likes"]),
  },
};

// export default {
//   name: "store",
//   components: {
//     StoreComp,
//   },
//   computed: {
//     title() {
//       return this.$store.getters.title;
//     },
//     content() {
//       return this.$store.getters.content;
//     },
//     likes() {
//       return this.$store.getters.likes;
//     },
//   },
//   methods: {
//     incrementLikes() {
//       this.$store.dispatch("incrementLikes");
//     },
//   },
// };
</script>
