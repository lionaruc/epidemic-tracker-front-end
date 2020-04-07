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
      _c("ActionBar", { attrs: { title: "Add a contact" } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3RBZGQudnVlPzYwMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxvQkFWQTtBQVdBLGlCQUNBLE1BREEsQ0FYQTtBQWNBLHNCQWRBO0FBZUEsa0JBZkE7QUFnQkEsbUJBaEJBO0FBaUJBLG9CQWpCQTtBQWtCQSxzQkFsQkE7QUFtQkEsdUJBbkJBO0FBb0JBLGlCQXBCQTtBQXFCQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBLENBckJBO0FBdUNBO0FBdkNBO0FBeUNBLEdBM0NBOztBQTRDQTtBQUNBO0FBQ0EsNkJBREEsQ0FHQTs7QUFFQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBOztBQWdCQTtBQUVBO0FBRUE7QUFDQSw2RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQ0EsaUNBREE7QUFFQSxzQ0FGQTtBQUdBLG1KQUhBO0FBSUEseUNBSkE7QUFLQTtBQUxBO0FBSkEsU0FXQSxJQVhBLENBV0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FI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QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuMDAyMzBlMGU4NGUyNTZmZDAyNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZT5cblxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQWRkIGEgY29udGFjdFwiPjwvQWN0aW9uQmFyPlxuXHQgICAgXG4gICAgICAgIDxTdGFja0xheW91dCBzdHlsZT1cIm1hcmdpbjogMTNcIj5cblxuICAgICAgICBcblxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XG5cdFx0ICAgIDxMYWJlbCB0ZXh0PVwiV2hvIGRpZCB5b3UgbWVldD9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogM3B4O1wiLz5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgOml0ZW1zPVwicHJlZml4ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRJbmRleFwiIHN0eWxlPVwibWFyZ2luOjU7IHdpZHRoOiA3MDsgaGVpZ2h0OiA2MFwiLz5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiN3h4eHh4eHh4XCJcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwicGhvbmVcIiBzdHlsZT1cIndpZHRoOiAxODBcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuIFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgOnllYXI9XCJjdXJyZW50WWVhclwiIEBkYXRlQ2hhbmdlPVwiZGF0ZUNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIDptb250aD1cImN1cnJlbnRNb250aFwiIDpkYXk9XCJjdXJyZW50RGF5XCJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZT1cIjE5NzAtMDEtMDFcIiAgc3R5bGU9XCJoZWlnaHQ6IDEwMDttYXJnaW4tYm90dG9tOiAyM3B4O1wiIGNsYXNzPVwiZGF0ZS1waWNrZXJcIi8+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCA+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIGhpbnQ9XCJUeXBlIGluIGEgbG9jYXRpb25cIiA6dGV4dD1cInNlYXJjaFBocmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHN1Ym1pdD1cInNlYXJjaFN1Ym1pdFwiIEBjbGVhcj1cIm9uVGV4dENsZWFyXCIgc3R5bGU9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCAgc3R5bGU9XCJoZWlnaHQ6IDEwMDsgbWFyZ2luLXRvcDogLTM3cHg7IGJhY2tncm91bmQtY29sb3I6ICMyQzMyNTFcIiB2LWlmPVwiIWxvY2F0aW9uICYmICF0ZXh0Q2xlYXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHYtZm9yPVwibG9jYXRpb24gaW4gbG9jYXRpb25zXCIgOnRleHQ9XCJsb2NhdGlvbi5kZXNjcmlwdGlvblwiIEB0YXA9XCJsb2NhdGlvblNlbGVjdGVkKGxvY2F0aW9uLnBsYWNlX2lkLCBsb2NhdGlvbi5kZXNjcmlwdGlvbilcIiBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgbWFyZ2luOiA3O1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB2LWlmPVwibG9jYXRpb25cIiA6dGV4dD1cIicnICsgbG9jYXRpb25cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDsgbWFyZ2luLXRvcDogMzNweDtcIiB0ZXh0V3JhcD1cInRydWVcIi8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHYtaWY9XCJsb2NhdGlvblwiIGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjdcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxuXG4gICAgICAgIDxCdXR0b24gdi1pZj1cInBob25lICYmIG5pY2sgJiYgbG9jYXRpb24gJiYgY2hvc2VuRGF0ZSAmJiAhcHJvY2Vzc2luZ1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMFwiIHRleHQ9XCJTYXZlIENvbnRhY3RcIiBAdGFwPVwic3VibWl0Q29udGFjdFwiLz5cbiAgICAgICAgPExhYmVsIHYtaWY9XCIhY2hvc2VuRGF0ZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cblxuICAgICAgICA8TGFiZWwgdi1pZj1cIiFwaG9uZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgcGhvbmUgbnVtYmVyXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG4gICAgICAgIDxMYWJlbCB2LWlmPVwiZXJyb3JcIiB0ZXh0PVwiU29ycnksIHJlcXVlc3QgZmFpbGVkLCB0cnkgYWdhaW5cIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogNVwiPjwvTGFiZWw+XG5cblx0PC9TdGFja0xheW91dD5cblxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuaW1wb3J0IHtCQVNFX0FQSSwgR0tFWX0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGhvbmU6IG51bGwsXG4gICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG5pY2s6ICduaWNrJyxcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZTogJycsXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxuICAgICAgICAgICAgY2hvc2VuRGF0ZTogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgICAgICAgICAgY3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIHByZWZpeDogJysyNTQnLFxuICAgICAgICAgICAgcHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIrMjU0XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2F0aW9uczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IG51bGwsXG4gICAgICAgICAgICB0ZXh0Q2xlYXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heGRhdGU6ICcnLFxuICAgICAgICAgICAgZmFrZUxvY3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmdhdGEgUm9uZ2FpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSmpVNzVVTThGTHhnUnFZejk1bGFXd2xFXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3Jlc2hvLCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSnphakxrYTBaTHhnUmpXdjNlLVZWQXFZXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFdhdGVyZnJvbnQsIE1hbWEgTmdpbmEgRHJpdmUsIE1vbWJhc2EsIEtlbnlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKbVlieE1QVVRRQmdScWFaS3B1UlJrNVFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgU3RyZWV0LCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiRWlGTllXMWhJRTVuYVc1aElGTjBjbVZsZEN3Z1RtRnBjbTlpYVN3Z1MyVnVlV0VpTGlvc0NoUUtFZ25aSUJlejF4QXZHQkVrSVVzNWhXSHJFaElVQ2hJSlRRdTVGTmNRTHhnUlRDbDhLWnVQamZVXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRva2VuOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRhdGVDaGFuZ2VkIChhcmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZy52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIHZhciBuZXdEYXRlID0gbmV3IERhdGUoYXJnLnZhbHVlKTtcblxuICAgICAgICAgICAgdGhpcy5jaG9zZW5EYXRlID0gYXJnLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBvblRleHRDbGVhciAoKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvblNlbGVjdGVkIChwbGFjZWlkLCBkZXNjKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9jYXRpb24gc2VsZWN0ZWQ6JyArIGRlc2MpO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRlc2M7XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uSWQgPSBwbGFjZWlkO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRDb250YWN0ICgpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogQkFTRV9BUEkgKyBcIlVzZXJzL2NvbnRhY3RfYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLCAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMudG9rZW59LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0aGlzLmxvY2F0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWV0aW5nX2RhdGU6IGAke3RoaXMuY2hvc2VuRGF0ZS5nZXRGdWxsWWVhcigpfS0ke3RoaXMuY2hvc2VuRGF0ZS5nZXRNb250aCgpICsgMX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0RGF0ZSgpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5wcmVmaXggKyB0aGlzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmljazogdGhpcy5uaWNrXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2F2ZSB0aGlzIGRhdGEsIHRyeSBhZ2Fpbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoU3VibWl0IChhcmdzKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgc2VhcmNoQmFyID0gYXJncy5vYmplY3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFBocmFzZSA9IHNlYXJjaEJhci50ZXh0LnJlcGxhY2UoJyAnLCAnKycpXG4gICAgICAgICAgICAvL3RoaXMubG9jYXRpb25zID0gdGhpcy5mYWtlTG9jcyAvLyByZXN1bHQucHJlZGljdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2lucHV0PSR7cHJvY2Vzc2VkUGhyYXNlfSZrZXk9JHtHS0VZfWAsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3VsdC5wcmVkaWN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzZXQgdXAgeW91ciBzZWFyY2guXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbCBjcmVhdGVkJyk7XG5cbiAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcblxuICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHZhciBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWF4ZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5kYXRlLXBpY2tlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIkFkZCBhIGNvbnRhY3RcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMTNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIzcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiV2hvIGRpZCB5b3UgbWVldD9cIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGlzdFBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI1XCIsIHdpZHRoOiBcIjcwXCIsIGhlaWdodDogXCI2MFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wcmVmaXhlcyxcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBfdm0uc2VsZWN0ZWRJbmRleFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkSW5kZXggPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxODBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiN3h4eHh4eHh4XCIsXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ucGhvbmVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5waG9uZSA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1maWVsZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcImJsYWNrXCIsIG1hcmdpbkJvdHRvbTogXCIxM3B4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJEYXRlUGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMFwiLCBtYXJnaW5Cb3R0b206IFwiMjNweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgeWVhcjogX3ZtLmN1cnJlbnRZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBfdm0uY3VycmVudE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgIGRheTogX3ZtLmN1cnJlbnREYXksXG4gICAgICAgICAgICAgICAgICAgICAgbWluRGF0ZTogXCIxOTcwLTAxLTAxXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRlQ2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGF0ZUNoYW5nZWQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItZGFya1wiIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiYmxhY2tcIiwgbWFyZ2luQm90dG9tOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIldoZXJlIGRpZCB5b3UgbWVldCB0aGVtP1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJTZWFyY2hCYXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiVHlwZSBpbiBhIGxvY2F0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnNlYXJjaFBocmFzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zZWFyY2hTdWJtaXQsIGNsZWFyOiBfdm0ub25UZXh0Q2xlYXIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItZGFya1wiIH0pLFxuICAgICAgICAgICAgICAgICAgIV92bS5sb2NhdGlvbiAmJiAhX3ZtLnRleHRDbGVhcmVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItMzdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMkMzMjUxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubG9jYXRpb25zLCBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luOiBcIjdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IGxvY2F0aW9uLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9jYXRpb25TZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wbGFjZV9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tZmllbGRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjMzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiXCIgKyBfdm0ubG9jYXRpb24sIHRleHRXcmFwOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1kYXJrXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyByb3dTcGFuOiBcIjdcIiwgYnVzeTogX3ZtLnByb2Nlc3NpbmcgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5waG9uZSAmJlxuICAgICAgICAgIF92bS5uaWNrICYmXG4gICAgICAgICAgX3ZtLmxvY2F0aW9uICYmXG4gICAgICAgICAgX3ZtLmNob3NlbkRhdGUgJiZcbiAgICAgICAgICAhX3ZtLnByb2Nlc3NpbmdcbiAgICAgICAgICAgID8gX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlNhdmUgQ29udGFjdFwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0Q29udGFjdCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICFfdm0uY2hvc2VuRGF0ZVxuICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiKiBQbGVhc2UgcGljayBhIGRhdGVcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICFfdm0ucGhvbmVcbiAgICAgICAgICAgID8gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIG1hcmdpbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5lcnJvclxuICAgICAgICAgICAgPyBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiwgbWFyZ2luOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU29ycnksIHJlcXVlc3QgZmFpbGVkLCB0cnkgYWdhaW5cIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=