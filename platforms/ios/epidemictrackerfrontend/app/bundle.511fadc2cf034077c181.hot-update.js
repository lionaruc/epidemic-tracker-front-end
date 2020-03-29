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
                staticStyle: { backgroundColor: "red" },
                attrs: { text: "Take Self Check", color: "#C2C8E6" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdIQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBOztBQUlBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0EsMkJBREE7QUFFQSwrQkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxTQU1BO0FBQ0EseUJBREE7QUFFQSw4QkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQU5BLEVBWUE7QUFDQSxvQkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BWkEsRUFrQkE7QUFDQSxxQkFEQTtBQUVBLGlDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BbEJBLEVBd0JBO0FBQ0EseUJBREE7QUFFQSxpQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQXhCQSxDQUZBO0FBaUNBO0FBakNBO0FBbUNBLEdBeENBOztBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsR0FqRkE7O0FBa0ZBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBVEE7O0FBVUE7QUFFQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFRO0FBQzFCO0FBQ0EsOEJBQThCLHlCQUF5QjtBQUN2RCx3QkFBd0IsNENBQTRDO0FBQ3BFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBbUdDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjUxMWZhZGMyY2YwMzQwNzdjMTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj48L0FjdGlvbkJhcj5cblxuICAgICAgICA8RG9ja0xheW91dCBzdHJldGNoTGFzdENoaWxkPVwidHJ1ZVwiIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBkb2NrPVwidG9wXCIgY2xhc3M9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBOYXZpZ2F0b24gLS0+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiNzUsKiw3NVwiIGNsYXNzPVwiYWN0aW9uLWJhciBwLTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uVG9kYXkucG5nXCIgY2xhc3M9XCJhY3Rpb24taXRlbVwiIHJvdz1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiMFwiICBzdHJldGNoPVwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25DYWxlbmRhci5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIxXCIgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cImdvVG9UaW1lbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIG9wYWNpdHk9XCIwLjJcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjJcIiAgc3RyZXRjaD1cImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgb3BhY2l0eT1cIjAuMlwiLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwhLS0gL05hdmlnYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdi1pZj1cInRydWVcIiBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLXktMzAgbS14LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGF0ZSBUb2RheSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJZb3UgbWV0XCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIm1lZGl1bVwiICAvPiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkIENvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgQHRhcD1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY29sb3I9XCIjQzJDOEU2XCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTcGVuZGluZyB0aGlzIG1vbnRoIC0tPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjVcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwibGFyZ2UgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZCBBY3Rpdml0eVwiXG4gICAgICAgICAgICAgICAgICAgICBAdGFwPVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjb2xvcj1cIiNDMkM4RTZcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDMwMDsgdGV4dC1hbGlnbjogY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgdGV4dD1cIllvdXIgUmlzayBMZXZlbFwiIHN0eWxlPVwiIHdpZHRoOiAxODBcIi8+XG4gICAgICAgICAgICAgICAgPFJhZFJhZGlhbEdhdWdlIHYtaWY9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSYWRpYWxTY2FsZSB2LXRrUmFkaWFsR2F1Z2VTY2FsZXMgbWluaW11bT1cIjBcIiBtYXhpbXVtPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCIwLjkwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2NhbGVTdHlsZSB2LXRrUmFkaWFsU2NhbGVTdHlsZSBtYWpvclRpY2tzQ291bnQ9XCI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5vclRpY2tzQ291bnQ9XCI5XCIgbGluZVRoaWNrbmVzcz1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc0NvdW50PVwiN1wiIHRpY2tzT2Zmc2V0PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMFwiIG1heGltdW09XCIxLjJcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNkZGRkZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMS4yXCIgbWF4aW11bT1cIjIuNFwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiIzlEQ0E1NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIyLjRcIiBtYXhpbXVtPVwiMy42XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRjBDNDREXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjMuNlwiIG1heGltdW09XCI0LjhcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNFMjc2MzNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiNC44XCIgbWF4aW11bT1cIjZcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNBNzAxMEVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsTmVlZGxlIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbFNjYWxlPlxuICAgICAgICAgICAgICAgIDwvUmFkUmFkaWFsR2F1Z2U+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJUYWtlIFNlbGYgQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICBAdGFwPVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQzJDOEU2XCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwhLS0gTWVldGluZ3MgLS0+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGNsYXNzPVwibS10LTMwIGJnLWRhcmtcIiB2LWlmPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGNsYXNzPVwibGlzdC1ncm91cCBiZy1kYXJrXCIgZm9yPVwibWVldGluZyBpbiBtZWV0aW5nc1wiICBzdHlsZT1cImhlaWdodDoxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGJhY2tncm91bmRDb2xvcj1cIiMyQzMyNTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMTAwLCAqXCIgcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIiBjbGFzcz1cIm0tbC0yMFwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtZWV0aW5nLnR5cGVcIiByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiaDFcIiBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtZWV0aW5nLmRhdGVcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYm9keSBwLWwtMTVcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtZWV0aW5nLm5hbWVcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaDIgcC1yLTIwXCIgLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWVldGluZy5hZGRyZXNzXCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImJvZHkgcC1yLTIwXCIgY29sb3I9XCIjQzJDOEU2XCIgLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHQgbS15LTIwXCIgcm93PVwiMlwiIGNvbD1cIjFcIiB2LWlmPVwiIW1lZXRpbmcubGFzdFwiPjwvU3RhY2tMYXlvdXQ+XG5cdFx0XHRcdFx0XHRcdDxTdGFja0xheW91dCBjbGFzcz1cIm0teS0yMFwiIHJvdz1cIjJcIiBjb2w9XCIxXCIgdi1lbHNlPVwibWVldGluZy5sYXN0XCI+PC9TdGFja0xheW91dD5cblx0ICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8IS0tIC9NZWV0aW5ncyAtLT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L0RvY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgUmFkUmFkaWFsR2F1Z2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS92dWVcIjtcbiAgICBWdWUudXNlKFJhZFJhZGlhbEdhdWdlKTtcblxuXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5cbiAgICBcblxuICAgIGltcG9ydCBUaW1lTGluZSBmcm9tIFwiLi9UaW1lTGluZVwiO1xuXG4gICAgIGltcG9ydCBHYXVnZSBmcm9tIFwiLi9HYXVnZVwiO1xuXG4gICAgaW1wb3J0IENvbnRhY3RNb2RhbCBmcm9tIFwiLi9Db250YWN0TW9kYWxcIjtcblxuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEdhdWdlOiAnZ2F1Z2UnXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBtZWV0aW5nczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSm9obiBPbGl2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiTWFtYSBOZ2luYSdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk1lZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiMmggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaXRpIEhvcGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiQlMsIE5haXJvYmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUmlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlViZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiTXVpbmRpIE1iaW5ndVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWV0cm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiS2VueWEgQXJjaGl2ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUmlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNpdGkgSG9wYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJLZW55YSBBcmNoaXZlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgV2VsY29tZWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgLy8gc2Vjb25kIHBhcmFtZXRlciBpcyBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnV2VsY29tZScgKyBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBudWxsKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblx0XHRcdHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHdlZWtkYXlzID0gbmV3IEFycmF5KDcpO1xuICAgICAgICAgICAgd2Vla2RheXNbMF0gPSBcIlN1bmRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbMV0gPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbMl0gPSBcIlR1ZXNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzNdID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzRdID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNV0gPSBcIkZyaWRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNl0gPSBcIlNhdHVyZGF5XCI7XG4gICAgICAgICAgICB2YXIgZGF5TmFtZSA9IHdlZWtkYXlzW2RheV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGF5ID0gZGF5TmFtZTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0XHR0aGlzLnllYXIgPSB5ZWFyO1xuXG4gICAgICAgICAgICB2YXIgbW9udGggPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIG1vbnRoWzBdID0gXCJKYW51YXJ5XCI7XG4gICAgICAgICAgICBtb250aFsxXSA9IFwiRmVicnVhcnlcIjtcbiAgICAgICAgICAgIG1vbnRoWzJdID0gXCJNYXJjaFwiO1xuICAgICAgICAgICAgbW9udGhbM10gPSBcIkFwcmlsXCI7XG4gICAgICAgICAgICBtb250aFs0XSA9IFwiTWF5XCI7XG4gICAgICAgICAgICBtb250aFs1XSA9IFwiSnVuZVwiO1xuICAgICAgICAgICAgbW9udGhbNl0gPSBcIkp1bHlcIjtcbiAgICAgICAgICAgIG1vbnRoWzddID0gXCJBdWd1c3RcIjtcbiAgICAgICAgICAgIG1vbnRoWzhdID0gXCJTZXB0ZW1iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzldID0gXCJPY3RvYmVyXCI7XG4gICAgICAgICAgICBtb250aFsxMF0gPSBcIk5vdmVtYmVyXCI7XG4gICAgICAgICAgICBtb250aFsxMV0gPSBcIkRlY2VtYmVyXCI7XG5cbiAgICAgICAgICAgIHZhciBtb250aE5hbWUgPSBtb250aFtjdXJyZW50RGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBtb250aE5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoQ29udGFjdE1vZGFsKTtcbiAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvVGltZWxpbmUoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFRpbWVMaW5lLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkRvY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiZy1kYXJrXCIsIGF0dHJzOiB7IHN0cmV0Y2hMYXN0Q2hpbGQ6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1kYXJrXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGRvY2s6IFwidG9wXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhciBwLTIwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCI3NSwqLDc1XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25Ub2RheS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25DYWxlbmRhci5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvVGltZWxpbmUgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvbkJhbGFuY2UucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXktMzAgbS14LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIqLCAqXCIsIHJvd3M6IFwiYXV0bywgYXV0b1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIllvdSBtZXRcIiwgcm93OiBcIjBcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCBDb250YWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDMkM4RTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dNb2RhbCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXJnZSB0ZXh0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCBBY3Rpdml0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93TW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMDBcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTgwXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIllvdXIgUmlzayBMZXZlbFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZFJhZGlhbEdhdWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsU2NhbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxHYXVnZVNjYWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsR2F1Z2VTY2FsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbWluaW11bTogXCIwXCIsIG1heGltdW06IFwiNlwiLCByYWRpdXM6IFwiMC45MFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU2NhbGVTdHlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsU2NhbGVTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZVN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWpvclRpY2tzQ291bnQ6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlub3JUaWNrc0NvdW50OiBcIjlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVUaGlja25lc3M6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzQ291bnQ6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3NPZmZzZXQ6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSYWRpYWxCYXJJbmRpY2F0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW06IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBcIjEuMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCIwLjk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWxsQ29sb3I6IFwiI2RkZGRkZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjEuMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBcIjIuNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCIwLjk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWxsQ29sb3I6IFwiIzlEQ0E1NlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjIuNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBcIjMuNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCIwLjk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWxsQ29sb3I6IFwiI0YwQzQ0RFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjMuNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBcIjQuOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCIwLjk3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQmFySW5kaWNhdG9yU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWxsQ29sb3I6IFwiI0UyNzYzM1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjQuOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNBNzAxMEVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlJhZGlhbE5lZWRsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogXCI0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJUYWtlIFNlbGYgQ2hlY2tcIiwgY29sb3I6IFwiI0MyQzhFNlwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2hvd01vZGFsIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTMwIGJnLWRhcmtcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgYmctZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMkMzMjUxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLm1lZXRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJtZWV0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZWV0aW5nID0gcmVmLm1lZXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tbC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIxMDAsICpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLCBhdXRvLCBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1lZXRpbmcudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgcC1sLTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVldGluZy5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMiBwLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZWV0aW5nLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgcC1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVldGluZy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWVldGluZy5sYXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoci1saWdodCBtLXktMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXktMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIxXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMjAwNDMxMTkwXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=