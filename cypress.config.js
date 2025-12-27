const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Resultados',
      reportPageTitle: 'Teste | Resultados'
    },
    defaultCommandTimeout: 5000,
    baseUrl:"https://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
