webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-dataform/vue");
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./common/constants.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2___default.a);


var appSettings = __webpack_require__("tns-core-modules/application-settings");


/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    // alert(this.id)
    // this.currentQuestion = items[currentQuestionIndex];
    this.token = appSettings.getString("tok", null);
    this.loadQuiz(this.quizid);
  },

  props: ['quizid'],

  data() {
    return {
      currentQuestion: null,
      currentQuestionIndex: 0,
      items: [],
      listPickerCountries: ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland"],
      selectedListPickerIndex: 0,
      processing: true,
      token: null
    };
  },

  methods: {
    loadQuiz(quizid) {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_API"], "Quizes/view/").concat(quizid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_API"], "Quizes/view/").concat(quizid),
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          var processed = [];
          var qns = result.quiz.questions;

          for (var i = 0; i < qns.length; i++) {
            var currentQuestion = qns[i];
            var ans_array = [];
            console.log(currentQuestion.answers);
            var current_answers = currentQuestion.answers;

            for (var j = 0; j < current_answers.length; j++) {
              var current_ans = current_answers[j];
              ans_array.push(current_ans.answer_text);
            }

            currentQuestion.display_answers = ans_array;
            currentQuestion.selectedIndex = 0;
            processed.push(currentQuestion);
          }

          this.items = qns;
        }

        this.processing = false;
      }, e => {
        // this.processing = false;
        this.alert("Unfortunately we could not fetch the quiz.");
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEE7O0FBUUEsbUJBUkE7O0FBU0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsNkJBRkE7QUFHQSxlQUhBO0FBSUEsNEJBQ0EsV0FEQSxFQUVBLFNBRkEsRUFHQSxVQUhBLEVBSUEsUUFKQSxFQUtBLGFBTEEsQ0FKQTtBQVVBLGdDQVZBO0FBV0Esc0JBWEE7QUFZQTtBQVpBO0FBY0EsR0F4QkE7O0FBeUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSEFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBLE9BM0NBLEVBMkNBO0FBQ0E7QUFDQSxtQkFDQSw0Q0FEQTtBQUdBLE9BaERBO0FBaURBOztBQXREQTtBQXpCQSxHIiwiZmlsZSI6ImJ1bmRsZS4wYjFkMTNmNWFiYzAwNjhjNTIxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciA6dGl0bGU9XCInRm9ybSAnICsgcXVpemlkXCI+PC9BY3Rpb25CYXI+XHJcblxyXG4gICAgICAgIDxTY3JvbGxWaWV3IGNsYXNzPVwiYmctZGFya1wiPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cImdoZ2hnaGdoZ2hnaGdoXCIvPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHYtaWY9XCIhcHJvY2Vzc2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInF1ZXN0aW9uIGluIGl0ZW1zXCIgOmtleT1cInF1ZXN0aW9uLnBvc2l0aW9uXCIgIHN0eWxlPVwibWFyZ2luOiAxMztcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCAgIDp0ZXh0PVwiKHF1ZXN0aW9uLnBvc3Rpb24pICsgJy4gJyArIHF1ZXN0aW9uLnF1ZXN0aW9uX3RleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgc3R5bGU9XCJtYXJnaW46IDEzO1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciA6aXRlbXM9XCJsaXN0UGlja2VyQ291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRMaXN0UGlja2VySW5kZXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1mb3I9XCJhbnN3ZXIgaW4gcXVlc3Rpb24uYW5zd2Vyc1wiIDprZXk9XCJhbnN3ZXIub3JkZXJfaWRcIiAgIDp0ZXh0PVwiKGFuc3dlci5vcmRlcl9pZCkgKyAnLiAnICsgYW5zd2VyLmFuc3dlcl90ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIHN0eWxlPVwibWFyZ2luOiAyMztcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxyXG5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcclxuICAgIGltcG9ydCBSYWREYXRhRm9ybSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL3Z1ZVwiO1xyXG4gICAgVnVlLnVzZShSYWREYXRhRm9ybSk7XHJcblxyXG4gICAgaW1wb3J0IHtCQVNFX0FQSX0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XHJcblxyXG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gaXRlbXNbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRRdWl6KHRoaXMucXVpemlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ3F1aXppZCddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25JbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgICAgIGxpc3RQaWNrZXJDb3VudHJpZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkF1c3RyYWxpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsZ2l1bVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQnVsZ2FyaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNhbmFkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3dpdHplcmxhbmRcIixdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGlzdFBpY2tlckluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBsb2FkUXVpeihxdWl6aWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRyID0gYCR7QkFTRV9BUEl9UXVpemVzL3ZpZXcvJHtxdWl6aWR9YFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkcilcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogIGAke0JBU0VfQVBJfVF1aXplcy92aWV3LyR7cXVpemlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLCAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMudG9rZW59LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxbnMgPSByZXN1bHQucXVpei5xdWVzdGlvbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPCBxbnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHFuc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zX2FycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFF1ZXN0aW9uLmFuc3dlcnMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50X2Fuc3dlcnMgPSBjdXJyZW50UXVlc3Rpb24uYW5zd2VycztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGN1cnJlbnRfYW5zd2Vycy5sZW5ndGg7IGorKyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50X2FucyA9IGN1cnJlbnRfYW5zd2Vyc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zX2FycmF5LnB1c2goY3VycmVudF9hbnMuYW5zd2VyX3RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzcGxheV9hbnN3ZXJzID0gYW5zX2FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZC5wdXNoKGN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHFucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmZXRjaCB0aGUgcXVpei5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==