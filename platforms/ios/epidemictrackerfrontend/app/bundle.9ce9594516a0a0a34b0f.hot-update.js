webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Code.vue");
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





var appSettings = __webpack_require__("tns-core-modules/application-settings");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      prefix: '+254',
      prefixes: ["+254"],
      user: {
        email: "vue@nativescript.org",
        password: "vue",
        phone: null,
        confirmPassword: "vue"
      }
    };
  },

  created() {
    this.user.phone = appSettings.getString("username", null);
  },

  methods: {
    onLoaded(args) {
      console.log('page is loaded.');
      var tok = appSettings.getString("tok", null);
      console.log(tok);

      if (tok) {
        this.$navigateTo(_Code__WEBPACK_IMPORTED_MODULE_1__["default"], {
          clearHistory: true
        }); // this.processing = true;

        console.log('logging in');
      }
    },

    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.phone) {
        this.alert("Please provide phone number to proceed.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      }
    },

    login() {
      var complete_phone = this.user.phone.indexOf('+') == -1 ? this.prefix + this.user.phone : this.user.phone;
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"])({
        url: _common_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_API"] + "Users/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        content: JSON.stringify({
          username: this.user.phone
        })
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);
        this.processing = false;

        if (response.statusCode == 200) {
          if (!appSettings.getString("username", null)) {
            appSettings.setString("username", this.user.phone);
          } else {
            appSettings.remove("username");
            appSettings.setString("username", this.user.phone);
          }

          this.$navigateTo(_Code__WEBPACK_IMPORTED_MODULE_1__["default"], {
            clearHistory: true
          });
        } else {
          this.alert("Unfortunately we could not set up your account.");
        }
      }, e => {
        this.processing = false;
        this.alert("Unfortunately we could not set up your account.");
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
        title: "APP NAME",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBO0FBRUE7QUFFQTtBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQSxvQkFIQTtBQUlBLGlCQUNBLE1BREEsQ0FKQTtBQU9BO0FBQ0EscUNBREE7QUFFQSx1QkFGQTtBQUdBLG1CQUhBO0FBSUE7QUFKQTtBQVBBO0FBY0EsR0FoQkE7O0FBaUJBO0FBRUE7QUFDQSxHQXBCQTs7QUFxQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQUE7QUFBQSxXQURBLENBRUE7O0FBQ0E7QUFDQTtBQUVBLEtBYkE7O0FBY0E7QUFDQTtBQUNBLEtBaEJBOztBQWlCQTtBQUNBO0FBQ0EsbUJBQ0EseUNBREE7QUFHQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN0JBOztBQStCQTtBQUVBO0FBRUE7QUFDQSx3RkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFBQTtBQUFBLFNBSEE7QUFJQTtBQUNBO0FBREE7QUFKQSxTQU9BLElBUEEsQ0FPQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQSxXQUhBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0EsU0FaQSxNQWNBO0FBQ0EscUJBQ0EsaURBREE7QUFHQTtBQUlBLE9BbkNBLEVBbUNBO0FBQ0E7QUFDQSxtQkFDQSxpREFEQTtBQUdBLE9BeENBO0FBeUNBLEtBNUVBOztBQThFQTtBQUNBO0FBQ0EsS0FoRkE7O0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyRkE7O0FBdUZBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLDBCQUZBO0FBR0E7QUFIQTtBQUtBOztBQTdGQTtBQXJCQSxHIiwiZmlsZSI6ImJ1bmRsZS45Y2U5NTk0NTE2YTBhMGEzNGIwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIiBAbG9hZGVkPVwib25Mb2FkZWRcIj5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIn4vaW1hZ2VzL2xvZ28ucG5nXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwiQ09ST05BIFRSQUNLXCI+PC9MYWJlbD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIlBob25lICsyNTR4eFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVwicGhvbmVcIiBhdXRvY29ycmVjdD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiIHYtbW9kZWw9XCJ1c2VyLnBob25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJoci1saWdodFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NlbmQgQ29kZScgOiAnU2lnbiBVcCdcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS10LTIwXCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgXG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcblxuICAgIGltcG9ydCBDb2RlIGZyb20gXCIuL0NvZGVcIjtcblxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG4gICAgaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG4gICAgY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnKzI1NCcsXG4gICAgICAgICAgICAgICAgcHJlZml4ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIrMjU0XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwidnVlQG5hdGl2ZXNjcmlwdC5vcmdcIixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwidnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IFwidnVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkICgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy51c2VyLnBob25lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uTG9hZGVkKGFyZ3Mpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWdlIGlzIGxvYWRlZC4nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvayA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvayk7XG4gICAgICAgICAgICAgICAgaWYgKHRvaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKENvZGUsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBpbicpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLnBob25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBsZWFzZSBwcm92aWRlIHBob25lIG51bWJlciB0byBwcm9jZWVkLlwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsb2dpbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZV9waG9uZSA9IHRoaXMudXNlci5waG9uZS5pbmRleE9mKCcrJykgPT0tMT8gdGhpcy5wcmVmaXggKyAgdGhpcy51c2VyLnBob25lOiB0aGlzLnVzZXIucGhvbmU7XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBCQVNFX0FQSSArIFwiVXNlcnMvc2lnbnVwXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlci5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXNlcm5hbWVcIiwgbnVsbCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVzZXJuYW1lXCIsIHRoaXMudXNlci5waG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcInVzZXJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVzZXJuYW1lXCIsIHRoaXMudXNlci5waG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ29kZSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNldCB1cCB5b3VyIGFjY291bnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IHNldCB1cCB5b3VyIGFjY291bnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFzc3dvcmQubmF0aXZlVmlldy5mb2N1cygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNvbmZpcm1QYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWxlcnQobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnBhZ2Uge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5mb3JtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwO1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjtcbiAgICAgICAgaGVpZ2h0OiA5MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNENTFBMUE7XG4gICAgfVxuXG4gICAgLmlucHV0LWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjU7XG4gICAgfVxuXG4gICAgLmlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxODtcbiAgICAgICAgcGxhY2Vob2xkZXItY29sb3I6ICNBOEE4QTg7XG4gICAgfVxuXG4gICAgLmlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkge1xuICAgICAgICBtYXJnaW46IDMwIDUgMTUgNTtcbiAgICB9XG5cbiAgICAubG9naW4tbGFiZWwge1xuICAgICAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjQThBOEE4O1xuICAgICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cblxuICAgIC5zaWduLXVwLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjA7XG4gICAgfVxuXG4gICAgLmJvbGQge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==