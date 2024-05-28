<template>
  <v-dialog v-if="dialog.show" v-model="show" persistent width="auto">
    <v-card>
      <v-card-text>
        <!-- {{ dialogOpt.text }} -->
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions class="d-flex">
        <v-btn color="primary" @click="dialogShow('Y')">Y</v-btn>
        <v-btn color="primary" @click="dialogShow('N')">N</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogAlert2",
  props: ["dialog"],
  data: () => ({
    // dialogOpt: {
    //   show:true,
    //   text:'dialog'
    // },
    show: true,
  }),
  computed: {
    // modalOpen() {
    //   return this.dialog.show;
    // }
  },
  mounted() {
    // this.showUpdate();
  },
  methods: {
    showUpdate() {
      this.show = this.dialog.show;
    },
    dialogShow(val) {
      this.$emit("dialogClose", val);
      // console.log(val);
    },
  },
};
</script>
