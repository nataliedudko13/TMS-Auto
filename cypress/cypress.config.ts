import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern:"cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout:4000,
    baseUrl:"https://www.typescriptlang.org/",
    video:true,
    supportFile:"support/e2e/ts",
    reporter:"spec",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
