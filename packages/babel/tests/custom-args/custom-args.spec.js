const pluginTester = require("babel-plugin-tester").default;

const plugin = require("../../dist/index").default;

const path = require("path");

pluginTester({
  plugin,
  pluginOptions: {
    seed: 123,
    faker: "@faker-js/faker/locales/en",
  },
  fixtures: path.join(__dirname, "fixtures"),
});
