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
/* harmony import */ var _QuizView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/QuizView.vue");
/* harmony import */ var _ContactModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/ContactModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      message: "Welcome"
    };
  },

  created() {
    this.token = appSettings.getString("tok", null);
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

    showModal() {
      this.$showModal(_ContactModal__WEBPACK_IMPORTED_MODULE_8__["default"]);
    },

    openForm() {
      this.$navigateTo(_QuizView__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      this.$backendService.logout();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7O0FBSUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsZ0NBRkE7QUFHQSxtQkFIQTtBQUlBLGtCQUpBO0FBS0EsaUJBTEE7QUFNQSxrQkFOQTtBQU9BLGtCQVBBO0FBUUE7QUFSQTtBQVVBLEdBZkE7O0FBaUJBO0FBRUE7QUFFQSx3REFKQSxDQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsR0E5REE7O0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUVBLE9BcEJBLEVBb0JBO0FBQ0E7QUFDQSxtQkFDQSw2Q0FEQTtBQUdBLE9BekJBO0FBMEJBLEtBOUJBOztBQStCQTtBQUNBO0FBQ0EsS0FqQ0E7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFGQSxTQURBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFTQSxLQTVDQTs7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBbERBOztBQW1EQTtBQUVBO0FBQ0E7QUFEQTtBQUlBOztBQXpEQTtBQS9EQSxHIiwiZmlsZSI6ImJ1bmRsZS5iMDkwNGQ5ODAxZmNlYzNhNzZmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlPlxuICAgICAgICA8QWN0aW9uQmFyICBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+PC9BY3Rpb25CYXI+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XCJ0cnVlXCIgPlxuXG4gICAgICAgICAgICA8VGFicyBoZWlnaHQ9XCIxMjAwXCIgdGFic1Bvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJIb21lXCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIiB2LWlmPVwiZmFsc2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vaG9tZVwiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTZXR0aW5nc1wiIHYtaWY9XCJmYWxzZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZXR0aW5nc1wiPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTZWFyY2hcIiB2LWlmPVwiZmFsc2VcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vc2VhcmNoXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIHYtaWY9XCIhcHJvY2Vzc2luZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMjA7IHBhZGRpbmc6IDIzXCIgIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGF5XCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibW9udGggKyAnICcgKyBkYXRlICsgJywgJyArIHllYXJcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYm9keSBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0MyQzhFNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3VtbWFyeS5tZWV0aW5nc190b2RheVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJsYXJnZSB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjODlENUUyXCIgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJjb250YWN0cyB0b2RheVwiIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJzbWFsbCB0ZXh0LXJpZ2h0IGJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqLCAqXCIgcm93cz1cImF1dG8sIGF1dG9cIiB2LWlmPVwiIXByb2Nlc3NpbmdcIiBzdHlsZT1cImhlaWdodDogMTIwOyBwYWRkaW5nOiAyM1wiICBjbGFzcz1cImJnLWRhcmtcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdGFwPVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNvbG9yPVwiI0MyQzhFNlwiIHN0eWxlPVwibWFyZ2luLXRvcDogMVwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWN0aXZpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdGFwPVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb3c9XCIxXCIgY29sPVwiMVwiIGNvbG9yPVwiI0MyQzhFNlwiIHN0eWxlPVwibWFyZ2luLXRvcDogMVwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHN0eWxlPVwiaGVpZ2h0OiAzODA7IHRleHQtYWxpZ246IGNlbnRlclwiIHYtaWY9XCIhcHJvY2Vzc2luZ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6dGV4dD1cInBlcmNlbnRhZ2VEZXNjcmlwdGlvblwiIHN0eWxlPVwiIHdpZHRoOiAxODA7IGNvbG9yOiBibGFja1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZFJhZGlhbEdhdWdlIHYtaWY9XCJ0cnVlXCIgc3R5bGU9XCJoZWlnaHQ6IDIyMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbFNjYWxlIHYtdGtSYWRpYWxHYXVnZVNjYWxlcyBtaW5pbXVtPVwiMFwiIG1heGltdW09XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCIwLjkwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2NhbGVTdHlsZSB2LXRrUmFkaWFsU2NhbGVTdHlsZSBtYWpvclRpY2tzQ291bnQ9XCI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5vclRpY2tzQ291bnQ9XCI5XCIgbGluZVRoaWNrbmVzcz1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc0NvdW50PVwiN1wiIHRpY2tzT2Zmc2V0PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMFwiIG1heGltdW09XCIxLjJcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiI2RkZGRkZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIxLjJcIiBtYXhpbXVtPVwiMi40XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiIzlEQ0E1NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIyLjRcIiBtYXhpbXVtPVwiMy42XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yPVwiI0YwQzQ0RFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIzLjZcIiBtYXhpbXVtPVwiNC44XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRTI3NjMzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjQuOFwiIG1heGltdW09XCI2XCIgbG9jYXRpb249XCIwLjk3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFySW5kaWNhdG9yU3R5bGUgdi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjQTcwMTBFXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxOZWVkbGUgdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJwZXJjZW50YWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbFNjYWxlPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZFJhZGlhbEdhdWdlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlNlbGYgQ2hlY2sgUXVpelwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAdGFwPVwib3BlbkZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQzJDOEU2XCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD4gICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIHYtaWY9XCIhcHJvY2Vzc2luZ1wiIHN0eWxlPVwiaGVpZ2h0OiAxMjA7IHBhZGRpbmc6IDIzXCIgIGNsYXNzPVwiYmctZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJBY3Rpdml0aWVzXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibW9udGggKyAnICcgKyBkYXRlICsgJywgJyArIHllYXJcIiByb3c9XCIxXCIgY29sPVwiMFwiIGNsYXNzPVwiYm9keSBzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI0MyQzhFNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbFZpZXc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5WdWUgaXMgdGhlIGJlc3Q8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5oaGg8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5oaGg8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5oaGg8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2VhcmNoIFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFicz5cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuXG5cbiAgICBpbXBvcnQge0JBU0VfQVBJfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG4gICAgaW1wb3J0IFJhZFJhZGlhbEdhdWdlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvdnVlXCI7XG4gICAgVnVlLnVzZShSYWRSYWRpYWxHYXVnZSk7XG5cblxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xuXG4gICAgaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuXG4gICAgaW1wb3J0IFRpbWVMaW5lIGZyb20gXCIuL1RpbWVMaW5lXCI7XG5cbiAgICBpbXBvcnQgUXVpelZpZXcgZnJvbSBcIi4vUXVpelZpZXdcIjtcblxuICAgIGltcG9ydCBDb250YWN0TW9kYWwgZnJvbSBcIi4vQ29udGFjdE1vZGFsXCI7XG5cbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBDYXJkXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0FjdGl2aXRpZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogbnVsbCxcbiAgICAgICAgICAgICAgICBjb250YWN0czogW10sXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgdXNlcmlkOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgV2VsY29tZWBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBjcmVhdGVkKCkge1xuXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xuXG4gICAgICAgICAgICB0aGlzLnVzZXJpZCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJpZFwiLCBudWxsKTtcbiAgICAgICAgICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgaXMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1dlbGNvbWUnICsgYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cdFx0XHR2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5cyA9IG5ldyBBcnJheSg3KTtcbiAgICAgICAgICAgIHdlZWtkYXlzWzBdID0gXCJTdW5kYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzFdID0gXCJNb25kYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzJdID0gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1szXSA9IFwiV2VkbmVzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s0XSA9IFwiVGh1cnNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzVdID0gXCJGcmlkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzZdID0gXCJTYXR1cmRheVwiO1xuICAgICAgICAgICAgdmFyIGRheU5hbWUgPSB3ZWVrZGF5c1tkYXldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRheSA9IGRheU5hbWU7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuXHRcdFx0dGhpcy55ZWFyID0geWVhcjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBtb250aFswXSA9IFwiSmFudWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMV0gPSBcIkZlYnJ1YXJ5XCI7XG4gICAgICAgICAgICBtb250aFsyXSA9IFwiTWFyY2hcIjtcbiAgICAgICAgICAgIG1vbnRoWzNdID0gXCJBcHJpbFwiO1xuICAgICAgICAgICAgbW9udGhbNF0gPSBcIk1heVwiO1xuICAgICAgICAgICAgbW9udGhbNV0gPSBcIkp1bmVcIjtcbiAgICAgICAgICAgIG1vbnRoWzZdID0gXCJKdWx5XCI7XG4gICAgICAgICAgICBtb250aFs3XSA9IFwiQXVndXN0XCI7XG4gICAgICAgICAgICBtb250aFs4XSA9IFwiU2VwdGVtYmVyXCI7XG4gICAgICAgICAgICBtb250aFs5XSA9IFwiT2N0b2JlclwiO1xuICAgICAgICAgICAgbW9udGhbMTBdID0gXCJOb3ZlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbMTFdID0gXCJEZWNlbWJlclwiO1xuXG4gICAgICAgICAgICB2YXIgbW9udGhOYW1lID0gbW9udGhbY3VycmVudERhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gbW9udGhOYW1lO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRTdW1tYXJ5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxvYWRTdW1tYXJ5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWRkciA9IGAke0JBU0VfQVBJfVVzZXJzL3VzZXJfc3VtbWFyeS8ke3RoaXMudXNlcmlkfWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxuICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGFkZHIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZSA9ICg2IC0gKHRoaXMuc3VtbWFyeS5sYXRlc3Rfc2NvcmVfbnVtZXJpYyAvIDEwMCkgKiA2KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlRGVzY3JpcHRpb24gPSB0aGlzLnN1bW1hcnkubGF0ZXN0X3Njb3JlX3RpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmV0Y2ggeW91ciBkYXRhLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb2RhbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoQ29udGFjdE1vZGFsKTtcbiAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBvcGVuRm9ybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFF1aXpWaWV3LCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTonZmFkZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMjAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWl6aWQ6IHRoaXMuc3VtbWFyeS5hY3RpdmVfcXVpel9pZCwgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnb1RvVGltZWxpbmUoKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFRpbWVMaW5lLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==