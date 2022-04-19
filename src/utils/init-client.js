export const initClient = (app) => {
    window.testfunc = (data) => {
        app.$eventBus.$emit("SearchCode", data);
      }

}