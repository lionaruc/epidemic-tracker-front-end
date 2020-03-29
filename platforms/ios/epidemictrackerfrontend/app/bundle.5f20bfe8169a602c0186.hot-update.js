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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxrQkFWQTtBQVdBLG1CQVhBO0FBWUEsb0JBWkE7QUFhQSxzQkFiQTtBQWNBLHVCQWRBO0FBZUEsaUJBZkE7QUFnQkEsaUJBQ0E7QUFDQSw2Q0FEQTtBQUVBO0FBRkEsT0FEQSxFQUtBO0FBQ0EsZ0RBREE7QUFFQTtBQUZBLE9BTEEsRUFTQTtBQUNBLGdGQURBO0FBRUE7QUFGQSxPQVRBLEVBYUE7QUFDQSwwREFEQTtBQUVBO0FBRkEsT0FiQSxDQWhCQTtBQWtDQTtBQWxDQTtBQW9DQSxHQXRDQTs7QUF1Q0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBLEtBUEE7O0FBUUE7QUFDQTtBQUNBLEtBVkE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBOztBQWdCQTtBQUVBO0FBRUE7QUFDQSw2RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUEsU0FIQTtBQUlBO0FBQ0EsaUNBREE7QUFFQSxzQ0FGQTtBQUdBLDhJQUhBO0FBSUEsZ0NBSkE7QUFLQTtBQUxBO0FBSkEsU0FXQSxJQVhBLENBV0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUlBO0FBQ0E7QUFDQTtBQUVBLE9BekJBLEVBeUJBO0FBQ0E7QUFDQSxtQkFDQSx1REFEQTtBQUdBLE9BOUJBO0FBK0JBLEtBbkRBOztBQW9EQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQSxxQ0FYQSxDQVdBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUEvRUEsR0F2Q0E7O0FBd0hBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFuSUEsRyIsImZpbGUiOiJidW5kbGUuNWYyMGJmZTgxNjlhNjAyYzAxODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTIwXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXJcIiB0ZXh0PVwiQWRkIGEgY29udGFjdFwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCIvPlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XHJcblx0XHQgICAgXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lIGVnLiArMjU0eHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIDptb250aD1cImN1cnJlbnRNb250aFwiIDpkYXk9XCJjdXJyZW50RGF5XCJcclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPVwiMTk3MC0wMS0wMVwiICBzdHlsZT1cImhlaWdodDogMTAwO21hcmdpbi1ib3R0b206IDIzcHg7XCIgY2xhc3M9XCJkYXRlLXBpY2tlclwiLz5cclxuXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgaGludD1cIlR5cGUgaW4gYSBsb2NhdGlvblwiIDp0ZXh0PVwic2VhcmNoUGhyYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzdWJtaXQ9XCJzZWFyY2hTdWJtaXRcIiBAY2xlYXI9XCJvblRleHRDbGVhclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWRhcmtcIj48L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBzdHlsZT1cImhlaWdodDogMTAwOyBtYXJnaW4tdG9wOiAxMXB4O1wiIHYtaWY9XCIhbG9jYXRpb24gJiYgIXRleHRDbGVhcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIiBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbjogNztcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCInTG9jYXRpb246ICcgKyBsb2NhdGlvblwiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4OyBtYXJnaW4tdG9wOiAzM3B4O1wiLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiA6aXNFbmFibGVkPVwicGhvbmUgJiYgbmljayAmJiBsb2NhdGlvbiAmJiBjaG9zZW5EYXRlICYmICFwcm9jZXNzaW5nXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiU2F2ZSBDb250YWN0XCIgQHRhcD1cInN1Ym1pdENvbnRhY3RcIi8+XHJcbiAgICAgICAgPExhYmVsIHYtaWY9XCIhY2hvc2VuRGF0ZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgZGF0ZVwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiAxM1wiPjwvTGFiZWw+XHJcblxyXG4gICAgICAgIDxMYWJlbCB2LWlmPVwiIXBob25lXCIgdGV4dD1cIiogUGxlYXNlIHBpY2sgYSBwaG9uZSBudW1iZXJcIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogMTNcIj48L0xhYmVsPlxyXG5cclxuICAgICAgICA8TGFiZWwgdi1pZj1cImVycm9yXCIgdGV4dD1cIlNvcnJ5LCByZXF1ZXN0IGZhaWxlZCwgdHJ5IGFnYWluXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDEzXCI+PC9MYWJlbD5cclxuXHJcblx0XHQ8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7QkFTRV9BUEksIEdLRVl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBuaWNrOiAnbmljaycsXHJcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZTogJycsXHJcbiAgICAgICAgICAgIHN1c3BpY2lvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNob3NlbkRhdGU6IG51bGwsXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZSgpLFxyXG4gICAgICAgICAgICBjdXJyZW50TW9udGg6IG5ldyBEYXRlKCkuZ2V0VVRDTW9udGgoKSArIDEsXHJcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldFVUQ0Z1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgbG9jYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHRleHRDbGVhcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBtYXhkYXRlOiAnJyxcclxuICAgICAgICAgICAgZmFrZUxvY3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT25nYXRhIFJvbmdhaSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSmpVNzVVTThGTHhnUnFZejk1bGFXd2xFXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3Jlc2hvLCBOYWlyb2JpLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKemFqTGthMFpMeGdSald2M2UtVlZBcVlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgV2F0ZXJmcm9udCwgTWFtYSBOZ2luYSBEcml2ZSwgTW9tYmFzYSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSm1ZYnhNUFVUUUJnUnFhWktwdVJSazVRXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFN0cmVldCwgTmFpcm9iaSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiRWlGTllXMWhJRTVuYVc1aElGTjBjbVZsZEN3Z1RtRnBjbTlpYVN3Z1MyVnVlV0VpTGlvc0NoUUtFZ25aSUJlejF4QXZHQkVrSVVzNWhXSHJFaElVQ2hJSlRRdTVGTmNRTHhnUlRDbDhLWnVQamZVXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRva2VuOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZGF0ZUNoYW5nZWQgKGFyZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShhcmcudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaG9zZW5EYXRlID0gbmV3RGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVGV4dENsZWFyICgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uU2VsZWN0ZWQgKHBsYWNlaWQsIGRlc2MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIHNlbGVjdGVkOicgKyBkZXNjKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRlc2M7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25JZCA9IHBsYWNlaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRDb250YWN0ICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IEJBU0VfQVBJICsgXCJVc2Vycy9jb250YWN0X2FkZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHRoaXMubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ19kYXRlOiBgJHt0aGlzLmNob3NlbkRhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0TW9udGgoKX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0RGF5KCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUgKyAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmljazogdGhpcy5uaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzYXZlIHRoaXMgZGF0YSwgdHJ5IGFnYWluLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaFN1Ym1pdCAoYXJncykge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VhcmNoQmFyID0gYXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZWRQaHJhc2UgPSBzZWFyY2hCYXIudGV4dC5yZXBsYWNlKCcgJywgJysnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSB0aGlzLmZha2VMb2NzIC8vIHJlc3VsdC5wcmVkaWN0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8qcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvbj9pbnB1dD0ke3Byb2Nlc3NlZFBocmFzZX0ma2V5PSR7R0tFWX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3VsdC5wcmVkaWN0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzZXQgdXAgeW91ciBzZWFyY2guXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21vZGFsIGNyZWF0ZWQnKTtcclxuXHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYXhkYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLmRhdGUtcGlja2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlZHJhYjtcclxuICAgIGJvcmRlci1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTA7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==