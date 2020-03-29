webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-gauge/vue");
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/TimeLine.vue");
/* harmony import */ var _Gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Gauge.vue");
/* harmony import */ var _ContactModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/ContactModal.vue");
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





var appSettings = __webpack_require__("tns-core-modules/application-settings");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Gauge: 'gauge'
  },

  data() {
    return {
      username: '',
      meetings: [{
        name: "John Oliver",
        address: "Mama Ngina's",
        type: "Meet",
        date: "2h ago"
      }, {
        name: "Citi Hopa",
        address: "BS, Nairobi",
        type: "Ride",
        date: "3h ago"
      }, {
        name: "Uber",
        address: "Muindi Mbingu",
        type: "Ride",
        date: "3h ago"
      }, {
        name: "Metro",
        address: "Kenya Archives",
        type: "Ride",
        date: "3h ago"
      }, {
        name: "Citi Hopa",
        address: "Kenya Archives",
        type: "Ride",
        date: "3h ago"
      }],
      message: "Welcome"
    };
  },

  created() {
    // second parameter is default value
    this.message = 'Welcome' + appSettings.getString("username", null);
    this.username = appSettings.getString("username", null);
    var currentDate = new Date();
    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var dayName = weekdays[day];
    this.day = dayName;
    this.date = date;
    this.year = year;
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthName = month[currentDate.getMonth()];
    this.month = monthName;
  },

  methods: {
    showModal() {
      this.$showModal(_ContactModal__WEBPACK_IMPORTED_MODULE_5__["default"]);
    },

    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
        clearHistory: true
      });
    },

    goToTimeline() {
      this.$navigateTo(_TimeLine__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
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
      _c("ActionBar", { attrs: { actionBarHidden: "true" } }),
      _c(
        "DockLayout",
        { staticClass: "bg-dark", attrs: { stretchLastChild: "true" } },
        [
          _c(
            "StackLayout",
            {
              staticClass: "bg-dark",
              attrs: { orientation: "vertical", dock: "top" }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "action-bar p-20",
                  attrs: { rows: "auto", columns: "75,*,75" }
                },
                [
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconToday.png",
                      row: "0",
                      col: "0",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "left"
                    }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconCalendar.png",
                      row: "0",
                      col: "1",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "center",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToTimeline }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconBalance.png",
                      row: "0",
                      col: "2",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "right",
                      opacity: "0.2"
                    }
                  })
                ],
                1
              ),
              true
                ? _c(
                    "GridLayout",
                    {
                      staticClass: "m-y-30 m-x-20",
                      attrs: { columns: "*, *", rows: "auto, auto" }
                    },
                    [
                      _c("Label", {
                        staticClass: "medium",
                        attrs: { text: "You met", row: "0", col: "0" }
                      }),
                      _c("Button", {
                        staticClass: "btn btn-primary",
                        attrs: {
                          text: "Add Contact",
                          row: "1",
                          col: "0",
                          color: "#C2C8E6"
                        },
                        on: { tap: _vm.showModal }
                      }),
                      _c("Label", {
                        staticClass: "large text-right",
                        attrs: {
                          text: "5",
                          row: "0",
                          col: "1",
                          color: "#89D5E2"
                        }
                      }),
                      _c("Button", {
                        staticClass: "btn btn-primary",
                        attrs: {
                          text: "Add Activity",
                          row: "1",
                          col: "1",
                          color: "#C2C8E6"
                        },
                        on: { tap: _vm.showModal }
                      })
                    ],
                    1
                  )
                : undefined
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticStyle: { height: "300", textAlign: "center" },
              attrs: { orientation: "vertical" }
            },
            [
              _c("label", {
                staticStyle: { width: "180" },
                attrs: { text: "Your Risk Level" }
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
                              attrs: {
                                minimum: "0",
                                maximum: "1.2",
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
                              attrs: {
                                minimum: "4.8",
                                maximum: "6",
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
                            attrs: { value: "4" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : undefined,
              _c("Button", {
                staticClass: "btn",
                staticStyle: { backgroundColor: "red" },
                attrs: { text: "Self Check Quiz", color: "#C2C8E6" },
                on: { tap: _vm.showModal }
              })
            ],
            1
          ),
          false
            ? undefined
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5SEE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBREEsR0FEQTs7QUFJQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBLDJCQURBO0FBRUEsK0JBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsU0FNQTtBQUNBLHlCQURBO0FBRUEsOEJBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FOQSxFQVlBO0FBQ0Esb0JBREE7QUFFQSxnQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQVpBLEVBa0JBO0FBQ0EscUJBREE7QUFFQSxpQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQWxCQSxFQXdCQTtBQUNBLHlCQURBO0FBRUEsaUNBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0F4QkEsQ0FGQTtBQWlDQTtBQWpDQTtBQW1DQSxHQXhDQTs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEdBakZBOztBQWtGQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxLQVRBOztBQVVBO0FBRUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUTtBQUMxQjtBQUNBO0FBQ0EsOEJBQThCLHlCQUF5QjtBQUN2RCx3QkFBd0IsNENBQTRDO0FBQ3BFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBbUdDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmI4OTc5OTk4ZWYzOTgzZWZiYjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj48L0FjdGlvbkJhcj5cblxuICAgICAgICA8RG9ja0xheW91dCBzdHJldGNoTGFzdENoaWxkPVwidHJ1ZVwiIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBkb2NrPVwidG9wXCIgY2xhc3M9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBOYXZpZ2F0b24gLS0+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiNzUsKiw3NVwiIGNsYXNzPVwiYWN0aW9uLWJhciBwLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uVG9kYXkucG5nXCIgY2xhc3M9XCJhY3Rpb24taXRlbVwiIHJvdz1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiMFwiICBzdHJldGNoPVwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25DYWxlbmRhci5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIxXCIgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cImdvVG9UaW1lbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIG9wYWNpdHk9XCIwLjJcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjJcIiAgc3RyZXRjaD1cImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgb3BhY2l0eT1cIjAuMlwiLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwhLS0gL05hdmlnYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdi1pZj1cInRydWVcIiBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLXktMzAgbS14LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGF0ZSBUb2RheSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJZb3UgbWV0XCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIm1lZGl1bVwiICAvPiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkIENvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgQHRhcD1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY29sb3I9XCIjQzJDOEU2XCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTcGVuZGluZyB0aGlzIG1vbnRoIC0tPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjVcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwibGFyZ2UgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZCBBY3Rpdml0eVwiXG4gICAgICAgICAgICAgICAgICAgICBAdGFwPVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjb2xvcj1cIiNDMkM4RTZcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDMwMDsgdGV4dC1hbGlnbjogY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cIllvdXIgUmlzayBMZXZlbFwiIHN0eWxlPVwiIHdpZHRoOiAxODBcIi8+XG4gICAgICAgICAgICAgICAgPFJhZFJhZGlhbEdhdWdlIHYtaWY9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSYWRpYWxTY2FsZSB2LXRrUmFkaWFsR2F1Z2VTY2FsZXMgbWluaW11bT1cIjBcIiBtYXhpbXVtPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCIwLjkwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2NhbGVTdHlsZSB2LXRrUmFkaWFsU2NhbGVTdHlsZSBtYWpvclRpY2tzQ291bnQ9XCI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5vclRpY2tzQ291bnQ9XCI5XCIgbGluZVRoaWNrbmVzcz1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc0NvdW50PVwiN1wiIHRpY2tzT2Zmc2V0PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMFwiIG1heGltdW09XCIxLjJcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNkZGRkZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMS4yXCIgbWF4aW11bT1cIjIuNFwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiIzlEQ0E1NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIyLjRcIiBtYXhpbXVtPVwiMy42XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRjBDNDREXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjMuNlwiIG1heGltdW09XCI0LjhcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNFMjc2MzNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiNC44XCIgbWF4aW11bT1cIjZcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNBNzAxMEVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsTmVlZGxlIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbFNjYWxlPlxuICAgICAgICAgICAgICAgIDwvUmFkUmFkaWFsR2F1Z2U+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTZWxmIENoZWNrIFF1aXpcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgQHRhcD1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0MyQzhFNlwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8IS0tIE1lZXRpbmdzIC0tPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cIm0tdC0zMCBiZy1kYXJrXCIgdi1pZj1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgIDxMaXN0VmlldyBjbGFzcz1cImxpc3QtZ3JvdXAgYmctZGFya1wiIGZvcj1cIm1lZXRpbmcgaW4gbWVldGluZ3NcIiAgc3R5bGU9XCJoZWlnaHQ6MTAwJVwiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjMkMzMjUxXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLWwtMjBcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWVldGluZy50eXBlXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImgxXCIgY29sb3I9XCIjODlENUUyXCIgLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWVldGluZy5kYXRlXCIgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHkgcC1sLTE1XCIgLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWVldGluZy5uYW1lXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImgyIHAtci0yMFwiIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1lZXRpbmcuYWRkcmVzc1wiIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJib2R5IHAtci0yMFwiIGNvbG9yPVwiI0MyQzhFNlwiIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0IG0teS0yMFwiIHJvdz1cIjJcIiBjb2w9XCIxXCIgdi1pZj1cIiFtZWV0aW5nLmxhc3RcIj48L1N0YWNrTGF5b3V0PlxuXHRcdFx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJtLXktMjBcIiByb3c9XCIyXCIgY29sPVwiMVwiIHYtZWxzZT1cIm1lZXRpbmcubGFzdFwiPjwvU3RhY2tMYXlvdXQ+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldz4gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPCEtLSAvTWVldGluZ3MgLS0+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9Eb2NrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG4gICAgaW1wb3J0IFJhZFJhZGlhbEdhdWdlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvdnVlXCI7XG4gICAgVnVlLnVzZShSYWRSYWRpYWxHYXVnZSk7XG5cblxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuXG4gICAgXG5cbiAgICBpbXBvcnQgVGltZUxpbmUgZnJvbSBcIi4vVGltZUxpbmVcIjtcblxuICAgICBpbXBvcnQgR2F1Z2UgZnJvbSBcIi4vR2F1Z2VcIjtcblxuICAgIGltcG9ydCBDb250YWN0TW9kYWwgZnJvbSBcIi4vQ29udGFjdE1vZGFsXCI7XG5cbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBHYXVnZTogJ2dhdWdlJ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICAgICAgbWVldGluZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkpvaG4gT2xpdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIk1hbWEgTmdpbmEnc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJNZWV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjJoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2l0aSBIb3BhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIkJTLCBOYWlyb2JpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiM2ggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJVYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIk11aW5kaSBNYmluZ3VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUmlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1ldHJvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIktlbnlhIEFyY2hpdmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiM2ggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaXRpIEhvcGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiS2VueWEgQXJjaGl2ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUmlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFdlbGNvbWVgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgaXMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1dlbGNvbWUnICsgYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cdFx0XHR2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5cyA9IG5ldyBBcnJheSg3KTtcbiAgICAgICAgICAgIHdlZWtkYXlzWzBdID0gXCJTdW5kYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzFdID0gXCJNb25kYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzJdID0gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1szXSA9IFwiV2VkbmVzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s0XSA9IFwiVGh1cnNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzVdID0gXCJGcmlkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzZdID0gXCJTYXR1cmRheVwiO1xuICAgICAgICAgICAgdmFyIGRheU5hbWUgPSB3ZWVrZGF5c1tkYXldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRheSA9IGRheU5hbWU7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuXHRcdFx0dGhpcy55ZWFyID0geWVhcjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBtb250aFswXSA9IFwiSmFudWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMV0gPSBcIkZlYnJ1YXJ5XCI7XG4gICAgICAgICAgICBtb250aFsyXSA9IFwiTWFyY2hcIjtcbiAgICAgICAgICAgIG1vbnRoWzNdID0gXCJBcHJpbFwiO1xuICAgICAgICAgICAgbW9udGhbNF0gPSBcIk1heVwiO1xuICAgICAgICAgICAgbW9udGhbNV0gPSBcIkp1bmVcIjtcbiAgICAgICAgICAgIG1vbnRoWzZdID0gXCJKdWx5XCI7XG4gICAgICAgICAgICBtb250aFs3XSA9IFwiQXVndXN0XCI7XG4gICAgICAgICAgICBtb250aFs4XSA9IFwiU2VwdGVtYmVyXCI7XG4gICAgICAgICAgICBtb250aFs5XSA9IFwiT2N0b2JlclwiO1xuICAgICAgICAgICAgbW9udGhbMTBdID0gXCJOb3ZlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbMTFdID0gXCJEZWNlbWJlclwiO1xuXG4gICAgICAgICAgICB2YXIgbW9udGhOYW1lID0gbW9udGhbY3VycmVudERhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gbW9udGhOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKENvbnRhY3RNb2RhbCk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1RpbWVsaW5lKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhUaW1lTGluZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmctZGFya1wiLCBhdHRyczogeyBzdHJldGNoTGFzdENoaWxkOiBcInRydWVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctZGFya1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBkb2NrOiBcInRvcFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXIgcC0yMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiNzUsKiw3NVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uVG9kYXkucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1RpbWVsaW5lIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS15LTMwIG0teC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCByb3dzOiBcImF1dG8sIGF1dG9cIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJZb3UgbWV0XCIsIHJvdzogXCIwXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgQ29udGFjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93TW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFyZ2UgdGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgQWN0aXZpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2hvd01vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE4MFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJZb3VyIFJpc2sgTGV2ZWxcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJSYWRSYWRpYWxHYXVnZVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbFNjYWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsR2F1Z2VTY2FsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEdhdWdlU2NhbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1pbmltdW06IFwiMFwiLCBtYXhpbXVtOiBcIjZcIiwgcmFkaXVzOiBcIjAuOTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNjYWxlU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsU2NhbGVTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3JUaWNrc0NvdW50OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja3NDb3VudDogXCI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGhpY2tuZXNzOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc0NvdW50OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzT2Zmc2V0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNkZGRkZGRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIyLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiM5RENBNTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIyLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIzLjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNGMEM0NERcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIzLjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNFMjc2MzNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIjAuOTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCYXJJbmRpY2F0b3JTdHlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGxDb2xvcjogXCIjQTcwMTBFXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJSYWRpYWxOZWVkbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiNFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2VsZiBDaGVjayBRdWl6XCIsIGNvbG9yOiBcIiNDMkM4RTZcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dNb2RhbCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tdC0zMCBiZy1kYXJrXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwIGJnLWRhcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJDMzI1MVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5tZWV0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwibWVldGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVldGluZyA9IHJlZi5tZWV0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLWwtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMTAwLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZWV0aW5nLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5IHAtbC0xNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1lZXRpbmcuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgcC1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVldGluZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5IHAtci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1lZXRpbmcuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1lZXRpbmcubGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHQgbS15LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS15LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTIwMDQzMTE5MFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9