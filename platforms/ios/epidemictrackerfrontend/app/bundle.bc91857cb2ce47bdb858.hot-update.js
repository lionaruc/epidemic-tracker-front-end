webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Gauge.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-gauge/vue");
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1__);
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


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'gauge',

  created() {
    console.log('gauge created');
  },

  props: {
    value: {
      type: Number,
      default: 0
    }
  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Gauge.vue?vue&type=template&id=28644fa4&":
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
    "StackLayout",
    { staticStyle: { width: "200", backgroundColor: "white" } },
    [
      _c("label", {
        staticStyle: { color: "green" },
        attrs: {
          text: "Tjsjbjdvjfvdjvfdvfjdjsbjsbsjsbjhsvjgsjhsghjgjhsvsjgsjgsj"
        }
      }),
      true
        ? _c(
            "RadRadialGauge",
            [
              _c(
                "RadialScale",
                {
                  directives: [
                    {
                      name: "tkRadialGaugeScales",
                      rawName: "v-tkRadialGaugeScales"
                    }
                  ],
                  attrs: { minimum: "0", maximum: "6", radius: "0.90" }
                },
                [
                  _c("ScaleStyle", {
                    directives: [
                      {
                        name: "tkRadialScaleStyle",
                        rawName: "v-tkRadialScaleStyle"
                      }
                    ],
                    attrs: {
                      majorTicksCount: "7",
                      minorTicksCount: "9",
                      lineThickness: "0",
                      labelsCount: "7",
                      ticksOffset: "0"
                    }
                  }),
                  _c(
                    "RadialBarIndicator",
                    {
                      directives: [
                        {
                          name: "tkRadialScaleIndicators",
                          rawName: "v-tkRadialScaleIndicators"
                        }
                      ],
                      attrs: { minimum: "0", maximum: "1.2", location: "0.97" }
                    },
                    [
                      _c("BarIndicatorStyle", {
                        directives: [
                          {
                            name: "tkRadialBarIndicatorStyle",
                            rawName: "v-tkRadialBarIndicatorStyle"
                          }
                        ],
                        attrs: { fillColor: "#dddddd" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "RadialBarIndicator",
                    {
                      directives: [
                        {
                          name: "tkRadialScaleIndicators",
                          rawName: "v-tkRadialScaleIndicators"
                        }
                      ],
                      attrs: {
                        minimum: "1.2",
                        maximum: "2.4",
                        location: "0.97"
                      }
                    },
                    [
                      _c("BarIndicatorStyle", {
                        directives: [
                          {
                            name: "tkRadialBarIndicatorStyle",
                            rawName: "v-tkRadialBarIndicatorStyle"
                          }
                        ],
                        attrs: { fillColor: "#9DCA56" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "RadialBarIndicator",
                    {
                      directives: [
                        {
                          name: "tkRadialScaleIndicators",
                          rawName: "v-tkRadialScaleIndicators"
                        }
                      ],
                      attrs: {
                        minimum: "2.4",
                        maximum: "3.6",
                        location: "0.97"
                      }
                    },
                    [
                      _c("BarIndicatorStyle", {
                        directives: [
                          {
                            name: "tkRadialBarIndicatorStyle",
                            rawName: "v-tkRadialBarIndicatorStyle"
                          }
                        ],
                        attrs: { fillColor: "#F0C44D" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "RadialBarIndicator",
                    {
                      directives: [
                        {
                          name: "tkRadialScaleIndicators",
                          rawName: "v-tkRadialScaleIndicators"
                        }
                      ],
                      attrs: {
                        minimum: "3.6",
                        maximum: "4.8",
                        location: "0.97"
                      }
                    },
                    [
                      _c("BarIndicatorStyle", {
                        directives: [
                          {
                            name: "tkRadialBarIndicatorStyle",
                            rawName: "v-tkRadialBarIndicatorStyle"
                          }
                        ],
                        attrs: { fillColor: "#E27633" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "RadialBarIndicator",
                    {
                      directives: [
                        {
                          name: "tkRadialScaleIndicators",
                          rawName: "v-tkRadialScaleIndicators"
                        }
                      ],
                      attrs: { minimum: "4.8", maximum: "6", location: "0.97" }
                    },
                    [
                      _c("BarIndicatorStyle", {
                        directives: [
                          {
                            name: "tkRadialBarIndicatorStyle",
                            rawName: "v-tkRadialBarIndicatorStyle"
                          }
                        ],
                        attrs: { fillColor: "#A7010E" }
                      })
                    ],
                    1
                  ),
                  _c("RadialNeedle", {
                    directives: [
                      {
                        name: "tkRadialScaleIndicators",
                        rawName: "v-tkRadialScaleIndicators"
                      }
                    ],
                    attrs: { value: _vm.value }
                  })
                ],
                1
              )
            ],
            1
          )
        : undefined,
      _c("Button", {
        staticClass: "btn btn-outline",
        attrs: { text: "Close Modal" },
        on: {
          tap: function($event) {
            return _vm.$modal.close()
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9HYXVnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYXVnZS52dWU/YTRjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTs7QUFFQTtBQUNBO0FBQ0EsR0FKQTs7QUFLQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBREE7QUFMQSxHOzs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUseUNBQXlDLEVBQUU7QUFDL0Q7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVE7QUFDbEI7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmJjOTE4NTdjYjJjZTQ3YmRiODU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxTdGFja0xheW91dCBzdHlsZT1cIndpZHRoOiAyMDA7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlXCI+XHJcblxyXG4gICAgPGxhYmVsIHRleHQ9XCJUanNqYmpkdmpmdmRqdmZkdmZqZGpzYmpzYnNqc2JqaHN2amdzamhzZ2hqZ2poc3ZzamdzamdzalwiIHN0eWxlPVwiY29sb3I6IGdyZWVuXCIvPlxyXG48UmFkUmFkaWFsR2F1Z2Ugdi1pZj1cInRydWVcIj5cclxuICAgIDxSYWRpYWxTY2FsZSB2LXRrUmFkaWFsR2F1Z2VTY2FsZXMgbWluaW11bT1cIjBcIiBtYXhpbXVtPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cIjAuOTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjYWxlU3R5bGUgdi10a1JhZGlhbFNjYWxlU3R5bGUgbWFqb3JUaWNrc0NvdW50PVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5vclRpY2tzQ291bnQ9XCI5XCIgbGluZVRoaWNrbmVzcz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzQ291bnQ9XCI3XCIgdGlja3NPZmZzZXQ9XCIwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMFwiIG1heGltdW09XCIxLjJcIiBsb2NhdGlvbj1cIjAuOTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjZGRkZGRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjEuMlwiIG1heGltdW09XCIyLjRcIiBsb2NhdGlvbj1cIjAuOTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjOURDQTU2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjIuNFwiIG1heGltdW09XCIzLjZcIiBsb2NhdGlvbj1cIjAuOTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRjBDNDREXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjMuNlwiIG1heGltdW09XCI0LjhcIiBsb2NhdGlvbj1cIjAuOTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRTI3NjMzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjQuOFwiIG1heGltdW09XCI2XCIgbG9jYXRpb249XCIwLjk3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiI0E3MDEwRVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsTmVlZGxlIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbFNjYWxlPlxyXG4gICAgPC9SYWRSYWRpYWxHYXVnZT5cclxuXHJcbiAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuPC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcclxuaW1wb3J0IFJhZFJhZGlhbEdhdWdlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvdnVlXCI7XHJcblZ1ZS51c2UoUmFkUmFkaWFsR2F1Z2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdnYXVnZScsXHJcbiAgY3JlYXRlZCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnYXVnZSBjcmVhdGVkJyk7XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgdmFsdWU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjAwXCIsIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHRleHQ6IFwiVGpzamJqZHZqZnZkanZmZHZmamRqc2Jqc2JzanNiamhzdmpnc2poc2doamdqaHN2c2pnc2pnc2pcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHRydWVcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiUmFkUmFkaWFsR2F1Z2VcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJSYWRpYWxTY2FsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxHYXVnZVNjYWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEdhdWdlU2NhbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1pbmltdW06IFwiMFwiLCBtYXhpbXVtOiBcIjZcIiwgcmFkaXVzOiBcIjAuOTBcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNjYWxlU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYWpvclRpY2tzQ291bnQ6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja3NDb3VudDogXCI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZVRoaWNrbmVzczogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxzQ291bnQ6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHRpY2tzT2Zmc2V0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtaW5pbXVtOiBcIjBcIiwgbWF4aW11bTogXCIxLjJcIiwgbG9jYXRpb246IFwiMC45N1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNkZGRkZGRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW06IFwiMi40XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCIwLjk3XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGxDb2xvcjogXCIjOURDQTU2XCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJSYWRpYWxCYXJJbmRpY2F0b3JcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IFwiMi40XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBcIjMuNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCYXJJbmRpY2F0b3JTdHlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWxsQ29sb3I6IFwiI0YwQzQ0RFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjMuNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIjAuOTdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNFMjc2MzNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtaW5pbXVtOiBcIjQuOFwiLCBtYXhpbXVtOiBcIjZcIiwgbG9jYXRpb246IFwiMC45N1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNBNzAxMEVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiUmFkaWFsTmVlZGxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogX3ZtLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmVcIixcbiAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJDbG9zZSBNb2RhbFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJG1vZGFsLmNsb3NlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9