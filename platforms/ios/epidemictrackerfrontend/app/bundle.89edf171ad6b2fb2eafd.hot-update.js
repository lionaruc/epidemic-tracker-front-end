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

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=template&id=41aa09f5&":
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
      _c("ActionBar", { attrs: { title: "Form " + _vm.quizid } }),
      _c(
        "FlexBoxLayout",
        [
          !_vm.processing
            ? _c(
                "ScrollView",
                _vm._l(_vm.items, function(question) {
                  return _c(
                    "StackLayout",
                    { key: question.position, staticStyle: { margin: "13" } },
                    [
                      _c("Label", {
                        staticStyle: { margin: "3", color: "black" },
                        attrs: {
                          text:
                            question.postion + ". " + question.question_text,
                          textWrap: "true",
                          colo: ""
                        }
                      }),
                      _c("ListPicker", {
                        staticStyle: { margin: "5" },
                        attrs: {
                          items: question.display_answers,
                          selectedIndex: question.selectedIndex
                        },
                        on: {
                          selectedIndexChange: function($event) {
                            return _vm.$set(
                              question,
                              "selectedIndex",
                              $event.value
                            )
                          }
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            : _vm._e(),
          _c("Button", {
            staticClass: "btn btn-primary m-t-20",
            attrs: { text: "Submit", color: "red" }
          }),
          _c("ActivityIndicator", {
            attrs: { rowSpan: "3", busy: _vm.processing }
          })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6Vmlldy52dWU/OTYxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBBOztBQVFBLG1CQVJBOztBQVNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDZCQUZBO0FBR0EsZUFIQTtBQUlBLDRCQUNBLFdBREEsRUFFQSxTQUZBLEVBR0EsVUFIQSxFQUlBLFFBSkEsRUFLQSxhQUxBLENBSkE7QUFVQSxnQ0FWQTtBQVdBLHNCQVhBO0FBWUE7QUFaQTtBQWNBLEdBeEJBOztBQXlCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBREE7QUFFQSxxQkFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEEsU0FJQSxJQUpBLENBSUE7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFFQTs7QUFFQTtBQUVBO0FBRUEsK0JBSkEsQ0FNQTs7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUEsT0EzQ0EsRUEyQ0E7QUFDQTtBQUNBLG1CQUNBLDRDQURBO0FBR0EsT0FoREE7QUFpREE7O0FBdERBO0FBekJBLEc7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsOEJBQThCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUF1QyxlQUFlLEVBQUU7QUFDN0U7QUFDQTtBQUNBLHNDQUFzQyw4QkFBOEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuODllZGYxNzFhZDZiMmZiMmVhZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgOnRpdGxlPVwiJ0Zvcm0gJyArIHF1aXppZFwiPjwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8RmxleEJveExheW91dCA+XHJcbiAgICAgICAgICAgIDxTY3JvbGxWaWV3ICB2LWlmPVwiIXByb2Nlc3NpbmdcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cInF1ZXN0aW9uIGluIGl0ZW1zXCIgOmtleT1cInF1ZXN0aW9uLnBvc2l0aW9uXCIgIHN0eWxlPVwibWFyZ2luOiAxMztcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCAgIDp0ZXh0PVwiKHF1ZXN0aW9uLnBvc3Rpb24pICsgJy4gJyArIHF1ZXN0aW9uLnF1ZXN0aW9uX3RleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgc3R5bGU9XCJtYXJnaW46IDM7IGNvbG9yOiBibGFjaztcIiAgY29sby8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgOml0ZW1zPVwicXVlc3Rpb24uZGlzcGxheV9hbnN3ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicXVlc3Rpb24uc2VsZWN0ZWRJbmRleFwiIHN0eWxlPVwibWFyZ2luOiA1XCIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiBjb2xvcj1cInJlZFwiPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvRmxleEJveExheW91dD5cclxuXHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xyXG4gICAgaW1wb3J0IFJhZERhdGFGb3JtIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vdnVlXCI7XHJcbiAgICBWdWUudXNlKFJhZERhdGFGb3JtKTtcclxuXHJcbiAgICBpbXBvcnQge0JBU0VfQVBJfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuXHJcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgLy8gYWxlcnQodGhpcy5pZClcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpdGVtc1tjdXJyZW50UXVlc3Rpb25JbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tcIiwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFF1aXoodGhpcy5xdWl6aWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFsncXVpemlkJ10sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbGlzdFBpY2tlckNvdW50cmllczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXVzdHJhbGlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCZWxnaXVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCdWxnYXJpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2FuYWRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTd2l0emVybGFuZFwiLF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMaXN0UGlja2VySW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIGxvYWRRdWl6KHF1aXppZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHIgPSBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYCR7QkFTRV9BUEl9UXVpemVzL3ZpZXcvJHtxdWl6aWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHFucyA9IHJlc3VsdC5xdWl6LnF1ZXN0aW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8IHFucy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFF1ZXN0aW9uID0gcW5zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbnNfYXJyYXkgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3Rpb24uYW5zd2VycylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfYW5zd2VycyA9IGN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8Y3VycmVudF9hbnN3ZXJzLmxlbmd0aDsgaisrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfYW5zID0gY3VycmVudF9hbnN3ZXJzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnNfYXJyYXkucHVzaChjdXJyZW50X2Fucy5hbnN3ZXJfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5kaXNwbGF5X2Fuc3dlcnMgPSBhbnNfYXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLnB1c2goY3VycmVudFF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcHJvY2Vzc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZldGNoIHRoZSBxdWl6LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbi5uYXYtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MDtcclxuICAgIG1hcmdpbi1yaWdodDogNTA7XHJcbn1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiRm9ybSBcIiArIF92bS5xdWl6aWQgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhCb3hMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihxdWVzdGlvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBxdWVzdGlvbi5wb3NpdGlvbiwgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjEzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiM1wiLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLnBvc3Rpb24gKyBcIi4gXCIgKyBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG86IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHF1ZXN0aW9uLmRpc3BsYXlfYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogcXVlc3Rpb24uc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZEluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU3VibWl0XCIsIGNvbG9yOiBcInJlZFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiM1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==