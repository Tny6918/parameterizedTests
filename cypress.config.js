const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,

  watchForFileChanges: false,

  e2e: {
    retries: {
      runMode: 2,
      openMode: 2
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
