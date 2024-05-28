<template>
  <v-container>
    <v-row class="text-center">
      <v-btn @click="alertShow(this.opt)">alert</v-btn>

      bong
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["alert"],
  data: () => ({
    opt: "bong에서 실행한다",
  }),
  methods: {
    alertShow(val) {
      this.$emit("alertUpdate", val);
      // console.log(val);
    },
  },
};
</script>
