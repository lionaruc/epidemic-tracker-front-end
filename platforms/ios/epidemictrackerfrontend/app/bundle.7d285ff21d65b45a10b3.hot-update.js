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
      appSettings.remove("tok");
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
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: "Logout", isEnabled: !_vm.processing },
                    on: { tap: _vm.logout }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UaW1lTGluZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaW1lTGluZS52dWU/MmM5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvREE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBQ0EsMkJBREE7QUFFQSwrQkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxTQU1BO0FBQ0EseUJBREE7QUFFQSw4QkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQU5BLEVBWUE7QUFDQSxvQkFEQTtBQUVBLGdDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BWkEsRUFrQkE7QUFDQSxxQkFEQTtBQUVBLGlDQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBLE9BbEJBLEVBd0JBO0FBQ0EseUJBREE7QUFFQSxpQ0FGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQSxPQXhCQSxDQUZBO0FBaUNBO0FBakNBO0FBbUNBLEdBckNBOztBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsR0E3RUE7O0FBOEVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBLEtBUEE7O0FBUUE7QUFFQTtBQUNBO0FBREE7QUFJQTs7QUFkQTtBQTlFQSxHOzs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDBCQUEwQixFQUFFO0FBQzVEO0FBQ0E7QUFDQSxTQUFTLGlDQUFpQywyQkFBMkIsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUE2QztBQUN6RSx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjdkMjg1ZmYyMWQ2NWI0NWExMGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+PC9BY3Rpb25CYXI+XHJcblxyXG4gICAgICAgIDxEb2NrTGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XCJ0cnVlXCIgY2xhc3M9XCJiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZG9jaz1cInRvcFwiIGNsYXNzPVwiYmctZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBOYXZpZ2F0b24gLS0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCI3NSwqLDc1XCIgY2xhc3M9XCJhY3Rpb24tYmFyIHAtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiMFwiICBzdHJldGNoPVwiYXNwZWN0Rml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cImdvVG9Ib21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgb3BhY2l0eT1cIjAuMlwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25DYWxlbmRhci5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVwiMFwiIGNvbD1cIjFcIiAgc3RyZXRjaD1cImFzcGVjdEZpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiMlwiICBzdHJldGNoPVwiYXNwZWN0Rml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIG9wYWNpdHk9XCIwLjJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSAvTmF2aWdhdGlvbiAtLT5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCAqXCIgcm93cz1cImF1dG8sIGF1dG9cIiBjbGFzcz1cIm0teS0zMCBtLXgtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIERhdGUgVG9kYXkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGF5XCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtb250aCArICcgJyArIGRhdGUgKyAnLCAnICsgeWVhclwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJib2R5IHNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQzJDOEU2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIFNwZW5kaW5nIHRoaXMgbW9udGggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCI1XCIgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImxhcmdlIHRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTWV0IHRvZGF5XCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImJvZHkgc21hbGwgdGV4dC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzg5RDVFMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBNZWV0aW5ncyAtLT5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cIm0tdC0zMCBiZy1kYXJrXCIgdi1pZj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ291dFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICBAdGFwPVwibG9nb3V0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCI+PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwhLS0gL01lZXRpbmdzIC0tPlxyXG4gICAgICAgIDwvRG9ja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcblxyXG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkpvaG4gT2xpdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiTWFtYSBOZ2luYSdzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiTWVldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjJoIGFnb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2l0aSBIb3BhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiQlMsIE5haXJvYmlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiM2ggYWdvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJVYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiTXVpbmRpIE1iaW5ndVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1ldHJvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiS2VueWEgQXJjaGl2ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSaWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiM2ggYWdvXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDaXRpIEhvcGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJLZW55YSBBcmNoaXZlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlJpZGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFdlbGNvbWVgXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIGlzIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1dlbGNvbWUnICsgYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBudWxsKTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcclxuXHRcdFx0dmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHdlZWtkYXlzID0gbmV3IEFycmF5KDcpO1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzWzFdID0gXCJNb25kYXlcIjtcclxuICAgICAgICAgICAgd2Vla2RheXNbMl0gPSBcIlR1ZXNkYXlcIjtcclxuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1s0XSA9IFwiVGh1cnNkYXlcIjtcclxuICAgICAgICAgICAgd2Vla2RheXNbNV0gPSBcIkZyaWRheVwiO1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcclxuICAgICAgICAgICAgdmFyIGRheU5hbWUgPSB3ZWVrZGF5c1tkYXldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG5cdFx0XHR0aGlzLnllYXIgPSB5ZWFyO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1vbnRoID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIG1vbnRoWzBdID0gXCJKYW51YXJ5XCI7XHJcbiAgICAgICAgICAgIG1vbnRoWzFdID0gXCJGZWJydWFyeVwiO1xyXG4gICAgICAgICAgICBtb250aFsyXSA9IFwiTWFyY2hcIjtcclxuICAgICAgICAgICAgbW9udGhbM10gPSBcIkFwcmlsXCI7XHJcbiAgICAgICAgICAgIG1vbnRoWzRdID0gXCJNYXlcIjtcclxuICAgICAgICAgICAgbW9udGhbNV0gPSBcIkp1bmVcIjtcclxuICAgICAgICAgICAgbW9udGhbNl0gPSBcIkp1bHlcIjtcclxuICAgICAgICAgICAgbW9udGhbN10gPSBcIkF1Z3VzdFwiO1xyXG4gICAgICAgICAgICBtb250aFs4XSA9IFwiU2VwdGVtYmVyXCI7XHJcbiAgICAgICAgICAgIG1vbnRoWzldID0gXCJPY3RvYmVyXCI7XHJcbiAgICAgICAgICAgIG1vbnRoWzEwXSA9IFwiTm92ZW1iZXJcIjtcclxuICAgICAgICAgICAgbW9udGhbMTFdID0gXCJEZWNlbWJlclwiO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoW2N1cnJlbnREYXRlLmdldE1vbnRoKCldO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gbW9udGhOYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoXCJ0b2tcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb1RvSG9tZSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IGFjdGlvbkJhckhpZGRlbjogXCJ0cnVlXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkRvY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiZy1kYXJrXCIsIGF0dHJzOiB7IHN0cmV0Y2hMYXN0Q2hpbGQ6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1kYXJrXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGRvY2s6IFwidG9wXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhciBwLTIwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCI3NSwqLDc1XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25Ub2RheS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub0hvbWUgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvbkNhbGVuZGFyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQmFsYW5jZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjAuMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0teS0zMCBtLXgtMjBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiKiwgKlwiLCByb3dzOiBcImF1dG8sIGF1dG9cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmRheSwgcm93OiBcIjBcIiwgY29sOiBcIjBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5IHNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLm1vbnRoICsgXCIgXCIgKyBfdm0uZGF0ZSArIFwiLCBcIiArIF92bS55ZWFyLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFyZ2UgdGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjVcIiwgcm93OiBcIjBcIiwgY29sOiBcIjFcIiwgY29sb3I6IFwiIzg5RDVFMlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgc21hbGwgdGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTWV0IHRvZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTMwIGJnLWRhcmtcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9nb3V0XCIsIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmxvZ291dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=