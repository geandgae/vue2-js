<template>
  <v-container>
    <Alert :alert="alertOpt"></Alert>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <p>Likes: {{ likes }}</p>
      <!-- <button @click="incrementLikes">Like</button> -->
    </div>
    <StoreComp></StoreComp>
    <v-btn @click="openAlert">alert</v-btn>
  </v-container>
</template>

<script>
import Alert from "@/components/Alert2";
import StoreComp from "@/components/StoreComp";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "store",
  components: {
    Alert,
    StoreComp,
  },
  data: () => ({
    alertOpt: {
      show: false,
      title: "title",
      text: "text",
    },
  }),
  computed: {
    ...mapGetters("titleset", ["title", "content", "likes"]),
    ...mapGetters("alert", ["show", "dialog"]),
  },
  methods: {
    ...mapActions("titleset", ["updateTitle"]),
    openAlert() {
      this.updateTitle("this is alert!!");
      if (this.alertOpt.show === true) {
        this.alertOpt.show = false;
      } else {
        this.alertOpt.show = true;
      }
    },
  },
};
</script>
<style>
.v-alert {
  position: absolute;
  top: 300px;
  left: 200px;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #000;
}
</style>
