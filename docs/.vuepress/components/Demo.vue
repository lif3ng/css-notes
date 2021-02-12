<template>
  <div v-if="!loaded">demo loading</div>
  <html-css-comparison-table
    v-else-if="demoData.cssTpl"
    v-bind="demoData"
    ref="playground"
  />
  <details ref="details" v-else>
    <summary :id="`demo-${name}`" @click="toggleDetails">
      <!-- <a :href="`#demo-${name}`" class="header-anchor">#</a> -->
    </summary>
    <html-playground v-bind="demoData" ref="playground" />
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
    const path = this.$page.path.substring(1).replace(/.html$/, "");
    if (process.env.NODE_ENV === "development") {
      import("page-playground")
        .then(() =>
          import(
            /* webpackChunkName: '[index].demo_[request]' */ `../../../demos/${path}/${this.name}`
          )
        )
        .then((module) => {
          const data = module.default;
          this.demoData = { controlBtns: ["format", "fullscreen"], ...data };
          this.loaded = true;
        });
    } else {
      import("page-playground")
        .then(() =>
          import(
            /* webpackChunkName: '[index].[request]' */ `../../../.demos-cache/demos-${path.replace(
              /\//g,
              "-"
            )}`
          )
        )
        .then((module) => {
          const data = module.default;
          this.demoData = {
            controlBtns: ["format", "fullscreen"],
            ...data[this.name],
          };
          this.loaded = true;
        });
    }
  },
  methods: {
    toggleDetails(e) {
      const { open } = this.$refs.details;
      const cleanHeight = () => {
        const playground = this.$refs.playground;
        if (playground) {
          const ele = playground.$el;
          ele.style.height = "";
        }
      };
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
        setHeight(false);
        setTimeout(setHeight.bind(null, true), 100);
        setTimeout(() => {
          this.$refs.details.open = false;
        }, 400);
      } else {
        // 展开 height: 0 -> xxx
        setHeight(true);
        setTimeout(setHeight, 100);
        setTimeout(cleanHeight, 400);
      }
    },
  },
};
</script>
<style scoped lang="stylus">
details {
  summary {
    margin-bottom: 1em;
    outline: none;

    &:hover {
      .header-anchor {
        opacity: 1;
      }
    }

    &:focus {
      text-decoration: underline;
    }

    &:after {
      content: '展开 Demo';
      cursor: pointer;
    }

    + * {
      overflow: hidden;
      transition: height 0.3s;
    }
  }
}

details[open] {
  summary:after {
    content: '收起 Demo';
  }
}
</style>
