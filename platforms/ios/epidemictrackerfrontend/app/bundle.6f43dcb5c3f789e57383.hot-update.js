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

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.date-picker {\n    background-color: white;\n    border-color: black;\n    border-width: 2;\n    border-radius: 10;\n    color: black;\n    vertical-align: middle;\n}\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RBZGQudnVlP2RhMDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZT82MDE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxvQkFWQTtBQVdBLGlCQUNBLE1BREEsQ0FYQTtBQWNBLHNCQWRBO0FBZUEsa0JBZkE7QUFnQkEsbUJBaEJBO0FBaUJBLG9CQWpCQTtBQWtCQSxzQkFsQkE7QUFtQkEsdUJBbkJBO0FBb0JBLGlCQXBCQTtBQXFCQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBLENBckJBO0FBdUNBO0FBdkNBO0FBeUNBLEdBM0NBOztBQTRDQTtBQUNBO0FBQ0EsNkJBREEsQ0FHQTs7QUFFQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBOztBQWdCQTtBQUVBO0FBRUE7QUFDQSw2RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQ0EsaUNBREE7QUFFQSxzQ0FGQTtBQUdBLG1KQUhBO0FBSUEseUNBSkE7QUFLQTtBQUxBO0FBSkEsU0FXQSxJQVhB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dkI7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRCQUE0QjtBQUMxRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0QkFBNEI7QUFDMUQsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjZmNDNkY2I1YzNmNzg5ZTU3MzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG5cbiAgICAgICAgXG5cdDxTdGFja0xheW91dD5cblxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMiB0ZXh0LWNlbnRlclwiIHRleHQ9XCJBZGQgYSBjb250YWN0XCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIi8+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuXHRcdCAgICA8TGFiZWwgdGV4dD1cIldobyBkaWQgeW91IG1lZXQ/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDNweDtcIi8+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cInByZWZpeGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSW5kZXhcIiBzdHlsZT1cIm1hcmdpbjo1OyB3aWR0aDogNzA7IGhlaWdodDogNjBcIi8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIjd4eHh4eHh4eFwiXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cInBob25lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCIgc3R5bGU9XCJ3aWR0aDogMTgwXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiBcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICA6bW9udGg9XCJjdXJyZW50TW9udGhcIiA6ZGF5PVwiY3VycmVudERheVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCIgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7bWFyZ2luLWJvdHRvbTogMjNweDtcIiBjbGFzcz1cImRhdGUtcGlja2VyXCIvPlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBoaW50PVwiVHlwZSBpbiBhIGxvY2F0aW9uXCIgOnRleHQ9XCJzZWFyY2hQaHJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzdWJtaXQ9XCJzZWFyY2hTdWJtaXRcIiBAY2xlYXI9XCJvblRleHRDbGVhclwiIHN0eWxlPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7IG1hcmdpbi10b3A6IC0zN3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzMjUxXCIgdi1pZj1cIiFsb2NhdGlvbiAmJiAhdGV4dENsZWFyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIiBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCIgc3R5bGU9XCJjb2xvcjogd2hpdGU7IG1hcmdpbjogNztcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCInJyArIGxvY2F0aW9uXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7IG1hcmdpbi10b3A6IDMzcHg7XCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB2LWlmPVwibG9jYXRpb25cIiBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCI3XCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cblxuICAgICAgICA8QnV0dG9uIHYtaWY9XCJwaG9uZSAmJiBuaWNrICYmIGxvY2F0aW9uICYmIGNob3NlbkRhdGUgJiYgIXByb2Nlc3NpbmdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiB0ZXh0PVwiU2F2ZSBDb250YWN0XCIgQHRhcD1cInN1Ym1pdENvbnRhY3RcIi8+XG4gICAgICAgIDxMYWJlbCB2LWlmPVwiIWNob3NlbkRhdGVcIiB0ZXh0PVwiKiBQbGVhc2UgcGljayBhIGRhdGVcIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogNVwiPjwvTGFiZWw+XG5cbiAgICAgICAgPExhYmVsIHYtaWY9XCIhcGhvbmVcIiB0ZXh0PVwiKiBQbGVhc2UgcGljayBhIHBob25lIG51bWJlclwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cblxuICAgICAgICA8TGFiZWwgdi1pZj1cImVycm9yXCIgdGV4dD1cIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG5cdDwvU3RhY2tMYXlvdXQ+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5cbmltcG9ydCB7QkFTRV9BUEksIEdLRVl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBob25lOiBudWxsLFxuICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICBuaWNrOiAnbmljaycsXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2U6ICcnLFxuICAgICAgICAgICAgc3VzcGljaW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGNob3NlbkRhdGU6IG51bGwsXG4gICAgICAgICAgICBjdXJyZW50RGF5OiBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUoKSxcbiAgICAgICAgICAgIGN1cnJlbnRNb250aDogbmV3IERhdGUoKS5nZXRVVENNb250aCgpICsgMSxcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICAgICAgICBwcmVmaXg6ICcrMjU0JyxcbiAgICAgICAgICAgIHByZWZpeGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiKzI1NFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246IG51bGwsXG4gICAgICAgICAgICBsb2NhdGlvbklkOiBudWxsLFxuICAgICAgICAgICAgdGV4dENsZWFyZWQ6IHRydWUsXG4gICAgICAgICAgICBtYXhkYXRlOiAnJyxcbiAgICAgICAgICAgIGZha2VMb2NzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT25nYXRhIFJvbmdhaSwgS2VueWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUpqVTc1VU04Rkx4Z1JxWXo5NWxhV3dsRVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZXNobywgTmFpcm9iaSwgS2VueWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUp6YWpMa2EwWkx4Z1JqV3YzZS1WVkFxWVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFtYSBOZ2luYSBXYXRlcmZyb250LCBNYW1hIE5naW5hIERyaXZlLCBNb21iYXNhLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSm1ZYnhNUFVUUUJnUnFhWktwdVJSazVRXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkVpRk5ZVzFoSUU1bmFXNWhJRk4wY21WbGRDd2dUbUZwY205aWFTd2dTMlZ1ZVdFaUxpb3NDaFFLRWduWklCZXoxeEF2R0JFa0lVczVoV0hyRWhJVUNoSUpUUXU1Rk5jUUx4Z1JUQ2w4S1p1UGpmVVwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b2tlbjogbnVsbFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBkYXRlQ2hhbmdlZCAoYXJnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyB2YXIgbmV3RGF0ZSA9IG5ldyBEYXRlKGFyZy52YWx1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hvc2VuRGF0ZSA9IGFyZy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UZXh0Q2xlYXIgKCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25TZWxlY3RlZCAocGxhY2VpZCwgZGVzYykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIHNlbGVjdGVkOicgKyBkZXNjKTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBkZXNjO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbklkID0gcGxhY2VpZDtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0Q29udGFjdCAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IEJBU0VfQVBJICsgXCJVc2Vycy9jb250YWN0X2FkZFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9pZDogdGhpcy5sb2NhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ19kYXRlOiBgJHt0aGlzLmNob3NlbkRhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0TW9udGgoKSArIDF9LSR7dGhpcy5jaG9zZW5EYXRlLmdldERhdGUoKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucHJlZml4ICsgdGhpcy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2s6IHRoaXMubmlja1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaFN1Ym1pdCAoYXJncykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRQaHJhc2UgPSBzZWFyY2hCYXIudGV4dC5yZXBsYWNlKCcgJywgJysnKVxuICAgICAgICAgICAgLy90aGlzLmxvY2F0aW9ucyA9IHRoaXMuZmFrZUxvY3MgLy8gcmVzdWx0LnByZWRpY3Rpb25zO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbj9pbnB1dD0ke3Byb2Nlc3NlZFBocmFzZX0ma2V5PSR7R0tFWX1gLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQucHJlZGljdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2V0IHVwIHlvdXIgc2VhcmNoLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwgY3JlYXRlZCcpO1xuXG4gICAgICAgIHRoaXMudG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tcIiwgbnVsbCk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgICAgICB2YXIgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1heGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uZGF0ZS1waWNrZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRhdGUtcGlja2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci13aWR0aDogMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0NvbnRhY3RBZGQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZCBhIGNvbnRhY3RcIiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5Cb3R0b206IFwiM3B4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldobyBkaWQgeW91IG1lZXQ/XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgb3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxpc3RQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNVwiLCB3aWR0aDogXCI3MFwiLCBoZWlnaHQ6IFwiNjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucHJlZml4ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogX3ZtLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEluZGV4ID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTgwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIjd4eHh4eHh4eFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0OiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnBob25lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGhvbmUgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJibGFja1wiLCBtYXJnaW5Cb3R0b206IFwiMTNweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiRGF0ZVBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBcIiwgbWFyZ2luQm90dG9tOiBcIjIzcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHllYXI6IF92bS5jdXJyZW50WWVhcixcbiAgICAgICAgICAgICAgICAgICAgICBtb250aDogX3ZtLmN1cnJlbnRNb250aCxcbiAgICAgICAgICAgICAgICAgICAgICBkYXk6IF92bS5jdXJyZW50RGF5LFxuICAgICAgICAgICAgICAgICAgICAgIG1pbkRhdGU6IFwiMTk3MC0wMS0wMVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0ZUNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRhdGVDaGFuZ2VkKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU2VhcmNoQmFyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlR5cGUgaW4gYSBsb2NhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5zZWFyY2hQaHJhc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc2VhcmNoU3VibWl0LCBjbGVhcjogX3ZtLm9uVGV4dENsZWFyIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KSxcbiAgICAgICAgICAgICAgICAgICFfdm0ubG9jYXRpb24gJiYgIV92bS50ZXh0Q2xlYXJlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTM3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJDMzI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxvY2F0aW9ucywgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIndoaXRlXCIsIG1hcmdpbjogXCI3XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBsb2NhdGlvbi5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxvY2F0aW9uU2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGxhY2VfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtLWZpZWxkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzM3B4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiICsgX3ZtLmxvY2F0aW9uLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0ubG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItZGFya1wiIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgcm93U3BhbjogXCI3XCIsIGJ1c3k6IF92bS5wcm9jZXNzaW5nIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0ucGhvbmUgJiZcbiAgICAgICAgICBfdm0ubmljayAmJlxuICAgICAgICAgIF92bS5sb2NhdGlvbiAmJlxuICAgICAgICAgIF92bS5jaG9zZW5EYXRlICYmXG4gICAgICAgICAgIV92bS5wcm9jZXNzaW5nXG4gICAgICAgICAgICA/IF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTYXZlIENvbnRhY3RcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdENvbnRhY3QgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAhX3ZtLmNob3NlbkRhdGVcbiAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBkYXRlXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAhX3ZtLnBob25lXG4gICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIqIFBsZWFzZSBwaWNrIGEgcGhvbmUgbnVtYmVyXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uZXJyb3JcbiAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9