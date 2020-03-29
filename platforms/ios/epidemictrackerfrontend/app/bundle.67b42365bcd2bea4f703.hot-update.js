webpackHotUpdate("bundle",{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=template&id=b667aa70&":
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
    "StackLayout",
    { staticClass: "p-20", attrs: { backgroundColor: "white" } },
    [
      _c("Label", {
        staticClass: "h2 text-center",
        staticStyle: { color: "black" },
        attrs: { text: "Add a contact" }
      }),
      _c(
        "StackLayout",
        { staticClass: "modal-form" },
        [
          _c(
            "StackLayout",
            { staticClass: "modal-form-field" },
            [
              _c("TextField", {
                staticClass: "input",
                attrs: {
                  hint: "Phone eg. +254xx",
                  keyboardType: "phone",
                  autocorrect: "false",
                  autocapitalizationType: "none",
                  returnKeyType: "next",
                  text: _vm.phone
                },
                on: {
                  textChange: function($event) {
                    _vm.phone = $event.value
                  }
                }
              }),
              _c("StackLayout", { staticClass: "hr-dark" })
            ],
            1
          ),
          _c(
            "StackLayout",
            { staticClass: "modal-form-field" },
            [
              _c("Label", {
                staticStyle: { color: "black", marginBottom: "13px" },
                attrs: { text: "When did you meet them?" }
              }),
              _c("DatePicker", {
                staticClass: "date-picker",
                staticStyle: { height: "100", marginBottom: "23px" },
                attrs: {
                  year: _vm.currentYear,
                  month: _vm.currentMonth,
                  day: _vm.currentDay,
                  minDate: "1970-01-01"
                },
                on: {
                  dateChange: function($event) {
                    return _vm.dateChanged($event)
                  }
                }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            [
              _c("Label", {
                staticStyle: { color: "black", marginBottom: "13px" },
                attrs: { text: "Where did you meet them?" }
              }),
              _c("SearchBar", {
                staticStyle: { backgroundColor: "white" },
                attrs: { hint: "Type in a location", text: _vm.searchPhrase },
                on: { submit: _vm.searchSubmit, clear: _vm.onTextClear }
              }),
              _c("StackLayout", { staticClass: "hr-dark" }),
              !_vm.location && !_vm.textCleared
                ? _c(
                    "StackLayout",
                    { staticStyle: { height: "100", marginTop: "11px" } },
                    _vm._l(_vm.locations, function(location) {
                      return _c("Label", {
                        staticStyle: { color: "black", margin: "7" },
                        attrs: { text: location.description },
                        on: {
                          tap: function($event) {
                            return _vm.locationSelected(
                              location.place_id,
                              location.description
                            )
                          }
                        }
                      })
                    }),
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _c(
            "StackLayout",
            { staticClass: "modal-form-field" },
            [
              _vm.location
                ? _c("Label", {
                    staticStyle: {
                      color: "black",
                      marginBottom: "13px",
                      marginTop: "33px"
                    },
                    attrs: { text: "Location: " + _vm.location }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _c("ActivityIndicator", {
        attrs: { rowSpan: "3", busy: _vm.processing }
      }),
      _vm.phone && _vm.nick && _vm.location && _vm.chosenDate && !_vm.processing
        ? _c("Button", {
            staticClass: "btn btn-outline",
            attrs: { text: "Save Contact" },
            on: { tap: _vm.submitContact }
          })
        : _vm._e(),
      !_vm.chosenDate
        ? _c("Label", {
            staticStyle: { color: "red", margin: "13" },
            attrs: { text: "* Please pick a date" }
          })
        : _vm._e(),
      !_vm.phone
        ? _c("Label", {
            staticStyle: { color: "red", margin: "13" },
            attrs: { text: "* Please pick a phone number" }
          })
        : _vm._e(),
      _vm.error
        ? _c("Label", {
            staticStyle: { color: "red", margin: "13" },
            attrs: { text: "Sorry, request failed, try again" }
          })
        : _vm._e(),
      _c("Button", {
        staticClass: "btn btn-outline",
        attrs: { text: "Close Modal" },
        on: {
          tap: function($event) {
            return _vm.$modal.close()
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RNb2RhbC52dWU/ZTQ3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDhCQUE4QiwyQkFBMkIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0M7QUFDL0M7QUFDQTtBQUNBLDhCQUE4Qix1Q0FBdUM7QUFDckUsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLHNDQUFzQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pELHdCQUF3QixxREFBcUQ7QUFDN0UscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlLG1DQUFtQyxFQUFFO0FBQ3pFO0FBQ0E7QUFDQSxzQ0FBc0MsOEJBQThCO0FBQ3BFLGdDQUFnQyw2QkFBNkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2QkFBNkI7QUFDdkQsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkJBQTZCO0FBQ3ZELG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RCxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjY3YjQyMzY1YmNkMmJlYTRmNzAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInAtMjBcIiwgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJoMiB0ZXh0LWNlbnRlclwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQWRkIGEgY29udGFjdFwiIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtLWZpZWxkXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGhvbmUgZWcuICsyNTR4eFwiLFxuICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5waG9uZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucGhvbmUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItZGFya1wiIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5Cb3R0b206IFwiMTNweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiRGF0ZVBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwXCIsIG1hcmdpbkJvdHRvbTogXCIyM3B4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeWVhcjogX3ZtLmN1cnJlbnRZZWFyLFxuICAgICAgICAgICAgICAgICAgbW9udGg6IF92bS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgICAgICAgICBkYXk6IF92bS5jdXJyZW50RGF5LFxuICAgICAgICAgICAgICAgICAgbWluRGF0ZTogXCIxOTcwLTAxLTAxXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBkYXRlQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kYXRlQ2hhbmdlZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5Cb3R0b206IFwiMTNweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlNlYXJjaEJhclwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBoaW50OiBcIlR5cGUgaW4gYSBsb2NhdGlvblwiLCB0ZXh0OiBfdm0uc2VhcmNoUGhyYXNlIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc2VhcmNoU3VibWl0LCBjbGVhcjogX3ZtLm9uVGV4dENsZWFyIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSksXG4gICAgICAgICAgICAgICFfdm0ubG9jYXRpb24gJiYgIV92bS50ZXh0Q2xlYXJlZFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwXCIsIG1hcmdpblRvcDogXCIxMXB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxvY2F0aW9ucywgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW46IFwiN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvY2F0aW9uU2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wbGFjZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubG9jYXRpb25cbiAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMzNweFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9jYXRpb246IFwiICsgX3ZtLmxvY2F0aW9uIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCIzXCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLnBob25lICYmIF92bS5uaWNrICYmIF92bS5sb2NhdGlvbiAmJiBfdm0uY2hvc2VuRGF0ZSAmJiAhX3ZtLnByb2Nlc3NpbmdcbiAgICAgICAgPyBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2F2ZSBDb250YWN0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdENvbnRhY3QgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAhX3ZtLmNob3NlbkRhdGVcbiAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiMTNcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgIV92bS5waG9uZVxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCIxM1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5lcnJvclxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCIxM1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlIE1vZGFsXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kbW9kYWwuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=