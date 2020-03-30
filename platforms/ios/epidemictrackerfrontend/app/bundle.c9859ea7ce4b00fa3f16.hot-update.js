webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {// alert(this.id)
    // this.currentQuestion = items[currentQuestionIndex];
  },

  props: ['formid', 'id'],

  data() {
    return {
      currentQuestion: null,
      currentQuestionIndex: 0,
      items: [{
        question: 'What is your name?',
        id: 1,
        type: 'open_text',
        ans: null
      }, {
        question: 'What is your age?',
        id: 2,
        type: 'number',
        opts: {
          max: 100,
          min: 12
        },
        ans: ''
      }, {
        question: 'What is a dog?',
        id: 3,
        type: 'multiple_choice',
        options: [{
          text: 'A pet',
          value: 'pet'
        }, {
          text: 'A wild animal',
          value: 'wild animal'
        }, {
          text: 'I do not know',
          value: 'does not know'
        }, {
          text: 'A wild animal',
          value: 'wild animal'
        }],
        ans: ''
      }, {
        question: 'What is your rate?',
        id: 4,
        type: 'number',
        opts: {
          max: 100,
          min: 12
        },
        ans: ''
      }],
      message: "You have successfully authenticated. This is where you build your core application functionality."
    };
  },

  methods: {
    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    goToPrevious() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex -= 1; // alert(this.currentQuestionIndex)
      }
    },

    goToNext() {
      if (this.currentQuestionIndex + 1 < this.items.length) {
        this.currentQuestionIndex += 1; // alert('ff')
      } // 

    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-btn {\r\n    margin-left: 50;\r\n    margin-right: 50;\n}\n.primary {\r\n    background-color:#30bcff;\r\n    border-color:#30bcff;\n}\n.question-icon{\r\n    margin: 3;\n}\n.question-item {\r\n        margin: 9;\r\n        height: 300;\r\n        padding: 5, 12;\r\n        color: black;\r\n        background-color: #E3E9F8;\r\n        font-size: 28;\r\n        border-radius: 10;\n}\n.question-item-name {\r\n        font-size: 28;\r\n        margin: 3;\r\n        margin-left: 5;\r\n        font-family: Passion, PassionOne, PassionOne-Regular;\n}\r\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/QuizView.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=template&id=41aa09f5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "Form " + _vm.id } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            [
              _c(
                "StackLayout",
                {
                  staticClass: "question-item question-item-name",
                  attrs: { columns: "100,*", rows: "*" }
                },
                [
                  _c("Label", {
                    attrs: {
                      col: "1",
                      text:
                        _vm.currentQuestionIndex +
                        1 +
                        ". " +
                        _vm.items[_vm.currentQuestionIndex].question,
                      verticalAlignment: "left"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  staticClass: "nav-btn",
                  attrs: { orientation: "horizontal" }
                },
                [
                  false
                    ? undefined
                    : _vm._e(),
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: "Go Back" },
                    on: { tap: _vm.goToPrevious }
                  }),
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20 primary",
                    attrs: { text: "Proceed" },
                    on: { tap: _vm.goToNext }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./components/QuizView.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QuizView.vue?vue&type=template&id=41aa09f5&");
/* harmony import */ var _QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QuizView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/QuizView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('41aa09f5')) {
      api.createRecord('41aa09f5', component.options)
    } else {
      api.reload('41aa09f5', component.options)
    }
    module.hot.accept("./components/QuizView.vue?vue&type=template&id=41aa09f5&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QuizView.vue?vue&type=template&id=41aa09f5&");
(function () {
      api.rerender('41aa09f5', {
        render: _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/QuizView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/QuizView.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/QuizView.vue?vue&type=template&id=41aa09f5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=template&id=41aa09f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Code.vue");
/* harmony import */ var _components_QuizView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/QuizView.vue");




var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  code: _components_Code__WEBPACK_IMPORTED_MODULE_2__["default"],
  quiz: _components_QuizView__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6Vmlldy52dWU/YzAyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1aXpWaWV3LnZ1ZT85NjExIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXVpelZpZXcudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXVpelZpZXcudnVlPzFiNGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6Vmlldy52dWU/MmQ0YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1aXpWaWV3LnZ1ZT83OWY1Iiwid2VicGFjazovLy8uL3JvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJsb2dpbiIsIkxvZ2luIiwiaG9tZSIsIkhvbWUiLCJjb2RlIiwiQ29kZSIsInF1aXoiLCJRdWl6VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ0E7QUFFQTtBQUVBLGFBQ0E7QUFDQTtBQUNBLEdBTEE7O0FBTUEseUJBTkE7O0FBT0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsNkJBRkE7QUFHQSxjQUNBO0FBQ0Esc0NBREE7QUFFQSxhQUZBO0FBR0EseUJBSEE7QUFJQTtBQUpBLE9BREEsRUFPQTtBQUNBLHFDQURBO0FBRUEsYUFGQTtBQUdBLHNCQUhBO0FBSUE7QUFDQSxrQkFEQTtBQUVBO0FBRkEsU0FKQTtBQVFBO0FBUkEsT0FQQSxFQWlCQTtBQUNBLGtDQURBO0FBRUEsYUFGQTtBQUdBLCtCQUhBO0FBSUEsa0JBQ0E7QUFDQSx1QkFEQTtBQUVBO0FBRkEsU0FEQSxFQUtBO0FBQ0EsK0JBREE7QUFFQTtBQUZBLFNBTEEsRUFTQTtBQUNBLCtCQURBO0FBRUE7QUFGQSxTQVRBLEVBYUE7QUFDQSwrQkFEQTtBQUVBO0FBRkEsU0FiQSxDQUpBO0FBc0JBO0FBdEJBLE9BakJBLEVBeUNBO0FBQ0Esc0NBREE7QUFFQSxhQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxTQUpBO0FBUUE7QUFSQSxPQXpDQSxDQUhBO0FBdURBO0FBdkRBO0FBeURBLEdBakVBOztBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxLQU5BOztBQU9BO0FBQ0E7QUFDQSx1Q0FEQSxDQUVBO0FBQ0E7QUFDQSxLQVpBOztBQWFBO0FBRUE7QUFDQSx1Q0FEQSxDQUVBO0FBQ0EsT0FMQSxDQU9BOztBQUNBOztBQXJCQTtBQWxFQSxHOzs7Ozs7O0FDcENBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsZUFBZSx3QkFBd0IseUJBQXlCLEdBQUcsWUFBWSxpQ0FBaUMsNkJBQTZCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLGtCQUFrQixzQkFBc0Isd0JBQXdCLDJCQUEyQix5QkFBeUIsc0NBQXNDLDBCQUEwQiw4QkFBOEIsR0FBRyx1QkFBdUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsaUVBQWlFLEdBQUc7O0FBRXhrQjs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw4QkFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLHlDQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtREFBbUQ7QUFDbEYsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsMEJBQTBCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBc0IsU0FPRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUMseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMO0FBQ2E7OztBQUdwRTtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUFtSDtBQUN2SSxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwwREFBK0MsRUFBRTtBQUFBO0FBQ3ZFO0FBQ0EsZ0JBQWdCLG1GQUFNO0FBQ3RCLHlCQUF5Qiw0RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXdLLENBQWdCLDRPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBNUw7QUFBQTtBQUFBO0FBQUE7QUFBaVgsQ0FBZ0IsZ2FBQUcsRUFBQyxDOzs7Ozs7OztBQ0FyWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxPQUFLLEVBQUVDLHlEQURJO0FBRVhDLE1BQUksRUFBRUMsd0RBRks7QUFHWEMsTUFBSSxFQUFFQyx3REFISztBQUlYQyxNQUFJLEVBQUVDLDREQUFRQTtBQUpILENBQWY7QUFNZVIscUVBQWYsRSIsImZpbGUiOiJidW5kbGUuYzk4NTllYTdjZTRiMDBmYTNmMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgOnRpdGxlPVwiJ0Zvcm0gJyArIGlkXCI+PC9BY3Rpb25CYXI+XHJcblxyXG4gICAgICAgIDxTY3JvbGxWaWV3PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIxMDAsKlwiIHJvd3M9XCIqXCIgY2xhc3M9XCJxdWVzdGlvbi1pdGVtIHF1ZXN0aW9uLWl0ZW0tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsICBjb2w9XCIxXCIgOnRleHQ9XCIoY3VycmVudFF1ZXN0aW9uSW5kZXggKyAxKSArICcuICcgK2l0ZW1zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJsZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzcz1cIm5hdi1idG5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImZhbHNlXCI+IHt7aXRlbXMubGVuZ3RofX0gIHt7Y3VycmVudFF1ZXN0aW9uSW5kZXh9fTwvTGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkdvIEJhY2tcIiBcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIgIEB0YXA9XCJnb1RvUHJldmlvdXNcIj48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHJvY2VlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjAgcHJpbWFyeVwiIEB0YXA9XCJnb1RvTmV4dFwiPjwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gaXRlbXNbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFsnZm9ybWlkJywgJ2lkJ10sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB5b3VyIG5hbWU/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvcGVuX3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnM6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHlvdXIgYWdlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuczogJydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIGEgZG9nPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbXVsdGlwbGVfY2hvaWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBIHBldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBIHdpbGQgYW5pbWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3dpbGQgYW5pbWFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSSBkbyBub3Qga25vdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdkb2VzIG5vdCBrbm93J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQSB3aWxkIGFuaW1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd3aWxkIGFuaW1hbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogJ1doYXQgaXMgeW91ciByYXRlPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuczogJydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGF1dGhlbnRpY2F0ZWQuIFRoaXMgaXMgd2hlcmUgeW91IGJ1aWxkIHlvdXIgY29yZSBhcHBsaWNhdGlvbiBmdW5jdGlvbmFsaXR5LlwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdvVG9QcmV2aW91cyAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdvVG9OZXh0ICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArIDEgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCgnZmYnKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbi5uYXYtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MDtcclxuICAgIG1hcmdpbi1yaWdodDogNTA7XHJcbn1cclxuLnByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzBiY2ZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiMzMGJjZmY7XHJcbn1cclxuLnF1ZXN0aW9uLWljb257XHJcbiAgICBtYXJnaW46IDM7XHJcbn1cclxuLnF1ZXN0aW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogOTtcclxuICAgICAgICBoZWlnaHQ6IDMwMDtcclxuICAgICAgICBwYWRkaW5nOiA1LCAxMjtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRTlGODtcclxuICAgICAgICBmb250LXNpemU6IDI4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWVzdGlvbi1pdGVtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjg7XHJcbiAgICAgICAgbWFyZ2luOiAzO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQYXNzaW9uLCBQYXNzaW9uT25lLCBQYXNzaW9uT25lLVJlZ3VsYXI7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5hdi1idG4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNTA7XFxufVxcbi5wcmltYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzBiY2ZmO1xcclxcbiAgICBib3JkZXItY29sb3I6IzMwYmNmZjtcXG59XFxuLnF1ZXN0aW9uLWljb257XFxyXFxuICAgIG1hcmdpbjogMztcXG59XFxuLnF1ZXN0aW9uLWl0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luOiA5O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1LCAxMjtcXHJcXG4gICAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0U5Rjg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTA7XFxufVxcbi5xdWVzdGlvbi1pdGVtLW5hbWUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyODtcXHJcXG4gICAgICAgIG1hcmdpbjogMztcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhc3Npb24sIFBhc3Npb25PbmUsIFBhc3Npb25PbmUtUmVndWxhcjtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL1F1aXpWaWV3LnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkZvcm0gXCIgKyBfdm0uaWQgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicXVlc3Rpb24taXRlbSBxdWVzdGlvbi1pdGVtLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiMTAwLCpcIiwgcm93czogXCIqXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRRdWVzdGlvbkluZGV4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pdGVtc1tfdm0uY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLml0ZW1zLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jdXJyZW50UXVlc3Rpb25JbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiR28gQmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9QcmV2aW91cyB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCBwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUHJvY2VlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9OZXh0IH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1F1aXpWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWFhMDlmNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1aXpWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9RdWl6Vmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbGlvbmFcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxlcGlkZW1pYy10cmFja2VyLWZyb250LWVuZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MWFhMDlmNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MWFhMDlmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MWFhMDlmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpelZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxYWEwOWY1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQxYWEwOWY1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1F1aXpWaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWl6Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aXpWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWFhMDlmNSZcIiIsImltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZVwiO1xuaW1wb3J0IENvZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29kZVwiO1xuaW1wb3J0IFF1aXpWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL1F1aXpWaWV3XCI7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBsb2dpbjogTG9naW4sXG4gICAgaG9tZTogSG9tZSxcbiAgICBjb2RlOiBDb2RlLFxuICAgIHF1aXo6IFF1aXpWaWV3XG59XG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==