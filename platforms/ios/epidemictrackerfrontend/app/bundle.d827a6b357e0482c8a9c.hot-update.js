webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-gauge/vue");
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/Card.vue");
/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/TimeLine.vue");
/* harmony import */ var _ContactAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/ContactAdd.vue");
/* harmony import */ var _QuizView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/QuizView.vue");
/* harmony import */ var _ContactModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./components/ContactModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3___default.a);







var appSettings = __webpack_require__("tns-core-modules/application-settings");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Card: _Card__WEBPACK_IMPORTED_MODULE_5__["default"]
  },

  data() {
    return {
      processing: true,
      processingActivities: true,
      summary: null,
      contacts: [],
      token: null,
      userid: null,
      username: '',
      message: "Welcome",
      isPhone: null,
      webviewSrc: null
    };
  },

  created() {
    this.token = appSettings.getString("tok", null);
    this.webviewSrc = "https://imagemagikassets.s3.eu-central-1.amazonaws.com/maps_disp.html?key=".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["GKEY"], "&tok=").concat(this.token);
    this.userid = appSettings.getString("userid", null); // second parameter is default value

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
    this.loadSummary();
    this.loadContacts();
  },

  methods: {
    loadSummary() {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Users/user_summary/").concat(this.userid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          this.summary = result;
          this.percentage = 6 - this.summary.latest_score_numeric / 100 * 6;
          this.percentageDescription = this.summary.latest_score_title;
        }

        this.processing = false;
      }, e => {
        // this.processing = false;
        this.alert("Unfortunately we could not fetch your data.");
      });
    },

    loadContacts() {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Users/user_contacts/").concat(this.userid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          this.contacts = result.meetings;
        }

        this.processingActivities = false;
      }, e => {// this.processing = false;
      });
    },

    showModal() {
      this.$showModal(_ContactModal__WEBPACK_IMPORTED_MODULE_9__["default"]);
    },

    openContactForm() {
      this.$navigateTo(_ContactAdd__WEBPACK_IMPORTED_MODULE_7__["default"], {
        transition: {
          name: 'fade',
          duration: 1200,
          props: {
            nothing: new Date()
          }
        }
      });
    },

    openForm() {
      this.$navigateTo(_QuizView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        transition: {
          name: 'fade',
          duration: 1200
        },
        props: {
          quizid: this.summary.active_quiz_id
        }
      });
    },

    logout() {
      appSettings.remove("tok");
      appSettings.remove("username");
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clearHistory: true
      });
    },

    goToTimeline() {
      this.$navigateTo(_TimeLine__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0tBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBREEsR0FEQTs7QUFJQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxnQ0FGQTtBQUdBLG1CQUhBO0FBSUEsa0JBSkE7QUFLQSxpQkFMQTtBQU1BLGtCQU5BO0FBT0Esa0JBUEE7QUFRQSx3QkFSQTtBQVNBLG1CQVRBO0FBVUE7QUFWQTtBQVlBLEdBakJBOztBQWtCQTtBQUdBO0FBRUE7QUFFQSx3REFQQSxDQVFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxHQW5FQTs7QUFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBLFNBSUEsSUFKQSxDQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBRUEsT0FwQkEsRUFvQkE7QUFDQTtBQUNBLG1CQUNBLDZDQURBO0FBR0EsT0F6QkE7QUEwQkEsS0E5QkE7O0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxxQkFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEEsU0FJQSxJQUpBLENBSUE7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUVBLE9BaEJBLEVBZ0JBLE1BQ0E7QUFDQSxPQWxCQTtBQW1CQSxLQXJEQTs7QUFzREE7QUFDQTtBQUNBLEtBeERBOztBQXlEQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFEQTtBQVNBLEtBbkVBOztBQW9FQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBRkEsU0FEQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBU0EsS0E5RUE7O0FBK0VBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUdBLEtBeEZBOztBQXlGQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQTlGQTtBQXBFQSxHIiwiZmlsZSI6ImJ1bmRsZS5kODI3YTZiMzU3ZTA0ODJjOGE5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgPlxuXG4gICAgICAgICAgICA8VGFicyBoZWlnaHQ9XCIxMDAlXCIgdGFic1Bvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIiB2LWlmPVwiZmFsc2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vaG9tZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTZXR0aW5nc1wiIHYtaWY9XCJmYWxzZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZXR0aW5nc1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTZWFyY2hcIiB2LWlmPVwiZmFsc2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNlYXJjaFwiIHYtaWY9XCJmYWxzZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9icm93c2VcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHN0eWxlPVwiaGVpZ2h0OiAxMDAlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCAqXCIgcm93cz1cImF1dG8sIGF1dG9cIiB2LWlmPVwiIXByb2Nlc3NpbmdcIiBzdHlsZT1cImhlaWdodDogMjQlOyBwYWRkaW5nOiAyM1wiIGNsYXNzPVwiYmctZGFya1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRheVwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1vbnRoICsgJyAnICsgZGF0ZSArICcsICcgKyB5ZWFyXCIgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHkgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNDMkM4RTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInN1bW1hcnkubWVldGluZ3NfdG9kYXlcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwibGFyZ2UgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzg5RDVFMlwiICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiY29udGFjdHMgdG9kYXlcIiByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwic21hbGwgdGV4dC1yaWdodCBib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjODlENUUyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIHYtaWY9XCIhcHJvY2Vzc2luZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxNSU7IG1hcmdpbi1ib3R0b206IDIlXCIgIGNsYXNzPVwiYmctZGFya1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvcGVuQ29udGFjdEZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY29sb3I9XCIjQzJDOEU2XCIgc3R5bGU9XCIgbWFyZ2luLWxlZnQ6IDIzOyBtYXJnaW4tdG9wOiAxOyBtYXJnaW4tYm90dG9tOiAxXCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJBY3Rpdml0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvcGVuQ29udGFjdEZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIgY29sb3I9XCIjQzJDOEU2XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxOyBtYXJnaW4tbGVmdDogNTsgIG1hcmdpbi1ib3R0b206IDFcIj48L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIiB2LWlmPVwiIXByb2Nlc3NpbmdcIiBjbGFzcz1cImhvbWUtaGVpZ2h0LW1haW5cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOnRleHQ9XCJwZXJjZW50YWdlRGVzY3JpcHRpb25cIiBzdHlsZT1cIiB3aWR0aDogMTgwOyBjb2xvcjogYmxhY2tcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRSYWRpYWxHYXVnZSB2LWlmPVwidHJ1ZVwiIHN0eWxlPVwiaGVpZ2h0OiA2MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxTY2FsZSB2LXRrUmFkaWFsR2F1Z2VTY2FsZXMgbWluaW11bT1cIjBcIiBtYXhpbXVtPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwiMC45MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjYWxlU3R5bGUgdi10a1JhZGlhbFNjYWxlU3R5bGUgbWFqb3JUaWNrc0NvdW50PVwiN1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlub3JUaWNrc0NvdW50PVwiOVwiIGxpbmVUaGlja25lc3M9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNDb3VudD1cIjdcIiB0aWNrc09mZnNldD1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjBcIiBtYXhpbXVtPVwiMS4yXCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNkZGRkZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMS4yXCIgbWF4aW11bT1cIjIuNFwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiM5RENBNTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMi40XCIgbWF4aW11bT1cIjMuNlwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNGMEM0NERcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMy42XCIgbWF4aW11bT1cIjQuOFwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiI0UyNzYzM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCI0LjhcIiBtYXhpbXVtPVwiNlwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiI0E3MDEwRVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsTmVlZGxlIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicGVyY2VudGFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxTY2FsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9SYWRSYWRpYWxHYXVnZT5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTZWxmIENoZWNrIFF1aXpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9wZW5Gb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0MyQzhFNlwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD4gICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIHYtaWY9XCIhcHJvY2Vzc2luZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMjA7IHBhZGRpbmc6IDIzXCIgIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJBY3Rpdml0aWVzXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibW9udGggKyAnICcgKyBkYXRlICsgJywgJyArIHllYXJcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYm9keSBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0MyQzhFNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXcgdi1pZj1cIiFwcm9jZXNzaW5nQWN0aXZpdGllc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdi1mb3I9XCJjb250YWN0IGluIGNvbnRhY3RzXCIgOmtleT1cImNvbnRhY3QuZHRcIiA6c2NvcmU9XCJjb250YWN0LmNvbnRhY3RlZV9zY29yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID57e2NvbnRhY3QuZHR9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2NvbnRhY3QuY29udGFjdGVlX3Vzbn19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxvZ291dFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJsb2dvdXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXZWJWaWV3IGhlaWdodD1cIjEyMDBweFwiIDpzcmM9XCJ3ZWJ2aWV3U3JjXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuXG5cbiAgICBpbXBvcnQge0JBU0VfQVBJLCBHS0VZfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG4gICAgaW1wb3J0IFJhZFJhZGlhbEdhdWdlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvdnVlXCI7XG4gICAgVnVlLnVzZShSYWRSYWRpYWxHYXVnZSk7XG5cblxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuXG4gICAgaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuXG4gICAgaW1wb3J0IFRpbWVMaW5lIGZyb20gXCIuL1RpbWVMaW5lXCI7XG5cbiAgICBpbXBvcnQgQ29udGFjdEFkZCBmcm9tIFwiLi9Db250YWN0QWRkXCI7XG5cbiAgICBpbXBvcnQgUXVpelZpZXcgZnJvbSBcIi4vUXVpelZpZXdcIjtcblxuICAgIGltcG9ydCBDb250YWN0TW9kYWwgZnJvbSBcIi4vQ29udGFjdE1vZGFsXCI7XG5cbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIENhcmRcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nQWN0aXZpdGllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiBudWxsLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiBbXSxcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBXZWxjb21lYCxcbiAgICAgICAgICAgICAgICBpc1Bob25lOiBudWxsLFxuICAgICAgICAgICAgICAgIHdlYnZpZXdTcmM6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG5cblxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcblxuICAgICAgICAgICAgdGhpcy53ZWJ2aWV3U3JjID0gYGh0dHBzOi8vaW1hZ2VtYWdpa2Fzc2V0cy5zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9tYXBzX2Rpc3AuaHRtbD9rZXk9JHtHS0VZfSZ0b2s9JHt0aGlzLnRva2VufWBcblxuICAgICAgICAgICAgdGhpcy51c2VyaWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VyaWRcIiwgbnVsbCk7XG4gICAgICAgICAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIGlzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdXZWxjb21lJyArIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0dmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1sxXSA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNF0gPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgIHZhciBkYXlOYW1lID0gd2Vla2RheXNbZGF5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcblx0XHRcdHRoaXMueWVhciA9IHllYXI7XG5cbiAgICAgICAgICAgIHZhciBtb250aCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgICAgICAgICAgIG1vbnRoWzFdID0gXCJGZWJydWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMl0gPSBcIk1hcmNoXCI7XG4gICAgICAgICAgICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgICAgICAgICAgIG1vbnRoWzRdID0gXCJNYXlcIjtcbiAgICAgICAgICAgIG1vbnRoWzVdID0gXCJKdW5lXCI7XG4gICAgICAgICAgICBtb250aFs2XSA9IFwiSnVseVwiO1xuICAgICAgICAgICAgbW9udGhbN10gPSBcIkF1Z3VzdFwiO1xuICAgICAgICAgICAgbW9udGhbOF0gPSBcIlNlcHRlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzEwXSA9IFwiTm92ZW1iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzExXSA9IFwiRGVjZW1iZXJcIjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoW2N1cnJlbnREYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoTmFtZTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkU3VtbWFyeSgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGFjdHMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbG9hZFN1bW1hcnkgKCkge1xuICAgICAgICAgICAgICAgIHZhciBhZGRyID0gYCR7QkFTRV9BUEl9VXNlcnMvdXNlcl9zdW1tYXJ5LyR7dGhpcy51c2VyaWR9YFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYWRkcixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdW1tYXJ5ID0gcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gKDYgLSAodGhpcy5zdW1tYXJ5LmxhdGVzdF9zY29yZV9udW1lcmljIC8gMTAwKSAqIDYpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VEZXNjcmlwdGlvbiA9IHRoaXMuc3VtbWFyeS5sYXRlc3Rfc2NvcmVfdGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmZXRjaCB5b3VyIGRhdGEuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZENvbnRhY3RzICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWRkciA9IGAke0JBU0VfQVBJfVVzZXJzL3VzZXJfY29udGFjdHMvJHt0aGlzLnVzZXJpZH1gXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkcilcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhZGRyLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLCAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMudG9rZW59LFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3RzID0gcmVzdWx0Lm1lZXRpbmdzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmdBY3Rpdml0aWVzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoQ29udGFjdE1vZGFsKTtcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgb3BlbkNvbnRhY3RGb3JtICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENvbnRhY3RBZGQsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOidmYWRlJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RoaW5nOiBuZXcgRGF0ZSgpLCBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBvcGVuRm9ybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFF1aXpWaWV3LCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTonZmFkZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMjAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWl6aWQ6IHRoaXMuc3VtbWFyeS5hY3RpdmVfcXVpel9pZCwgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBsb2dvdXQoKSB7XG5cbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoXCJ0b2tcIik7XG5cbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoXCJ1c2VybmFtZVwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1RpbWVsaW5lKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhUaW1lTGluZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmhvbWUtaGVpZ2h0LW1haW4ge1xuICBoZWlnaHQ6IDYzJVxufVxuXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==