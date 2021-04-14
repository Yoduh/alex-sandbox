<template>
  <v-app style="background-color: #f7f7f7">
    <v-main>
      <AppBar />
      <v-container fluid class="pa-0">
        <v-row justify="center" no-gutters>
          <v-col cols="12" md="10" lg="8">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";

export default {
  name: "App",
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.container {
  margin-top: 64px !important;
}
</style>
