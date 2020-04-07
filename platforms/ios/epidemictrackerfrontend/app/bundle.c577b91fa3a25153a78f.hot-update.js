webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
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



var appSettings = __webpack_require__("tns-core-modules/application-settings");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      phone: null,
      processing: false,
      nick: 'nick',
      searchPhrase: '',
      suspicion: false,
      chosenDate: null,
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear(),
      prefix: '+254',
      prefixes: ["+254"],
      selectedIndex: 0,
      error: false,
      locations: [],
      location: null,
      locationId: null,
      textCleared: true,
      maxdate: '',
      fakeLocs: [{
        "description": "Ongata Rongai, Kenya",
        "place_id": "ChIJjU75UM8FLxgRqYz95laWwlE"
      }, {
        "description": "Loresho, Nairobi, Kenya",
        "place_id": "ChIJzajLka0ZLxgRjWv3e-VVAqY"
      }, {
        "description": "Mama Ngina Waterfront, Mama Ngina Drive, Mombasa, Kenya",
        "place_id": "ChIJmYbxMPUTQBgRqaZKpuRRk5Q"
      }, {
        "description": "Mama Ngina Street, Nairobi, Kenya",
        "place_id": "EiFNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWEiLiosChQKEgnZIBez1xAvGBEkIUs5hWHrEhIUChIJTQu5FNcQLxgRTCl8KZuPjfU"
      }],
      token: null
    };
  },

  methods: {
    dateChanged(arg) {
      console.log(arg.value); // var newDate = new Date(arg.value);

      this.chosenDate = arg.value;
    },

    onTextClear() {
      this.textCleared = true;
    },

    locationSelected(placeid, desc) {
      console.log('location selected:' + desc);
      this.location = desc;
      this.locationId = placeid;
    },

    submitContact() {
      this.processing = true;
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: _common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"] + "Users/contact_add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        },
        content: JSON.stringify({
          location: this.location,
          location_id: this.locationId,
          meeting_date: "".concat(this.chosenDate.getFullYear(), "-").concat(this.chosenDate.getMonth() + 1, "-").concat(this.chosenDate.getDate()),
          phone: this.prefix + this.phone,
          nick: this.nick
        })
      }).then(response => {
        var result = response.content.toJSON();
        this.processing = false;
        console.log(response);

        if (response.statusCode == 200) {
          this.$modal.close();
          this.error = false;
        } else {
          this.error = true;
        }
      }, e => {
        this.processing = false;
        this.alert("Unfortunately we could not save this data, try again.");
      });
    },

    searchSubmit(args) {
      this.processing = true;
      this.textCleared = false;
      this.location = null;
      var searchBar = args.object;
      var processedPhrase = searchBar.text.replace(' ', '+'); //this.locations = this.fakeLocs // result.predictions;

      this.processing = false;
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(processedPhrase, "&key=").concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["GKEY"]),
        method: "GET"
      }).then(response => {
        var result = response.content.toJSON();
        this.locations = result.predictions;
        this.processing = false;
      }, e => {
        this.processing = false;
        this.alert("Unfortunately we could not set up your search.");
      });
    }

  },

  created() {
    console.log('modal created');
    this.token = appSettings.getString("tok", null);
    var currentDate = new Date();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    this.maxdate = "".concat(year, "-").concat(month, "-").concat(day);
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=template&id=f5229908&":
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
      _c(
        "StackLayout",
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
              _c("Label", {
                staticStyle: { color: "black", marginBottom: "3px" },
                attrs: { text: "Who did you meet?" }
              }),
              _c(
                "StackLayout",
                { attrs: { orientation: "horizontal" } },
                [
                  _c("ListPicker", {
                    staticStyle: { margin: "5", width: "70", height: "60" },
                    attrs: {
                      items: _vm.prefixes,
                      selectedIndex: _vm.selectedIndex
                    },
                    on: {
                      selectedIndexChange: function($event) {
                        _vm.selectedIndex = $event.value
                      }
                    }
                  }),
                  _c("TextField", {
                    staticClass: "input",
                    staticStyle: { width: "180" },
                    attrs: {
                      hint: "7xxxxxxxx",
                      keyboardType: "phone",
                      autocorrect: "false",
                      autocapitalizationType: "none",
                      text: _vm.phone
                    },
                    on: {
                      textChange: function($event) {
                        _vm.phone = $event.value
                      }
                    }
                  })
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
                  }),
                  _c("StackLayout", { staticClass: "hr-dark" })
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
                    attrs: {
                      hint: "Type in a location",
                      text: _vm.searchPhrase
                    },
                    on: { submit: _vm.searchSubmit, clear: _vm.onTextClear }
                  }),
                  _c("StackLayout", { staticClass: "hr-dark" }),
                  !_vm.location && !_vm.textCleared
                    ? _c(
                        "StackLayout",
                        {
                          staticStyle: {
                            height: "100",
                            marginTop: "-37px",
                            backgroundColor: "#2C3251"
                          }
                        },
                        _vm._l(_vm.locations, function(location) {
                          return _c("Label", {
                            staticStyle: { color: "white", margin: "7" },
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
                        attrs: { text: "" + _vm.location, textWrap: "true" }
                      })
                    : _vm._e(),
                  _vm.location
                    ? _c("StackLayout", { staticClass: "hr-dark" })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _c("ActivityIndicator", {
            attrs: { rowSpan: "7", busy: _vm.processing }
          }),
          _vm.phone &&
          _vm.nick &&
          _vm.location &&
          _vm.chosenDate &&
          !_vm.processing
            ? _c("Button", {
                staticClass: "btn btn-outline",
                attrs: { text: "Save Contact" },
                on: { tap: _vm.submitContact }
              })
            : _vm._e(),
          !_vm.chosenDate
            ? _c("Label", {
                staticStyle: { color: "red", margin: "5" },
                attrs: { text: "* Please pick a date" }
              })
            : _vm._e(),
          !_vm.phone
            ? _c("Label", {
                staticStyle: { color: "red", margin: "5" },
                attrs: { text: "* Please pick a phone number" }
              })
            : _vm._e(),
          _vm.error
            ? _c("Label", {
                staticStyle: { color: "red", margin: "5" },
                attrs: { text: "Sorry, request failed, try again" }
              })
            : _vm._e()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RBZGQudnVlPzYwMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxvQkFWQTtBQVdBLGlCQUNBLE1BREEsQ0FYQTtBQWNBLHNCQWRBO0FBZUEsa0JBZkE7QUFnQkEsbUJBaEJBO0FBaUJBLG9CQWpCQTtBQWtCQSxzQkFsQkE7QUFtQkEsdUJBbkJBO0FBb0JBLGlCQXBCQTtBQXFCQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBLENBckJBO0FBdUNBO0FBdkNBO0FBeUNBLEdBM0NBOztBQTRDQTtBQUNBO0FBQ0EsNkJBREEsQ0FHQTs7QUFFQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBOztBQWdCQTtBQUVBO0FBRUE7QUFDQSw2RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQ0EsaUNBREE7QUFFQSxzQ0FGQTtBQUdBLG1KQUhBO0FBSUEseUNBSkE7QUFLQTtBQUxBO0FBSkEsU0FXQSxJQVhBLENBV0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FIQSxN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYzU3N2I5MWZhM2EyNTE1M2E3OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cblx0PFN0YWNrTGF5b3V0ID5cblxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMiB0ZXh0LWNlbnRlclwiIHRleHQ9XCJBZGQgYSBjb250YWN0XCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIi8+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuXHRcdCAgICA8TGFiZWwgdGV4dD1cIldobyBkaWQgeW91IG1lZXQ/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDNweDtcIi8+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cInByZWZpeGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSW5kZXhcIiBzdHlsZT1cIm1hcmdpbjo1OyB3aWR0aDogNzA7IGhlaWdodDogNjBcIi8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIjd4eHh4eHh4eFwiXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cInBob25lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCIgc3R5bGU9XCJ3aWR0aDogMTgwXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiBcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICA6bW9udGg9XCJjdXJyZW50TW9udGhcIiA6ZGF5PVwiY3VycmVudERheVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCIgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7bWFyZ2luLWJvdHRvbTogMjNweDtcIiBjbGFzcz1cImRhdGUtcGlja2VyXCIvPlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBoaW50PVwiVHlwZSBpbiBhIGxvY2F0aW9uXCIgOnRleHQ9XCJzZWFyY2hQaHJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzdWJtaXQ9XCJzZWFyY2hTdWJtaXRcIiBAY2xlYXI9XCJvblRleHRDbGVhclwiIHN0eWxlPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7IG1hcmdpbi10b3A6IC0zN3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzMjUxXCIgdi1pZj1cIiFsb2NhdGlvbiAmJiAhdGV4dENsZWFyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIiBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCIgc3R5bGU9XCJjb2xvcjogd2hpdGU7IG1hcmdpbjogNztcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCInJyArIGxvY2F0aW9uXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7IG1hcmdpbi10b3A6IDMzcHg7XCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB2LWlmPVwibG9jYXRpb25cIiBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCI3XCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cblxuICAgICAgICA8QnV0dG9uIHYtaWY9XCJwaG9uZSAmJiBuaWNrICYmIGxvY2F0aW9uICYmIGNob3NlbkRhdGUgJiYgIXByb2Nlc3NpbmdcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZVwiIHRleHQ9XCJTYXZlIENvbnRhY3RcIiBAdGFwPVwic3VibWl0Q29udGFjdFwiLz5cbiAgICAgICAgPExhYmVsIHYtaWY9XCIhY2hvc2VuRGF0ZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cblxuICAgICAgICA8TGFiZWwgdi1pZj1cIiFwaG9uZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgcGhvbmUgbnVtYmVyXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG4gICAgICAgIDxMYWJlbCB2LWlmPVwiZXJyb3JcIiB0ZXh0PVwiU29ycnksIHJlcXVlc3QgZmFpbGVkLCB0cnkgYWdhaW5cIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogNVwiPjwvTGFiZWw+XG5cblx0PC9TdGFja0xheW91dD5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuaW1wb3J0IHtCQVNFX0FQSSwgR0tFWX0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGhvbmU6IG51bGwsXG4gICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG5pY2s6ICduaWNrJyxcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZTogJycsXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxuICAgICAgICAgICAgY2hvc2VuRGF0ZTogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgICAgICAgICAgY3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIHByZWZpeDogJysyNTQnLFxuICAgICAgICAgICAgcHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIrMjU0XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2F0aW9uczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IG51bGwsXG4gICAgICAgICAgICB0ZXh0Q2xlYXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heGRhdGU6ICcnLFxuICAgICAgICAgICAgZmFrZUxvY3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmdhdGEgUm9uZ2FpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSmpVNzVVTThGTHhnUnFZejk1bGFXd2xFXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3Jlc2hvLCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSnphakxrYTBaTHhnUmpXdjNlLVZWQXFZXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFdhdGVyZnJvbnQsIE1hbWEgTmdpbmEgRHJpdmUsIE1vbWJhc2EsIEtlbnlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKbVlieE1QVVRRQmdScWFaS3B1UlJrNVFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgU3RyZWV0LCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiRWlGTllXMWhJRTVuYVc1aElGTjBjbVZsZEN3Z1RtRnBjbTlpYVN3Z1MyVnVlV0VpTGlvc0NoUUtFZ25aSUJlejF4QXZHQkVrSVVzNWhXSHJFaElVQ2hJSlRRdTVGTmNRTHhnUlRDbDhLWnVQamZVXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRva2VuOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRhdGVDaGFuZ2VkIChhcmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZy52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIHZhciBuZXdEYXRlID0gbmV3IERhdGUoYXJnLnZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5jaG9zZW5EYXRlID0gYXJnLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBvblRleHRDbGVhciAoKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvblNlbGVjdGVkIChwbGFjZWlkLCBkZXNjKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24gc2VsZWN0ZWQ6JyArIGRlc2MpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRlc2M7XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uSWQgPSBwbGFjZWlkO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRDb250YWN0ICgpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogQkFTRV9BUEkgKyBcIlVzZXJzL2NvbnRhY3RfYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLCAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMudG9rZW59LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0aGlzLmxvY2F0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nX2RhdGU6IGAke3RoaXMuY2hvc2VuRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3RoaXMuY2hvc2VuRGF0ZS5nZXRNb250aCgpICsgMX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0RGF0ZSgpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5wcmVmaXggKyB0aGlzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmljazogdGhpcy5uaWNrXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2F2ZSB0aGlzIGRhdGEsIHRyeSBhZ2Fpbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoU3VibWl0IChhcmdzKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgc2VhcmNoQmFyID0gYXJncy5vYmplY3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFBocmFzZSA9IHNlYXJjaEJhci50ZXh0LnJlcGxhY2UoJyAnLCAnKycpXG4gICAgICAgICAgICAvL3RoaXMubG9jYXRpb25zID0gdGhpcy5mYWtlTG9jcyAvLyByZXN1bHQucHJlZGljdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2lucHV0PSR7cHJvY2Vzc2VkUGhyYXNlfSZrZXk9JHtHS0VZfWAsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3VsdC5wcmVkaWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzZXQgdXAgeW91ciBzZWFyY2guXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbCBjcmVhdGVkJyk7XG5cbiAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcblxuICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHZhciBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWF4ZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5kYXRlLXBpY2tlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMiB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGQgYSBjb250YWN0XCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjNweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaG8gZGlkIHlvdSBtZWV0P1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMaXN0UGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjVcIiwgd2lkdGg6IFwiNzBcIiwgaGVpZ2h0OiBcIjYwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnByZWZpeGVzLFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRJbmRleCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE4MFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCI3eHh4eHh4eHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5waG9uZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtLWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkRhdGVQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwXCIsIG1hcmdpbkJvdHRvbTogXCIyM3B4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBfdm0uY3VycmVudFllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgbW9udGg6IF92bS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgZGF5OiBfdm0uY3VycmVudERheSxcbiAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiBcIjE5NzAtMDEtMDFcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGVDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kYXRlQ2hhbmdlZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5Cb3R0b206IFwiMTNweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNlYXJjaEJhclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJUeXBlIGluIGEgbG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uc2VhcmNoUGhyYXNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnNlYXJjaFN1Ym1pdCwgY2xlYXI6IF92bS5vblRleHRDbGVhciB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmxvY2F0aW9uICYmICFfdm0udGV4dENsZWFyZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sb2NhdGlvbnMsIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW46IFwiN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2NhdGlvblNlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBsYWNlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMzNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiArIF92bS5sb2NhdGlvbiwgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiN1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLnBob25lICYmXG4gICAgICAgICAgX3ZtLm5pY2sgJiZcbiAgICAgICAgICBfdm0ubG9jYXRpb24gJiZcbiAgICAgICAgICBfdm0uY2hvc2VuRGF0ZSAmJlxuICAgICAgICAgICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgPyBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTYXZlIENvbnRhY3RcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdENvbnRhY3QgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAhX3ZtLmNob3NlbkRhdGVcbiAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBkYXRlXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAhX3ZtLnBob25lXG4gICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIqIFBsZWFzZSBwaWNrIGEgcGhvbmUgbnVtYmVyXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9