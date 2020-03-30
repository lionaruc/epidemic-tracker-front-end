webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    alert(this.id); // this.currentQuestion = items[currentQuestionIndex];
  },

  props: ['quizid'],

  data() {
    return {
      currentQuestion: null,
      currentQuestionIndex: 0,
      items: [{
        question: 'What is your name?',
        id: 1,
        type: 'open_text',
        ans: null
      }, {
        question: 'What is your age?',
        id: 2,
        type: 'number',
        opts: {
          max: 100,
          min: 12
        },
        ans: ''
      }, {
        question: 'What is a dog?',
        id: 3,
        type: 'multiple_choice',
        options: [{
          text: 'A pet',
          value: 'pet'
        }, {
          text: 'A wild animal',
          value: 'wild animal'
        }, {
          text: 'I do not know',
          value: 'does not know'
        }, {
          text: 'A wild animal',
          value: 'wild animal'
        }],
        ans: ''
      }, {
        question: 'What is your rate?',
        id: 4,
        type: 'number',
        opts: {
          max: 100,
          min: 12
        },
        ans: ''
      }],
      message: "You have successfully authenticated. This is where you build your core application functionality."
    };
  },

  methods: {
    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    goToPrevious() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex -= 1; // alert(this.currentQuestionIndex)
      }
    },

    goToNext() {
      if (this.currentQuestionIndex + 1 < this.items.length) {
        this.currentQuestionIndex += 1; // alert('ff')
      } // 

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
        [
          _c(
            "StackLayout",
            [
              _c(
                "StackLayout",
                {
                  staticClass: "question-item question-item-name",
                  attrs: { columns: "100,*", rows: "*" }
                },
                [
                  _c("Label", {
                    attrs: {
                      col: "1",
                      text:
                        _vm.currentQuestionIndex +
                        1 +
                        ". " +
                        _vm.items[_vm.currentQuestionIndex].question,
                      verticalAlignment: "left"
                    }
                  })
                ],
                1
              ),
              _c(
                "StackLayout",
                {
                  staticClass: "nav-btn",
                  attrs: { orientation: "horizontal" }
                },
                [
                  false
                    ? undefined
                    : _vm._e(),
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: "Go Back" },
                    on: { tap: _vm.goToPrevious }
                  }),
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20 primary",
                    attrs: { text: "Proceed" },
                    on: { tap: _vm.goToNext }
                  })
                ],
                1
              )
            ],
            1
          )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6Vmlldy52dWU/OTYxMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUVBO0FBRUE7QUFDQSxtQkFEQSxDQUVBO0FBQ0EsR0FMQTs7QUFNQSxtQkFOQTs7QUFPQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLGNBQ0E7QUFDQSxzQ0FEQTtBQUVBLGFBRkE7QUFHQSx5QkFIQTtBQUlBO0FBSkEsT0FEQSxFQU9BO0FBQ0EscUNBREE7QUFFQSxhQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxTQUpBO0FBUUE7QUFSQSxPQVBBLEVBaUJBO0FBQ0Esa0NBREE7QUFFQSxhQUZBO0FBR0EsK0JBSEE7QUFJQSxrQkFDQTtBQUNBLHVCQURBO0FBRUE7QUFGQSxTQURBLEVBS0E7QUFDQSwrQkFEQTtBQUVBO0FBRkEsU0FMQSxFQVNBO0FBQ0EsK0JBREE7QUFFQTtBQUZBLFNBVEEsRUFhQTtBQUNBLCtCQURBO0FBRUE7QUFGQSxTQWJBLENBSkE7QUFzQkE7QUF0QkEsT0FqQkEsRUF5Q0E7QUFDQSxzQ0FEQTtBQUVBLGFBRkE7QUFHQSxzQkFIQTtBQUlBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLFNBSkE7QUFRQTtBQVJBLE9BekNBLENBSEE7QUF1REE7QUF2REE7QUF5REEsR0FqRUE7O0FBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEtBTkE7O0FBT0E7QUFDQTtBQUNBLHVDQURBLENBRUE7QUFDQTtBQUNBLEtBWkE7O0FBYUE7QUFFQTtBQUNBLHVDQURBLENBRUE7QUFDQSxPQUxBLENBT0E7O0FBQ0E7O0FBckJBO0FBbEVBLEc7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsOEJBQThCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBc0IsU0FPRTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUMseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjYwNjNjYmZiOGRiMjhjNzFmZjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIDp0aXRsZT1cIidGb3JtICcgKyBxdWl6aWRcIj48L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFNjcm9sbFZpZXc+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cIjEwMCwqXCIgcm93cz1cIipcIiBjbGFzcz1cInF1ZXN0aW9uLWl0ZW0gcXVlc3Rpb24taXRlbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgIGNvbD1cIjFcIiA6dGV4dD1cIihjdXJyZW50UXVlc3Rpb25JbmRleCArIDEpICsgJy4gJyAraXRlbXNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwibmF2LWJ0blwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWlmPVwiZmFsc2VcIj4ge3tpdGVtcy5sZW5ndGh9fSAge3tjdXJyZW50UXVlc3Rpb25JbmRleH19PC9MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiR28gQmFja1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiAgQHRhcD1cImdvVG9QcmV2aW91c1wiPjwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJQcm9jZWVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCBwcmltYXJ5XCIgQHRhcD1cImdvVG9OZXh0XCI+PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcblxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5pZClcclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50UXVlc3Rpb24gPSBpdGVtc1tjdXJyZW50UXVlc3Rpb25JbmRleF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydxdWl6aWQnXSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHlvdXIgbmFtZT8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29wZW5fdGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuczogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogJ1doYXQgaXMgeW91ciBhZ2U/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogJ1doYXQgaXMgYSBkb2c/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtdWx0aXBsZV9jaG9pY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0EgcGV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3BldCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Egd2lsZCBhbmltYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnd2lsZCBhbmltYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdJIGRvIG5vdCBrbm93JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2RvZXMgbm90IGtub3cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdBIHdpbGQgYW5pbWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3dpbGQgYW5pbWFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSwgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnM6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB5b3VyIHJhdGU/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZC4gVGhpcyBpcyB3aGVyZSB5b3UgYnVpbGQgeW91ciBjb3JlIGFwcGxpY2F0aW9uIGZ1bmN0aW9uYWxpdHkuXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2VuZFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ29Ub1ByZXZpb3VzICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQodGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ29Ub05leHQgKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ICsgMSA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdmZicpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLm5hdi1idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MDtcclxufVxyXG4ucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMGJjZmY7XHJcbiAgICBib3JkZXItY29sb3I6IzMwYmNmZjtcclxufVxyXG4ucXVlc3Rpb24taWNvbntcclxuICAgIG1hcmdpbjogMztcclxufVxyXG4ucXVlc3Rpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiA5O1xyXG4gICAgICAgIGhlaWdodDogMzAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDUsIDEyO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNFOUY4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1ZXN0aW9uLWl0ZW0tbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyODtcclxuICAgICAgICBtYXJnaW46IDM7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhc3Npb24sIFBhc3Npb25PbmUsIFBhc3Npb25PbmUtUmVndWxhcjtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkZvcm0gXCIgKyBfdm0ucXVpemlkIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInF1ZXN0aW9uLWl0ZW0gcXVlc3Rpb24taXRlbS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcIjEwMCwqXCIsIHJvd3M6IFwiKlwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50UXVlc3Rpb25JbmRleCArXG4gICAgICAgICAgICAgICAgICAgICAgICAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXRlbXNbX3ZtLmN1cnJlbnRRdWVzdGlvbkluZGV4XS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1idG5cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pdGVtcy5sZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY3VycmVudFF1ZXN0aW9uSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkdvIEJhY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvUHJldmlvdXMgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjAgcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlByb2NlZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvTmV4dCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==