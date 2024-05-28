<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="black" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="bottom" temporary>
        <!-- <v-list :items="items"></v-list> -->
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.value"
            link
          >
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title @click="change(item.title)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-supervisor-circle"
            title="Supervisors"
            value="supervisors"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-clock-start"
            title="Clock-in"
            value="clockin"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-main style="height: 500px">
        <v-card-text> The navigation drawer will appear from the bottom on smaller size screens. </v-card-text>
      </v-main> -->
      <div class="d-flex w-100" style="margin-top: 70px">
        <v-breadcrumbs :items="locations">
          <template v-slot:divider>
            <v-icon icon="mdi-forward"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <slot name="htaSlot"></slot>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "HTA",
  props: ["bread"],
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "list",
        icon: "mdi-email",
        value: "/ge/list",
      },
      {
        title: "page1",
        icon: "mdi-account-supervisor-circle",
        value: "/ge/FirstView",
      },
      {
        title: "page2",
        icon: "mdi-clock-start",
        value: "/ge/SecondView",
      },
      {
        title: "page3",
        icon: "mdi-email",
        value: "/ge/user",
      },
      {
        title: "bong",
        icon: "mdi-email",
        value: "/ge/bong",
      },
      {
        title: "modal",
        icon: "mdi-email",
        value: "/ge/modal",
      },
      {
        title: "user",
        icon: "mdi-email",
        value: "/ge/user",
      },
    ],
    locations: ["ge", "ge"],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    // console.log(this.bread);
    // this.bread = ['ge', 'list'];
  },
  methods: {
    link(val) {
      this.path = val;
      console.log(this.path);
      this.$router.push({
        path: `/ge/${val}`,
      });
      // this.$router.replace(val)
      // this.$router.go(-1)
    },
    change(val) {
      this.locations = [];
      this.locations = ["ge", val];
      console.log(val);
    },
  },
};
</script>
