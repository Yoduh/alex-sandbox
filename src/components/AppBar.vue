<template>
  <div>
    <v-app-bar absolute color="white" elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>AppBar</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <NavDrawer :drawer="drawer" @close="drawer = false" />
  </div>
</template>

<script>
import NavDrawer from "./NavDrawer";

export default {
  name: "AppBar",
  components: {
    NavDrawer,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped></style>
