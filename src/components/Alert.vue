<template>
  <v-alert
    v-if="alert.show === true"
    closable
    icon="$vuetify"
    title="Alert title"
    :text="alert.text"
    variant="outlined"
  >
  </v-alert>
</template>

<script>
export default {
  name: "DialogAlert",
  props: ["alert"],
};
</script>
