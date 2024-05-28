<template>
  <div>
    <p>Contents Page</p>
    <v-btn color="primary" @click="openModal">Open Modal</v-btn>
  </div>
</template>

<script>
export default {
  name: "MODAL",
  data() {
    return {
      dialogVisible: false,
    };
  },
  showModal: false,
  methods: {
    openModal() {
      this.$emit("open-modal");
    },
    closeModal() {
      this.showModal = false;
    },
    confirmModal() {
      // this.dialogVisible = false;
      // this.$emit('confirm-modal');
      console.log(111);
    },
    cancelModal() {
      // this.dialogVisible = false;
      // this.$emit('cancel-modal');
      console.log(222);
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$emit('open-modal'); // 컴포넌트가 마운트될 때 모달을 열기 위해 이벤트를 발생시킴
    // })
    console.log(this.showModal);
  },
};
</script>
