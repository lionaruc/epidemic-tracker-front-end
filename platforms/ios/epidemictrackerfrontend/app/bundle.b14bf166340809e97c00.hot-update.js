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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      nick: "nick",
      searchPhrase: "",
      suspicion: false,
      chosenDate: null,
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear(),
      prefix: "+254",
      prefixes: ["+254"],
      selectedIndex: 0,
      error: false,
      locations: [],
      location: null,
      locationId: null,
      textCleared: true,
      maxdate: "",
      fakeLocs: [{
        description: "Ongata Rongai, Kenya",
        place_id: "ChIJjU75UM8FLxgRqYz95laWwlE"
      }, {
        description: "Loresho, Nairobi, Kenya",
        place_id: "ChIJzajLka0ZLxgRjWv3e-VVAqY"
      }, {
        description: "Mama Ngina Waterfront, Mama Ngina Drive, Mombasa, Kenya",
        place_id: "ChIJmYbxMPUTQBgRqaZKpuRRk5Q"
      }, {
        description: "Mama Ngina Street, Nairobi, Kenya",
        place_id: "EiFNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWEiLiosChQKEgnZIBez1xAvGBEkIUs5hWHrEhIUChIJTQu5FNcQLxgRTCl8KZuPjfU"
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
      console.log("location selected:" + desc);
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
          Authorization: "Bearer " + this.token
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
      var processedPhrase = searchBar.text.replace(" ", "+"); //this.locations = this.fakeLocs // result.predictions;

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
    console.log("modal created");
    this.token = appSettings.getString("tok", null);
    var currentDate = new Date();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    this.maxdate = "".concat(year, "-").concat(month, "-").concat(day);
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.date-picker {\n  background-color: white;\n  border-color: black;\n  border-width: 2;\n  border-radius: 10;\n  color: black;\n  vertical-align: middle;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/ContactAdd.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

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
      _c("ActionBar", { attrs: { title: "Add a contact" } }),
      _c(
        "StackLayout",
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
            attrs: { rowspan: "7", busy: _vm.processing }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RBZGQudnVlP2RhMDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZT82MDE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZGQTtBQVNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxrQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQSxzQkFOQTtBQU9BLHlDQVBBO0FBUUEsZ0RBUkE7QUFTQSw4Q0FUQTtBQVVBLG9CQVZBO0FBV0Esd0JBWEE7QUFZQSxzQkFaQTtBQWFBLGtCQWJBO0FBY0EsbUJBZEE7QUFlQSxvQkFmQTtBQWdCQSxzQkFoQkE7QUFpQkEsdUJBakJBO0FBa0JBLGlCQWxCQTtBQW1CQSxpQkFDQTtBQUNBLDJDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSw4Q0FEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EscUJBQ0EseURBRkE7QUFHQTtBQUhBLE9BVEEsRUFjQTtBQUNBLHdEQURBO0FBRUEsa0JBQ0E7QUFIQSxPQWRBLENBbkJBO0FBdUNBO0FBdkNBO0FBeUNBLEdBM0NBOztBQTRDQTtBQUNBO0FBQ0EsNkJBREEsQ0FHQTs7QUFFQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBOztBQWdCQTtBQUNBO0FBRUE7QUFDQSw2RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFDQSw0Q0FEQTtBQUVBO0FBRkEsU0FIQTtBQU9BO0FBQ0EsaUNBREE7QUFFQSxzQ0FGQTtBQUdBLDBHQUNBLENBREEs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QjtBQUN2QjtBQUNBO0FBQ0EseUNBQXlDLHlCQUF5QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0MscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuYjE0YmYxNjYzNDA4MDllOTdjMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPFBhZ2U+XG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIkFkZCBhIGNvbnRhY3RcIj48L0FjdGlvbkJhcj5cbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hvIGRpZCB5b3UgbWVldD9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogM3B4O1wiIC8+XG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8TGlzdFBpY2tlclxuICAgICAgICAgICAgOml0ZW1zPVwicHJlZml4ZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSW5kZXhcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW46NTsgd2lkdGg6IDcwOyBoZWlnaHQ6IDYwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgaGludD1cIjd4eHh4eHh4eFwiXG4gICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwaG9uZVwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxODBcIlxuICAgICAgICAgID48L1RleHRGaWVsZD5cbiAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiIC8+XG5cbiAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgOnllYXI9XCJjdXJyZW50WWVhclwiXG4gICAgICAgICAgICBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgOm1vbnRoPVwiY3VycmVudE1vbnRoXCJcbiAgICAgICAgICAgIDpkYXk9XCJjdXJyZW50RGF5XCJcbiAgICAgICAgICAgIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCJcbiAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7bWFyZ2luLWJvdHRvbTogMjNweDtcIlxuICAgICAgICAgICAgY2xhc3M9XCJkYXRlLXBpY2tlclwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZXJlIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiIC8+XG4gICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgaGludD1cIlR5cGUgaW4gYSBsb2NhdGlvblwiXG4gICAgICAgICAgICA6dGV4dD1cInNlYXJjaFBocmFzZVwiXG4gICAgICAgICAgICBAc3VibWl0PVwic2VhcmNoU3VibWl0XCJcbiAgICAgICAgICAgIEBjbGVhcj1cIm9uVGV4dENsZWFyXCJcbiAgICAgICAgICAgIHN0eWxlXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cblxuICAgICAgICAgIDxTdGFja0xheW91dFxuICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMDsgbWFyZ2luLXRvcDogLTM3cHg7IGJhY2tncm91bmQtY29sb3I6ICMyQzMyNTFcIlxuICAgICAgICAgICAgdi1pZj1cIiFsb2NhdGlvbiAmJiAhdGV4dENsZWFyZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiXG4gICAgICAgICAgICAgIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogd2hpdGU7IG1hcmdpbjogNztcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgIHYtaWY9XCJsb2NhdGlvblwiXG4gICAgICAgICAgICA6dGV4dD1cIicnICsgbG9jYXRpb25cIlxuICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7IG1hcmdpbi10b3A6IDMzcHg7XCJcbiAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxTdGFja0xheW91dCB2LWlmPVwibG9jYXRpb25cIiBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd3NwYW49XCI3XCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICB2LWlmPVwicGhvbmUgJiYgbmljayAmJiBsb2NhdGlvbiAmJiBjaG9zZW5EYXRlICYmICFwcm9jZXNzaW5nXCJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCJcbiAgICAgICAgdGV4dD1cIlNhdmUgQ29udGFjdFwiXG4gICAgICAgIEB0YXA9XCJzdWJtaXRDb250YWN0XCJcbiAgICAgIC8+XG4gICAgICA8TGFiZWwgdi1pZj1cIiFjaG9zZW5EYXRlXCIgdGV4dD1cIiogUGxlYXNlIHBpY2sgYSBkYXRlXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG4gICAgICA8TGFiZWwgdi1pZj1cIiFwaG9uZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgcGhvbmUgbnVtYmVyXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG4gICAgICA8TGFiZWwgdi1pZj1cImVycm9yXCIgdGV4dD1cIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge1xuICBnZXRGaWxlLFxuICBnZXRJbWFnZSxcbiAgZ2V0SlNPTixcbiAgZ2V0U3RyaW5nLFxuICByZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2Vcbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5pbXBvcnQgeyBCQVNFX0FQSSwgR0tFWSB9IGZyb20gXCIuLi9jb21tb24vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGhvbmU6IG51bGwsXG4gICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgIG5pY2s6IFwibmlja1wiLFxuICAgICAgc2VhcmNoUGhyYXNlOiBcIlwiLFxuICAgICAgc3VzcGljaW9uOiBmYWxzZSxcbiAgICAgIGNob3NlbkRhdGU6IG51bGwsXG4gICAgICBjdXJyZW50RGF5OiBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUoKSxcbiAgICAgIGN1cnJlbnRNb250aDogbmV3IERhdGUoKS5nZXRVVENNb250aCgpICsgMSxcbiAgICAgIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICBwcmVmaXg6IFwiKzI1NFwiLFxuICAgICAgcHJlZml4ZXM6IFtcIisyNTRcIl0sXG4gICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgbG9jYXRpb25JZDogbnVsbCxcbiAgICAgIHRleHRDbGVhcmVkOiB0cnVlLFxuICAgICAgbWF4ZGF0ZTogXCJcIixcbiAgICAgIGZha2VMb2NzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPbmdhdGEgUm9uZ2FpLCBLZW55YVwiLFxuICAgICAgICAgIHBsYWNlX2lkOiBcIkNoSUpqVTc1VU04Rkx4Z1JxWXo5NWxhV3dsRVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3Jlc2hvLCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgIHBsYWNlX2lkOiBcIkNoSUp6YWpMa2EwWkx4Z1JqV3YzZS1WVkFxWVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiTWFtYSBOZ2luYSBXYXRlcmZyb250LCBNYW1hIE5naW5hIERyaXZlLCBNb21iYXNhLCBLZW55YVwiLFxuICAgICAgICAgIHBsYWNlX2lkOiBcIkNoSUptWWJ4TVBVVFFCZ1JxYVpLcHVSUms1UVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWFcIixcbiAgICAgICAgICBwbGFjZV9pZDpcbiAgICAgICAgICAgIFwiRWlGTllXMWhJRTVuYVc1aElGTjBjbVZsZEN3Z1RtRnBjbTlpYVN3Z1MyVnVlV0VpTGlvc0NoUUtFZ25aSUJlejF4QXZHQkVrSVVzNWhXSHJFaElVQ2hJSlRRdTVGTmNRTHhnUlRDbDhLWnVQamZVXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHRva2VuOiBudWxsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGRhdGVDaGFuZ2VkKGFyZykge1xuICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlKTtcblxuICAgICAgLy8gdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShhcmcudmFsdWUpO1xuXG4gICAgICB0aGlzLmNob3NlbkRhdGUgPSBhcmcudmFsdWU7XG4gICAgfSxcbiAgICBvblRleHRDbGVhcigpIHtcbiAgICAgIHRoaXMudGV4dENsZWFyZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgbG9jYXRpb25TZWxlY3RlZChwbGFjZWlkLCBkZXNjKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uIHNlbGVjdGVkOlwiICsgZGVzYyk7XG4gICAgICB0aGlzLmxvY2F0aW9uID0gZGVzYztcbiAgICAgIHRoaXMubG9jYXRpb25JZCA9IHBsYWNlaWQ7XG4gICAgfSxcbiAgICBzdWJtaXRDb250YWN0KCkge1xuICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgcmVxdWVzdCh7XG4gICAgICAgIHVybDogQkFTRV9BUEkgKyBcIlVzZXJzL2NvbnRhY3RfYWRkXCIsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRoaXMudG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uX2lkOiB0aGlzLmxvY2F0aW9uSWQsXG4gICAgICAgICAgbWVldGluZ19kYXRlOiBgJHt0aGlzLmNob3NlbkRhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0TW9udGgoKSArXG4gICAgICAgICAgICAxfS0ke3RoaXMuY2hvc2VuRGF0ZS5nZXREYXRlKCl9YCxcbiAgICAgICAgICBwaG9uZTogdGhpcy5wcmVmaXggKyB0aGlzLnBob25lLFxuICAgICAgICAgIG5pY2s6IHRoaXMubmlja1xuICAgICAgICB9KVxuICAgICAgfSkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgc2VhcmNoU3VibWl0KGFyZ3MpIHtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgIHRoaXMudGV4dENsZWFyZWQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XG5cbiAgICAgIGxldCBzZWFyY2hCYXIgPSBhcmdzLm9iamVjdDtcblxuICAgICAgY29uc3QgcHJvY2Vzc2VkUGhyYXNlID0gc2VhcmNoQmFyLnRleHQucmVwbGFjZShcIiBcIiwgXCIrXCIpO1xuICAgICAgLy90aGlzLmxvY2F0aW9ucyA9IHRoaXMuZmFrZUxvY3MgLy8gcmVzdWx0LnByZWRpY3Rpb25zO1xuICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICByZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2lucHV0PSR7cHJvY2Vzc2VkUGhyYXNlfSZrZXk9JHtHS0VZfWAsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgfSkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQucHJlZGljdGlvbnM7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzZXQgdXAgeW91ciBzZWFyY2guXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm1vZGFsIGNyZWF0ZWRcIik7XG5cbiAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xuXG4gICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XG4gICAgdmFyIG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICB0aGlzLm1heGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5kYXRlLXBpY2tlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDEwO1xuICBjb2xvcjogYmxhY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZGF0ZS1waWNrZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAyO1xcbiAgYm9yZGVyLXJhZGl1czogMTA7XFxuICBjb2xvcjogYmxhY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvQ29udGFjdEFkZC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgW1xuICAgICAgX2MoXCJBY3Rpb25CYXJcIiwgeyBhdHRyczogeyB0aXRsZTogXCJBZGQgYSBjb250YWN0XCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hvIGRpZCB5b3UgbWVldD9cIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGlzdFBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI1XCIsIHdpZHRoOiBcIjcwXCIsIGhlaWdodDogXCI2MFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wcmVmaXhlcyxcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBfdm0uc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxODBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiN3h4eHh4eHh4XCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucGhvbmVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5waG9uZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJEYXRlUGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMFwiLCBtYXJnaW5Cb3R0b206IFwiMjNweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgeWVhcjogX3ZtLmN1cnJlbnRZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBfdm0uY3VycmVudE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgIGRheTogX3ZtLmN1cnJlbnREYXksXG4gICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZTogXCIxOTcwLTAxLTAxXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRlQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGF0ZUNoYW5nZWQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItZGFya1wiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldoZXJlIGRpZCB5b3UgbWVldCB0aGVtP1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTZWFyY2hCYXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiVHlwZSBpbiBhIGxvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnNlYXJjaFBocmFzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zZWFyY2hTdWJtaXQsIGNsZWFyOiBfdm0ub25UZXh0Q2xlYXIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItZGFya1wiIH0pLFxuICAgICAgICAgICAgICAgICAgIV92bS5sb2NhdGlvbiAmJiAhX3ZtLnRleHRDbGVhcmVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMzdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMkMzMjUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luOiBcIjdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb25TZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wbGFjZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjMzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIgKyBfdm0ubG9jYXRpb24sIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3dzcGFuOiBcIjdcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5waG9uZSAmJlxuICAgICAgICAgIF92bS5uaWNrICYmXG4gICAgICAgICAgX3ZtLmxvY2F0aW9uICYmXG4gICAgICAgICAgX3ZtLmNob3NlbkRhdGUgJiZcbiAgICAgICAgICAhX3ZtLnByb2Nlc3NpbmdcbiAgICAgICAgICAgID8gX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNhdmUgQ29udGFjdFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0Q29udGFjdCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICFfdm0uY2hvc2VuRGF0ZVxuICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiKiBQbGVhc2UgcGljayBhIGRhdGVcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICFfdm0ucGhvbmVcbiAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5lcnJvclxuICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU29ycnksIHJlcXVlc3QgZmFpbGVkLCB0cnkgYWdhaW5cIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=