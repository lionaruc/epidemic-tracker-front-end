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
      _c("Button", {
        staticClass: "btn btn-outline",
        attrs: {
          isEnabled:
            _vm.phone &&
            _vm.nick &&
            _vm.location &&
            _vm.chosenDate &&
            !_vm.processing,
          text: "Save Contact"
        },
        on: { tap: _vm.submitContact }
      }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RNb2RhbC52dWU/ZTQ3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDhCQUE4QiwyQkFBMkIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0M7QUFDL0M7QUFDQTtBQUNBLDhCQUE4Qix1Q0FBdUM7QUFDckUsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLHNDQUFzQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pELHdCQUF3QixxREFBcUQ7QUFDN0UscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZixpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlLG1DQUFtQyxFQUFFO0FBQ3pFO0FBQ0E7QUFDQSxzQ0FBc0MsOEJBQThCO0FBQ3BFLGdDQUFnQyw2QkFBNkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RCxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2QkFBNkI7QUFDdkQsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkJBQTZCO0FBQ3ZELG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMGIxMjAzMDkwNTdkMjUyZTFkOGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicC0yMFwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2VudGVyXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGQgYSBjb250YWN0XCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaGludDogXCJQaG9uZSBlZy4gKzI1NHh4XCIsXG4gICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnBob25lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5waG9uZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJEYXRlUGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBcIiwgbWFyZ2luQm90dG9tOiBcIjIzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB5ZWFyOiBfdm0uY3VycmVudFllYXIsXG4gICAgICAgICAgICAgICAgICBtb250aDogX3ZtLmN1cnJlbnRNb250aCxcbiAgICAgICAgICAgICAgICAgIGRheTogX3ZtLmN1cnJlbnREYXksXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlOiBcIjE5NzAtMDEtMDFcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGRhdGVDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRhdGVDaGFuZ2VkKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldoZXJlIGRpZCB5b3UgbWVldCB0aGVtP1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiU2VhcmNoQmFyXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiVHlwZSBpbiBhIGxvY2F0aW9uXCIsIHRleHQ6IF92bS5zZWFyY2hQaHJhc2UgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zZWFyY2hTdWJtaXQsIGNsZWFyOiBfdm0ub25UZXh0Q2xlYXIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KSxcbiAgICAgICAgICAgICAgIV92bS5sb2NhdGlvbiAmJiAhX3ZtLnRleHRDbGVhcmVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbjogXCI3XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb25TZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBsYWNlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5sb2NhdGlvblxuICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzM3B4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2NhdGlvbjogXCIgKyBfdm0ubG9jYXRpb24gfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjNcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlzRW5hYmxlZDpcbiAgICAgICAgICAgIF92bS5waG9uZSAmJlxuICAgICAgICAgICAgX3ZtLm5pY2sgJiZcbiAgICAgICAgICAgIF92bS5sb2NhdGlvbiAmJlxuICAgICAgICAgICAgX3ZtLmNob3NlbkRhdGUgJiZcbiAgICAgICAgICAgICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICB0ZXh0OiBcIlNhdmUgQ29udGFjdFwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdENvbnRhY3QgfVxuICAgICAgfSksXG4gICAgICAhX3ZtLmNob3NlbkRhdGVcbiAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiMTNcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgIV92bS5waG9uZVxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCIxM1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5lcnJvclxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCIxM1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlIE1vZGFsXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kbW9kYWwuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=