<template>
  <!-- <v-alert v-if="alert.show === true" type="success">
    {{ title }}
  </v-alert> -->
  <v-alert
    v-if="alert.show === true"
    closable
    type="success"
    variant="outlined"
  >
    {{ dialog }}
    {{ title }}
    {{ alert.title }}
    {{ alert.text }}
  </v-alert>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "DialogAlert",
  props: ["alert"],
  computed: {
    ...mapGetters("titleset", ["title", "content", "likes"]),
    ...mapGetters("alert", ["show", "dialog"]),
  },
};
</script>
