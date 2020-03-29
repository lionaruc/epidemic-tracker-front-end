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
      this.$showModal(_Gauge__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
              staticStyle: { height: "300" },
              attrs: { orientation: "vertical" }
            },
            [
              _c("label", { attrs: { text: "Your Risk Level" } }),
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
                : undefined
            ],
            1
          ),
          false
            ? undefined
            : _vm._e(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlP2I2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkhBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7O0FBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQSwyQkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFNBTUE7QUFDQSx5QkFEQTtBQUVBLDhCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BTkEsRUFZQTtBQUNBLG9CQURBO0FBRUEsZ0NBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FaQSxFQWtCQTtBQUNBLHFCQURBO0FBRUEsaUNBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FsQkEsRUF3QkE7QUFDQSx5QkFEQTtBQUVBLGlDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BeEJBLENBRkE7QUFpQ0E7QUFqQ0E7QUFtQ0EsR0F4Q0E7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxHQWpGQTs7QUFrRkE7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FUQTs7QUFVQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0E2QkM7QUFDZjtBQUNBO0FBQ0EsY0FBYyxTQW1HQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS43NmIzMGZlOTdiYTAxNTk0MzVhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+PC9BY3Rpb25CYXI+XG5cbiAgICAgICAgPERvY2tMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cInRydWVcIiBjbGFzcz1cImJnLWRhcmtcIj5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZG9jaz1cInRvcFwiIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgICAgIDwhLS0gTmF2aWdhdG9uIC0tPlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIjc1LCosNzVcIiBjbGFzcz1cImFjdGlvbi1iYXIgcC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIiAgc3RyZXRjaD1cImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImxlZnRcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIgY2xhc3M9XCJhY3Rpb24taXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XCIwXCIgY29sPVwiMVwiICBzdHJldGNoPVwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJnb1RvVGltZWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBvcGFjaXR5PVwiMC4yXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQmFsYW5jZS5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCIgcm93PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w9XCIyXCIgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIG9wYWNpdHk9XCIwLjJcIi8+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8IS0tIC9OYXZpZ2F0aW9uIC0tPlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHYtaWY9XCJ0cnVlXCIgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIGNsYXNzPVwibS15LTMwIG0teC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERhdGUgVG9kYXkgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiWW91IG1ldFwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJtZWRpdW1cIiAgLz4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZCBDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzaG93TW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNvbG9yPVwiI0MyQzhFNlwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gU3BlbmRpbmcgdGhpcyBtb250aCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCI1XCIgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImxhcmdlIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjODlENUUyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJBZGQgQWN0aXZpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgQHRhcD1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIgY29sb3I9XCIjQzJDOEU2XCI+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHN0eWxlPVwiaGVpZ2h0OiAzMDBcIj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCB0ZXh0PVwiWW91ciBSaXNrIExldmVsXCIvPlxuICAgICAgICAgICAgICAgIDxSYWRSYWRpYWxHYXVnZSB2LWlmPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8UmFkaWFsU2NhbGUgdi10a1JhZGlhbEdhdWdlU2NhbGVzIG1pbmltdW09XCIwXCIgbWF4aW11bT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwiMC45MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjYWxlU3R5bGUgdi10a1JhZGlhbFNjYWxlU3R5bGUgbWFqb3JUaWNrc0NvdW50PVwiN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlub3JUaWNrc0NvdW50PVwiOVwiIGxpbmVUaGlja25lc3M9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNDb3VudD1cIjdcIiB0aWNrc09mZnNldD1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjBcIiBtYXhpbXVtPVwiMS4yXCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjZGRkZGRkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjEuMlwiIG1heGltdW09XCIyLjRcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiM5RENBNTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMi40XCIgbWF4aW11bT1cIjMuNlwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiI0YwQzQ0RFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIzLjZcIiBtYXhpbXVtPVwiNC44XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRTI3NjMzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjQuOFwiIG1heGltdW09XCI2XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjQTcwMTBFXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbE5lZWRsZSB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxTY2FsZT5cbiAgICAgICAgICAgICAgICA8L1JhZFJhZGlhbEdhdWdlPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8R3JpZExheW91dCB2LWlmPVwiZmFsc2VcIiBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLXktMzAgbS14LTIwXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkIENvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgQHRhcD1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY29sb3I9XCIjQzJDOEU2XCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkIEFjdGl2aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzaG93TW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb3c9XCIxXCIgY29sPVwiMVwiIGNvbG9yPVwiI0MyQzhFNlwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPCEtLSBNZWV0aW5ncyAtLT5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgY2xhc3M9XCJtLXQtMzAgYmctZGFya1wiIHYtaWY9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgY2xhc3M9XCJsaXN0LWdyb3VwIGJnLWRhcmtcIiBmb3I9XCJtZWV0aW5nIGluIG1lZXRpbmdzXCIgIHN0eWxlPVwiaGVpZ2h0OjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCIgYmFja2dyb3VuZENvbG9yPVwiIzJDMzI1MVwiPlxuICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsICpcIiByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiIGNsYXNzPVwibS1sLTIwXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1lZXRpbmcudHlwZVwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJoMVwiIGNvbG9yPVwiIzg5RDVFMlwiIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1lZXRpbmcuZGF0ZVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJib2R5IHAtbC0xNVwiIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1lZXRpbmcubmFtZVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJoMiBwLXItMjBcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtZWV0aW5nLmFkZHJlc3NcIiByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiYm9keSBwLXItMjBcIiBjb2xvcj1cIiNDMkM4RTZcIiAvPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodCBtLXktMjBcIiByb3c9XCIyXCIgY29sPVwiMVwiIHYtaWY9XCIhbWVldGluZy5sYXN0XCI+PC9TdGFja0xheW91dD5cblx0XHRcdFx0XHRcdFx0PFN0YWNrTGF5b3V0IGNsYXNzPVwibS15LTIwXCIgcm93PVwiMlwiIGNvbD1cIjFcIiB2LWVsc2U9XCJtZWV0aW5nLmxhc3RcIj48L1N0YWNrTGF5b3V0PlxuXHQgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwhLS0gL01lZXRpbmdzIC0tPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvRG9ja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuICAgIGltcG9ydCBSYWRSYWRpYWxHYXVnZSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL3Z1ZVwiO1xuICAgIFZ1ZS51c2UoUmFkUmFkaWFsR2F1Z2UpO1xuXG5cbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcblxuICAgIFxuXG4gICAgaW1wb3J0IFRpbWVMaW5lIGZyb20gXCIuL1RpbWVMaW5lXCI7XG5cbiAgICAgaW1wb3J0IEdhdWdlIGZyb20gXCIuL0dhdWdlXCI7XG5cbiAgICBpbXBvcnQgQ29udGFjdE1vZGFsIGZyb20gXCIuL0NvbnRhY3RNb2RhbFwiO1xuXG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgR2F1Z2U6ICdnYXVnZSdcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIG1lZXRpbmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKb2huIE9saXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJNYW1hIE5naW5hJ3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTWVldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIyaCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNpdGkgSG9wYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJCUywgTmFpcm9iaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJNdWluZGkgTWJpbmd1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiM2ggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJNZXRyb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJLZW55YSBBcmNoaXZlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2l0aSBIb3BhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIktlbnlhIEFyY2hpdmVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiM2ggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBXZWxjb21lYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIGlzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdXZWxjb21lJyArIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0dmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1sxXSA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNF0gPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgIHZhciBkYXlOYW1lID0gd2Vla2RheXNbZGF5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcblx0XHRcdHRoaXMueWVhciA9IHllYXI7XG5cbiAgICAgICAgICAgIHZhciBtb250aCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgICAgICAgICAgIG1vbnRoWzFdID0gXCJGZWJydWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMl0gPSBcIk1hcmNoXCI7XG4gICAgICAgICAgICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgICAgICAgICAgIG1vbnRoWzRdID0gXCJNYXlcIjtcbiAgICAgICAgICAgIG1vbnRoWzVdID0gXCJKdW5lXCI7XG4gICAgICAgICAgICBtb250aFs2XSA9IFwiSnVseVwiO1xuICAgICAgICAgICAgbW9udGhbN10gPSBcIkF1Z3VzdFwiO1xuICAgICAgICAgICAgbW9udGhbOF0gPSBcIlNlcHRlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzEwXSA9IFwiTm92ZW1iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzExXSA9IFwiRGVjZW1iZXJcIjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoW2N1cnJlbnREYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2hvd01vZGFsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNob3dNb2RhbChHYXVnZSk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1RpbWVsaW5lKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhUaW1lTGluZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmctZGFya1wiLCBhdHRyczogeyBzdHJldGNoTGFzdENoaWxkOiBcInRydWVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctZGFya1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBkb2NrOiBcInRvcFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXIgcC0yMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCJhdXRvXCIsIGNvbHVtbnM6IFwiNzUsKiw3NVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uVG9kYXkucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1RpbWVsaW5lIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS15LTMwIG0teC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCByb3dzOiBcImF1dG8sIGF1dG9cIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJZb3UgbWV0XCIsIHJvdzogXCIwXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgQ29udGFjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zaG93TW9kYWwgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFyZ2UgdGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgQWN0aXZpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc2hvd01vZGFsIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJZb3VyIFJpc2sgTGV2ZWxcIiB9IH0pLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJSYWRSYWRpYWxHYXVnZVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbFNjYWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsR2F1Z2VTY2FsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEdhdWdlU2NhbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1pbmltdW06IFwiMFwiLCBtYXhpbXVtOiBcIjZcIiwgcmFkaXVzOiBcIjAuOTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNjYWxlU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsU2NhbGVTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3JUaWNrc0NvdW50OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja3NDb3VudDogXCI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGhpY2tuZXNzOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc0NvdW50OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzT2Zmc2V0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNkZGRkZGRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIyLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiM5RENBNTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIyLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIzLjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNGMEM0NERcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIzLjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNFMjc2MzNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIjAuOTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCYXJJbmRpY2F0b3JTdHlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGxDb2xvcjogXCIjQTcwMTBFXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJSYWRpYWxOZWVkbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IFwiNFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0teS0zMCBtLXgtMjBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCByb3dzOiBcImF1dG8sIGF1dG9cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQWRkIENvbnRhY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dNb2RhbCB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBZGQgQWN0aXZpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnNob3dNb2RhbCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMzAgYmctZGFya1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCBiZy1kYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubWVldGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIm1lZXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lZXRpbmcgPSByZWYubWVldGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1sLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIjEwMCwgKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVldGluZy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjODlENUUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBwLWwtMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZWV0aW5nLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHAtci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1lZXRpbmcubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBwLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZWV0aW5nLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDMkM4RTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZWV0aW5nLmxhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IG0teS0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0teS0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEyMDA0MzExOTBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==