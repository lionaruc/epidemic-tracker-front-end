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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHVCQUZBO0FBR0Esa0JBSEE7QUFJQSxzQkFKQTtBQUtBLHNCQUxBO0FBTUEsc0JBTkE7QUFPQSx5Q0FQQTtBQVFBLGdEQVJBO0FBU0EsOENBVEE7QUFVQSxrQkFWQTtBQVdBLG1CQVhBO0FBWUEsb0JBWkE7QUFhQSxzQkFiQTtBQWNBLHVCQWRBO0FBZUEsaUJBZkE7QUFnQkEsaUJBQ0E7QUFDQSw2Q0FEQTtBQUVBO0FBRkEsT0FEQSxFQUtBO0FBQ0EsZ0RBREE7QUFFQTtBQUZBLE9BTEEsRUFTQTtBQUNBLGdGQURBO0FBRUE7QUFGQSxPQVRBLEVBYUE7QUFDQSwwREFEQTtBQUVBO0FBRkEsT0FiQSxDQWhCQTtBQWtDQTtBQWxDQTtBQW9DQSxHQXRDQTs7QUF1Q0E7QUFDQTtBQUNBLDZCQURBLENBR0E7O0FBRUE7QUFDQSxLQVBBOztBQVFBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FmQTs7QUFnQkE7QUFFQTtBQUVBO0FBQ0EsNkZBREE7QUFFQSxzQkFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBLFNBSEE7QUFJQTtBQUNBLGlDQURBO0FBRUEsc0NBRkE7QUFHQSxtSkFIQTtBQUlBLGdDQUpBO0FBS0E7QUFMQTtBQUpBLFNBV0EsSUFYQSxDQVdBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFJQTtBQUNBO0FBQ0E7QUFFQSxPQXpCQSxFQXlCQTtBQUNBO0FBQ0EsbUJBQ0EsdURBREE7QUFHQSxPQTlCQTtBQStCQSxLQW5EQTs7QUFvREE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUEscUNBWEEsQ0FXQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBY0E7O0FBL0VBLEdBdkNBOztBQXdIQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBbklBLEciLCJmaWxlIjoiYnVuZGxlLjNlZjA0NGNjZDg3ZmY0NTE3M2U3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PFN0YWNrTGF5b3V0IGNsYXNzPVwicC0yMFwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImgyIHRleHQtY2VudGVyXCIgdGV4dD1cIkFkZCBhIGNvbnRhY3RcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiLz5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxyXG5cdFx0ICAgIFxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQaG9uZSBlZy4gKzI1NHh4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cInBob25lXCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiBcclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgOnllYXI9XCJjdXJyZW50WWVhclwiIEBkYXRlQ2hhbmdlPVwiZGF0ZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1vbnRoPVwiY3VycmVudE1vbnRoXCIgOmRheT1cImN1cnJlbnREYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCIgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7bWFyZ2luLWJvdHRvbTogMjNweDtcIiBjbGFzcz1cImRhdGUtcGlja2VyXCIvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlcmUgZGlkIHlvdSBtZWV0IHRoZW0/XCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIGhpbnQ9XCJUeXBlIGluIGEgbG9jYXRpb25cIiA6dGV4dD1cInNlYXJjaFBocmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3VibWl0PVwic2VhcmNoU3VibWl0XCIgQGNsZWFyPVwib25UZXh0Q2xlYXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1kYXJrXCI+PC9TdGFja0xheW91dD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCAgc3R5bGU9XCJoZWlnaHQ6IDEwMDsgbWFyZ2luLXRvcDogMTFweDtcIiB2LWlmPVwiIWxvY2F0aW9uICYmICF0ZXh0Q2xlYXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdi1mb3I9XCJsb2NhdGlvbiBpbiBsb2NhdGlvbnNcIiA6dGV4dD1cImxvY2F0aW9uLmRlc2NyaXB0aW9uXCIgQHRhcD1cImxvY2F0aW9uU2VsZWN0ZWQobG9jYXRpb24ucGxhY2VfaWQsIGxvY2F0aW9uLmRlc2NyaXB0aW9uKVwiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW46IDc7XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHYtaWY9XCJsb2NhdGlvblwiIDp0ZXh0PVwiJ0xvY2F0aW9uOiAnICsgbG9jYXRpb25cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDsgbWFyZ2luLXRvcDogMzNweDtcIi8+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdi1pZj1cInBob25lICYmIG5pY2sgJiYgbG9jYXRpb24gJiYgY2hvc2VuRGF0ZSAmJiAhcHJvY2Vzc2luZ1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIlNhdmUgQ29udGFjdFwiIEB0YXA9XCJzdWJtaXRDb250YWN0XCIvPlxyXG4gICAgICAgIDxMYWJlbCB2LWlmPVwiIWNob3NlbkRhdGVcIiB0ZXh0PVwiKiBQbGVhc2UgcGljayBhIGRhdGVcIiBzdHlsZT1cImNvbG9yOiByZWQ7IG1hcmdpbjogMTNcIj48L0xhYmVsPlxyXG5cclxuICAgICAgICA8TGFiZWwgdi1pZj1cIiFwaG9uZVwiIHRleHQ9XCIqIFBsZWFzZSBwaWNrIGEgcGhvbmUgbnVtYmVyXCIgc3R5bGU9XCJjb2xvcjogcmVkOyBtYXJnaW46IDEzXCI+PC9MYWJlbD5cclxuXHJcbiAgICAgICAgPExhYmVsIHYtaWY9XCJlcnJvclwiIHRleHQ9XCJTb3JyeSwgcmVxdWVzdCBmYWlsZWQsIHRyeSBhZ2FpblwiIHN0eWxlPVwiY29sb3I6IHJlZDsgbWFyZ2luOiAxM1wiPjwvTGFiZWw+XHJcblxyXG5cdFx0PEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZVwiIHRleHQ9XCJDbG9zZSBNb2RhbFwiIEB0YXA9XCIkbW9kYWwuY2xvc2UoKVwiIC8+XHJcblx0PC9TdGFja0xheW91dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5pbXBvcnQge0JBU0VfQVBJLCBHS0VZfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBob25lOiBudWxsLFxyXG4gICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbmljazogJ25pY2snLFxyXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2U6ICcnLFxyXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBjaG9zZW5EYXRlOiBudWxsLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF5OiBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUoKSxcclxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uczogW10sXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICBsb2NhdGlvbklkOiBudWxsLFxyXG4gICAgICAgICAgICB0ZXh0Q2xlYXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWF4ZGF0ZTogJycsXHJcbiAgICAgICAgICAgIGZha2VMb2NzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9uZ2F0YSBSb25nYWksIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUpqVTc1VU04Rkx4Z1JxWXo5NWxhV3dsRVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZXNobywgTmFpcm9iaSwgS2VueWFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlX2lkXCI6IFwiQ2hJSnphakxrYTBaTHhnUmpXdjNlLVZWQXFZXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYW1hIE5naW5hIFdhdGVyZnJvbnQsIE1hbWEgTmdpbmEgRHJpdmUsIE1vbWJhc2EsIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUptWWJ4TVBVVFFCZ1JxYVpLcHVSUms1UVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFtYSBOZ2luYSBTdHJlZXQsIE5haXJvYmksIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkVpRk5ZVzFoSUU1bmFXNWhJRk4wY21WbGRDd2dUbUZwY205aWFTd2dTMlZ1ZVdFaUxpb3NDaFFLRWduWklCZXoxeEF2R0JFa0lVczVoV0hyRWhJVUNoSUpUUXU1Rk5jUUx4Z1JUQ2w4S1p1UGpmVVwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGRhdGVDaGFuZ2VkIChhcmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBuZXdEYXRlID0gbmV3IERhdGUoYXJnLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuRGF0ZSA9IGFyZy52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVGV4dENsZWFyICgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uU2VsZWN0ZWQgKHBsYWNlaWQsIGRlc2MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIHNlbGVjdGVkOicgKyBkZXNjKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRlc2M7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25JZCA9IHBsYWNlaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRDb250YWN0ICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IEJBU0VfQVBJICsgXCJVc2Vycy9jb250YWN0X2FkZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHRoaXMubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ19kYXRlOiBgJHt0aGlzLmNob3NlbkRhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzLmNob3NlbkRhdGUuZ2V0TW9udGgoKSArIDF9LSR7dGhpcy5jaG9zZW5EYXRlLmdldERhdGUoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZSArICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrOiB0aGlzLm5pY2tcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoU3VibWl0IChhcmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hCYXIgPSBhcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFBocmFzZSA9IHNlYXJjaEJhci50ZXh0LnJlcGxhY2UoJyAnLCAnKycpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHRoaXMuZmFrZUxvY3MgLy8gcmVzdWx0LnByZWRpY3Rpb25zO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLypyZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2lucHV0PSR7cHJvY2Vzc2VkUGhyYXNlfSZrZXk9JHtHS0VZfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gcmVzdWx0LnByZWRpY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNldCB1cCB5b3VyIHNlYXJjaC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwgY3JlYXRlZCcpO1xyXG5cclxuICAgICAgICB0aGlzLnRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcclxuICAgICAgICB2YXIgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1heGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uZGF0ZS1waWNrZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb2xpdmVkcmFiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICBib3JkZXItd2lkdGg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9