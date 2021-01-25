<template>
  <details ref="details">
    <summary :id="`demo-${name}`" @click="toggleDetails">
      <!-- <a :href="`#demo-${name}`" class="header-anchor">#</a> -->
    </summary>
    <html-playground v-if="loaded" v-bind="demoData" ref="playground" />
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
  methods: {
    toggleDetails(e) {
      const { open } = this.$refs.details;
      const setHeight = (setZero) => {
        const playground = this.$refs.playground;
        if (playground) {
          const ele = playground.$el;
          if (setZero) {
            ele.style.height = 0;
          } else {
            ele.style.height = `${ele.scrollHeight}px`;
          }
        }
      };
      if (open) {
        // 收起 height: xxx -> 0
        e.preventDefault();
        setTimeout(setHeight.bind(null, true), 100);
        setTimeout(() => {
          this.$refs.details.open = false;
        }, 300);
      } else {
        // 展开 height: 0 -> xxx
        setHeight(true);
        setTimeout(setHeight, 100);
      }
    },
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
    + * {
      overflow: hidden;
      transition: height .3s
    }
  }

}
details[open]{
  summary:after{
    content:'收起 Demo'
  }
}
</style>
