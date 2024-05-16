module.exports = {
  
  e2e: {
    baseUrl:'https://cartao-de-visitas-1f916.web.app/home',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

reporter: 'junit',
reporterOptions: {
  mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
  toConsole : true
},

video:true

};
