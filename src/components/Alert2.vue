<template>
  <!-- <v-alert v-if="alert.show === true" type="success">
    {{ title }}
  </v-alert> -->
  <v-alert
    v-if="show === true"
    closable
    type="success"
    variant="outlined"
    @click="closeAlert"
  >
    {{ dialog }}
  </v-alert>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "DialogAlert",
  computed: {
    ...mapGetters("titleset", ["title", "content", "likes"]),
    ...mapGetters("alert", ["show", "dialog"]),
  },
  methods: {
    ...mapActions("alert", ["updateShow"]),
    closeAlert() {
      this.updateShow(false);
    },
  },
};
</script>
