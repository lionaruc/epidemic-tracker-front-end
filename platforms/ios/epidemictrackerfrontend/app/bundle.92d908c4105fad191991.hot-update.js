webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      phone: null,
      processing: false,
      nick: null,
      searchPhrase: '',
      suspicion: false,
      currentDay: new Date().getUTCDate(),
      currentMonth: new Date().getUTCMonth() + 1,
      currentYear: new Date().getUTCFullYear(),
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
      }]
    };
  },

  methods: {
    onTextClear() {
      this.textCleared = true;
    },

    locationSelected(placeid, desc) {
      console.log('location selected:' + desc);
      this.location = desc;
      this.locationId = placeid;
    },

    submitContact() {
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: BASE_API + "Users/contacts/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        content: JSON.stringify({
          username: complete_phone
        })
      }).then(response => {
        var result = response.content.toJSON();
        this.processing = false;
        this.alert("Submission successfull");
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
              url:  `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${processedPhrase}&key=AIzaSyCqqzoO9X699DTqXGNzfitoDfMEkLL_QDY`,
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
    var currentDate = new Date();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    this.maxdate = "".concat(year, "-").concat(month, "-").concat(day);
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQSx5Q0FOQTtBQU9BLGdEQVBBO0FBUUEsOENBUkE7QUFTQSxtQkFUQTtBQVVBLG9CQVZBO0FBV0Esc0JBWEE7QUFZQSx1QkFaQTtBQWFBLGlCQWJBO0FBY0EsaUJBQ0E7QUFDQSw2Q0FEQTtBQUVBO0FBRkEsT0FEQSxFQUtBO0FBQ0EsZ0RBREE7QUFFQTtBQUZBLE9BTEEsRUFTQTtBQUNBLGdGQURBO0FBRUE7QUFGQSxPQVRBLEVBYUE7QUFDQSwwREFEQTtBQUVBO0FBRkEsT0FiQTtBQWRBO0FBaUNBLEdBbkNBOztBQW9DQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFTQTtBQUNBO0FBQ0EsNENBREE7QUFFQSxzQkFGQTtBQUdBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQTtBQURBO0FBSkEsU0FPQSxJQVBBLENBT0E7QUFDQTtBQUNBO0FBRUEsbUJBQ0Esd0JBREE7QUFJQSxPQWZBLEVBZUE7QUFDQTtBQUNBLG1CQUNBLHVEQURBO0FBR0EsT0FwQkE7QUFxQkEsS0EvQkE7O0FBZ0NBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBLHFDQVhBLENBV0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWNBOztBQTNEQSxHQXBDQTs7QUFpR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUExR0EsRyIsImZpbGUiOiJidW5kbGUuOTJkOTA4YzQxMDVmYWQxOTE5OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTIwXCIgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIj5cclxuXHJcbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXJcIiB0ZXh0PVwiQWRkIGEgY29udGFjdFwiIHN0eWxlPVwiY29sb3I6IGJsYWNrXCIvPlxyXG5cclxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtXCI+XHJcblx0XHQgICAgXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lIGVnLiAyNTR4eFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwaG9uZVwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cIm5leHRcIj48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiTmlja25hbWUgZWcuIEpvZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJ0ZXh0XCIgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJuaWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuIFxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVuIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgOnllYXI9XCJjdXJyZW50WWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1vbnRoPVwiY3VycmVudE1vbnRoXCIgOmRheT1cImN1cnJlbnREYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGU9XCIxOTcwLTAxLTAxXCIgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7bWFyZ2luLWJvdHRvbTogMjNweDtcIiBjbGFzcz1cImRhdGUtcGlja2VyXCIvPlxyXG5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIldoZXJlIGRpZCB5b3UgbWVldCB0aGVtP1wiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4O1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBoaW50PVwiU2VhcmNoIGhpbnRcIiA6dGV4dD1cInNlYXJjaFBocmFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3VibWl0PVwic2VhcmNoU3VibWl0XCIgQGNsZWFyPVwib25UZXh0Q2xlYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgIHN0eWxlPVwiaGVpZ2h0OiAxMDA7IG1hcmdpbi10b3A6IDExcHg7XCIgdi1pZj1cIiFsb2NhdGlvbiAmJiAhdGV4dENsZWFyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHYtZm9yPVwibG9jYXRpb24gaW4gbG9jYXRpb25zXCIgOnRleHQ9XCJsb2NhdGlvbi5kZXNjcmlwdGlvblwiIEB0YXA9XCJsb2NhdGlvblNlbGVjdGVkKGxvY2F0aW9uLnBsYWNlX2lkLCBsb2NhdGlvbi5kZXNjcmlwdGlvbilcIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luOiA3O1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB2LWlmPVwibG9jYXRpb25cIiA6dGV4dD1cIidMb2NhdGlvbjogJyArIGxvY2F0aW9uXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbi1ib3R0b206IDEzcHg7IG1hcmdpbi10b3A6IDMzcHg7XCIvPlxyXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG5cclxuICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3Igcm93U3Bhbj1cIjNcIiA6YnVzeT1cInByb2Nlc3NpbmdcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxyXG5cclxuICAgICAgICA8QnV0dG9uIDppc0VuYWJsZWQ9XCJwaG9uZSAmJiBuaWNrICYmICFwcm9jZXNzaW5nXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiU2F2ZSBDb250YWN0XCIvPlxyXG5cclxuXHRcdDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiQ2xvc2UgTW9kYWxcIiBAdGFwPVwiJG1vZGFsLmNsb3NlKClcIiAvPlxyXG5cdDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuIGltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBuaWNrOiBudWxsLFxyXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2U6ICcnLFxyXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF5OiBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUoKSxcclxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBsb2NhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogbnVsbCxcclxuICAgICAgICAgICAgdGV4dENsZWFyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1heGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBmYWtlTG9jczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmdhdGEgUm9uZ2FpLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKalU3NVVNOEZMeGdScVl6OTVsYVd3bEVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVzaG8sIE5haXJvYmksIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUp6YWpMa2EwWkx4Z1JqV3YzZS1WVkFxWVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFtYSBOZ2luYSBXYXRlcmZyb250LCBNYW1hIE5naW5hIERyaXZlLCBNb21iYXNhLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKbVlieE1QVVRRQmdScWFaS3B1UlJrNVFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgU3RyZWV0LCBOYWlyb2JpLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJFaUZOWVcxaElFNW5hVzVoSUZOMGNtVmxkQ3dnVG1GcGNtOWlhU3dnUzJWdWVXRWlMaW9zQ2hRS0VnblpJQmV6MXhBdkdCRWtJVXM1aFdIckVoSVVDaElKVFF1NUZOY1FMeGdSVENsOEtadVBqZlVcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uVGV4dENsZWFyICgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Q2xlYXJlZCA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uU2VsZWN0ZWQgKHBsYWNlaWQsIGRlc2MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2F0aW9uIHNlbGVjdGVkOicgKyBkZXNjKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGRlc2M7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25JZCA9IHBsYWNlaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRDb250YWN0ICgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiVXNlcnMvY29udGFjdHMvYWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogY29tcGxldGVfcGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3Qgc2F2ZSB0aGlzIGRhdGEsIHRyeSBhZ2Fpbi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hTdWJtaXQgKGFyZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlYXJjaEJhciA9IGFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkUGhyYXNlID0gc2VhcmNoQmFyLnRleHQucmVwbGFjZSgnICcsICcrJylcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gdGhpcy5mYWtlTG9jcyAvLyByZXN1bHQucHJlZGljdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvKnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvYXV0b2NvbXBsZXRlL2pzb24/aW5wdXQ9JHtwcm9jZXNzZWRQaHJhc2V9JmtleT1BSXphU3lDcXF6b085WDY5OURUcVhHTnpmaXRvRGZNRWtMTF9RRFlgLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHJlc3VsdC5wcmVkaWN0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBzZXQgdXAgeW91ciBzZWFyY2guXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21vZGFsIGNyZWF0ZWQnKTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tYXhkYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YFxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLmRhdGUtcGlja2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlZHJhYjtcclxuICAgIGJvcmRlci1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTA7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==