const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 5000,
    baseUrl:"https://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
