<template>
  <div class="d-flex w-100" style="margin-top: 70px">
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon icon="mdi-forward"></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "BC",
  props: ["bread"],
};
</script>
