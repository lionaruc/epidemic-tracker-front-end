webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TimeLine.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var appSettings = __webpack_require__("tns-core-modules/application-settings");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      username: '',
      timeline: [{
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
    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    goToHome() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TimeLine.vue?vue&type=template&id=0521783c&":
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
                      horizontalAlignment: "left",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToHome }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconCalendar.png",
                      row: "0",
                      col: "1",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "center"
                    }
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
              _c(
                "GridLayout",
                {
                  staticClass: "m-y-30 m-x-20",
                  attrs: { columns: "*, *", rows: "auto, auto" }
                },
                [
                  _c("Label", {
                    staticClass: "large",
                    attrs: { text: _vm.day, row: "0", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "body small",
                    attrs: {
                      text: _vm.month + " " + _vm.date + ", " + _vm.year,
                      row: "1",
                      col: "0",
                      color: "#C2C8E6"
                    }
                  }),
                  _c("Label", {
                    staticClass: "large text-right",
                    attrs: { text: "5", row: "0", col: "1", color: "#89D5E2" }
                  }),
                  _c("Label", {
                    staticClass: "body small text-right",
                    attrs: {
                      text: "Met today",
                      row: "1",
                      col: "1",
                      color: "#89D5E2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          true
            ? _c(
                "StackLayout",
                {
                  staticClass: "m-t-30 bg-dark",
                  attrs: { orientation: "vertical" }
                },
                [
                  _c(
                    "ListView",
                    {
                      staticClass: "list-group bg-dark",
                      staticStyle: { height: "100%" },
                      attrs: {
                        separatorColor: "transparent",
                        backgroundColor: "#2C3251",
                        items: _vm.timeline,
                        "+alias": "meeting"
                      }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var meeting = ref.meeting
                                var $index = ref.$index
                                var $even = ref.$even
                                var $odd = ref.$odd
                                return _c(
                                  "GridLayout",
                                  {
                                    staticClass: "m-l-20",
                                    attrs: {
                                      columns: "100, *",
                                      rows: "auto, auto, auto"
                                    }
                                  },
                                  [
                                    _c("Label", {
                                      staticClass: "h1",
                                      attrs: {
                                        text: meeting.type,
                                        row: "0",
                                        col: "0",
                                        color: "#89D5E2"
                                      }
                                    }),
                                    _c("Label", {
                                      staticClass: "body p-l-15",
                                      attrs: {
                                        text: meeting.date,
                                        row: "1",
                                        col: "0"
                                      }
                                    }),
                                    _c("Label", {
                                      staticClass: "h2 p-r-20",
                                      attrs: {
                                        text: meeting.name,
                                        row: "0",
                                        col: "1"
                                      }
                                    }),
                                    _c("Label", {
                                      staticClass: "body p-r-20",
                                      attrs: {
                                        text: meeting.address,
                                        row: "1",
                                        col: "1",
                                        color: "#C2C8E6"
                                      }
                                    }),
                                    !meeting.last
                                      ? _c("StackLayout", {
                                          staticClass: "hr-light m-y-20",
                                          attrs: { row: "2", col: "1" }
                                        })
                                      : _c("StackLayout", {
                                          staticClass: "m-y-20",
                                          attrs: { row: "2", col: "1" }
                                        })
                                  ],
                                  1
                                )
                              }
                            }
                          ],
                          null,
                          false,
                          1200431190
                        )
                      })
                    ],
                    1
                  ),
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: _vm.Logout, isEnabled: !_vm.processing }
                  })
                ],
                1
              )
            : undefined
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UaW1lTGluZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaW1lTGluZS52dWU/MmM5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFDQSwyQkFEQTtBQUVBLCtCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLFNBTUE7QUFDQSx5QkFEQTtBQUVBLDhCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BTkEsRUFZQTtBQUNBLG9CQURBO0FBRUEsZ0NBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FaQSxFQWtCQTtBQUNBLHFCQURBO0FBRUEsaUNBRkE7QUFHQSxvQkFIQTtBQUlBO0FBSkEsT0FsQkEsRUF3QkE7QUFDQSx5QkFEQTtBQUVBLGlDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BeEJBLENBRkE7QUFpQ0E7QUFqQ0E7QUFtQ0EsR0FyQ0E7O0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxHQTdFQTs7QUE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FOQTs7QUFPQTtBQUVBO0FBQ0E7QUFEQTtBQUlBOztBQWJBO0FBOUVBLEc7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsMEJBQTBCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBLFNBQVMsaUNBQWlDLDJCQUEyQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QztBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42OTdiZWZjMmY4Njg0NTU4MjczNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciAgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPjwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8RG9ja0xheW91dCBzdHJldGNoTGFzdENoaWxkPVwidHJ1ZVwiIGNsYXNzPVwiYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGRvY2s9XCJ0b3BcIiBjbGFzcz1cImJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gTmF2aWdhdG9uIC0tPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG9cIiBjb2x1bW5zPVwiNzUsKiw3NVwiIGNsYXNzPVwiYWN0aW9uLWJhciBwLTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25Ub2RheS5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCIgcm93PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIiAgc3RyZXRjaD1cImFzcGVjdEZpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJnb1RvSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIG9wYWNpdHk9XCIwLjJcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIgY2xhc3M9XCJhY3Rpb24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIxXCIgIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQmFsYW5jZS5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCIgcm93PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjJcIiAgc3RyZXRjaD1cImFzcGVjdEZpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBvcGFjaXR5PVwiMC4yXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gL05hdmlnYXRpb24gLS0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLXktMzAgbS14LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEYXRlIFRvZGF5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRheVwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibW9udGggKyAnICcgKyBkYXRlICsgJywgJyArIHllYXJcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYm9keSBzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0MyQzhFNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTcGVuZGluZyB0aGlzIG1vbnRoIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiNVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJsYXJnZSB0ZXh0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjODlENUUyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1ldCB0b2RheVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJib2R5IHNtYWxsIHRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gTWVldGluZ3MgLS0+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgY2xhc3M9XCJtLXQtMzAgYmctZGFya1wiIHYtaWY9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGNsYXNzPVwibGlzdC1ncm91cCBiZy1kYXJrXCIgZm9yPVwibWVldGluZyBpbiB0aW1lbGluZVwiICBzdHlsZT1cImhlaWdodDoxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiIGJhY2tncm91bmRDb2xvcj1cIiMyQzMyNTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLWwtMjBcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtZWV0aW5nLnR5cGVcIiByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwiaDFcIiBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1lZXRpbmcuZGF0ZVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJib2R5IHAtbC0xNVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWVldGluZy5uYW1lXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImgyIHAtci0yMFwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWVldGluZy5hZGRyZXNzXCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImJvZHkgcC1yLTIwXCIgY29sb3I9XCIjQzJDOEU2XCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodCBtLXktMjBcIiByb3c9XCIyXCIgY29sPVwiMVwiIHYtaWY9XCIhbWVldGluZy5sYXN0XCI+PC9TdGFja0xheW91dD5cclxuXHRcdFx0XHRcdFx0XHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJtLXktMjBcIiByb3c9XCIyXCIgY29sPVwiMVwiIHYtZWxzZT1cIm1lZXRpbmcubGFzdFwiPjwvU3RhY2tMYXlvdXQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldz4gXHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiTG9nb3V0XCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIj48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPCEtLSAvTWVldGluZ3MgLS0+XHJcbiAgICAgICAgPC9Eb2NrTGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuXHJcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGltZWxpbmU6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSm9obiBPbGl2ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJNYW1hIE5naW5hJ3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJNZWV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiMmggYWdvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaXRpIEhvcGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJCUywgTmFpcm9iaVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlViZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJNdWluZGkgTWJpbmd1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUmlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWV0cm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJLZW55YSBBcmNoaXZlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNpdGkgSG9wYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIktlbnlhIEFyY2hpdmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUmlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgV2VsY29tZWBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgaXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnV2VsY29tZScgKyBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHR2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzWzBdID0gXCJTdW5kYXlcIjtcclxuICAgICAgICAgICAgd2Vla2RheXNbMV0gPSBcIk1vbmRheVwiO1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1szXSA9IFwiV2VkbmVzZGF5XCI7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzWzRdID0gXCJUaHVyc2RheVwiO1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzWzZdID0gXCJTYXR1cmRheVwiO1xyXG4gICAgICAgICAgICB2YXIgZGF5TmFtZSA9IHdlZWtkYXlzW2RheV07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRheSA9IGRheU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcblx0XHRcdHRoaXMueWVhciA9IHllYXI7XHJcblxyXG4gICAgICAgICAgICB2YXIgbW9udGggPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcclxuICAgICAgICAgICAgbW9udGhbMV0gPSBcIkZlYnJ1YXJ5XCI7XHJcbiAgICAgICAgICAgIG1vbnRoWzJdID0gXCJNYXJjaFwiO1xyXG4gICAgICAgICAgICBtb250aFszXSA9IFwiQXByaWxcIjtcclxuICAgICAgICAgICAgbW9udGhbNF0gPSBcIk1heVwiO1xyXG4gICAgICAgICAgICBtb250aFs1XSA9IFwiSnVuZVwiO1xyXG4gICAgICAgICAgICBtb250aFs2XSA9IFwiSnVseVwiO1xyXG4gICAgICAgICAgICBtb250aFs3XSA9IFwiQXVndXN0XCI7XHJcbiAgICAgICAgICAgIG1vbnRoWzhdID0gXCJTZXB0ZW1iZXJcIjtcclxuICAgICAgICAgICAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcclxuICAgICAgICAgICAgbW9udGhbMTBdID0gXCJOb3ZlbWJlclwiO1xyXG4gICAgICAgICAgICBtb250aFsxMV0gPSBcIkRlY2VtYmVyXCI7XHJcblxyXG4gICAgICAgICAgICB2YXIgbW9udGhOYW1lID0gbW9udGhbY3VycmVudERhdGUuZ2V0TW9udGgoKV07XHJcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBtb250aE5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdvVG9Ib21lKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oSG9tZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJnLWRhcmtcIiwgYXR0cnM6IHsgc3RyZXRjaExhc3RDaGlsZDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWRhcmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiwgZG9jazogXCJ0b3BcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIHAtMjBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIjc1LCosNzVcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvSG9tZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS15LTMwIG0teC0yMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIqLCAqXCIsIHJvd3M6IFwiYXV0bywgYXV0b1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXJnZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0uZGF5LCByb3c6IFwiMFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ubW9udGggKyBcIiBcIiArIF92bS5kYXRlICsgXCIsIFwiICsgX3ZtLnllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDMkM4RTZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXJnZSB0ZXh0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiNVwiLCByb3c6IFwiMFwiLCBjb2w6IFwiMVwiLCBjb2xvcjogXCIjODlENUUyXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBzbWFsbCB0ZXh0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJNZXQgdG9kYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXQtMzAgYmctZGFya1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCBiZy1kYXJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udGltZWxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcIm1lZXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lZXRpbmcgPSByZWYubWVldGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1sLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIjEwMCwgKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVldGluZy50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjODlENUUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBwLWwtMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZWV0aW5nLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHAtci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1lZXRpbmcubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBwLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtZWV0aW5nLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDMkM4RTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZWV0aW5nLmxhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IG0teS0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcIlN0YWNrTGF5b3V0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0teS0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjJcIiwgY29sOiBcIjFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEyMDA0MzExOTBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5Mb2dvdXQsIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==