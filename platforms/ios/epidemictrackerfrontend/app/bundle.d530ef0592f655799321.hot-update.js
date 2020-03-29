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
        url: BASE_API + "Users/contacts/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        content: JSON.stringify({
          location: this.location,
          location_id: this.locationId,
          meeting_date: "".concat(currentDate.getFullYear(), "-").concat(currentDate.getMonth(), "-").concat(currentDate.getDay()),
          phone: this.phone,
          nick: this.nick
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
    var currentDate = new Date();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    this.maxdate = "".concat(year, "-").concat(month, "-").concat(day);
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsdUJBRkE7QUFHQSxnQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQSxzQkFOQTtBQU9BLHlDQVBBO0FBUUEsZ0RBUkE7QUFTQSw4Q0FUQTtBQVVBLG1CQVZBO0FBV0Esb0JBWEE7QUFZQSxzQkFaQTtBQWFBLHVCQWJBO0FBY0EsaUJBZEE7QUFlQSxpQkFDQTtBQUNBLDZDQURBO0FBRUE7QUFGQSxPQURBLEVBS0E7QUFDQSxnREFEQTtBQUVBO0FBRkEsT0FMQSxFQVNBO0FBQ0EsZ0ZBREE7QUFFQTtBQUZBLE9BVEEsRUFhQTtBQUNBLDBEQURBO0FBRUE7QUFGQSxPQWJBO0FBZkE7QUFrQ0EsR0FwQ0E7O0FBcUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxLQVBBOztBQVFBO0FBQ0E7QUFDQSxLQVZBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FmQTs7QUFnQkE7QUFFQTtBQUVBO0FBQ0EsNENBREE7QUFFQSxzQkFGQTtBQUdBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQSxpQ0FEQTtBQUVBLHNDQUZBO0FBR0Esa0lBSEE7QUFJQSwyQkFKQTtBQUtBO0FBTEE7QUFKQSxTQVdBLElBWEEsQ0FXQTtBQUNBO0FBQ0E7QUFFQSxtQkFDQSx3QkFEQTtBQUlBLE9BbkJBLEVBbUJBO0FBQ0E7QUFDQSxtQkFDQSx1REFEQTtBQUdBLE9BeEJBO0FBeUJBLEtBN0NBOztBQThDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQSxxQ0FYQSxDQVdBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUF6RUEsR0FyQ0E7O0FBZ0hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBekhBLEciLCJmaWxlIjoiYnVuZGxlLmQ1MzBlZjA1OTJmNjU1Nzk5MzIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PFN0YWNrTGF5b3V0IGNsYXNzPVwicC0yMFwiIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCI+XHJcblxyXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cImgyIHRleHQtY2VudGVyXCIgdGV4dD1cIkFkZCBhIGNvbnRhY3RcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiLz5cclxuXHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibW9kYWwtZm9ybVwiPlxyXG5cdFx0ICAgIFxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIGhpbnQ9XCJQaG9uZSBlZy4gMjU0eHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm1vZGFsLWZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIk5pY2tuYW1lIGVnLiBKb2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwidGV4dFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwibmlja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiBcclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0ID5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiV2hlbiBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIDp5ZWFyPVwiY3VycmVudFllYXJcIiBAZGF0ZUNoYW5nZT1cImRhdGVDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIDptb250aD1cImN1cnJlbnRNb250aFwiIDpkYXk9XCJjdXJyZW50RGF5XCJcclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlPVwiMTk3MC0wMS0wMVwiICBzdHlsZT1cImhlaWdodDogMTAwO21hcmdpbi1ib3R0b206IDIzcHg7XCIgY2xhc3M9XCJkYXRlLXBpY2tlclwiLz5cclxuXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJXaGVyZSBkaWQgeW91IG1lZXQgdGhlbT9cIiBzdHlsZT1cImNvbG9yOiBibGFjazsgbWFyZ2luLWJvdHRvbTogMTNweDtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIgaGludD1cIlNlYXJjaCBoaW50XCIgOnRleHQ9XCJzZWFyY2hQaHJhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHN1Ym1pdD1cInNlYXJjaFN1Ym1pdFwiIEBjbGVhcj1cIm9uVGV4dENsZWFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICBzdHlsZT1cImhlaWdodDogMTAwOyBtYXJnaW4tdG9wOiAxMXB4O1wiIHYtaWY9XCIhbG9jYXRpb24gJiYgIXRleHRDbGVhcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB2LWZvcj1cImxvY2F0aW9uIGluIGxvY2F0aW9uc1wiIDp0ZXh0PVwibG9jYXRpb24uZGVzY3JpcHRpb25cIiBAdGFwPVwibG9jYXRpb25TZWxlY3RlZChsb2NhdGlvbi5wbGFjZV9pZCwgbG9jYXRpb24uZGVzY3JpcHRpb24pXCIgc3R5bGU9XCJjb2xvcjogYmxhY2s7IG1hcmdpbjogNztcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtb2RhbC1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdi1pZj1cImxvY2F0aW9uXCIgOnRleHQ9XCInTG9jYXRpb246ICcgKyBsb2NhdGlvblwiIHN0eWxlPVwiY29sb3I6IGJsYWNrOyBtYXJnaW4tYm90dG9tOiAxM3B4OyBtYXJnaW4tdG9wOiAzM3B4O1wiLz5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiA6aXNFbmFibGVkPVwicGhvbmUgJiYgbmljayAmJiAhcHJvY2Vzc2luZ1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIlNhdmUgQ29udGFjdFwiLz5cclxuXHJcblx0XHQ8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIgdGV4dD1cIkNsb3NlIE1vZGFsXCIgQHRhcD1cIiRtb2RhbC5jbG9zZSgpXCIgLz5cclxuXHQ8L1N0YWNrTGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiBpbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG4gaW1wb3J0IHtHS0VZfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGhvbmU6IG51bGwsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBuaWNrOiBudWxsLFxyXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2U6ICcnLFxyXG4gICAgICAgICAgICBzdXNwaWNpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBjaG9zZW5EYXRlOiBudWxsLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF5OiBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUoKSxcclxuICAgICAgICAgICAgY3VycmVudE1vbnRoOiBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKCkgKyAxLFxyXG4gICAgICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRVVENGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBsb2NhdGlvbnM6IFtdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogbnVsbCxcclxuICAgICAgICAgICAgdGV4dENsZWFyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1heGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBmYWtlTG9jczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPbmdhdGEgUm9uZ2FpLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKalU3NVVNOEZMeGdScVl6OTVsYVd3bEVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVzaG8sIE5haXJvYmksIEtlbnlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGFjZV9pZFwiOiBcIkNoSUp6YWpMa2EwWkx4Z1JqV3YzZS1WVkFxWVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWFtYSBOZ2luYSBXYXRlcmZyb250LCBNYW1hIE5naW5hIERyaXZlLCBNb21iYXNhLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJDaElKbVlieE1QVVRRQmdScWFaS3B1UlJrNVFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbWEgTmdpbmEgU3RyZWV0LCBOYWlyb2JpLCBLZW55YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxhY2VfaWRcIjogXCJFaUZOWVcxaElFNW5hVzVoSUZOMGNtVmxkQ3dnVG1GcGNtOWlhU3dnUzJWdWVXRWlMaW9zQ2hRS0VnblpJQmV6MXhBdkdCRWtJVXM1aFdIckVoSVVDaElKVFF1NUZOY1FMeGdSVENsOEtadVBqZlVcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGRhdGVDaGFuZ2VkIChhcmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJnLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdEYXRlID0gbmV3IERhdGUoYXJnLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hvc2VuRGF0ZSA9IG5ld0RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRleHRDbGVhciAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENsZWFyZWQgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhdGlvblNlbGVjdGVkIChwbGFjZWlkLCBkZXNjKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2NhdGlvbiBzZWxlY3RlZDonICsgZGVzYyk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24gPSBkZXNjO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uSWQgPSBwbGFjZWlkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0Q29udGFjdCAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiVXNlcnMvY29udGFjdHMvYWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHRoaXMubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVldGluZ19kYXRlOiBgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0ke2N1cnJlbnREYXRlLmdldE1vbnRoKCl9LSR7Y3VycmVudERhdGUuZ2V0RGF5KCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2s6IHRoaXMubmlja1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNhdmUgdGhpcyBkYXRhLCB0cnkgYWdhaW4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoU3VibWl0IChhcmdzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRleHRDbGVhcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hCYXIgPSBhcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZFBocmFzZSA9IHNlYXJjaEJhci50ZXh0LnJlcGxhY2UoJyAnLCAnKycpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IHRoaXMuZmFrZUxvY3MgLy8gcmVzdWx0LnByZWRpY3Rpb25zO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLypyZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL2F1dG9jb21wbGV0ZS9qc29uP2lucHV0PSR7cHJvY2Vzc2VkUGhyYXNlfSZrZXk9JHtHS0VZfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zID0gcmVzdWx0LnByZWRpY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNldCB1cCB5b3VyIHNlYXJjaC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKi9cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwgY3JlYXRlZCcpO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcclxuICAgICAgICB2YXIgbW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm1heGRhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uZGF0ZS1waWNrZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb2xpdmVkcmFiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgICBib3JkZXItd2lkdGg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9