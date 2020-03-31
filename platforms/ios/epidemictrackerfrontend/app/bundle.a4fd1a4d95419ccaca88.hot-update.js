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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      completed: false,
      items: [],
      listPickerCountries: ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland"],
      selectedListPickerIndex: 0,
      percentage: 0,
      percentageDescription: '',
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
        console.log(result);

        if (response.statusCode == 200) {
          this.completed = true;
          this.percentage = 6 - result.percentage / 100 * 6;
          this.percentageDescription = result.quizLevel;
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
      _c("ActionBar", { attrs: { title: _vm.quiz_name } }),
      _c(
        "ScrollView",
        [
          !_vm.processing && !_vm.completed
            ? _c(
                "StackLayout",
                [
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
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: "Submit" },
                    on: { tap: _vm.submit }
                  })
                ],
                2
              )
            : _vm._e(),
          _vm.completed
            ? _c(
                "StackLayout",
                {
                  staticStyle: { height: "300", textAlign: "center" },
                  attrs: { orientation: "vertical" }
                },
                [
                  _c(
                    "RadRadialGauge",
                    { staticStyle: { height: "220" } },
                    [
                      _c(
                        "RadialScale",
                        {
                          directives: [
                            {
                              name: "tkRadialGaugeScales",
                              rawName: "v-tkRadialGaugeScales"
                            }
                          ],
                          attrs: { minimum: "0", maximum: "6", radius: "0.90" }
                        },
                        [
                          _c("ScaleStyle", {
                            directives: [
                              {
                                name: "tkRadialScaleStyle",
                                rawName: "v-tkRadialScaleStyle"
                              }
                            ],
                            attrs: {
                              majorTicksCount: "7",
                              minorTicksCount: "9",
                              lineThickness: "0",
                              labelsCount: "7",
                              ticksOffset: "0"
                            }
                          }),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "0",
                                maximum: "1.2",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#dddddd" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "1.2",
                                maximum: "2.4",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#9DCA56" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "2.4",
                                maximum: "3.6",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#F0C44D" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "3.6",
                                maximum: "4.8",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#E27633" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "4.8",
                                maximum: "6",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#A7010E" }
                              })
                            ],
                            1
                          ),
                          _c("RadialNeedle", {
                            directives: [
                              {
                                name: "tkRadialScaleIndicators",
                                rawName: "v-tkRadialScaleIndicators"
                              }
                            ],
                            attrs: { value: _vm.percentage }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("label", {
                    staticStyle: { width: "180", color: "black" },
                    attrs: { text: _vm.percentageDescription, textWrap: "true" }
                  })
                ],
                1
              )
            : _vm._e(),
          _c("ActivityIndicator", {
            attrs: { rowSpan: "3", busy: _vm.processing, color: "red" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6Vmlldy52dWU/OTYxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBBOztBQVFBLG1CQVJBOztBQVNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDZCQUZBO0FBR0Esc0JBSEE7QUFJQSxlQUpBO0FBS0EsNEJBQ0EsV0FEQSxFQUVBLFNBRkEsRUFHQSxVQUhBLEVBSUEsUUFKQSxFQUtBLGFBTEEsQ0FMQTtBQVdBLGdDQVhBO0FBWUEsbUJBWkE7QUFhQSwrQkFiQTtBQWNBLHNCQWRBO0FBZUEsbUJBZkE7QUFnQkEsMEJBaEJBO0FBaUJBO0FBakJBO0FBbUJBLEdBN0JBOztBQThCQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQSxpR0FEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQ0EsOEJBREE7QUFFQTtBQUZBO0FBSkEsU0FTQSxJQVRBLENBU0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQSxTQVBBLE1BUUE7QUFDQSxxQkFDQSx1REFEQTtBQUdBO0FBRUEsT0E3QkEsRUE2QkE7QUFDQTtBQUNBLG1CQUNBLHVEQURBO0FBR0EsT0FsQ0E7QUFtQ0EsS0E3Q0E7O0FBOENBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBLEtBcERBOztBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBLFNBSUEsSUFKQSxDQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQSxPQTdDQSxFQTZDQTtBQUNBO0FBQ0EsbUJBQ0EsNENBREE7QUFHQSxPQWxEQTtBQW1EQTs7QUEzR0E7QUE5QkEsRzs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyx1QkFBdUIsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUMsZUFBZSxFQUFFO0FBQy9FO0FBQ0E7QUFDQSx3Q0FBd0MsOEJBQThCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckUsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxnQkFBZ0IsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0JBQStCO0FBQ2pFLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5hNGZkMWE0ZDk1NDE5Y2NhY2E4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgPEFjdGlvbkJhciA6dGl0bGU9XCJxdWl6X25hbWVcIj48L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFNjcm9sbFZpZXcgPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHYtaWY9XCIhcHJvY2Vzc2luZyAmJiAhY29tcGxldGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwicXVlc3Rpb24gaW4gaXRlbXNcIiA6a2V5PVwicXVlc3Rpb24ucG9zaXRpb25cIiAgc3R5bGU9XCJtYXJnaW46IDEzO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsICAgOnRleHQ9XCIocXVlc3Rpb24ucG9zdGlvbikgKyAnLiAnICsgcXVlc3Rpb24ucXVlc3Rpb25fdGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cInRydWVcIiBzdHlsZT1cIm1hcmdpbjogMzsgY29sb3I6IGJsYWNrO1wiICBjb2xvLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cInF1ZXN0aW9uLmRpc3BsYXlfYW5zd2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInF1ZXN0aW9uLnNlbGVjdGVkSW5kZXhcIiBzdHlsZT1cIm1hcmdpbjogNVwiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiBAdGFwPVwic3VibWl0XCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDMwMDsgdGV4dC1hbGlnbjogY2VudGVyXCIgdi1pZj1cImNvbXBsZXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZFJhZGlhbEdhdWdlICBzdHlsZT1cImhlaWdodDogMjIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlhbFNjYWxlIHYtdGtSYWRpYWxHYXVnZVNjYWxlcyBtaW5pbXVtPVwiMFwiIG1heGltdW09XCI2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwiMC45MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2NhbGVTdHlsZSB2LXRrUmFkaWFsU2NhbGVTdHlsZSBtYWpvclRpY2tzQ291bnQ9XCI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja3NDb3VudD1cIjlcIiBsaW5lVGhpY2tuZXNzPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHNDb3VudD1cIjdcIiB0aWNrc09mZnNldD1cIjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsQmFySW5kaWNhdG9yIHYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIwXCIgbWF4aW11bT1cIjEuMlwiIGxvY2F0aW9uPVwiMC45N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNkZGRkZGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMS4yXCIgbWF4aW11bT1cIjIuNFwiIGxvY2F0aW9uPVwiMC45N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiM5RENBNTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMi40XCIgbWF4aW11bT1cIjMuNlwiIGxvY2F0aW9uPVwiMC45N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNGMEM0NERcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiMy42XCIgbWF4aW11bT1cIjQuOFwiIGxvY2F0aW9uPVwiMC45N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhckluZGljYXRvclN0eWxlIHYtdGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNFMjc2MzNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiNC44XCIgbWF4aW11bT1cIjZcIiBsb2NhdGlvbj1cIjAuOTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjQTcwMTBFXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxOZWVkbGUgdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicGVyY2VudGFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxTY2FsZT5cclxuICAgICAgICAgICAgICAgIDwvUmFkUmFkaWFsR2F1Z2U+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwicGVyY2VudGFnZURlc2NyaXB0aW9uXCIgc3R5bGU9XCIgd2lkdGg6IDE4MDsgY29sb3I6IGJsYWNrXCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxyXG5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiIGNvbG9yPVwicmVkXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcclxuICAgIGltcG9ydCBSYWREYXRhRm9ybSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL3Z1ZVwiO1xyXG4gICAgVnVlLnVzZShSYWREYXRhRm9ybSk7XHJcblxyXG4gICAgaW1wb3J0IHtCQVNFX0FQSX0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XHJcblxyXG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlZCAoKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHRoaXMuaWQpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gaXRlbXNbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRRdWl6KHRoaXMucXVpemlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ3F1aXppZCddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3Rpb25JbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBsaXN0UGlja2VyQ291bnRyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXN0cmFsaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJlbGdpdW1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1bGdhcmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDYW5hZGFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN3aXR6ZXJsYW5kXCIsXSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExpc3RQaWNrZXJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlRGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHF1aXpfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBxdWl6X25hbWU6ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBudWxsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgICAgICBzdWJtaXQgKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhd19kYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmF3X2RhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiUXVpemVzL3N1Ym1pdF9hbnN3ZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1aXpfaWQ6IHRoaXMucXVpemlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdfcXVpel9kYXRhOiByYXdfZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50YWdlID0gKDYgLSAocmVzdWx0LnBlcmNlbnRhZ2UgLyAxMDApICogNilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2VEZXNjcmlwdGlvbiA9IHJlc3VsdC5xdWl6TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRyYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRRdWl6KHF1aXppZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHIgPSBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYCR7QkFTRV9BUEl9UXVpemVzL3ZpZXcvJHtxdWl6aWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBbXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHFucyA9IHJlc3VsdC5xdWl6LnF1ZXN0aW9ucztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpfaWQgPSByZXN1bHQucXVpel9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aXpfbmFtZSA9IHJlc3VsdC5xdWl6X25hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPCBxbnMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRRdWVzdGlvbiA9IHFuc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zX2FycmF5ID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfYW5zd2VycyA9IGN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqPTA7IGo8Y3VycmVudF9hbnN3ZXJzLmxlbmd0aDsgaisrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRfYW5zID0gY3VycmVudF9hbnN3ZXJzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnNfYXJyYXkucHVzaChjdXJyZW50X2Fucy5hbnN3ZXJfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5kaXNwbGF5X2Fuc3dlcnMgPSBhbnNfYXJyYXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbi5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkLnB1c2goY3VycmVudFF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcHJvY2Vzc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZldGNoIHRoZSBxdWl6LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbi5uYXYtYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MDtcclxuICAgIG1hcmdpbi1yaWdodDogNTA7XHJcbn1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS5xdWl6X25hbWUgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgICFfdm0ucHJvY2Vzc2luZyAmJiAhX3ZtLmNvbXBsZXRlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24ocXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogcXVlc3Rpb24ucG9zaXRpb24sIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIxM1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjNcIiwgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbi5wb3N0aW9uICsgXCIuIFwiICsgcXVlc3Rpb24ucXVlc3Rpb25fdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbzogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGlzdFBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogcXVlc3Rpb24uZGlzcGxheV9hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHF1ZXN0aW9uLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRJbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmNvbXBsZXRlZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMwMFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiUmFkUmFkaWFsR2F1Z2VcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjIwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbFNjYWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsR2F1Z2VTY2FsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEdhdWdlU2NhbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1pbmltdW06IFwiMFwiLCBtYXhpbXVtOiBcIjZcIiwgcmFkaXVzOiBcIjAuOTBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNjYWxlU3R5bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsU2NhbGVTdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3JUaWNrc0NvdW50OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja3NDb3VudDogXCI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGhpY2tuZXNzOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsc0NvdW50OiBcIjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzT2Zmc2V0OiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmFkaWFsQmFySW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNkZGRkZGRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIxLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIyLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiM5RENBNTZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIyLjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCIzLjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNGMEM0NERcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCIzLjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiMC45N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkJhckluZGljYXRvclN0eWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxCYXJJbmRpY2F0b3JTdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsbENvbG9yOiBcIiNFMjc2MzNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlhbEJhckluZGljYXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bTogXCI0LjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIjAuOTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJCYXJJbmRpY2F0b3JTdHlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a1JhZGlhbEJhckluZGljYXRvclN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGxDb2xvcjogXCIjQTcwMTBFXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJSYWRpYWxOZWVkbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtSYWRpYWxTY2FsZUluZGljYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFsdWU6IF92bS5wZXJjZW50YWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE4MFwiLCBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5wZXJjZW50YWdlRGVzY3JpcHRpb24sIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCIzXCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nLCBjb2xvcjogXCJyZWRcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==