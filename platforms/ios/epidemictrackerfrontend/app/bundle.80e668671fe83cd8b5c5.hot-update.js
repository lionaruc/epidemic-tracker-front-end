webpackHotUpdate("bundle",{

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-f883d62a]{\r\n    font-family: 'Open Sans', sans-serif;\r\n    width:330px;\r\n    height:270px;\r\n    \r\n    margin-left:20px;\r\n    margin-right:20px;\r\n    \r\n    display:flex;\r\n    flex-direction:column;\n}\n.card-header[data-v-f883d62a]{\r\n        display:flex;\r\n        width:100%;\r\n        height:65px;\r\n        max-height:65px;\r\n        align-items:center;\r\n        justify-content:space-between;\r\n        flex: 1 0 auto;\n}\n.card-header-title[data-v-f883d62a]{\r\n            padding-left:25px;\r\n            margin:0;\r\n            color:white;\r\n            line-height:65px;\r\n            font-weight:400;\n}\n.card-content[data-v-f883d62a]{\r\n        padding:25px;\r\n        flex: 1 0 auto;\n}\n.card-content-text[data-v-f883d62a]{\r\n            margin:0;\r\n            color:white;\r\n            letter-spacing:1px;\n}\n.card-footer[data-v-f883d62a]{\r\n        height:40px;\r\n        display:flex;\r\n        justify-content:flex-end;\r\n            \r\n        flex-shrink: 0;\n}\n.card[data-v-f883d62a]:nth-child(1){\r\n        background-color:#3498db;\n}\n.card[data-v-f883d62a]:nth-child(2){\r\n        background-color:#34495e;\n}\n.card[data-v-f883d62a]:nth-child(3){\r\n    background-color:#9b59b6;\n}\n.row[data-v-f883d62a]{\r\n    display:flex;\r\n    justify-content:center;\r\n    margin-top:100px;\n}\r\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/Card.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=template&id=f883d62a&":
false,

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("StackLayout", { staticStyle: { backgroundColor: "green" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./components/Card.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f883d62a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f883d62a')) {
      api.createRecord('f883d62a', component.options)
    } else {
      api.reload('f883d62a', component.options)
    }
    module.hot.accept("./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&");
(function () {
      api.rerender('f883d62a', {
        render: _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Card.vue?vue&type=template&id=f883d62a&":
false,

/***/ "./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQudnVlP2ZkNzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkLnZ1ZT9hY2VmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkLnZ1ZT9jMjVmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC52dWU/YTc2OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLDZDQUE2QyxvQkFBb0IscUJBQXFCLGlDQUFpQywwQkFBMEIsNkJBQTZCLDhCQUE4QixHQUFHLGdDQUFnQyx5QkFBeUIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsK0JBQStCLDBDQUEwQywyQkFBMkIsR0FBRyxzQ0FBc0Msa0NBQWtDLHlCQUF5Qiw0QkFBNEIsaUNBQWlDLGdDQUFnQyxHQUFHLGlDQUFpQyx5QkFBeUIsMkJBQTJCLEdBQUcsc0NBQXNDLHlCQUF5Qiw0QkFBNEIsbUNBQW1DLEdBQUcsZ0NBQWdDLHdCQUF3Qix5QkFBeUIscUNBQXFDLDJDQUEyQyxHQUFHLHNDQUFzQyxxQ0FBcUMsR0FBRyxzQ0FBc0MscUNBQXFDLEdBQUcsc0NBQXNDLGlDQUFpQyxHQUFHLHdCQUF3QixxQkFBcUIsK0JBQStCLHlCQUF5QixHQUFHOztBQUV6M0M7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsOEJBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyx5Q0FBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsK0NBQStDO0FBQzlFLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlLDJCQUEyQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR3hGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQW1IO0FBQ3ZJLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGtFQUF1RCxFQUFFO0FBQUE7QUFDL0U7QUFDQSxnQkFBZ0IsMkZBQU07QUFDdEIseUJBQXlCLG9HQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQTtBQUFBO0FBQXFZLENBQWdCLG9iQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBelo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS44MGU2Njg2NzFmZTgzY2Q4YjVjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZFtkYXRhLXYtZjg4M2Q2MmFde1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHdpZHRoOjMzMHB4O1xcclxcbiAgICBoZWlnaHQ6MjcwcHg7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG4uY2FyZC1oZWFkZXJbZGF0YS12LWY4ODNkNjJhXXtcXHJcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6NjVweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6NjVweDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgZmxleDogMSAwIGF1dG87XFxufVxcbi5jYXJkLWhlYWRlci10aXRsZVtkYXRhLXYtZjg4M2Q2MmFde1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoyNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjowO1xcclxcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjY1cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xcbn1cXG4uY2FyZC1jb250ZW50W2RhdGEtdi1mODgzZDYyYV17XFxyXFxuICAgICAgICBwYWRkaW5nOjI1cHg7XFxyXFxuICAgICAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuLmNhcmQtY29udGVudC10ZXh0W2RhdGEtdi1mODgzZDYyYV17XFxyXFxuICAgICAgICAgICAgbWFyZ2luOjA7XFxyXFxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XFxyXFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MXB4O1xcbn1cXG4uY2FyZC1mb290ZXJbZGF0YS12LWY4ODNkNjJhXXtcXHJcXG4gICAgICAgIGhlaWdodDo0MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxufVxcbi5jYXJkW2RhdGEtdi1mODgzZDYyYV06bnRoLWNoaWxkKDEpe1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzQ5OGRiO1xcbn1cXG4uY2FyZFtkYXRhLXYtZjg4M2Q2MmFdOm50aC1jaGlsZCgyKXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzM0NDk1ZTtcXG59XFxuLmNhcmRbZGF0YS12LWY4ODNkNjJhXTpudGgtY2hpbGQoMyl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IzliNTliNjtcXG59XFxuLnJvd1tkYXRhLXYtZjg4M2Q2MmFde1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6MTAwcHg7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9DYXJkLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg4M2Q2MmEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjg4M2Q2MmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY4ODNkNjJhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcbGlvbmFcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxlcGlkZW1pYy10cmFja2VyLWZyb250LWVuZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmODgzZDYyYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmODgzZDYyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmODgzZDYyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg4M2Q2MmEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjg4M2Q2MmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQ2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjg4M2Q2MmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mODgzZDYyYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mODgzZDYyYSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=