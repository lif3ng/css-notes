import "page-playground/dist/plugin.css";
export default ({ Vue }) => {
  import(/* webpackChunkName: 'page-playground' */ "page-playground").then(
    ({ default: pg }) => {
      Vue.use(pg);
    }
  );
};
