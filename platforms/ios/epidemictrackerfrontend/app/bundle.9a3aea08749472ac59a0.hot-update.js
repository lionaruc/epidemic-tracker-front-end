webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./common/constants.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isLoggingIn: true,
      processing: false,
      user: {
        email: "vue@nativescript.org",
        password: null,
        phone: '',
        confirmPassword: "vue"
      }
    };
  },

  created() {
    // second parameter is default value
    this.user.phone = appSettings.getString("username", null);
  },

  methods: {
    onLoaded(args) {
      console.log('page is loaded.');
      var tok = appSettings.getString("tok", null);
      console.log(tok);

      if (tok) {
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
          clearHistory: true
        });
        console.log('logging in');
      }
    },

    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    login() {
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"])({
        url: _common_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_API"] + "Users/authenticate",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        content: JSON.stringify({
          username: this.user.phone,
          password: this.user.password
        })
      }).then(response => {
        var result = response.content.toJSON();
        this.processing = false;
        console.log(response);

        if (response.statusCode == 200) {
          appSettings.setString("tok", result.token);
          this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
            clearHistory: true
          });
        } else {
          this.alert("Unfortunately we could not find your account.");
        }
      }, e => {
        this.processing = false;
        this.alert("Unfortunately we could not find your account.");
      });
    },

    submit() {
      if (!this.user.password || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      }
    },

    noCode() {
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "AUTHENTICATION FAILED",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Db2RlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7QUFFQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBLHFDQURBO0FBRUEsc0JBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkE7QUFIQTtBQVVBLEdBWkE7O0FBYUE7QUFDQTtBQUNBO0FBQ0EsR0FoQkE7O0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FYQTs7QUFZQTtBQUNBO0FBQ0EsS0FkQTs7QUFlQTtBQUNBO0FBQ0EsOEZBREE7QUFFQSxzQkFGQTtBQUdBO0FBQUE7QUFBQSxTQUhBO0FBSUE7QUFDQSxtQ0FEQTtBQUVBO0FBRkE7QUFKQSxTQVFBLElBUkEsQ0FRQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0EsU0FKQSxNQUtBO0FBQ0EscUJBQ0EsK0NBREE7QUFHQTtBQUdBLE9BMUJBLEVBMEJBO0FBQ0E7QUFDQSxtQkFDQSwrQ0FEQTtBQUdBLE9BL0JBO0FBZ0NBLEtBaERBOztBQWlEQTtBQUNBO0FBQ0EsbUJBQ0Esb0RBREE7QUFHQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN0RBOztBQStEQTtBQUNBO0FBQUE7QUFBQTtBQUNBLEtBakVBOztBQW1FQTtBQUNBO0FBQ0EsS0FyRUE7O0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExRUE7O0FBMkVBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQWpGQTtBQWpCQSxHIiwiZmlsZSI6ImJ1bmRsZS45YTNhZWEwODc0OTQ3MmFjNTlhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiIEBsb2FkZWQ9XCJvbkxvYWRlZFwiPlxyXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiaGVhZGVyXCIgdGV4dD1cIkVudGVyIENvZGVcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiZGVzY1wiIHRleHQ9XCJQbGVhc2UgZW50ZXIgdGhlIGNvZGUgeW91IHJlY2VpdmVkXCI+PC9MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVwiaW5wdXRcIiBoaW50PVwiQ29kZVwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJwaG9uZVwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwibmV4dFwiIEByZXR1cm5QcmVzcz1cImZvY3VzUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjBcIj48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgKnYtc2hvdz1cImlzTG9nZ2luZ0luXCIgdGV4dD1cIkRpZG4ndCByZWNlaXZlIGNvZGU/XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxvZ2luLWxhYmVsXCIgQHRhcD1cIm5vQ29kZSgpXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuXHJcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxyXG4gICAgPC9QYWdlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuICAgIGltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnXHJcblxyXG4gICAgaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG4gICAgXHJcbiAgICBjb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJ2dWVAbmF0aXZlc2NyaXB0Lm9yZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwidnVlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIC8vIHNlY29uZCBwYXJhbWV0ZXIgaXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLnVzZXIucGhvbmUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VybmFtZVwiLCBudWxsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25Mb2FkZWQoYXJncyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFnZSBpcyBsb2FkZWQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rXCIsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvayk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBpbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luKCkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiVXNlcnMvYXV0aGVudGljYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VyLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy51c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2tcIiwgcmVzdWx0LnRva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLnBhc3N3b3JkIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBub0NvZGUgKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhMb2dpbiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBmb2N1c1Bhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5jb25maXJtUGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFVVEhFTlRJQ0FUSU9OIEZBSUxFRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLnBhZ2Uge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyO1xyXG4gICAgICAgIGhlaWdodDogOTA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNENTFBMUE7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2Mge1xyXG4gICAgICAgIG1hcmdpbjogOTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0OmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tbGFiZWwge1xyXG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0E4QThBODtcclxuICAgICAgICBmb250LXNpemU6IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWduLXVwLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcclxuICAgIH1cclxuXHJcbiAgICAuYm9sZCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=