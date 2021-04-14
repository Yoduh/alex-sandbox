<template>
  <v-navigation-drawer v-model="open" absolute temporary @input="onInput">
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/page1">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Page 1</v-list-item-title>
        </v-list-item>

        <v-list-item to="/page2">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Page 2</v-list-item-title>
        </v-list-item>

        <v-list-item to="/page3">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Page 3</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  props: ["drawer"],
  data() {
    return {
      group: null,
      open: this.drawer,
    };
  },
  watch: {
    drawer(val) {
      this.open = val;
    },
  },
  methods: {
    onInput(val) {
      if (!val) {
        this.$emit("close");
      }
    },
  },
};
</script>
