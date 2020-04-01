webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=script&lang=js&":
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
          phone: this.phone + '',
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
          _c("Label", {
            staticStyle: { color: "black", marginBottom: "7px" },
            attrs: { text: "Who did you meet?" }
          }),
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
                attrs: { hint: "Type in a location", text: _vm.searchPhrase },
                on: { submit: _vm.searchSubmit, clear: _vm.onTextClear }
              }),
              _c("StackLayout", { staticClass: "hr-dark" }),
              !_vm.location && !_vm.textCleared
                ? _c(
                    "StackLayout",
                    {
                      staticStyle: {
                        height: "100",
                        marginTop: "-13px",
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
                : _vm._e(),
              _c("StackLayout", { staticClass: "hr-dark" })
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
      _vm.phone && _vm.nick && _vm.location && _vm.chosenDate && !_vm.processing
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdE1vZGFsLnZ1ZT9lNDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSx1QkFGQTtBQUdBLGtCQUhBO0FBSUEsc0JBSkE7QUFLQSxzQkFMQTtBQU1BLHNCQU5BO0FBT0EseUNBUEE7QUFRQSxnREFSQTtBQVNBLDhDQVRBO0FBVUEsa0JBVkE7QUFXQSxtQkFYQTtBQVlBLG9CQVpBO0FBYUEsc0JBYkE7QUFjQSx1QkFkQTtBQWVBLGlCQWZBO0FBZ0JBLGlCQUNBO0FBQ0EsNkNBREE7QUFFQTtBQUZBLE9BREEsRUFLQTtBQUNBLGdEQURBO0FBRUE7QUFGQSxPQUxBLEVBU0E7QUFDQSxnRkFEQTtBQUVBO0FBRkEsT0FUQSxFQWFBO0FBQ0EsMERBREE7QUFFQTtBQUZBLE9BYkEsQ0FoQkE7QUFrQ0E7QUFsQ0E7QUFvQ0EsR0F0Q0E7O0FBdUNBO0FBQ0E7QUFDQSw2QkFEQSxDQUdBOztBQUVBO0FBQ0EsS0FQQTs7QUFRQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZkE7O0FBZ0JBO0FBRUE7QUFFQTtBQUNBLDZGQURBO0FBRUEsc0JBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQSxpQ0FEQTtBQUVBLHNDQUZBO0FBR0EsbUpBSEE7QUFJQSxnQ0FKQTtBQUtBO0FBTEE7QUFKQSxTQVdBLElBWEEsQ0FXQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLE1BSUE7QUFDQTtBQUNBO0FBRUEsT0F6QkEsRUF5QkE7QUFDQTtBQUNBLG1CQUNBLHVEQURBO0FBR0EsT0E5QkE7QUErQkEsS0FuREE7O0FBb0RBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQSw2REFUQSxDQVVBOztBQUNBO0FBQ0E7QUFDQSxrTEFEQTtBQUVBO0FBRkEsU0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxPQVJBLEVBUUE7QUFDQTtBQUNBLG1CQUNBLGdEQURBO0FBR0EsT0FiQTtBQWNBOztBQTlFQSxHQXZDQTs7QUF1SEE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQWxJQSxHOzs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDhCQUE4QiwyQkFBMkIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIsc0NBQXNDO0FBQ2hFLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQ0FBa0M7QUFDL0M7QUFDQTtBQUNBLDhCQUE4Qix1Q0FBdUM7QUFDckUsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLHNDQUFzQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQSx3QkFBd0IscURBQXFEO0FBQzdFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHNDQUFzQyw4QkFBOEI7QUFDcEUsZ0NBQWdDLDZCQUE2QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3RELG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RCxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4zZWE2OGE5MWYzN2JiODQ3YzA2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxTdGFja0xheW91dCBjbGFzcz1cInAtMjBcIiBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiPlxyXG5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMiB0ZXh0LWNlbnRlclwiIHRleHQ9XCJBZGQgYSBjb250YWN0XCIgc3R5bGU9XCJjb2xvcjogYmxhY2tcIi8+XHJcblxyXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm1cIj5cclxuXHRcdCAgICA8TGFiZWwgdGV4dD1cIldobyBkaWQgeW91IG1lZXQ/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDdweDtcIi8+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lIGVnLiArMjU0eHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuIFxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciA6eWVhcj1cImN1cnJlbnRZZWFyXCIgQGRhdGVDaGFuZ2U9XCJkYXRlQ2hhbmdlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICA6bW9udGg9XCJjdXJyZW50TW9udGhcIiA6ZGF5PVwiY3VycmVudERheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT1cIjE5NzAtMDEtMDFcIiAgc3R5bGU9XCJoZWlnaHQ6IDEwMDttYXJnaW4tYm90dG9tOiAyM3B4O1wiIGNsYXNzPVwiZGF0ZS1waWNrZXJcIi8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgaGludD1cIlR5cGUgaW4gYSBsb2NhdGlvblwiIDp0ZXh0PVwic2VhcmNoUGhyYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzdWJtaXQ9XCJzZWFyY2hTdWJtaXRcIiBAY2xlYXI9XCJvblRleHRDbGVhclwiIHN0eWxlPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCAgc3R5bGU9XCJoZWlnaHQ6IDEwMDsgbWFyZ2luLXRvcDogLTEzcHg7IGJhY2tncm91bmQtY29sb3I6ICMyQzMyNTFcIiB2LWlmPVwiIWxvY2F0aW9uICYmICF0ZXh0Q2xlYXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1mb3I9XCJsb2NhdGlvbiBpbiBsb2NhdGlvbnNcIiA6dGV4dD1cImxvY2F0aW9uLmRlc2NyaXB0aW9uXCIgQHRhcD1cImxvY2F0aW9uU2VsZWN0ZWQobG9jYXRpb24ucGxhY2VfaWQsIGxvY2F0aW9uLmRlc2NyaXB0aW9uKVwiIHN0eWxlPVwiY29sb3I6IHdoaXRlOyBtYXJnaW46IDc7XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHYtaWY9XCJsb2NhdGlvblwiIDp0ZXh0PVwiJycgKyBsb2NhdGlvblwiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4OyBtYXJnaW4tdG9wOiAzM3B4O1wiIHRleHRXcmFwPVwidHJ1ZVwiLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCI3XCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB2LWlmPVwicGhvbmUgJiYgbmljayAmJiBsb2NhdGlvbiAmJiBjaG9zZW5EYXRlICYmICFwcm9jZXNzaW5nXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiU2F2ZSBDb250YWN0XCIgQHRhcD1cInN1Ym1pdENvbnRhY3RcIi8+XHJcbiAgICAgICAgPExhYmVsIHYtaWY9XCIhY2hvc2VuRGF0ZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsIHYtaWY9XCIhcGhvbmVcIiB0ZXh0PVwiKiBQbGVhc2UgcGljayBhIHBob25lIG51bWJlclwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsIHYtaWY9XCJlcnJvclwiIHRleHQ9XCJTb3JyeSwgcmVxdWVzdCBmYWlsZWQsIHRyeSBhZ2FpblwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cclxuXHJcblx0XHQ8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7QkFTRV9BUEksIEdLRVl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBuaWNrOiAnbmljaycsXHJcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZTogJycsXHJcbiAgICAgICAgICAgIHN1c3BpY2lvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNob3NlbkRhdGU6IG51bGwsXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZSgpLFxyXG4gICAgICAgICAgICBjdXJyZW50TW9udGg6IG5ldyBEYXRlKCkuZ2V0VVRDTW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHRleHRDbGVhcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXhkYXRlOiAnJyxcclxuICAgICAgICAgICAgZmFrZUxvY3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT25nYXRhIFJvbmdhaSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSmpVNzVVTThGTHhnUnFZejk1bGFXd2xFXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3Jlc2hvLCBOYWlyb2JpLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKemFqTGthMFpMeGdSald2M2UtVlZBcVlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgV2F0ZXJmcm9udCwgTWFtYSBOZ2luYSBEcml2ZSwgTW9tYmFzYSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSm1ZYnhNUFVUUUJnUnFhWktwdVJSazVRXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiRWlGTllXMWhJRTVuYVc1aElGTjBjbVZsZEN3Z1RtRnBjbTlpYVN3Z1MyVnVlV0VpTGlvc0NoUUtFZ25aSUJlejF4QXZHQkVrSVVzNWhXSHJFaElVQ2hJSlRRdTVGTmNRTHhnUlRDbDhLWnVQamZVXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRva2VuOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZGF0ZUNoYW5nZWQgKGFyZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShhcmcudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaG9zZW5EYXRlID0gYXJnLnZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25UZXh0Q2xlYXIgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYXRpb25TZWxlY3RlZCAocGxhY2VpZCwgZGVzYykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24gc2VsZWN0ZWQ6JyArIGRlc2MpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gZGVzYztcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbklkID0gcGxhY2VpZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1pdENvbnRhY3QgKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogQkFTRV9BUEkgKyBcIlVzZXJzL2NvbnRhY3RfYWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9pZDogdGhpcy5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nX2RhdGU6IGAke3RoaXMuY2hvc2VuRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3RoaXMuY2hvc2VuRGF0ZS5nZXRNb250aCgpICsgMX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0RGF0ZSgpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lICsgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2s6IHRoaXMubmlja1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2F2ZSB0aGlzIGRhdGEsIHRyeSBhZ2Fpbi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hTdWJtaXQgKGFyZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUGhyYXNlID0gc2VhcmNoQmFyLnRleHQucmVwbGFjZSgnICcsICcrJylcclxuICAgICAgICAgICAgLy90aGlzLmxvY2F0aW9ucyA9IHRoaXMuZmFrZUxvY3MgLy8gcmVzdWx0LnByZWRpY3Rpb25zO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbj9pbnB1dD0ke3Byb2Nlc3NlZFBocmFzZX0ma2V5PSR7R0tFWX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3VsdC5wcmVkaWN0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzZXQgdXAgeW91ciBzZWFyY2guXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbCBjcmVhdGVkJyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tcIiwgbnVsbCk7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWF4ZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5kYXRlLXBpY2tlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItd2lkdGg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwLTIwXCIsIGF0dHJzOiB7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgdGV4dC1jZW50ZXJcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiB9LFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkFkZCBhIGNvbnRhY3RcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCI3cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaG8gZGlkIHlvdSBtZWV0P1wiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoaW50OiBcIlBob25lIGVnLiArMjU0eHhcIixcbiAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucGhvbmVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtLWZpZWxkXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkRhdGVQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMFwiLCBtYXJnaW5Cb3R0b206IFwiMjNweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHllYXI6IF92bS5jdXJyZW50WWVhcixcbiAgICAgICAgICAgICAgICAgIG1vbnRoOiBfdm0uY3VycmVudE1vbnRoLFxuICAgICAgICAgICAgICAgICAgZGF5OiBfdm0uY3VycmVudERheSxcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU6IFwiMTk3MC0wMS0wMVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZGF0ZUNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGF0ZUNoYW5nZWQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTZWFyY2hCYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiVHlwZSBpbiBhIGxvY2F0aW9uXCIsIHRleHQ6IF92bS5zZWFyY2hQaHJhc2UgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zZWFyY2hTdWJtaXQsIGNsZWFyOiBfdm0ub25UZXh0Q2xlYXIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KSxcbiAgICAgICAgICAgICAgIV92bS5sb2NhdGlvbiAmJiAhX3ZtLnRleHRDbGVhcmVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sb2NhdGlvbnMsIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luOiBcIjdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogbG9jYXRpb24uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2NhdGlvblNlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGxhY2VfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWRhcmtcIiB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1mb3JtLWZpZWxkXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjMzcHhcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlwiICsgX3ZtLmxvY2F0aW9uLCB0ZXh0V3JhcDogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjdcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgfSksXG4gICAgICBfdm0ucGhvbmUgJiYgX3ZtLm5pY2sgJiYgX3ZtLmxvY2F0aW9uICYmIF92bS5jaG9zZW5EYXRlICYmICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICA/IF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJTYXZlIENvbnRhY3RcIiB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0Q29udGFjdCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICFfdm0uY2hvc2VuRGF0ZVxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiKiBQbGVhc2UgcGljayBhIGRhdGVcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICFfdm0ucGhvbmVcbiAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiNVwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5lcnJvclxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU29ycnksIHJlcXVlc3QgZmFpbGVkLCB0cnkgYWdhaW5cIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lXCIsXG4gICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQ2xvc2UgTW9kYWxcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==