<template>
  <details>
    <summary :id="`demo-${name}`">
      <!-- <a :href="`#demo-${name}`" class="header-anchor">#</a> -->
    </summary>
    <html-playground v-if="loaded" v-bind="demoData" />
    <div v-else>demo loading</div>
  </details>
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
          /* webpackChunkName: '[index].demo_[request]' */ `../../../demos/${path}/${this.name}`
        )
      )
      .then((module) => {
        const data = module.default;
        console.log("demo data done", data);
        this.demoData = { controlBtns: ["format", "fullscreen"], ...data };
        this.loaded = true;
      });
  },
};
</script>
<style scoped lang="stylus">
details{
  summary{
    margin-bottom: 1em;
    outline: none;
    &:hover {
      .header-anchor{
        opacity:1
      }
    }
    &:focus {
      text-decoration: underline;
    }
    &:after{
      content:'展开 Demo'
      cursor:pointer;
    }
  }
}
details[open]{
  summary:after{
    content:'收起 Demo'
  }
}
</style>
