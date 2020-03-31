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
      quiz_name: 'loading',
      token: null
    };
  },

  methods: {
    submit() {
      var raw_data = JSON.stringify(this.items);
      console.log(raw_data);
      this.processing = true;
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: _common_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_API"] + "Quizes/submit_answers",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        },
        content: JSON.stringify({
          quiz_id: this.quizid,
          raw_quiz_data: raw_data
        })
      }).then(response => {
        var result = response.content.toJSON();
        this.processing = false;
        console.log(response);

        if (response.statusCode == 200) {
          this.completed = true;
        } else {
          this.alert("Unfortunately we could not save this data, try again.");
        }
      }, e => {
        this.processing = false;
        this.alert("Unfortunately we could not save this data, try again.");
      });
    },

    alert(message) {
      return alert({
        title: "Trace",
        okButtonText: "OK",
        message: message
      });
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
          this.quiz_name = result.quiz_name;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBBOztBQVFBLG1CQVJBOztBQVNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDZCQUZBO0FBR0EsZUFIQTtBQUlBLDRCQUNBLFdBREEsRUFFQSxTQUZBLEVBR0EsVUFIQSxFQUlBLFFBSkEsRUFLQSxhQUxBLENBSkE7QUFVQSxnQ0FWQTtBQVdBLHNCQVhBO0FBWUEsbUJBWkE7QUFhQSwwQkFiQTtBQWNBO0FBZEE7QUFnQkEsR0ExQkE7O0FBMkJBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBLGlHQURBO0FBRUEsc0JBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQSw4QkFEQTtBQUVBO0FBRkE7QUFKQSxTQVNBLElBVEEsQ0FTQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBQ0EsU0FIQSxNQUlBO0FBQ0EscUJBQ0EsdURBREE7QUFHQTtBQUVBLE9BekJBLEVBeUJBO0FBQ0E7QUFDQSxtQkFDQSx1REFEQTtBQUdBLE9BOUJBO0FBK0JBLEtBekNBOztBQTBDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEE7QUFLQSxLQWhEQTs7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSEFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUEsT0E3Q0EsRUE2Q0E7QUFDQTtBQUNBLG1CQUNBLDRDQURBO0FBR0EsT0FsREE7QUFtREE7O0FBdkdBO0FBM0JBLEciLCJmaWxlIjoiYnVuZGxlLjQ0NjBiOGFhOTRlNTlkNTQ0NDhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIDp0aXRsZT1cInF1aXpfbmFtZVwiPjwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8U2Nyb2xsVmlldyA+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgdi1pZj1cIiFwcm9jZXNzaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwicXVlc3Rpb24gaW4gaXRlbXNcIiA6a2V5PVwicXVlc3Rpb24ucG9zaXRpb25cIiAgc3R5bGU9XCJtYXJnaW46IDEzO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsICAgOnRleHQ9XCIocXVlc3Rpb24ucG9zdGlvbikgKyAnLiAnICsgcXVlc3Rpb24ucXVlc3Rpb25fdGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiBzdHlsZT1cIm1hcmdpbjogMzsgY29sb3I6IGJsYWNrO1wiICBjb2xvLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciA6aXRlbXM9XCJxdWVzdGlvbi5kaXNwbGF5X2Fuc3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJxdWVzdGlvbi5zZWxlY3RlZEluZGV4XCIgc3R5bGU9XCJtYXJnaW46IDVcIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiIEB0YXA9XCJzdWJtaXRcIj48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbiAgICBpbXBvcnQgUmFkRGF0YUZvcm0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWVcIjtcclxuICAgIFZ1ZS51c2UoUmFkRGF0YUZvcm0pO1xyXG5cclxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICAvLyBhbGVydCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGl0ZW1zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUXVpeih0aGlzLnF1aXppZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydxdWl6aWQnXSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBsaXN0UGlja2VyQ291bnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXN0cmFsaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJlbGdpdW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1bGdhcmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDYW5hZGFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN3aXR6ZXJsYW5kXCIsXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExpc3RQaWNrZXJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBxdWl6X2lkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcXVpel9uYW1lOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgc3VibWl0ICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYXdfZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhd19kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogQkFTRV9BUEkgKyBcIlF1aXplcy9zdWJtaXRfYW5zd2Vyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWl6X2lkOiB0aGlzLnF1aXppZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3X3F1aXpfZGF0YTogcmF3X2RhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRyYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRRdWl6KHF1aXppZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHIgPSBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYCR7QkFTRV9BUEl9UXVpemVzL3ZpZXcvJHtxdWl6aWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHFucyA9IHJlc3VsdC5xdWl6LnF1ZXN0aW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpfaWQgPSByZXN1bHQucXVpel9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpfbmFtZSA9IHJlc3VsdC5xdWl6X25hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPCBxbnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHFuc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zX2FycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfYW5zd2VycyA9IGN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8Y3VycmVudF9hbnN3ZXJzLmxlbmd0aDsgaisrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfYW5zID0gY3VycmVudF9hbnN3ZXJzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnNfYXJyYXkucHVzaChjdXJyZW50X2Fucy5hbnN3ZXJfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5kaXNwbGF5X2Fuc3dlcnMgPSBhbnNfYXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLnB1c2goY3VycmVudFF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcHJvY2Vzc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZldGNoIHRoZSBxdWl6LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbi5uYXYtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MDtcclxuICAgIG1hcmdpbi1yaWdodDogNTA7XHJcbn1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9