<!-- AnotherComponent.vue -->
<template>
  <div>
    <div>
      <input v-model="newTitle" placeholder="New Title" />
      <button @click="update">Update Title</button>
    </div>
    <StoreCompSub></StoreCompSub>
  </div>
</template>

<script>
import StoreCompSub from "@/components/StoreCompSub";
import {mapActions} from "vuex";

export default {
  name: "storecomp",
  components: {
    StoreCompSub,
  },
  data() {
    return {
      newTitle: "",
    };
  },
  methods: {
    ...mapActions("titleset", ["updateTitle"]),
    update() {
      this.updateTitle(this.newTitle);
    },
  },
};
</script>
