<template>
  <v-container>
    <ul>
      <li><router-link to="/ge/list">list</router-link></li>
      <li @click="link('FirstView')">page1</li>
      <li @click="link('SecondView')">page2</li>
      <li @click="link('user')">user</li>
      <li @click="link('store')">store</li>
    </ul>
    <v-btn @click="alertShow(this.opt)">alert</v-btn>
    <v-btn @click="dialogShow(this.opt2)">dialog</v-btn>

    <!-- <div>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <p>Likes: {{ likes }}</p>
      <button @click="incrementLikes">Like</button>
    </div> -->
  </v-container>
</template>

<script>
export default {
  name: "IA",
  props: ["bread", "alert", "dialog"],
  data: () => ({
    path: "",
    opt: "인데스에서 실행한다",
    opt2: "dialog 실행한다",
  }),
  mounted() {
    console.log(this.alert);
    console.log(this.dialog);
    // this.bread = [];
    // this.update('list');
  },
  methods: {
    link(val) {
      this.path = val;
      console.log(this.path);
      this.$router.push({
        path: `/ge/${val}`,
      });
      // this.$router.replace(val)
      // this.$router.go(-1)
    },
    alertShow(val) {
      this.$emit("alertUpdate", val);
      // console.log(val);
    },
    dialogShow(val) {
      this.$emit("dialogUpdate", val);
      // console.log(val);
    },
    dialogClose(val) {
      if (val === "Y") {
        this.dialogOpt.show = !this.dialogOpt.show;
      }
      if (val === "N") {
        // this.dialogOpt.show = !(this.dialogOpt.show);
      }
    },
  },
};
</script>
