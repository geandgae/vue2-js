<template>
  <v-dialog v-model="dialogVisible" max-width="500px">
    <v-card>
      <v-card-title>
        <slot name="title">Modal Title</slot>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions class="d-flex">
        <v-btn color="primary" text @click="closeModal">Close</v-btn>
        <v-btn color="primary" text @click="confirmModal">확인</v-btn>
        <v-btn color="primary" text @click="cancelModal">취소</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "GlobalModal",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    closeModal() {
      this.dialogVisible = false;
      this.$emit("close-modal");
    },
    confirmModal() {
      // this.dialogVisible = false;
      this.$emit("confirm-modal");
    },
    cancelModal() {
      // this.dialogVisible = false;
      this.$emit("cancel-modal");
    },
  },
  watch: {
    showModal(newVal) {
      this.dialogVisible = newVal;
    },
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
