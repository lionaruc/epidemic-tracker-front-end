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
      quiz_id: null,
      token: null
    };
  },

  methods: {
    submit() {
      console.log(JSON.stringify(this.items));
    },

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
          this.quiz_id = result.quiz_id;

          for (var i = 0; i < qns.length; i++) {
            var currentQuestion = qns[i];
            var ans_array = [];
            var current_answers = currentQuestion.answers;

            for (var j = 0; j < current_answers.length; j++) {
              var current_ans = current_answers[j];
              ans_array.push(current_ans.answer_text);
            }

            currentQuestion.display_answers = ans_array;
            currentQuestion.selectedIndex = 0;
            processed.push(currentQuestion);
          }

          this.items = processed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBBOztBQVFBLG1CQVJBOztBQVNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDZCQUZBO0FBR0EsZUFIQTtBQUlBLDRCQUNBLFdBREEsRUFFQSxTQUZBLEVBR0EsVUFIQSxFQUlBLFFBSkEsRUFLQSxhQUxBLENBSkE7QUFVQSxnQ0FWQTtBQVdBLHNCQVhBO0FBWUEsbUJBWkE7QUFhQTtBQWJBO0FBZUEsR0F6QkE7O0FBMEJBO0FBRUE7QUFDQTtBQUNBLEtBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSEFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBLE9BM0NBLEVBMkNBO0FBQ0E7QUFDQSxtQkFDQSw0Q0FEQTtBQUdBLE9BaERBO0FBaURBOztBQXpEQTtBQTFCQSxHIiwiZmlsZSI6ImJ1bmRsZS5hZTQzY2I5ODVjODJmNzkzYTdiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciA6dGl0bGU9XCInRm9ybSAnICsgcXVpemlkXCI+PC9BY3Rpb25CYXI+XHJcblxyXG4gICAgICAgIDxTY3JvbGxWaWV3ID5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICB2LWlmPVwiIXByb2Nlc3NpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJxdWVzdGlvbiBpbiBpdGVtc1wiIDprZXk9XCJxdWVzdGlvbi5wb3NpdGlvblwiICBzdHlsZT1cIm1hcmdpbjogMTM7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgICA6dGV4dD1cIihxdWVzdGlvbi5wb3N0aW9uKSArICcuICcgKyBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIHN0eWxlPVwibWFyZ2luOiAzOyBjb2xvcjogYmxhY2s7XCIgIGNvbG8vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cInF1ZXN0aW9uLmRpc3BsYXlfYW5zd2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInF1ZXN0aW9uLnNlbGVjdGVkSW5kZXhcIiBzdHlsZT1cIm1hcmdpbjogNVwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIgQHRhcD1cInN1Ym1pdFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcclxuICAgIGltcG9ydCBSYWREYXRhRm9ybSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL3Z1ZVwiO1xyXG4gICAgVnVlLnVzZShSYWREYXRhRm9ybSk7XHJcblxyXG4gICAgaW1wb3J0IHtCQVNFX0FQSX0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XHJcblxyXG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gaXRlbXNbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRRdWl6KHRoaXMucXVpemlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ3F1aXppZCddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25JbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgICAgIGxpc3RQaWNrZXJDb3VudHJpZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkF1c3RyYWxpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsZ2l1bVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQnVsZ2FyaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNhbmFkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3dpdHplcmxhbmRcIixdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGlzdFBpY2tlckluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHF1aXpfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgc3VibWl0ICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZFF1aXoocXVpemlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkciA9IGAke0JBU0VfQVBJfVF1aXplcy92aWV3LyR7cXVpemlkfWBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcW5zID0gcmVzdWx0LnF1aXoucXVlc3Rpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVpel9pZCA9IHJlc3VsdC5xdWl6X2lkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwgcW5zLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSBxbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc19hcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50X2Fuc3dlcnMgPSBjdXJyZW50UXVlc3Rpb24uYW5zd2VycztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGN1cnJlbnRfYW5zd2Vycy5sZW5ndGg7IGorKyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50X2FucyA9IGN1cnJlbnRfYW5zd2Vyc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zX2FycmF5LnB1c2goY3VycmVudF9hbnMuYW5zd2VyX3RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uZGlzcGxheV9hbnN3ZXJzID0gYW5zX2FycmF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24uc2VsZWN0ZWRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZC5wdXNoKGN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHByb2Nlc3NlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmZXRjaCB0aGUgcXVpei5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==