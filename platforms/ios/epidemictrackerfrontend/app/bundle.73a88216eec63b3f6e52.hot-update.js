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
            var ans_array = []; // console.log(currentQuestion.answers)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEE7O0FBUUEsbUJBUkE7O0FBU0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsNkJBRkE7QUFHQSxlQUhBO0FBSUEsNEJBQ0EsV0FEQSxFQUVBLFNBRkEsRUFHQSxVQUhBLEVBSUEsUUFKQSxFQUtBLGFBTEEsQ0FKQTtBQVVBLGdDQVZBO0FBV0Esc0JBWEE7QUFZQTtBQVpBO0FBY0EsR0F4QkE7O0FBeUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSEFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFFQSwrQkFKQSxDQU1BOztBQUVBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQSxPQTNDQSxFQTJDQTtBQUNBO0FBQ0EsbUJBQ0EsNENBREE7QUFHQSxPQWhEQTtBQWlEQTs7QUF0REE7QUF6QkEsRyIsImZpbGUiOiJidW5kbGUuNzNhODgyMTZlZWM2M2IzZjZlNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgOnRpdGxlPVwiJ0Zvcm0gJyArIHF1aXppZFwiPjwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8U2Nyb2xsVmlldyBjbGFzcz1cImJnLWRhcmtcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJnaGdoZ2hnaGdoZ2hnaFwiLz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICB2LWlmPVwiIXByb2Nlc3NpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJxdWVzdGlvbiBpbiBpdGVtc1wiIDprZXk9XCJxdWVzdGlvbi5wb3NpdGlvblwiICBzdHlsZT1cIm1hcmdpbjogMTM7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgICA6dGV4dD1cIihxdWVzdGlvbi5wb3N0aW9uKSArICcuICcgKyBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIHN0eWxlPVwibWFyZ2luOiAxMztcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgOml0ZW1zPVwibGlzdFBpY2tlckNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkTGlzdFBpY2tlckluZGV4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHYtZm9yPVwiYW5zd2VyIGluIHF1ZXN0aW9uLmFuc3dlcnNcIiA6a2V5PVwiYW5zd2VyLm9yZGVyX2lkXCIgICA6dGV4dD1cIihhbnN3ZXIub3JkZXJfaWQpICsgJy4gJyArIGFuc3dlci5hbnN3ZXJfdGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiBzdHlsZT1cIm1hcmdpbjogMjM7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbiAgICBpbXBvcnQgUmFkRGF0YUZvcm0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWVcIjtcclxuICAgIFZ1ZS51c2UoUmFkRGF0YUZvcm0pO1xyXG5cclxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICAvLyBhbGVydCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGl0ZW1zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUXVpeih0aGlzLnF1aXppZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydxdWl6aWQnXSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBsaXN0UGlja2VyQ291bnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXN0cmFsaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJlbGdpdW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1bGdhcmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDYW5hZGFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN3aXR6ZXJsYW5kXCIsXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExpc3RQaWNrZXJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgbG9hZFF1aXoocXVpemlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkciA9IGAke0JBU0VfQVBJfVF1aXplcy92aWV3LyR7cXVpemlkfWBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcW5zID0gcmVzdWx0LnF1aXoucXVlc3Rpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwgcW5zLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UXVlc3Rpb24gPSBxbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc19hcnJheSA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudF9hbnN3ZXJzID0gY3VycmVudFF1ZXN0aW9uLmFuc3dlcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxjdXJyZW50X2Fuc3dlcnMubGVuZ3RoOyBqKysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudF9hbnMgPSBjdXJyZW50X2Fuc3dlcnNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc19hcnJheS5wdXNoKGN1cnJlbnRfYW5zLmFuc3dlcl90ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLmRpc3BsYXlfYW5zd2VycyA9IGFuc19hcnJheTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uLnNlbGVjdGVkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWQucHVzaChjdXJyZW50UXVlc3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBxbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmV0Y2ggdGhlIHF1aXouXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLm5hdi1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MDtcclxufVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=