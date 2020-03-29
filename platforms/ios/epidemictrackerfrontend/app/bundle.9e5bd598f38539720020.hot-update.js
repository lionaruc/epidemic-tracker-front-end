webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
var Contacts = __webpack_require__("../node_modules/nativescript-contacts-lite/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  created() {
    console.log('modal created');
    var desiredFields = ['display_name', 'phone'];
    var searchTerm = 'Jon';
    console.log('Loading contacts...');
    var timer = new Date().getTime();
    Contacts.getContacts(desiredFields, searchTerm).then(result => {
      console.log("Loading contacts completed in ".concat(new Date().getTime() - timer, " ms."));
      console.log("Found ".concat(result.length, " contacts."));
      console.dir(result);
    }, e => {
      console.dir(e);
    });
  }

});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db250YWN0TW9kYWwudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FIQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkEsRUFJQTtBQUFBO0FBQUEsS0FKQTtBQUtBOztBQWxCQSxHIiwiZmlsZSI6ImJ1bmRsZS45ZTViZDU5OGYzODUzOTcyMDAyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxTdGFja0xheW91dCBjbGFzcz1cInAtMjBcIiBiYWNrZ3JvdW5kQ29sb3I9XCJibGFja1wiPlxyXG5cdFx0PExhYmVsIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXJcIiB0ZXh0PVwiVGhpcyBpcyBhIG1vZGFsIHBhZ2UuXCIgLz5cclxuXHRcdDxCdXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIiB0ZXh0PVwiQ2xvc2UgTW9kYWxcIiBAdGFwPVwiJG1vZGFsLmNsb3NlKClcIiAvPlxyXG5cdDwvU3RhY2tMYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxudmFyIENvbnRhY3RzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jb250YWN0cy1saXRlXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwgY3JlYXRlZCcpO1xyXG5cclxuICAgICAgICBsZXQgZGVzaXJlZEZpZWxkcyA9IFsnZGlzcGxheV9uYW1lJywncGhvbmUnXTtcclxubGV0IHNlYXJjaFRlcm0gPSAnSm9uJztcclxuIFxyXG5jb25zb2xlLmxvZygnTG9hZGluZyBjb250YWN0cy4uLicpO1xyXG5sZXQgdGltZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuIFxyXG5Db250YWN0cy5nZXRDb250YWN0cyhkZXNpcmVkRmllbGRzLHNlYXJjaFRlcm0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nIGNvbnRhY3RzIGNvbXBsZXRlZCBpbiAkeyhuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVyKX0gbXMuYCk7XHJcbiAgY29uc29sZS5sb2coYEZvdW5kICR7cmVzdWx0Lmxlbmd0aH0gY29udGFjdHMuYCk7XHJcbiAgY29uc29sZS5kaXIocmVzdWx0KTtcclxufSwgKGUpID0+IHsgY29uc29sZS5kaXIoZSk7IH0pO1xyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==