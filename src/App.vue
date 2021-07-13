<template>
  <div id="app">
    <router-view :heading="heading" :lang="langValue"></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      langValue: localStorage.getItem("vueml-lang"),
      activeIndex: "1",
      activeIndex2: "1",
      activeIndex3: "1",
    };
  },
  computed: {
    ...mapGetters({
      menu: "MENU",
      heading: "HEADINGS",
    }),
  },
  methods: {
    ...mapActions(["GET_MENU", "GET_HEADINGS"]),
    changeTexts(lang) {
      this.$ml.change(lang);
      this.langValue = lang;
    },
  },
  created() {
    // this.GET_MENU();
    // this.GET_HEADINGS();
  },
  name: "app",
};
</script>

<style lang="scss">
@import "assets/styles/style";
</style>
