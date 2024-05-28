<template>
  <v-container>
    <HTA>
      <template v-slot:htaSlot>
        <div>v-slot:htaSlot</div>
      </template>
    </HTA>
    <!-- <BC :bread = "locations"></BC> -->
    <v-row class="mt-15">
      layout
      <router-view
        :alert="alertOpt"
        @alertUpdate="alertUpdate"
        :dialog="dialogOpt"
        @dialogUpdate="dialogUpdate"
        :show-modal="showModal"
        @open-modal="openModal"
        @close-modal="closeModal"
        @confirm-modal="confirmModal"
        @cancel-modal="cancelModal"
      >
      </router-view>
    </v-row>
    <Alert :alert="alertOpt"></Alert>
    <Dialog :dialog="dialogOpt" @dialogClose="dialogClose"></Dialog>

    <!-- <v-btn color="primary" @click="openModal">Open Modal</v-btn>
    
    <global-modal :show-modal="showModal" @close-modal="closeModal">
      <template #title>Custom Modal Title</template>
      <p>Modal Content</p>
    </global-modal> -->
    <!-- <v-btn color="primary" @click="openModal">Open Modal</v-btn>
    <global-modal :show-modal="showModal" @close-modal="closeModal" /> -->

    <!-- <v-btn color="primary" @click="openModal">Open Modal</v-btn> -->
    <global-modal
      :show-modal="showModal"
      @close-modal="closeModal"
      @confirm-modal="confirmModal"
      @cancel-modal="cancelModal"
    >
      <template #title>Custom Modal Title22</template>
      <p>Modal Content22</p>
    </global-modal>
  </v-container>
</template>

<script>
import HTA from "@/components/Hta";
import Alert from "@/components/Alert";
import Dialog from "@/components/Dialog";
import GlobalModal from "@/components/GlobalModal";
// import BC from "@/components/bc";
export default {
  name: "LayoutDefault",
  components: {
    HTA,
    Alert,
    Dialog,
    GlobalModal,
    // BC,
  },
  data: () => ({
    alertOpt: {
      show: false,
      text: "alert",
    },
    dialogOpt: {
      show: false,
      text: "dialog",
    },
    // locations: [
    //   {
    //     title: "ge",
    //     disabled: false,
    //     href: "/ge/",
    //   },
    //   {
    //     title: "Link 1",
    //     disabled: false,
    //     href: "breadcrumbs_link_1",
    //   },
    //   {
    //     title: "Link 2",
    //     disabled: true,
    //     href: "breadcrumbs_link_2",
    //   },
    // ],
    // locations: ['ge', 'Bar', 'Fizz']
    // GlobalModal
    showModal: false,
  }),
  computed: {
    // showModal: {
    //   get() {
    //     return this.localShowModal;
    //   },
    //   set(value) {
    //     this.localShowModal = value;
    //   }
    // }
  },
  mounted() {
    // console.log(this.locations);
  },
  methods: {
    // bcupdate(val) {
    //   // this.locations = [];
    //   // this.locations = val;
    //   console.log(val);
    // }
    alertUpdate(val) {
      this.alertOpt.show = !this.alertOpt.show;
      this.alertOpt.text = val;
      console.log(val);
    },
    dialogUpdate(val) {
      this.dialogOpt.show = !this.dialogOpt.show;
      // this.dialogOpt.text = val;
      console.log(val);
    },
    dialogClose(val) {
      if (val === "Y") {
        this.dialogOpt.show = !this.dialogOpt.show;
      }
      if (val === "N") {
        // this.dialogOpt.show = !(this.dialogOpt.show);
      }
    },
    // GlobalModal
    openModal() {
      this.showModal = true;
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
};
</script>
<style>
.v-alert {
  position: absolute;
  top: 100px;
  left: 200px;
  z-index: 1000;
  background-color: #fff;
}
</style>
