webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted() {
    // alert(this.id)
    // this.currentQuestion = items[currentQuestionIndex];
    this.loadQuiz(this.quizid);
  },

  props: ['quizid'],

  data() {
    return {
      currentQuestion: null,
      currentQuestionIndex: 0,
      items: [],
      processing: true
    };
  },

  methods: {
    loadQuiz(quizid) {
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Quizes/view/").concat(quizid),
        method: "GET"
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);
        /*if(response.statusCode == 200) {
            this.items = result.quiz.questions
        }*/
        // this.processing = false;
      }, e => {
        // this.processing = false;
        this.alert("Unfortunately we could not fetch the quiz.");
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFFQTs7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQU5BOztBQU9BLG1CQVBBOztBQVFBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDZCQUZBO0FBR0EsZUFIQTtBQUlBO0FBSkE7QUFNQSxHQWZBOztBQWdCQTtBQUVBO0FBQ0E7QUFDQSxpSEFEQTtBQUVBO0FBRkEsU0FHQSxJQUhBLENBR0E7QUFDQTtBQUVBO0FBRUE7OztBQUdBO0FBRUEsT0FiQSxFQWFBO0FBQ0E7QUFDQSxtQkFDQSw0Q0FEQTtBQUdBLE9BbEJBO0FBbUJBOztBQXRCQTtBQWhCQSxHIiwiZmlsZSI6ImJ1bmRsZS5jMmU0YzVjZjY5NGQ4ZTM0ZTFmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciA6dGl0bGU9XCInRm9ybSAnICsgcXVpemlkXCI+PC9BY3Rpb25CYXI+XHJcblxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGNsYXNzPVwiYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cImdoZ2hnaGdoZ2hnaGdoXCIvPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHYtaWY9XCIhcHJvY2Vzc2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIxMDAsKlwiIHJvd3M9XCIqXCIgIGNsYXNzPVwiYmctZGFya1wiIHYtZm9yPVwicXVlc3Rpb24gaW4gaXRlbXNcIiA6a2V5PVwicXVlc3Rpb24ucG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCAgY29sPVwiMVwiIDp0ZXh0PVwiKHF1ZXN0aW9uLnBvc2l0aW9uKSArICcuICcgKyBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbiAgICBpbXBvcnQge0JBU0VfQVBJfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuXHJcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQodGhpcy5pZClcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpdGVtc1tjdXJyZW50UXVlc3Rpb25JbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFF1aXoodGhpcy5xdWl6aWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFsncXVpemlkJ10sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIGxvYWRRdWl6KHF1aXppZCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYCR7QkFTRV9BUEl9UXVpemVzL3ZpZXcvJHtxdWl6aWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyppZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3VsdC5xdWl6LnF1ZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmZXRjaCB0aGUgcXVpei5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==