import Vue from "nativescript-vue";

import routes from "./routes";

const appSettings = require("tns-core-modules/application-settings");

const tok = appSettings.getString("tok", null);

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({
  render: h => h("frame", [h(tok?routes.home:routes.login)])
}).$start();
