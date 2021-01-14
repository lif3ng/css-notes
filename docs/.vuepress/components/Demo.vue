<template>
  <div>
    <html-playground v-if="loaded" v-bind="demoData" />
    <div v-else>demo loading</div>
  </div>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      loaded: false,
      demoData: null,
    };
  },
  mounted() {
    // console.log(this);
    const path = this.$page.path.substring(1).replace(/.html$/, "");
    // if (process.env.NODE_ENV === "development") {
    // } else {
    // }
    import("page-playground")
      .then(() =>
        import(
          /* webpackChunkName: '[request]' */ `../../../demos/${path}/${this.name}`
        )
      )
      .then((module) => {
        const data = module.default;
        console.log("demo data done", data);
        this.demoData = data;
        this.loaded = true;
      });
  },
};
</script>
