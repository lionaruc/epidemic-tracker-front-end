webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    onLoaded(args) {
      console.log('modal created');
      this.token = appSettings.getString("tok", null);
      var currentDate = new Date();
      var day = currentDate.getDay();
      var month = currentDate.getMonth();
      var year = currentDate.getFullYear();
      this.maxdate = "".concat(year, "-").concat(month, "-").concat(day);
    },

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
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
            transition: {
              name: 'fade',
              duration: 1200,
              props: {
                nothing: new Date()
              }
            }
          });
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

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0QWRkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBO0FBRUE7O0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxvQkFWQTtBQVdBLGlCQUNBLE1BREEsQ0FYQTtBQWNBLHNCQWRBO0FBZUEsa0JBZkE7QUFnQkEsbUJBaEJBO0FBaUJBLG9CQWpCQTtBQWtCQSxzQkFsQkE7QUFtQkEsdUJBbkJBO0FBb0JBLGlCQXBCQTtBQXFCQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBLENBckJBO0FBdUNBO0FBdkNBO0FBeUNBLEdBM0NBOztBQTRDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxLQVpBOztBQWFBO0FBQ0EsNkJBREEsQ0FHQTs7QUFFQTtBQUNBLEtBbkJBOztBQW9CQTtBQUNBO0FBQ0EsS0F0QkE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzQkE7O0FBNEJBO0FBRUE7QUFFQTtBQUNBLDZGQURBO0FBRUEsc0JBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQSxpQ0FEQTtBQUVBLHNDQUZBO0FBR0EsbUpBSEE7QUFJQSx5Q0FKQTtBQUtBO0FBTEE7QUFKQSxTQVdBLElBWEEsQ0FXQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFEQTtBQVNBO0FBQ0EsU0FYQSxNQVlBO0FBQ0E7QUFDQTtBQUVBLE9BakNBLEVBaUNBO0FBQ0E7QUFDQSxtQkFDQSx1REFEQTtBQUdBLE9BdENBO0FBdUNBLEtBdkVBOztBQXdFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUEsNkRBVEEsQ0FVQTs7QUFDQTtBQUNBO0FBQ0Esa0xBREE7QUFFQTtBQUZBLFNBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsT0FSQSxFQVFBO0FBQ0E7QUFDQSxtQkFDQSxnREFEQTtBQUdBLE9BYkE7QUFjQTs7QUFsR0E7QUE1Q0EsRyIsImZpbGUiOiJidW5kbGUuNTQ3YWJjZGEzZTFhOGMyNDhjMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBAbG9hZGVkPVwib25Mb2FkZWRcIj5cblxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiQWRkIENvbnRhY3RcIj48L0FjdGlvbkJhcj5cblx0ICAgIFxuICAgICAgICA8U3RhY2tMYXlvdXQgc3R5bGU9XCJtYXJnaW46IDEzXCI+XG5cbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxuXHRcdCAgICA8TGFiZWwgdGV4dD1cIldobyBkaWQgeW91IG1lZXQ/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDNweDtcIi8+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIDppdGVtcz1cInByZWZpeGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkSW5kZXhcIiBzdHlsZT1cIm1hcmdpbjo1OyB3aWR0aDogNzA7IGhlaWdodDogNjBcIi8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIjd4eHh4eHh4eFwiXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cInBob25lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCIgc3R5bGU9XCJ3aWR0aDogMTgwXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiBcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZW4gZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICA6bW9udGg9XCJjdXJyZW50TW9udGhcIiA6ZGF5PVwiY3VycmVudERheVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCIgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7bWFyZ2luLWJvdHRvbTogMjNweDtcIiBjbGFzcz1cImRhdGUtcGlja2VyXCIvPlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBoaW50PVwiVHlwZSBpbiBhIGxvY2F0aW9uXCIgOnRleHQ9XCJzZWFyY2hQaHJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzdWJtaXQ9XCJzZWFyY2hTdWJtaXRcIiBAY2xlYXI9XCJvblRleHRDbGVhclwiIHN0eWxlPVwiXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItZGFya1wiPjwvU3RhY2tMYXlvdXQ+XG5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7IG1hcmdpbi10b3A6IC0zN3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzMjUxXCIgdi1pZj1cIiFsb2NhdGlvbiAmJiAhdGV4dENsZWFyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIiBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCIgc3R5bGU9XCJjb2xvcjogd2hpdGU7IG1hcmdpbjogNztcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCInJyArIGxvY2F0aW9uXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7IG1hcmdpbi10b3A6IDMzcHg7XCIgdGV4dFdyYXA9XCJ0cnVlXCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB2LWlmPVwibG9jYXRpb25cIiBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCI3XCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cblxuICAgICAgICA8QnV0dG9uIHYtaWY9XCJwaG9uZSAmJiBuaWNrICYmIGxvY2F0aW9uICYmIGNob3NlbkRhdGUgJiYgIXByb2Nlc3NpbmdcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIiB0ZXh0PVwiU2F2ZSBDb250YWN0XCIgQHRhcD1cInN1Ym1pdENvbnRhY3RcIi8+XG4gICAgICAgIDxMYWJlbCB2LWlmPVwiIWNob3NlbkRhdGVcIiB0ZXh0PVwiKiBQbGVhc2UgcGljayBhIGRhdGVcIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogNVwiPjwvTGFiZWw+XG5cbiAgICAgICAgPExhYmVsIHYtaWY9XCIhcGhvbmVcIiB0ZXh0PVwiKiBQbGVhc2UgcGljayBhIHBob25lIG51bWJlclwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiA1XCI+PC9MYWJlbD5cblxuICAgICAgICA8TGFiZWwgdi1pZj1cImVycm9yXCIgdGV4dD1cIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDVcIj48L0xhYmVsPlxuXG5cdDwvU3RhY2tMYXlvdXQ+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5cbmltcG9ydCB7QkFTRV9BUEksIEdLRVl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGhvbmU6IG51bGwsXG4gICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG5pY2s6ICduaWNrJyxcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZTogJycsXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxuICAgICAgICAgICAgY2hvc2VuRGF0ZTogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgICAgICAgICAgY3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICAgIHByZWZpeDogJysyNTQnLFxuICAgICAgICAgICAgcHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIrMjU0XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGxvY2F0aW9uczogW10sXG4gICAgICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IG51bGwsXG4gICAgICAgICAgICB0ZXh0Q2xlYXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heGRhdGU6ICcnLFxuICAgICAgICAgICAgZmFrZUxvY3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmdhdGEgUm9uZ2FpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSmpVNzVVTThGTHhnUnFZejk1bGFXd2xFXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3Jlc2hvLCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSnphakxrYTBaTHhnUmpXdjNlLVZWQXFZXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFdhdGVyZnJvbnQsIE1hbWEgTmdpbmEgRHJpdmUsIE1vbWJhc2EsIEtlbnlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKbVlieE1QVVRRQmdScWFaS3B1UlJrNVFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgU3RyZWV0LCBOYWlyb2JpLCBLZW55YVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiRWlGTllXMWhJRTVuYVc1aElGTjBjbVZsZEN3Z1RtRnBjbTlpYVN3Z1MyVnVlV0VpTGlvc0NoUUtFZ25aSUJlejF4QXZHQkVrSVVzNWhXSHJFaElVQ2hJSlRRdTVGTmNRTHhnUlRDbDhLWnVQamZVXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRva2VuOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21vZGFsIGNyZWF0ZWQnKTtcblxuICAgICAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xuXG4gICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgdmFyIG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXhkYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxuICAgICAgICB9LFxuICAgICAgICBkYXRlQ2hhbmdlZCAoYXJnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyB2YXIgbmV3RGF0ZSA9IG5ldyBEYXRlKGFyZy52YWx1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hvc2VuRGF0ZSA9IGFyZy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UZXh0Q2xlYXIgKCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYXRpb25TZWxlY3RlZCAocGxhY2VpZCwgZGVzYykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIHNlbGVjdGVkOicgKyBkZXNjKTtcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBkZXNjO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbklkID0gcGxhY2VpZDtcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0Q29udGFjdCAoKSB7XG5cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IEJBU0VfQVBJICsgXCJVc2Vycy9jb250YWN0X2FkZFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiICwgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0aGlzLnRva2VufSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9pZDogdGhpcy5sb2NhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ19kYXRlOiBgJHt0aGlzLmNob3NlbkRhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0TW9udGgoKSArIDF9LSR7dGhpcy5jaG9zZW5EYXRlLmdldERhdGUoKX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucHJlZml4ICsgdGhpcy5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2s6IHRoaXMubmlja1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOidmYWRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGhpbmc6IG5ldyBEYXRlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaFN1Ym1pdCAoYXJncykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRQaHJhc2UgPSBzZWFyY2hCYXIudGV4dC5yZXBsYWNlKCcgJywgJysnKVxuICAgICAgICAgICAgLy90aGlzLmxvY2F0aW9ucyA9IHRoaXMuZmFrZUxvY3MgLy8gcmVzdWx0LnByZWRpY3Rpb25zO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbj9pbnB1dD0ke3Byb2Nlc3NlZFBocmFzZX0ma2V5PSR7R0tFWX1gLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSByZXN1bHQucHJlZGljdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2V0IHVwIHlvdXIgc2VhcmNoLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmRhdGUtcGlja2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9