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

  onLoaded(args) {
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
    { on: { loaded: _vm.onLoaded } },
    [
      _c("ActionBar", { attrs: { title: "Add Contact" } }),
      _c(
        "StackLayout",
        { staticStyle: { margin: "13" } },
        [
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
                staticClass: "btn btn-primary m-t-20",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RBZGQudnVlPzYwMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxvQkFWQTtBQVdBLGlCQUNBLE1BREEsQ0FYQTtBQWNBLHNCQWRBO0FBZUEsa0JBZkE7QUFnQkEsbUJBaEJBO0FBaUJBLG9CQWpCQTtBQWtCQSxzQkFsQkE7QUFtQkEsdUJBbkJBO0FBb0JBLGlCQXBCQTtBQXFCQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBLENBckJBO0FBdUNBO0FBdkNBO0FBeUNBLEdBM0NBOztBQTRDQTtBQUNBO0FBQ0EsNkJBREEsQ0FHQTs7QUFFQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBOztBQWdCQTtBQUVBO0FBRUE7QUFDQSw2RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQ0EsaUNBREE7QUFFQSxzQ0FGQTtBQUdBLG1KQUhBO0FBSUEseUNBSkE7QUFLQTtBQUxBO0FBSkEsU0FXQSxJQVhBLENBV0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUlBO0FBQ0E7QUFDQTtBQUVBLE9BekJBLEVBeUJBO0FBQ0E7QUFDQSxtQkFDQSx1REFEQTtBQUdBLE9BOUJBO0FBK0JBLEtBbkRBOztBQW9EQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUEsNkRBVEEsQ0FVQTs7QUFDQTtBQUNBO0FBQ0Esa0xBREE7QUFFQTtBQUZBLFNBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsT0FSQSxFQVFBO0FBQ0E7QUFDQSxtQkFDQSxnREFEQTtBQUdBLE9BYkE7QUFjQTs7QUE5RUEsR0E1Q0E7O0FBNkhBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUF4SUEsRzs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxNQUFNLHVCQUF1QixFQUFFO0FBQ3BDO0FBQ0EsdUJBQXVCLFNBQVMsdUJBQXVCLEVBQUU7QUFDekQ7QUFDQTtBQUNBLFNBQVMsZUFBZSxlQUFlLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0QkFBNEI7QUFDekM7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7QUFDcEUsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsNEJBQTRCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBLGtDQUFrQyx5Q0FBeUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25EO0FBQ0E7QUFDQSxrQ0FBa0MsdUNBQXVDO0FBQ3pFLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtDQUFrQyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLHFDQUFxQyx5QkFBeUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsdUNBQXVDO0FBQ3pFLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixxQ0FBcUMseUJBQXlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsMENBQTBDLDhCQUE4QjtBQUN4RSxvQ0FBb0MsNkJBQTZCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjcxZTI1Zjg3MTc1NzQ3NWI2NjEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgQGxvYWRlZD1cIm9uTG9hZGVkXCI+XG5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkFkZCBDb250YWN0XCI+PC9BY3Rpb25CYXI+XG5cdCAgICBcbiAgICAgICAgPFN0YWNrTGF5b3V0IHN0eWxlPVwibWFyZ2luOiAxM1wiPlxuXG4gICAgICAgIFxuXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cblx0XHQgICAgPExhYmVsIHRleHQ9XCJXaG8gZGlkIHlvdSBtZWV0P1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAzcHg7XCIvPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciA6aXRlbXM9XCJwcmVmaXhlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZEluZGV4XCIgc3R5bGU9XCJtYXJnaW46NTsgd2lkdGg6IDcwOyBoZWlnaHQ6IDYwXCIvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCI3eHh4eHh4eHhcIlxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwaG9uZVwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJwaG9uZVwiIHN0eWxlPVwid2lkdGg6IDE4MFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciA6eWVhcj1cImN1cnJlbnRZZWFyXCIgQGRhdGVDaGFuZ2U9XCJkYXRlQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgOm1vbnRoPVwiY3VycmVudE1vbnRoXCIgOmRheT1cImN1cnJlbnREYXlcIlxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPVwiMTk3MC0wMS0wMVwiICBzdHlsZT1cImhlaWdodDogMTAwO21hcmdpbi1ib3R0b206IDIzcHg7XCIgY2xhc3M9XCJkYXRlLXBpY2tlclwiLz5cblxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZXJlIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgaGludD1cIlR5cGUgaW4gYSBsb2NhdGlvblwiIDp0ZXh0PVwic2VhcmNoUGhyYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3VibWl0PVwic2VhcmNoU3VibWl0XCIgQGNsZWFyPVwib25UZXh0Q2xlYXJcIiBzdHlsZT1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBzdHlsZT1cImhlaWdodDogMTAwOyBtYXJnaW4tdG9wOiAtMzdweDsgYmFja2dyb3VuZC1jb2xvcjogIzJDMzI1MVwiIHYtaWY9XCIhbG9jYXRpb24gJiYgIXRleHRDbGVhcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1mb3I9XCJsb2NhdGlvbiBpbiBsb2NhdGlvbnNcIiA6dGV4dD1cImxvY2F0aW9uLmRlc2NyaXB0aW9uXCIgQHRhcD1cImxvY2F0aW9uU2VsZWN0ZWQobG9jYXRpb24ucGxhY2VfaWQsIGxvY2F0aW9uLmRlc2NyaXB0aW9uKVwiIHN0eWxlPVwiY29sb3I6IHdoaXRlOyBtYXJnaW46IDc7XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHYtaWY9XCJsb2NhdGlvblwiIDp0ZXh0PVwiJycgKyBsb2NhdGlvblwiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4OyBtYXJnaW4tdG9wOiAzM3B4O1wiIHRleHRXcmFwPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgdi1pZj1cImxvY2F0aW9uXCIgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiN1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG5cbiAgICAgICAgPEJ1dHRvbiB2LWlmPVwicGhvbmUgJiYgbmljayAmJiBsb2NhdGlvbiAmJiBjaG9zZW5EYXRlICYmICFwcm9jZXNzaW5nXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIgdGV4dD1cIlNhdmUgQ29udGFjdFwiIEB0YXA9XCJzdWJtaXRDb250YWN0XCIvPlxuICAgICAgICA8TGFiZWwgdi1pZj1cIiFjaG9zZW5EYXRlXCIgdGV4dD1cIiogUGxlYXNlIHBpY2sgYSBkYXRlXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG4gICAgICAgIDxMYWJlbCB2LWlmPVwiIXBob25lXCIgdGV4dD1cIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogNVwiPjwvTGFiZWw+XG5cbiAgICAgICAgPExhYmVsIHYtaWY9XCJlcnJvclwiIHRleHQ9XCJTb3JyeSwgcmVxdWVzdCBmYWlsZWQsIHRyeSBhZ2FpblwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cblxuXHQ8L1N0YWNrTGF5b3V0PlxuXG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5pbXBvcnQge0JBU0VfQVBJLCBHS0VZfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwaG9uZTogbnVsbCxcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgbmljazogJ25pY2snLFxuICAgICAgICAgICAgc2VhcmNoUGhyYXNlOiAnJyxcbiAgICAgICAgICAgIHN1c3BpY2lvbjogZmFsc2UsXG4gICAgICAgICAgICBjaG9zZW5EYXRlOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudERheTogbmV3IERhdGUoKS5nZXRVVENEYXRlKCksXG4gICAgICAgICAgICBjdXJyZW50TW9udGg6IG5ldyBEYXRlKCkuZ2V0VVRDTW9udGgoKSArIDEsXG4gICAgICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgICAgcHJlZml4OiAnKzI1NCcsXG4gICAgICAgICAgICBwcmVmaXhlczogW1xuICAgICAgICAgICAgICAgICAgICBcIisyNTRcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgICAgICAgbG9jYXRpb25JZDogbnVsbCxcbiAgICAgICAgICAgIHRleHRDbGVhcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWF4ZGF0ZTogJycsXG4gICAgICAgICAgICBmYWtlTG9jczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9uZ2F0YSBSb25nYWksIEtlbnlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKalU3NVVNOEZMeGdScVl6OTVsYVd3bEVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVzaG8sIE5haXJvYmksIEtlbnlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKemFqTGthMFpMeGdSald2M2UtVlZBcVlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgV2F0ZXJmcm9udCwgTWFtYSBOZ2luYSBEcml2ZSwgTW9tYmFzYSwgS2VueWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUptWWJ4TVBVVFFCZ1JxYVpLcHVSUms1UVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFtYSBOZ2luYSBTdHJlZXQsIE5haXJvYmksIEtlbnlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJFaUZOWVcxaElFNW5hVzVoSUZOMGNtVmxkQ3dnVG1GcGNtOWlhU3dnUzJWdWVXRWlMaW9zQ2hRS0VnblpJQmV6MXhBdkdCRWtJVXM1aFdIckVoSVVDaElKVFF1NUZOY1FMeGdSVENsOEtadVBqZlVcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9rZW46IG51bGxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZGF0ZUNoYW5nZWQgKGFyZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShhcmcudmFsdWUpO1xuXG4gICAgICAgICAgICB0aGlzLmNob3NlbkRhdGUgPSBhcmcudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVGV4dENsZWFyICgpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2F0aW9uU2VsZWN0ZWQgKHBsYWNlaWQsIGRlc2MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGlvbiBzZWxlY3RlZDonICsgZGVzYyk7XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gZGVzYztcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25JZCA9IHBsYWNlaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdENvbnRhY3QgKCkge1xuXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiVXNlcnMvY29udGFjdF9hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHRoaXMubG9jYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdfZGF0ZTogYCR7dGhpcy5jaG9zZW5EYXRlLmdldEZ1bGxZZWFyKCl9LSR7dGhpcy5jaG9zZW5EYXRlLmdldE1vbnRoKCkgKyAxfS0ke3RoaXMuY2hvc2VuRGF0ZS5nZXREYXRlKCl9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLnByZWZpeCArIHRoaXMucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrOiB0aGlzLm5pY2tcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzYXZlIHRoaXMgZGF0YSwgdHJ5IGFnYWluLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hTdWJtaXQgKGFyZ3MpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCBzZWFyY2hCYXIgPSBhcmdzLm9iamVjdDtcblxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUGhyYXNlID0gc2VhcmNoQmFyLnRleHQucmVwbGFjZSgnICcsICcrJylcbiAgICAgICAgICAgIC8vdGhpcy5sb2NhdGlvbnMgPSB0aGlzLmZha2VMb2NzIC8vIHJlc3VsdC5wcmVkaWN0aW9ucztcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24/aW5wdXQ9JHtwcm9jZXNzZWRQaHJhc2V9JmtleT0ke0dLRVl9YCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gcmVzdWx0LnByZWRpY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNldCB1cCB5b3VyIHNlYXJjaC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgb25Mb2FkZWQoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwgY3JlYXRlZCcpO1xuXG4gICAgICAgIHRoaXMudG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tcIiwgbnVsbCk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgICAgICB2YXIgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1heGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uZGF0ZS1waWNrZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBvbjogeyBsb2FkZWQ6IF92bS5vbkxvYWRlZCB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBZGQgQ29udGFjdFwiIH0gfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIxM1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjNweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaG8gZGlkIHlvdSBtZWV0P1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMaXN0UGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjVcIiwgd2lkdGg6IFwiNzBcIiwgaGVpZ2h0OiBcIjYwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnByZWZpeGVzLFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IF92bS5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRJbmRleCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE4MFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCI3eHh4eHh4eHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5waG9uZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHRDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtLWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkRhdGVQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRlLXBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwXCIsIG1hcmdpbkJvdHRvbTogXCIyM3B4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBfdm0uY3VycmVudFllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgbW9udGg6IF92bS5jdXJyZW50TW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgZGF5OiBfdm0uY3VycmVudERheSxcbiAgICAgICAgICAgICAgICAgICAgICBtaW5EYXRlOiBcIjE5NzAtMDEtMDFcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGVDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kYXRlQ2hhbmdlZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5Cb3R0b206IFwiMTNweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlNlYXJjaEJhclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGludDogXCJUeXBlIGluIGEgbG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uc2VhcmNoUGhyYXNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnNlYXJjaFN1Ym1pdCwgY2xlYXI6IF92bS5vblRleHRDbGVhciB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmxvY2F0aW9uICYmICFfdm0udGV4dENsZWFyZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sb2NhdGlvbnMsIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW46IFwiN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2NhdGlvblNlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBsYWNlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMzNweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiArIF92bS5sb2NhdGlvbiwgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcIkFjdGl2aXR5SW5kaWNhdG9yXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiN1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLnBob25lICYmXG4gICAgICAgICAgX3ZtLm5pY2sgJiZcbiAgICAgICAgICBfdm0ubG9jYXRpb24gJiZcbiAgICAgICAgICBfdm0uY2hvc2VuRGF0ZSAmJlxuICAgICAgICAgICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgPyBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2F2ZSBDb250YWN0XCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5zdWJtaXRDb250YWN0IH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgIV92bS5jaG9zZW5EYXRlXG4gICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgIV92bS5waG9uZVxuICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiKiBQbGVhc2UgcGljayBhIHBob25lIG51bWJlclwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmVycm9yXG4gICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTb3JyeSwgcmVxdWVzdCBmYWlsZWQsIHRyeSBhZ2FpblwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==