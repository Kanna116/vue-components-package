const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    extract: false, // Ensure CSS is not extracted to a separate file
  },
  define: {
    // enable hydration mismatch details in production build
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  }
});
