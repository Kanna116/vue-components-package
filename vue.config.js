const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    extract: false, // Ensure CSS is not extracted to a separate file
  },
});
