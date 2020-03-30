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
          this.items = result.quiz.questions;
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
        "ScrollView",
        { staticClass: "bg-dark" },
        [
          _c("Label", { attrs: { text: "ghghghghghghgh" } }),
          !_vm.processing
            ? _c(
                "StackLayout",
                _vm._l(_vm.items, function(question) {
                  return _c(
                    "StackLayout",
                    { key: question.position, staticStyle: { margin: "13" } },
                    [
                      _c("Label", {
                        staticStyle: { margin: "13" },
                        attrs: {
                          text:
                            question.postion + ". " + question.question_text,
                          textWrap: "true"
                        }
                      }),
                      _c(
                        "StackLayout",
                        [
                          _c("ListPicker", {
                            attrs: {
                              items: _vm.listPickerCountries,
                              selectedIndex: _vm.selectedListPickerIndex
                            },
                            on: {
                              selectedIndexChange: function($event) {
                                _vm.selectedListPickerIndex = $event.value
                              }
                            }
                          }),
                          _vm._l(question.answers, function(answer) {
                            return _c("Label", {
                              key: answer.order_id,
                              staticStyle: { margin: "23" },
                              attrs: {
                                text:
                                  answer.order_id + ". " + answer.answer_text,
                                textWrap: "true"
                              }
                            })
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                }),
                1
              )
            : _vm._e(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6Vmlldy52dWU/OTYxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FQQTs7QUFRQSxtQkFSQTs7QUFTQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLGVBSEE7QUFJQSw0QkFDQSxXQURBLEVBRUEsU0FGQSxFQUdBLFVBSEEsRUFJQSxRQUpBLEVBS0EsYUFMQSxDQUpBO0FBVUEsZ0NBVkE7QUFXQSxzQkFYQTtBQVlBO0FBWkE7QUFjQSxHQXhCQTs7QUF5QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBLFNBSUEsSUFKQSxDQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQSxPQWRBLEVBY0E7QUFDQTtBQUNBLG1CQUNBLDRDQURBO0FBR0EsT0FuQkE7QUFvQkE7O0FBekJBO0FBekJBLEc7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsOEJBQThCLEVBQUU7QUFDaEU7QUFDQTtBQUNBLFNBQVMseUJBQXlCO0FBQ2xDO0FBQ0EsdUJBQXVCLFNBQVMseUJBQXlCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUF1QyxlQUFlLEVBQUU7QUFDN0U7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuNDUzNmNhNjM2OGE4MmI3MWJhODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxBY3Rpb25CYXIgOnRpdGxlPVwiJ0Zvcm0gJyArIHF1aXppZFwiPjwvQWN0aW9uQmFyPlxyXG5cclxuICAgICAgICA8U2Nyb2xsVmlldyBjbGFzcz1cImJnLWRhcmtcIj5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJnaGdoZ2hnaGdoZ2hnaFwiLz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICB2LWlmPVwiIXByb2Nlc3NpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJxdWVzdGlvbiBpbiBpdGVtc1wiIDprZXk9XCJxdWVzdGlvbi5wb3NpdGlvblwiICBzdHlsZT1cIm1hcmdpbjogMTM7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgICA6dGV4dD1cIihxdWVzdGlvbi5wb3N0aW9uKSArICcuICcgKyBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIHN0eWxlPVwibWFyZ2luOiAxMztcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgOml0ZW1zPVwibGlzdFBpY2tlckNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkTGlzdFBpY2tlckluZGV4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHYtZm9yPVwiYW5zd2VyIGluIHF1ZXN0aW9uLmFuc3dlcnNcIiA6a2V5PVwiYW5zd2VyLm9yZGVyX2lkXCIgICA6dGV4dD1cIihhbnN3ZXIub3JkZXJfaWQpICsgJy4gJyArIGFuc3dlci5hbnN3ZXJfdGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiBzdHlsZT1cIm1hcmdpbjogMjM7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxyXG5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbiAgICBpbXBvcnQgUmFkRGF0YUZvcm0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS92dWVcIjtcclxuICAgIFZ1ZS51c2UoUmFkRGF0YUZvcm0pO1xyXG5cclxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICAgICAgICAvLyBhbGVydCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGl0ZW1zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUXVpeih0aGlzLnF1aXppZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydxdWl6aWQnXSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBsaXN0UGlja2VyQ291bnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXN0cmFsaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJlbGdpdW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1bGdhcmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDYW5hZGFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN3aXR6ZXJsYW5kXCIsXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExpc3RQaWNrZXJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cclxuICAgICAgICAgICAgbG9hZFF1aXoocXVpemlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkciA9IGAke0JBU0VfQVBJfVF1aXplcy92aWV3LyR7cXVpemlkfWBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHIpXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3VsdC5xdWl6LnF1ZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmV0Y2ggdGhlIHF1aXouXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLm5hdi1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MDtcclxufVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJGb3JtIFwiICsgX3ZtLnF1aXppZCB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJnLWRhcmtcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiZ2hnaGdoZ2hnaGdoZ2hcIiB9IH0pLFxuICAgICAgICAgICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogcXVlc3Rpb24ucG9zaXRpb24sIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIxM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjEzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24ucG9zdGlvbiArIFwiLiBcIiArIHF1ZXN0aW9uLnF1ZXN0aW9uX3RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmxpc3RQaWNrZXJDb3VudHJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBfdm0uc2VsZWN0ZWRMaXN0UGlja2VySW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkTGlzdFBpY2tlckluZGV4ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHF1ZXN0aW9uLmFuc3dlcnMsIGZ1bmN0aW9uKGFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYW5zd2VyLm9yZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjIzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyLm9yZGVyX2lkICsgXCIuIFwiICsgYW5zd2VyLmFuc3dlcl90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjNcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=