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
      nick: null,
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
      console.log(arg.value);
      var newDate = new Date(arg.value);
      this.chosenDate = newDate;
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
          meeting_date: "".concat(this.chosenDate.getFullYear(), "-").concat(this.chosenDate.getMonth(), "-").concat(this.chosenDate.getDay()),
          phone: this.phone + '',
          nick: this.nick
        })
      }).then(response => {
        var result = response.content.toJSON();
        this.processing = false;
        console.log(response);

        if (response.statusCode == 200) {
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
      var processedPhrase = searchBar.text.replace(' ', '+');
      this.locations = this.fakeLocs; // result.predictions;

      this.processing = false;
      /*request({
              url:  `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${processedPhrase}&key=${GKEY}`,
              method: "GET",
              }).then((response) => {
                  const result = response.content.toJSON();
                  this.locations = result.predictions;
                  this.processing = false;
                }, (e) => {
                  this.processing = false;
                  this.alert(
                      "Unfortunately we could not set up your search."
                  );
              })*/
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
          _c(
            "StackLayout",
            { staticClass: "modal-form-field" },
            [
              _c("TextField", {
                staticClass: "input",
                attrs: {
                  hint: "Phone eg. 254xx",
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
              _c("StackLayout", { staticClass: "hr-light" })
            ],
            1
          ),
          _c(
            "StackLayout",
            { staticClass: "modal-form-field" },
            [
              _c("TextField", {
                staticClass: "input",
                attrs: {
                  hint: "Nickname eg. Joe",
                  keyboardType: "text",
                  autocorrect: "false",
                  autocapitalizationType: "none",
                  returnKeyType: "next",
                  text: _vm.nick
                },
                on: {
                  textChange: function($event) {
                    _vm.nick = $event.value
                  }
                }
              }),
              _c("StackLayout", { staticClass: "hr-light" })
            ],
            1
          ),
          _c(
            "StackLayout",
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
                attrs: { hint: "Search hint", text: _vm.searchPhrase },
                on: { submit: _vm.searchSubmit, clear: _vm.onTextClear }
              }),
              _c("StackLayout", { staticClass: "hr-light" }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdE1vZGFsLnZ1ZT9lNDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQSxzQkFOQTtBQU9BLHlDQVBBO0FBUUEsZ0RBUkE7QUFTQSw4Q0FUQTtBQVVBLGtCQVZBO0FBV0EsbUJBWEE7QUFZQSxvQkFaQTtBQWFBLHNCQWJBO0FBY0EsdUJBZEE7QUFlQSxpQkFmQTtBQWdCQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBLENBaEJBO0FBa0NBO0FBbENBO0FBb0NBLEdBdENBOztBQXVDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsS0FQQTs7QUFRQTtBQUNBO0FBQ0EsS0FWQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZkE7O0FBZ0JBO0FBRUE7QUFFQTtBQUNBLDZGQURBO0FBRUEsc0JBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQSxpQ0FEQTtBQUVBLHNDQUZBO0FBR0EsOElBSEE7QUFJQSxnQ0FKQTtBQUtBO0FBTEE7QUFKQSxTQVdBLElBWEEsQ0FXQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUdBO0FBQ0EsU0FKQSxNQUtBO0FBQ0E7QUFDQTtBQUVBLE9BMUJBLEVBMEJBO0FBQ0E7QUFDQSxtQkFDQSx1REFEQTtBQUdBLE9BL0JBO0FBZ0NBLEtBcERBOztBQXFEQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQSxxQ0FYQSxDQVdBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUFoRkEsR0F2Q0E7O0FBeUhBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFwSUEsRzs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw4QkFBOEIsMkJBQTJCLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QyxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGlDQUFpQywwQkFBMEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1Q0FBdUM7QUFDckUsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLHNDQUFzQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUNBQXVDO0FBQ3JFLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQSx3QkFBd0IsOENBQThDO0FBQ3RFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxtQ0FBbUMsRUFBRTtBQUN6RTtBQUNBO0FBQ0Esc0NBQXNDLDhCQUE4QjtBQUNwRSxnQ0FBZ0MsNkJBQTZCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBLDBCQUEwQiw2QkFBNkI7QUFDdkQsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkJBQTZCO0FBQ3ZELG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RCxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjkzNWVjZDU4ZDg2YzJkYmU0OTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PFN0YWNrTGF5b3V0IGNsYXNzPVwicC0yMFwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImgyIHRleHQtY2VudGVyXCIgdGV4dD1cIkFkZCBhIGNvbnRhY3RcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiLz5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxyXG5cdFx0ICAgIFxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQaG9uZSBlZy4gMjU0eHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIk5pY2tuYW1lIGVnLiBKb2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwidGV4dFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwibmlja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiBcclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIDptb250aD1cImN1cnJlbnRNb250aFwiIDpkYXk9XCJjdXJyZW50RGF5XCJcclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPVwiMTk3MC0wMS0wMVwiICBzdHlsZT1cImhlaWdodDogMTAwO21hcmdpbi1ib3R0b206IDIzcHg7XCIgY2xhc3M9XCJkYXRlLXBpY2tlclwiLz5cclxuXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgaGludD1cIlNlYXJjaCBoaW50XCIgOnRleHQ9XCJzZWFyY2hQaHJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHN1Ym1pdD1cInNlYXJjaFN1Ym1pdFwiIEBjbGVhcj1cIm9uVGV4dENsZWFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBzdHlsZT1cImhlaWdodDogMTAwOyBtYXJnaW4tdG9wOiAxMXB4O1wiIHYtaWY9XCIhbG9jYXRpb24gJiYgIXRleHRDbGVhcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIiBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbjogNztcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCInTG9jYXRpb246ICcgKyBsb2NhdGlvblwiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4OyBtYXJnaW4tdG9wOiAzM3B4O1wiLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiA6aXNFbmFibGVkPVwicGhvbmUgJiYgbmljayAmJiBsb2NhdGlvbiAmJiBjaG9zZW5EYXRlICYmICFwcm9jZXNzaW5nXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiU2F2ZSBDb250YWN0XCIgQHRhcD1cInN1Ym1pdENvbnRhY3RcIi8+XHJcbiAgICAgICAgPExhYmVsIHYtaWY9XCIhY2hvc2VuRGF0ZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiAxM1wiPjwvTGFiZWw+XHJcblxyXG4gICAgICAgIDxMYWJlbCB2LWlmPVwiIXBob25lXCIgdGV4dD1cIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogMTNcIj48L0xhYmVsPlxyXG5cclxuICAgICAgICA8TGFiZWwgdi1pZj1cImVycm9yXCIgdGV4dD1cIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDEzXCI+PC9MYWJlbD5cclxuXHJcblx0XHQ8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7QkFTRV9BUEksIEdLRVl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBuaWNrOiBudWxsLFxyXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2U6ICcnLFxyXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBjaG9zZW5EYXRlOiBudWxsLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF5OiBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUoKSxcclxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICBsb2NhdGlvbklkOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0Q2xlYXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWF4ZGF0ZTogJycsXHJcbiAgICAgICAgICAgIGZha2VMb2NzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9uZ2F0YSBSb25nYWksIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUpqVTc1VU04Rkx4Z1JxWXo5NWxhV3dsRVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZXNobywgTmFpcm9iaSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSnphakxrYTBaTHhnUmpXdjNlLVZWQXFZXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFdhdGVyZnJvbnQsIE1hbWEgTmdpbmEgRHJpdmUsIE1vbWJhc2EsIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUptWWJ4TVBVVFFCZ1JxYVpLcHVSUms1UVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFtYSBOZ2luYSBTdHJlZXQsIE5haXJvYmksIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkVpRk5ZVzFoSUU1bmFXNWhJRk4wY21WbGRDd2dUbUZwY205aWFTd2dTMlZ1ZVdFaUxpb3NDaFFLRWduWklCZXoxeEF2R0JFa0lVczVoV0hyRWhJVUNoSUpUUXU1Rk5jUUx4Z1JUQ2w4S1p1UGpmVVwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGRhdGVDaGFuZ2VkIChhcmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdEYXRlID0gbmV3IERhdGUoYXJnLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuRGF0ZSA9IG5ld0RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRleHRDbGVhciAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhdGlvblNlbGVjdGVkIChwbGFjZWlkLCBkZXNjKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGlvbiBzZWxlY3RlZDonICsgZGVzYyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBkZXNjO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uSWQgPSBwbGFjZWlkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0Q29udGFjdCAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiVXNlcnMvY29udGFjdF9hZGRcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLCAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMudG9rZW59LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0aGlzLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZXRpbmdfZGF0ZTogYCR7dGhpcy5jaG9zZW5EYXRlLmdldEZ1bGxZZWFyKCl9LSR7dGhpcy5jaG9zZW5EYXRlLmdldE1vbnRoKCl9LSR7dGhpcy5jaG9zZW5EYXRlLmdldERheSgpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lICsgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2s6IHRoaXMubmlja1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2F2ZSB0aGlzIGRhdGEsIHRyeSBhZ2Fpbi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hTdWJtaXQgKGFyZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUGhyYXNlID0gc2VhcmNoQmFyLnRleHQucmVwbGFjZSgnICcsICcrJylcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gdGhpcy5mYWtlTG9jcyAvLyByZXN1bHQucHJlZGljdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvKnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24/aW5wdXQ9JHtwcm9jZXNzZWRQaHJhc2V9JmtleT0ke0dLRVl9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQucHJlZGljdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2V0IHVwIHlvdXIgc2VhcmNoLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkqL1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbCBjcmVhdGVkJyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tcIiwgbnVsbCk7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWF4ZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcclxuICAgIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5kYXRlLXBpY2tlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZWRyYWI7XHJcbiAgICBib3JkZXItY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIGJvcmRlci13aWR0aDogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJTdGFja0xheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicC0yMFwiLCBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHRleHQtY2VudGVyXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIgfSxcbiAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJBZGQgYSBjb250YWN0XCIgfVxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaGludDogXCJQaG9uZSBlZy4gMjU0eHhcIixcbiAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogXCJuZXh0XCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucGhvbmVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnBob25lID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoaW50OiBcIk5pY2tuYW1lIGVnLiBKb2VcIixcbiAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5uaWNrXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5uaWNrID0gJGV2ZW50LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkRhdGVQaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGUtcGlja2VyXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMFwiLCBtYXJnaW5Cb3R0b206IFwiMjNweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHllYXI6IF92bS5jdXJyZW50WWVhcixcbiAgICAgICAgICAgICAgICAgIG1vbnRoOiBfdm0uY3VycmVudE1vbnRoLFxuICAgICAgICAgICAgICAgICAgZGF5OiBfdm0uY3VycmVudERheSxcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU6IFwiMTk3MC0wMS0wMVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZGF0ZUNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGF0ZUNoYW5nZWQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJTZWFyY2hCYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhpbnQ6IFwiU2VhcmNoIGhpbnRcIiwgdGV4dDogX3ZtLnNlYXJjaFBocmFzZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnNlYXJjaFN1Ym1pdCwgY2xlYXI6IF92bS5vblRleHRDbGVhciB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KSxcbiAgICAgICAgICAgICAgIV92bS5sb2NhdGlvbiAmJiAhX3ZtLnRleHRDbGVhcmVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbjogXCI3XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb25TZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBsYWNlX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5sb2NhdGlvblxuICAgICAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzM3B4XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJMb2NhdGlvbjogXCIgKyBfdm0ubG9jYXRpb24gfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFwiQWN0aXZpdHlJbmRpY2F0b3JcIiwge1xuICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjNcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgfSksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlzRW5hYmxlZDpcbiAgICAgICAgICAgIF92bS5waG9uZSAmJlxuICAgICAgICAgICAgX3ZtLm5pY2sgJiZcbiAgICAgICAgICAgIF92bS5sb2NhdGlvbiAmJlxuICAgICAgICAgICAgX3ZtLmNob3NlbkRhdGUgJiZcbiAgICAgICAgICAgICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICB0ZXh0OiBcIlNhdmUgQ29udGFjdFwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHRhcDogX3ZtLnN1Ym1pdENvbnRhY3QgfVxuICAgICAgfSksXG4gICAgICAhX3ZtLmNob3NlbkRhdGVcbiAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiLCBtYXJnaW46IFwiMTNcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgIV92bS5waG9uZVxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCIxM1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5lcnJvclxuICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCIxM1wiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZVwiLFxuICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlIE1vZGFsXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kbW9kYWwuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=