require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=script&lang=js&":
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'card',

  created() {
    console.log('card created');
    this.variant = this.score > 0 && this.score < 50 ? 'bg-danger' : 'bg-primary';
  },

  props: {
    variant: {
      type: String,
      default: 'bg-primary'
    },
    score: {
      type: Number,
      default: 0
    }
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./common/constants.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
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





var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

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
          appSettings.setString("userid", result.id + '');
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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
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



var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");


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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
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



var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

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

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-gauge/vue/index.js");
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/Card.vue");
/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/TimeLine.vue");
/* harmony import */ var _ContactAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/ContactAdd.vue");
/* harmony import */ var _QuizView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/QuizView.vue");
/* harmony import */ var _ContactModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./components/ContactModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3___default.a);







var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

var geoLocation = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Card: _Card__WEBPACK_IMPORTED_MODULE_5__["default"]
  },

  data() {
    return {
      processing: true,
      processingActivities: true,
      processingExposure: true,
      summary: null,
      exposure_level_1: [],
      exposure_level_2: [],
      exposure_level_3: [],
      intervalid1: null,
      contacts: [],
      token: null,
      userid: null,
      username: '',
      message: "Welcome",
      isPhone: null,
      webviewSrc: null,
      webviewLoading: false,
      currentGeoLocation: {
        latitude: null,
        longitude: null,
        altitude: null,
        direction: null
      }
    };
  },

  created() {
    this.token = appSettings.getString("tok", null);
    this.userid = appSettings.getString("userid", null); // second parameter is default value

    this.message = 'Welcome' + appSettings.getString("username", null);
    this.username = appSettings.getString("username", null);
    var currentDate = new Date();
    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var dayName = weekdays[day];
    this.day = dayName;
    this.date = date;
    this.year = year;
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthName = month[currentDate.getMonth()];
    this.month = monthName;
    this.loadSummary();
    this.loadContacts();
    this.loadExposure();
    var self = this;
    this.intervalid1 = setInterval(function () {
      self.loadSummary();
      self.loadContacts();
      self.loadExposure();
    }, 18000);
  },

  destroyed() {
    clearInterval(this.intervalid1);
  },

  methods: {
    onLoaded(args) {
      this.enableLocationServices();
    },

    enableLocationServices: function enableLocationServices() {
      geoLocation.isEnabled().then(enabled => {
        if (!enabled) {
          geoLocation.enableLocationRequest().then(() => this.showLocation());
        } else {
          this.showLocation();
        }
      });
    },
    showLocation: function showLocation() {
      geoLocation.watchLocation(location => {
        this.currentGeoLocation = location;
        this.webviewSrc = "https://imagemagikassets.s3.eu-central-1.amazonaws.com/maps_disp.html?key=".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["GKEY"], "&tok=").concat(this.token, "&lat=").concat(this.currentGeoLocation.latitude, "&lng=").concat(this.currentGeoLocation.longitude);
      }, error => {
        alert(error);
      }, {
        desiredAccuracy: 3,
        updateDistance: 10,
        minimumUpdateTime: 1000 * 1
      });
    },

    anyLevel() {
      return this.exposure_level_1.length > 0 || this.exposure_level_2.length > 0 || this.exposure_level_3.length > 0;
    },

    onWebViewLoaded(webargs) {
      this.webviewLoading = false;
    },

    loadSummary() {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Users/user_summary/").concat(this.userid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          this.summary = result;
          this.percentage = 6 - this.summary.latest_score_numeric / 100 * 6;
          this.percentageDescription = this.summary.latest_score_title;
        }

        this.processing = false;
      }, e => {
        this.alert("Unfortunately we could not fetch your data.");
      });
    },

    loadContacts() {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Users/user_contacts/").concat(this.userid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();

        if (response.statusCode == 200) {
          this.contacts = result.meetings;
        }

        this.processingActivities = false;
      }, e => {// this.processing = false;
      });
    },

    loadExposure() {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Users/user_exposure/").concat(this.userid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          this.exposure_level_1 = result.level_1;
          this.exposure_level_2 = result.level_2;
          this.exposure_level_3 = result.level_3;
        }

        this.processingExposure = false;
      }, e => {// this.processing = false;
      });
    },

    showModal() {
      this.$showModal(_ContactModal__WEBPACK_IMPORTED_MODULE_9__["default"]);
    },

    openContactForm() {
      this.$navigateTo(_ContactAdd__WEBPACK_IMPORTED_MODULE_7__["default"], {
        transition: {
          name: 'fade',
          duration: 1200,
          props: {
            nothing: new Date()
          }
        }
      });
    },

    openForm() {
      this.$navigateTo(_QuizView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        transition: {
          name: 'fade',
          duration: 1200
        },
        props: {
          quizid: this.summary.active_quiz_id
        }
      });
    },

    logout() {
      appSettings.remove("tok");
      appSettings.remove("username");
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clearHistory: true
      });
    },

    goToTimeline() {
      this.$navigateTo(_TimeLine__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Code.vue");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./common/constants.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
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





var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isLoggingIn: true,
      processing: false,
      prefix: '+254',
      prefixes: ["+254"],
      selectedIndex: 0,
      user: {
        email: "vue@nativescript.org",
        password: "vue",
        phone: null,
        confirmPassword: "vue"
      }
    };
  },

  created() {// this.user.phone = appSettings.getString("username", null);
  },

  methods: {
    onLoaded(args) {
      console.log('page is loaded.');
      var tok = appSettings.getString("tok", null);
      console.log(tok);

      if (tok) {
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
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
      var complete_phone = this.prefix + this.user.phone;
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"])({
        url: _common_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_API"] + "Users/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        content: JSON.stringify({
          username: complete_phone
        })
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);
        this.processing = false;

        if (response.statusCode == 200) {
          appSettings.setString("username", complete_phone);
          this.$navigateTo(_Code__WEBPACK_IMPORTED_MODULE_1__["default"], {
            clearHistory: true
          });
        } else {
          this.alert("Unfortunately we could not set up your account.");
        }
      }, e => {
        this.processing = false;
        console.log(e);
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

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-dataform/vue/index.js");
/* harmony import */ var nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./common/constants.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(nativescript_ui_dataform_vue__WEBPACK_IMPORTED_MODULE_2___default.a);


var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    // alert(this.id)
    // this.currentQuestion = items[currentQuestionIndex];
    this.token = appSettings.getString("tok", null);
    this.loadQuiz(this.quizid);
  },

  props: ['quizid'],

  data() {
    return {
      currentQuestion: null,
      currentQuestionIndex: 0,
      completed: false,
      items: [],
      listPickerCountries: ["Australia", "Belgium", "Bulgaria", "Canada", "Switzerland"],
      selectedListPickerIndex: 0,
      percentage: 0,
      percentageDescription: '',
      processing: true,
      quiz_id: null,
      quiz_name: 'loading',
      token: null
    };
  },

  methods: {
    submit() {
      var raw_data = JSON.stringify(this.items);
      console.log(raw_data);
      this.processing = true;
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: _common_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_API"] + "Quizes/submit_answers",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        },
        content: JSON.stringify({
          quiz_id: this.quizid,
          raw_quiz_data: raw_data
        })
      }).then(response => {
        var result = response.content.toJSON();
        this.processing = false;
        console.log(result);

        if (response.statusCode == 200) {
          this.completed = true;
          this.percentage = 6 - result.percentage / 100 * 6;
          this.percentageDescription = result.quizLevel;
        } else {
          this.alert("Unfortunately we could not save this data, try again.");
        }
      }, e => {
        this.processing = false;
        this.alert("Unfortunately we could not save this data, try again.");
      });
    },

    alert(message) {
      return alert({
        title: "Trace",
        okButtonText: "OK",
        message: message
      });
    },

    loadQuiz(quizid) {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_API"], "Quizes/view/").concat(quizid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["BASE_API"], "Quizes/view/").concat(quizid),
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          var processed = [];
          var qns = result.quiz.questions;
          this.quiz_id = result.quiz_id;
          this.quiz_name = result.quiz_name;

          for (var i = 0; i < qns.length; i++) {
            var currentQuestion = qns[i];
            var ans_array = [];
            var current_answers = currentQuestion.answers;

            for (var j = 0; j < current_answers.length; j++) {
              var current_ans = current_answers[j];
              ans_array.push(current_ans.answer_text);
            }

            currentQuestion.display_answers = ans_array;
            currentQuestion.selectedIndex = 0;
            processed.push(currentQuestion);
          }

          this.items = processed;
        }

        this.processing = false;
      }, e => {
        // this.processing = false;
        this.alert("Unfortunately we could not fetch the quiz.");
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TimeLine.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      username: '',
      timeline: [{
        name: "John Oliver",
        address: "Mama Ngina's",
        type: "Meet",
        date: "2h ago"
      }, {
        name: "Citi Hopa",
        address: "BS, Nairobi",
        type: "Ride",
        date: "3h ago"
      }, {
        name: "Uber",
        address: "Muindi Mbingu",
        type: "Ride",
        date: "3h ago"
      }, {
        name: "Metro",
        address: "Kenya Archives",
        type: "Ride",
        date: "3h ago"
      }, {
        name: "Citi Hopa",
        address: "Kenya Archives",
        type: "Ride",
        date: "3h ago"
      }],
      message: "Welcome"
    };
  },

  created() {
    // second parameter is default value
    this.message = 'Welcome' + appSettings.getString("username", null);
    this.username = appSettings.getString("username", null);
    var currentDate = new Date();
    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var dayName = weekdays[day];
    this.day = dayName;
    this.date = date;
    this.year = year;
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthName = month[currentDate.getMonth()];
    this.month = monthName;
  },

  methods: {
    logout() {
      appSettings.remove("tok");
      appSettings.remove("username");
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    },

    goToHome() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!./css/core.light.css":
/***/ (function(module, exports) {

module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"!\n * NativeScript Theme v1.0.6 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n "},{"type":"rule","selectors":[".c-white"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".c-bg-white"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".c-black"],"declarations":[{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".c-bg-black"],"declarations":[{"type":"declaration","property":"background-color","value":"#000"}]},{"type":"rule","selectors":[".c-aqua"],"declarations":[{"type":"declaration","property":"color","value":"#00caab"}]},{"type":"rule","selectors":[".c-bg-aqua"],"declarations":[{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".c-blue"],"declarations":[{"type":"declaration","property":"color","value":"#3d5afe"}]},{"type":"rule","selectors":[".c-bg-blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#3d5afe"}]},{"type":"rule","selectors":[".c-charcoal"],"declarations":[{"type":"declaration","property":"color","value":"#303030"}]},{"type":"rule","selectors":[".c-bg-charcoal"],"declarations":[{"type":"declaration","property":"background-color","value":"#303030"}]},{"type":"rule","selectors":[".c-brown"],"declarations":[{"type":"declaration","property":"color","value":"#795548"}]},{"type":"rule","selectors":[".c-bg-brown"],"declarations":[{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".c-forest"],"declarations":[{"type":"declaration","property":"color","value":"#006968"}]},{"type":"rule","selectors":[".c-bg-forest"],"declarations":[{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".c-grey"],"declarations":[{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".c-bg-grey"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".c-grey-light"],"declarations":[{"type":"declaration","property":"color","value":"#bababa"}]},{"type":"rule","selectors":[".c-bg-grey-light"],"declarations":[{"type":"declaration","property":"background-color","value":"#bababa"}]},{"type":"rule","selectors":[".c-grey-dark"],"declarations":[{"type":"declaration","property":"color","value":"#5c687c"}]},{"type":"rule","selectors":[".c-bg-grey-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".c-purple"],"declarations":[{"type":"declaration","property":"color","value":"#8130ff"}]},{"type":"rule","selectors":[".c-bg-purple"],"declarations":[{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".c-lemon"],"declarations":[{"type":"declaration","property":"color","value":"#ffea00"}]},{"type":"rule","selectors":[".c-bg-lemon"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffea00"}]},{"type":"rule","selectors":[".c-lime"],"declarations":[{"type":"declaration","property":"color","value":"#aee406"}]},{"type":"rule","selectors":[".c-bg-lime"],"declarations":[{"type":"declaration","property":"background-color","value":"#aee406"}]},{"type":"rule","selectors":[".c-orange"],"declarations":[{"type":"declaration","property":"color","value":"#f57c00"}]},{"type":"rule","selectors":[".c-bg-orange"],"declarations":[{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".c-ruby"],"declarations":[{"type":"declaration","property":"color","value":"#ff1744"}]},{"type":"rule","selectors":[".c-bg-ruby"],"declarations":[{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".c-sky"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".c-bg-sky"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".w-full"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".w-100"],"declarations":[{"type":"declaration","property":"width","value":"100"}]},{"type":"rule","selectors":[".h-full"],"declarations":[{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":[".h-100"],"declarations":[{"type":"declaration","property":"height","value":"100"}]},{"type":"rule","selectors":[".m-0"],"declarations":[{"type":"declaration","property":"margin","value":"0"}]},{"type":"rule","selectors":[".m-t-0"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":[".m-r-0"],"declarations":[{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":[".m-b-0"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":[".m-l-0"],"declarations":[{"type":"declaration","property":"margin-left","value":"0"}]},{"type":"rule","selectors":[".m-x-0"],"declarations":[{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"margin-left","value":"0"}]},{"type":"rule","selectors":[".m-y-0"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"},{"type":"declaration","property":"margin-bottom","value":"0"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"2"}]},{"type":"rule","selectors":[".m-t-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"2"}]},{"type":"rule","selectors":[".m-r-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"2"}]},{"type":"rule","selectors":[".m-b-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"2"}]},{"type":"rule","selectors":[".m-l-2"],"declarations":[{"type":"declaration","property":"margin-left","value":"2"}]},{"type":"rule","selectors":[".m-x-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"2"},{"type":"declaration","property":"margin-left","value":"2"}]},{"type":"rule","selectors":[".m-y-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"2"},{"type":"declaration","property":"margin-bottom","value":"2"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-t-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"4"}]},{"type":"rule","selectors":[".m-r-4"],"declarations":[{"type":"declaration","property":"margin-right","value":"4"}]},{"type":"rule","selectors":[".m-b-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".m-l-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"4"}]},{"type":"rule","selectors":[".m-x-4"],"declarations":[{"type":"declaration","property":"margin-right","value":"4"},{"type":"declaration","property":"margin-left","value":"4"}]},{"type":"rule","selectors":[".m-y-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"4"},{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".m-5"],"declarations":[{"type":"declaration","property":"margin","value":"5"}]},{"type":"rule","selectors":[".m-t-5"],"declarations":[{"type":"declaration","property":"margin-top","value":"5"}]},{"type":"rule","selectors":[".m-r-5"],"declarations":[{"type":"declaration","property":"margin-right","value":"5"}]},{"type":"rule","selectors":[".m-b-5"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"5"}]},{"type":"rule","selectors":[".m-l-5"],"declarations":[{"type":"declaration","property":"margin-left","value":"5"}]},{"type":"rule","selectors":[".m-x-5"],"declarations":[{"type":"declaration","property":"margin-right","value":"5"},{"type":"declaration","property":"margin-left","value":"5"}]},{"type":"rule","selectors":[".m-y-5"],"declarations":[{"type":"declaration","property":"margin-top","value":"5"},{"type":"declaration","property":"margin-bottom","value":"5"}]},{"type":"rule","selectors":[".m-8"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-t-8"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".m-r-8"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".m-b-8"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".m-l-8"],"declarations":[{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".m-x-8"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"},{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".m-y-8"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"},{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".m-10"],"declarations":[{"type":"declaration","property":"margin","value":"10"}]},{"type":"rule","selectors":[".m-t-10"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".m-r-10"],"declarations":[{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".m-b-10"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".m-l-10"],"declarations":[{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".m-x-10"],"declarations":[{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-left","value":"10"}]},{"type":"rule","selectors":[".m-y-10"],"declarations":[{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".m-12"],"declarations":[{"type":"declaration","property":"margin","value":"12"}]},{"type":"rule","selectors":[".m-t-12"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"}]},{"type":"rule","selectors":[".m-r-12"],"declarations":[{"type":"declaration","property":"margin-right","value":"12"}]},{"type":"rule","selectors":[".m-b-12"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"12"}]},{"type":"rule","selectors":[".m-l-12"],"declarations":[{"type":"declaration","property":"margin-left","value":"12"}]},{"type":"rule","selectors":[".m-x-12"],"declarations":[{"type":"declaration","property":"margin-right","value":"12"},{"type":"declaration","property":"margin-left","value":"12"}]},{"type":"rule","selectors":[".m-y-12"],"declarations":[{"type":"declaration","property":"margin-top","value":"12"},{"type":"declaration","property":"margin-bottom","value":"12"}]},{"type":"rule","selectors":[".m-15"],"declarations":[{"type":"declaration","property":"margin","value":"15"}]},{"type":"rule","selectors":[".m-t-15"],"declarations":[{"type":"declaration","property":"margin-top","value":"15"}]},{"type":"rule","selectors":[".m-r-15"],"declarations":[{"type":"declaration","property":"margin-right","value":"15"}]},{"type":"rule","selectors":[".m-b-15"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".m-l-15"],"declarations":[{"type":"declaration","property":"margin-left","value":"15"}]},{"type":"rule","selectors":[".m-x-15"],"declarations":[{"type":"declaration","property":"margin-right","value":"15"},{"type":"declaration","property":"margin-left","value":"15"}]},{"type":"rule","selectors":[".m-y-15"],"declarations":[{"type":"declaration","property":"margin-top","value":"15"},{"type":"declaration","property":"margin-bottom","value":"15"}]},{"type":"rule","selectors":[".m-16"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".m-t-16"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".m-r-16"],"declarations":[{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".m-b-16"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".m-l-16"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".m-x-16"],"declarations":[{"type":"declaration","property":"margin-right","value":"16"},{"type":"declaration","property":"margin-left","value":"16"}]},{"type":"rule","selectors":[".m-y-16"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"},{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".m-20"],"declarations":[{"type":"declaration","property":"margin","value":"20"}]},{"type":"rule","selectors":[".m-t-20"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"}]},{"type":"rule","selectors":[".m-r-20"],"declarations":[{"type":"declaration","property":"margin-right","value":"20"}]},{"type":"rule","selectors":[".m-b-20"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".m-l-20"],"declarations":[{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".m-x-20"],"declarations":[{"type":"declaration","property":"margin-right","value":"20"},{"type":"declaration","property":"margin-left","value":"20"}]},{"type":"rule","selectors":[".m-y-20"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"},{"type":"declaration","property":"margin-bottom","value":"20"}]},{"type":"rule","selectors":[".m-24"],"declarations":[{"type":"declaration","property":"margin","value":"24"}]},{"type":"rule","selectors":[".m-t-24"],"declarations":[{"type":"declaration","property":"margin-top","value":"24"}]},{"type":"rule","selectors":[".m-r-24"],"declarations":[{"type":"declaration","property":"margin-right","value":"24"}]},{"type":"rule","selectors":[".m-b-24"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".m-l-24"],"declarations":[{"type":"declaration","property":"margin-left","value":"24"}]},{"type":"rule","selectors":[".m-x-24"],"declarations":[{"type":"declaration","property":"margin-right","value":"24"},{"type":"declaration","property":"margin-left","value":"24"}]},{"type":"rule","selectors":[".m-y-24"],"declarations":[{"type":"declaration","property":"margin-top","value":"24"},{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".m-25"],"declarations":[{"type":"declaration","property":"margin","value":"25"}]},{"type":"rule","selectors":[".m-t-25"],"declarations":[{"type":"declaration","property":"margin-top","value":"25"}]},{"type":"rule","selectors":[".m-r-25"],"declarations":[{"type":"declaration","property":"margin-right","value":"25"}]},{"type":"rule","selectors":[".m-b-25"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".m-l-25"],"declarations":[{"type":"declaration","property":"margin-left","value":"25"}]},{"type":"rule","selectors":[".m-x-25"],"declarations":[{"type":"declaration","property":"margin-right","value":"25"},{"type":"declaration","property":"margin-left","value":"25"}]},{"type":"rule","selectors":[".m-y-25"],"declarations":[{"type":"declaration","property":"margin-top","value":"25"},{"type":"declaration","property":"margin-bottom","value":"25"}]},{"type":"rule","selectors":[".m-28"],"declarations":[{"type":"declaration","property":"margin","value":"28"}]},{"type":"rule","selectors":[".m-t-28"],"declarations":[{"type":"declaration","property":"margin-top","value":"28"}]},{"type":"rule","selectors":[".m-r-28"],"declarations":[{"type":"declaration","property":"margin-right","value":"28"}]},{"type":"rule","selectors":[".m-b-28"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"28"}]},{"type":"rule","selectors":[".m-l-28"],"declarations":[{"type":"declaration","property":"margin-left","value":"28"}]},{"type":"rule","selectors":[".m-x-28"],"declarations":[{"type":"declaration","property":"margin-right","value":"28"},{"type":"declaration","property":"margin-left","value":"28"}]},{"type":"rule","selectors":[".m-y-28"],"declarations":[{"type":"declaration","property":"margin-top","value":"28"},{"type":"declaration","property":"margin-bottom","value":"28"}]},{"type":"rule","selectors":[".m-30"],"declarations":[{"type":"declaration","property":"margin","value":"30"}]},{"type":"rule","selectors":[".m-t-30"],"declarations":[{"type":"declaration","property":"margin-top","value":"30"}]},{"type":"rule","selectors":[".m-r-30"],"declarations":[{"type":"declaration","property":"margin-right","value":"30"}]},{"type":"rule","selectors":[".m-b-30"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"30"}]},{"type":"rule","selectors":[".m-l-30"],"declarations":[{"type":"declaration","property":"margin-left","value":"30"}]},{"type":"rule","selectors":[".m-x-30"],"declarations":[{"type":"declaration","property":"margin-right","value":"30"},{"type":"declaration","property":"margin-left","value":"30"}]},{"type":"rule","selectors":[".m-y-30"],"declarations":[{"type":"declaration","property":"margin-top","value":"30"},{"type":"declaration","property":"margin-bottom","value":"30"}]},{"type":"rule","selectors":[".p-0"],"declarations":[{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".p-t-0"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"}]},{"type":"rule","selectors":[".p-r-0"],"declarations":[{"type":"declaration","property":"padding-right","value":"0"}]},{"type":"rule","selectors":[".p-b-0"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".p-l-0"],"declarations":[{"type":"declaration","property":"padding-left","value":"0"}]},{"type":"rule","selectors":[".p-x-0"],"declarations":[{"type":"declaration","property":"padding-right","value":"0"},{"type":"declaration","property":"padding-left","value":"0"}]},{"type":"rule","selectors":[".p-y-0"],"declarations":[{"type":"declaration","property":"padding-top","value":"0"},{"type":"declaration","property":"padding-bottom","value":"0"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"2"}]},{"type":"rule","selectors":[".p-t-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"2"}]},{"type":"rule","selectors":[".p-r-2"],"declarations":[{"type":"declaration","property":"padding-right","value":"2"}]},{"type":"rule","selectors":[".p-b-2"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"2"}]},{"type":"rule","selectors":[".p-l-2"],"declarations":[{"type":"declaration","property":"padding-left","value":"2"}]},{"type":"rule","selectors":[".p-x-2"],"declarations":[{"type":"declaration","property":"padding-right","value":"2"},{"type":"declaration","property":"padding-left","value":"2"}]},{"type":"rule","selectors":[".p-y-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"2"},{"type":"declaration","property":"padding-bottom","value":"2"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"4"}]},{"type":"rule","selectors":[".p-t-4"],"declarations":[{"type":"declaration","property":"padding-top","value":"4"}]},{"type":"rule","selectors":[".p-r-4"],"declarations":[{"type":"declaration","property":"padding-right","value":"4"}]},{"type":"rule","selectors":[".p-b-4"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"4"}]},{"type":"rule","selectors":[".p-l-4"],"declarations":[{"type":"declaration","property":"padding-left","value":"4"}]},{"type":"rule","selectors":[".p-x-4"],"declarations":[{"type":"declaration","property":"padding-right","value":"4"},{"type":"declaration","property":"padding-left","value":"4"}]},{"type":"rule","selectors":[".p-y-4"],"declarations":[{"type":"declaration","property":"padding-top","value":"4"},{"type":"declaration","property":"padding-bottom","value":"4"}]},{"type":"rule","selectors":[".p-5"],"declarations":[{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".p-t-5"],"declarations":[{"type":"declaration","property":"padding-top","value":"5"}]},{"type":"rule","selectors":[".p-r-5"],"declarations":[{"type":"declaration","property":"padding-right","value":"5"}]},{"type":"rule","selectors":[".p-b-5"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"5"}]},{"type":"rule","selectors":[".p-l-5"],"declarations":[{"type":"declaration","property":"padding-left","value":"5"}]},{"type":"rule","selectors":[".p-x-5"],"declarations":[{"type":"declaration","property":"padding-right","value":"5"},{"type":"declaration","property":"padding-left","value":"5"}]},{"type":"rule","selectors":[".p-y-5"],"declarations":[{"type":"declaration","property":"padding-top","value":"5"},{"type":"declaration","property":"padding-bottom","value":"5"}]},{"type":"rule","selectors":[".p-8"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-t-8"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"}]},{"type":"rule","selectors":[".p-r-8"],"declarations":[{"type":"declaration","property":"padding-right","value":"8"}]},{"type":"rule","selectors":[".p-b-8"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".p-l-8"],"declarations":[{"type":"declaration","property":"padding-left","value":"8"}]},{"type":"rule","selectors":[".p-x-8"],"declarations":[{"type":"declaration","property":"padding-right","value":"8"},{"type":"declaration","property":"padding-left","value":"8"}]},{"type":"rule","selectors":[".p-y-8"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".p-10"],"declarations":[{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":[".p-t-10"],"declarations":[{"type":"declaration","property":"padding-top","value":"10"}]},{"type":"rule","selectors":[".p-r-10"],"declarations":[{"type":"declaration","property":"padding-right","value":"10"}]},{"type":"rule","selectors":[".p-b-10"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"10"}]},{"type":"rule","selectors":[".p-l-10"],"declarations":[{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":[".p-x-10"],"declarations":[{"type":"declaration","property":"padding-right","value":"10"},{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":[".p-y-10"],"declarations":[{"type":"declaration","property":"padding-top","value":"10"},{"type":"declaration","property":"padding-bottom","value":"10"}]},{"type":"rule","selectors":[".p-12"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-t-12"],"declarations":[{"type":"declaration","property":"padding-top","value":"12"}]},{"type":"rule","selectors":[".p-r-12"],"declarations":[{"type":"declaration","property":"padding-right","value":"12"}]},{"type":"rule","selectors":[".p-b-12"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"12"}]},{"type":"rule","selectors":[".p-l-12"],"declarations":[{"type":"declaration","property":"padding-left","value":"12"}]},{"type":"rule","selectors":[".p-x-12"],"declarations":[{"type":"declaration","property":"padding-right","value":"12"},{"type":"declaration","property":"padding-left","value":"12"}]},{"type":"rule","selectors":[".p-y-12"],"declarations":[{"type":"declaration","property":"padding-top","value":"12"},{"type":"declaration","property":"padding-bottom","value":"12"}]},{"type":"rule","selectors":[".p-15"],"declarations":[{"type":"declaration","property":"padding","value":"15"}]},{"type":"rule","selectors":[".p-t-15"],"declarations":[{"type":"declaration","property":"padding-top","value":"15"}]},{"type":"rule","selectors":[".p-r-15"],"declarations":[{"type":"declaration","property":"padding-right","value":"15"}]},{"type":"rule","selectors":[".p-b-15"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"15"}]},{"type":"rule","selectors":[".p-l-15"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".p-x-15"],"declarations":[{"type":"declaration","property":"padding-right","value":"15"},{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".p-y-15"],"declarations":[{"type":"declaration","property":"padding-top","value":"15"},{"type":"declaration","property":"padding-bottom","value":"15"}]},{"type":"rule","selectors":[".p-16"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-t-16"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"}]},{"type":"rule","selectors":[".p-r-16"],"declarations":[{"type":"declaration","property":"padding-right","value":"16"}]},{"type":"rule","selectors":[".p-b-16"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"16"}]},{"type":"rule","selectors":[".p-l-16"],"declarations":[{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".p-x-16"],"declarations":[{"type":"declaration","property":"padding-right","value":"16"},{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".p-y-16"],"declarations":[{"type":"declaration","property":"padding-top","value":"16"},{"type":"declaration","property":"padding-bottom","value":"16"}]},{"type":"rule","selectors":[".p-20"],"declarations":[{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".p-t-20"],"declarations":[{"type":"declaration","property":"padding-top","value":"20"}]},{"type":"rule","selectors":[".p-r-20"],"declarations":[{"type":"declaration","property":"padding-right","value":"20"}]},{"type":"rule","selectors":[".p-b-20"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"20"}]},{"type":"rule","selectors":[".p-l-20"],"declarations":[{"type":"declaration","property":"padding-left","value":"20"}]},{"type":"rule","selectors":[".p-x-20"],"declarations":[{"type":"declaration","property":"padding-right","value":"20"},{"type":"declaration","property":"padding-left","value":"20"}]},{"type":"rule","selectors":[".p-y-20"],"declarations":[{"type":"declaration","property":"padding-top","value":"20"},{"type":"declaration","property":"padding-bottom","value":"20"}]},{"type":"rule","selectors":[".p-24"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".p-t-24"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"}]},{"type":"rule","selectors":[".p-r-24"],"declarations":[{"type":"declaration","property":"padding-right","value":"24"}]},{"type":"rule","selectors":[".p-b-24"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"24"}]},{"type":"rule","selectors":[".p-l-24"],"declarations":[{"type":"declaration","property":"padding-left","value":"24"}]},{"type":"rule","selectors":[".p-x-24"],"declarations":[{"type":"declaration","property":"padding-right","value":"24"},{"type":"declaration","property":"padding-left","value":"24"}]},{"type":"rule","selectors":[".p-y-24"],"declarations":[{"type":"declaration","property":"padding-top","value":"24"},{"type":"declaration","property":"padding-bottom","value":"24"}]},{"type":"rule","selectors":[".p-25"],"declarations":[{"type":"declaration","property":"padding","value":"25"}]},{"type":"rule","selectors":[".p-t-25"],"declarations":[{"type":"declaration","property":"padding-top","value":"25"}]},{"type":"rule","selectors":[".p-r-25"],"declarations":[{"type":"declaration","property":"padding-right","value":"25"}]},{"type":"rule","selectors":[".p-b-25"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"25"}]},{"type":"rule","selectors":[".p-l-25"],"declarations":[{"type":"declaration","property":"padding-left","value":"25"}]},{"type":"rule","selectors":[".p-x-25"],"declarations":[{"type":"declaration","property":"padding-right","value":"25"},{"type":"declaration","property":"padding-left","value":"25"}]},{"type":"rule","selectors":[".p-y-25"],"declarations":[{"type":"declaration","property":"padding-top","value":"25"},{"type":"declaration","property":"padding-bottom","value":"25"}]},{"type":"rule","selectors":[".p-28"],"declarations":[{"type":"declaration","property":"padding","value":"28"}]},{"type":"rule","selectors":[".p-t-28"],"declarations":[{"type":"declaration","property":"padding-top","value":"28"}]},{"type":"rule","selectors":[".p-r-28"],"declarations":[{"type":"declaration","property":"padding-right","value":"28"}]},{"type":"rule","selectors":[".p-b-28"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"28"}]},{"type":"rule","selectors":[".p-l-28"],"declarations":[{"type":"declaration","property":"padding-left","value":"28"}]},{"type":"rule","selectors":[".p-x-28"],"declarations":[{"type":"declaration","property":"padding-right","value":"28"},{"type":"declaration","property":"padding-left","value":"28"}]},{"type":"rule","selectors":[".p-y-28"],"declarations":[{"type":"declaration","property":"padding-top","value":"28"},{"type":"declaration","property":"padding-bottom","value":"28"}]},{"type":"rule","selectors":[".p-30"],"declarations":[{"type":"declaration","property":"padding","value":"30"}]},{"type":"rule","selectors":[".p-t-30"],"declarations":[{"type":"declaration","property":"padding-top","value":"30"}]},{"type":"rule","selectors":[".p-r-30"],"declarations":[{"type":"declaration","property":"padding-right","value":"30"}]},{"type":"rule","selectors":[".p-b-30"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"30"}]},{"type":"rule","selectors":[".p-l-30"],"declarations":[{"type":"declaration","property":"padding-left","value":"30"}]},{"type":"rule","selectors":[".p-x-30"],"declarations":[{"type":"declaration","property":"padding-right","value":"30"},{"type":"declaration","property":"padding-left","value":"30"}]},{"type":"rule","selectors":[".p-y-30"],"declarations":[{"type":"declaration","property":"padding-top","value":"30"},{"type":"declaration","property":"padding-bottom","value":"30"}]},{"type":"rule","selectors":[".hr-light"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".hr-dark"],"declarations":[{"type":"declaration","property":"height","value":"1"},{"type":"declaration","property":"background-color","value":"#303030"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".text-left"],"declarations":[{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-lowercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"lowercase"}]},{"type":"rule","selectors":[".text-uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-capitalize"],"declarations":[{"type":"declaration","property":"text-transform","value":"capitalize"}]},{"type":"rule","selectors":[".font-weight-normal"],"declarations":[{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":[".font-weight-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".font-italic"],"declarations":[{"type":"declaration","property":"font-style","value":"italic"}]},{"type":"rule","selectors":[".t-10"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":[".t-12"],"declarations":[{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".t-14"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".t-15"],"declarations":[{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".t-16"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".t-17"],"declarations":[{"type":"declaration","property":"font-size","value":"17"}]},{"type":"rule","selectors":[".t-18"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".t-19"],"declarations":[{"type":"declaration","property":"font-size","value":"19"}]},{"type":"rule","selectors":[".t-20"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".t-25"],"declarations":[{"type":"declaration","property":"font-size","value":"25"}]},{"type":"rule","selectors":[".t-30"],"declarations":[{"type":"declaration","property":"font-size","value":"30"}]},{"type":"rule","selectors":[".img-rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"5"}]},{"type":"rule","selectors":[".img-circle"],"declarations":[{"type":"declaration","property":"border-radius","value":"20"}]},{"type":"rule","selectors":[".img-thumbnail"],"declarations":[{"type":"declaration","property":"border-radius","value":"0"}]},{"type":"rule","selectors":[".invisible"],"declarations":[{"type":"declaration","property":"visibility","value":"collapse"}]},{"type":"rule","selectors":[".pull-left"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"}]},{"type":"rule","selectors":[".pull-right"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"right"}]},{"type":"rule","selectors":[".m-x-auto"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"}]},{"type":"rule","selectors":[".m-y-auto"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".text-primary"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".text-danger"],"declarations":[{"type":"declaration","property":"color","value":"#d50000"}]},{"type":"rule","selectors":[".text-muted"],"declarations":[{"type":"declaration","property":"color","value":"#9e9e9e"}]},{"type":"rule","selectors":[".bg-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".bg-danger"],"declarations":[{"type":"declaration","property":"background-color","value":"#d50000"},{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#F8F8F8"},{"type":"declaration","property":"color","value":"#212121"}]},{"type":"rule","selectors":[".action-bar .action-bar-title"],"declarations":[{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"font-size","value":"17"},{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".action-bar .action-item"],"declarations":[{"type":"declaration","property":"font-weight","value":"normal"}]},{"type":"rule","selectors":[".activity-indicator"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"},{"type":"declaration","property":"width","value":"30"},{"type":"declaration","property":"height","value":"30"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"},{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"min-height","value":"36"},{"type":"declaration","property":"min-width","value":"64"},{"type":"declaration","property":"padding","value":"10 10 10 10"},{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"margin","value":"8 16 8 16"}]},{"type":"rule","selectors":[".btn.btn-active:highlighted"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"background-color","value":"#c0ebff"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"},{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".btn-primary.btn-active:highlighted"],"declarations":[{"type":"declaration","property":"background-color","value":"#01a0ec"},{"type":"declaration","property":"border-color","value":"#01a0ec"}]},{"type":"rule","selectors":[".btn-primary.btn-aqua"],"declarations":[{"type":"declaration","property":"background-color","value":"#00caab"}]},{"type":"rule","selectors":[".btn-primary.btn-blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#3d5afe"}]},{"type":"rule","selectors":[".btn-primary.btn-brown"],"declarations":[{"type":"declaration","property":"background-color","value":"#795548"}]},{"type":"rule","selectors":[".btn-primary.btn-forest"],"declarations":[{"type":"declaration","property":"background-color","value":"#006968"}]},{"type":"rule","selectors":[".btn-primary.btn-grey"],"declarations":[{"type":"declaration","property":"background-color","value":"#5c687c"}]},{"type":"rule","selectors":[".btn-primary.btn-lemon"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffea00"},{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".btn-primary.btn-lime"],"declarations":[{"type":"declaration","property":"background-color","value":"#aee406"},{"type":"declaration","property":"color","value":"#000"}]},{"type":"rule","selectors":[".btn-primary.btn-orange"],"declarations":[{"type":"declaration","property":"background-color","value":"#f57c00"}]},{"type":"rule","selectors":[".btn-primary.btn-purple"],"declarations":[{"type":"declaration","property":"background-color","value":"#8130ff"}]},{"type":"rule","selectors":[".btn-primary.btn-ruby"],"declarations":[{"type":"declaration","property":"background-color","value":"#ff1744"}]},{"type":"rule","selectors":[".btn-primary.btn-sky"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".btn-outline"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".btn-outline.btn-active:highlighted"],"declarations":[{"type":"declaration","property":"background-color","value":"#c0ebff"}]},{"type":"rule","selectors":[".btn[isEnabled=false]"],"declarations":[{"type":"declaration","property":"color","value":"#a4a4a4"},{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"border-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".fa"],"declarations":[{"type":"declaration","property":"font-family","value":"FontAwesome, fontawesome-webfont"}]},{"type":"rule","selectors":[".form .input"],"declarations":[{"type":"declaration","property":"padding","value":"16 8 16 8"},{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":[".form .input.input-border"],"declarations":[{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e0e0e0"},{"type":"declaration","property":"border-radius","value":"2"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".form .input.input-rounded"],"declarations":[{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e0e0e0"},{"type":"declaration","property":"border-radius","value":"28"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".form .input[isEnabled='false']"],"declarations":[{"type":"declaration","property":"background-color","value":"#fafafa"}]},{"type":"rule","selectors":[".form .input-field"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".form .input-field .label"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"color","value":"#bababa"}]},{"type":"rule","selectors":[".form .input-field .input"],"declarations":[{"type":"declaration","property":"padding","value":"0"},{"type":"declaration","property":"margin","value":"0 0 8 0"}]},{"type":"rule","selectors":[".form .input-field .hr-light.active",".form .input-field .hr-dark.active"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".form .input-field.input-sides .label"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"margin","value":"0 0 8 0"}]},{"type":"rule","selectors":[".h1",".h2",".h3",".h4",".h5",".h6"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"color","value":"#212121"}]},{"type":"rule","selectors":[".body",".body2",".footnote"],"declarations":[{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"color","value":"#757575"}]},{"type":"rule","selectors":[".h1"],"declarations":[{"type":"declaration","property":"font-size","value":"32"}]},{"type":"rule","selectors":[".h2"],"declarations":[{"type":"declaration","property":"font-size","value":"22"}]},{"type":"rule","selectors":[".h3"],"declarations":[{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".h4"],"declarations":[{"type":"declaration","property":"font-size","value":"12"}]},{"type":"rule","selectors":[".h5"],"declarations":[{"type":"declaration","property":"font-size","value":"11"}]},{"type":"rule","selectors":[".h6"],"declarations":[{"type":"declaration","property":"font-size","value":"10"}]},{"type":"rule","selectors":[".body"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".body2"],"declarations":[{"type":"declaration","property":"font-size","value":"17"}]},{"type":"rule","selectors":[".footnote"],"declarations":[{"type":"declaration","property":"font-size","value":"13"}]},{"type":"rule","selectors":[".list-group .list-group-item"],"declarations":[{"type":"declaration","property":"color","value":"#212121"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".list-group .list-group-item Label"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".list-group .list-group-item .thumb"],"declarations":[{"type":"declaration","property":"stretch","value":"fill"},{"type":"declaration","property":"width","value":"40"},{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".list-group .list-group-item.active"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".list-group .list-group-item .list-group-item-text"],"declarations":[{"type":"declaration","property":"color","value":"#757575"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"}]},{"type":"rule","selectors":[".progress"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"},{"type":"declaration","property":"background-color","value":"#bababa"}]},{"type":"rule","selectors":[".segmented-bar"],"declarations":[{"type":"declaration","property":"font-size","value":"13"},{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"color","value":"#212121"},{"type":"declaration","property":"selected-background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".sidedrawer-left",".sidedrawer-center"],"declarations":[{"type":"declaration","property":"background-color","value":"#fafafa"}]},{"type":"rule","selectors":[".sidedrawer-header"],"declarations":[{"type":"declaration","property":"background-color","value":"#fafafa"},{"type":"declaration","property":"height","value":"148"},{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".sidedrawer-left .sidedrawer-header"],"declarations":[{"type":"declaration","property":"padding","value":"16 16 0 16"}]},{"type":"rule","selectors":[".sidedrawer-center .sidedrawer-header"],"declarations":[{"type":"declaration","property":"padding","value":"20 15 0 15"}]},{"type":"rule","selectors":[".sidedrawer-header-image"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".sidedrawer-left .sidedrawer-header-image"],"declarations":[{"type":"declaration","property":"height","value":"64"},{"type":"declaration","property":"width","value":"64"},{"type":"declaration","property":"border-radius","value":"32"},{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"margin-bottom","value":"36"}]},{"type":"rule","selectors":[".sidedrawer-center .sidedrawer-header-image"],"declarations":[{"type":"declaration","property":"height","value":"74"},{"type":"declaration","property":"width","value":"74"},{"type":"declaration","property":"border-radius","value":"37"},{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"margin-bottom","value":"24"}]},{"type":"rule","selectors":[".sidedrawer-header-brand"],"declarations":[{"type":"declaration","property":"color","value":"#737373"}]},{"type":"rule","selectors":[".sidedrawer-left .sidedrawer-header-brand"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".sidedrawer-center .sidedrawer-header-brand"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"center"},{"type":"declaration","property":"font-size","value":"15"}]},{"type":"rule","selectors":[".sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"orientation","value":"horizontal"}]},{"type":"rule","selectors":[".sidedrawer-list-item .sidedrawer-list-item-icon"],"declarations":[{"type":"declaration","property":"width","value":"24"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"height","value":"48"},{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".sidedrawer-list-item.active"],"declarations":[{"type":"declaration","property":"color","value":"#fff"},{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".sidedrawer-list-item.active .sidedrawer-list-item-icon"],"declarations":[{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".sidedrawer-left .sidedrawer-list-item-icon"],"declarations":[{"type":"declaration","property":"margin","value":"0 16 0 16"}]},{"type":"rule","selectors":[".sidedrawer-center .sidedrawer-list-item-icon"],"declarations":[{"type":"declaration","property":"margin","value":"0 0 0 15"}]},{"type":"rule","selectors":[".sidedrawer-list-item-text"],"declarations":[{"type":"declaration","property":"horizontal-align","value":"left"},{"type":"declaration","property":"text-align","value":"left"},{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"border-width","value":"0.1"},{"type":"declaration","property":"width","value":"80%"},{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".sidedrawer-left .sidedrawer-list-item-text"],"declarations":[{"type":"declaration","property":"padding-left","value":"16"}]},{"type":"rule","selectors":[".sidedrawer-center .sidedrawer-list-item-text"],"declarations":[{"type":"declaration","property":"padding-left","value":"15"}]},{"type":"rule","selectors":[".slider"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"}]},{"type":"rule","selectors":[".slider[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".switch[checked=true]"],"declarations":[{"type":"declaration","property":"background-color","value":"#30bcff"},{"type":"declaration","property":"color","value":"#30bcff"}]},{"type":"rule","selectors":[".switch[checked=true][isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"color","value":"#fff"}]},{"type":"rule","selectors":[".switch[isEnabled=false]"],"declarations":[{"type":"declaration","property":"background-color","value":"#e0e0e0"},{"type":"declaration","property":"color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".tab-view"],"declarations":[{"type":"declaration","property":"selected-color","value":"#30bcff"},{"type":"declaration","property":"tabs-background-color","value":"#fff"}]},{"type":"rule","selectors":[".tab-view .tab-view-item"],"declarations":[{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"tabs-background-color","value":"#fff"}]},{"type":"rule","selectors":["#login-background"],"declarations":[{"type":"declaration","property":"margin-top","value":"-20"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-position","value":"center"}]},{"type":"rule","selectors":[".login-wrap"],"declarations":[{"type":"declaration","property":"padding","value":"0 40"}]},{"type":"rule","selectors":[".logo-wrap"],"declarations":[{"type":"declaration","property":"margin","value":"60 0 10 0"},{"type":"declaration","property":"padding","value":"20 0"}]},{"type":"rule","selectors":[".logo-wrap .login-logo"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"30"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"opacity","value":"1"},{"type":"declaration","property":"color","value":"#212121"},{"type":"declaration","property":"opacity","value":".9"}]},{"type":"rule","selectors":[".logo-wrap .login-logo-sub"],"declarations":[{"type":"declaration","property":"color","value":"#212121"},{"type":"declaration","property":"opacity","value":".8"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".login-wrapper"],"declarations":[{"type":"declaration","property":"padding","value":"20"},{"type":"declaration","property":"background-color","value":"#fff"},{"type":"declaration","property":"border-radius","value":"3"}]},{"type":"rule","selectors":[".login-wrapper TextField"],"declarations":[{"type":"declaration","property":"padding","value":"10 10"},{"type":"declaration","property":"margin","value":"10 0 0 0"}]},{"type":"rule","selectors":[".go-back"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"color","value":"#212121"},{"type":"declaration","property":"margin-top","value":"10"}]},{"type":"rule","selectors":[".action-bar .action-bar-title"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".action-bar .action-item"],"declarations":[{"type":"declaration","property":"android-elevation","value":"0"},{"type":"declaration","property":"background-color","value":"rgba(255,0,0,0)"},{"type":"declaration","property":"border-color","value":"rgba(255,0,0,0)"},{"type":"declaration","property":"border-width","value":"1"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-family","value":"'Roboto Medium'"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"border-color","value":"rgba(255,0,0,0)"}]},{"type":"rule","selectors":[".btn-outline"],"declarations":[{"type":"declaration","property":"android-elevation","value":"0"},{"type":"declaration","property":"background-color","value":"rgba(255,0,0,0)"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#30bcff"},{"type":"declaration","property":"height","value":"36"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".btn-rounded-sm"],"declarations":[{"type":"declaration","property":"border-radius","value":"2"},{"type":"declaration","property":"height","value":"36"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".btn-rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"40"},{"type":"declaration","property":"height","value":"36"},{"type":"declaration","property":"padding","value":"0"}]},{"type":"rule","selectors":[".form"],"declarations":[{"type":"declaration","property":"font-family","value":"'Roboto Regular'"}]},{"type":"rule","selectors":[".form .input"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".h1"],"declarations":[{"type":"declaration","property":"font-size","value":"34"}]},{"type":"rule","selectors":[".h2"],"declarations":[{"type":"declaration","property":"font-size","value":"24"}]},{"type":"rule","selectors":[".h3"],"declarations":[{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":[".h5"],"declarations":[{"type":"declaration","property":"font-size","value":"11"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".body2"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"font-weight","value":"500"}]},{"type":"rule","selectors":[".sidedrawer-list-item-icon"],"declarations":[{"type":"declaration","property":"margin","value":"0 16 0 16"},{"type":"declaration","property":"padding-top","value":"14"}]},{"type":"rule","selectors":[".sidedrawer-list-item-icon",".sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"color","value":"#737373"}]},{"type":"rule","selectors":[".sidedrawer-list-item"],"declarations":[{"type":"declaration","property":"font-family","value":"'Roboto Medium'"},{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".slider"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"},{"type":"declaration","property":"margin","value":"20 16"}]},{"type":"rule","selectors":[".switch"],"declarations":[{"type":"declaration","property":"margin","value":"14 16"},{"type":"declaration","property":"color","value":"#e0e0e0"},{"type":"declaration","property":"background-color","value":"#e0e0e0"}]},{"type":"rule","selectors":[".switch[checked=true]"],"declarations":[{"type":"declaration","property":"color","value":"#30bcff"}]}],"parsingErrors":[]}};

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card[data-v-f883d62a]{\n    font-family: 'Open Sans', sans-serif;\n    width:90%;\n    height:10%;\n    \n    margin-left:20;\n    margin-right:20;\n\n    margin: 7;\n\n    color: white;\n\n    border-radius: 10;\n    \n    display:flex;\n    flex-direction:column;\n}\n\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=style&index=0&id=507f9148&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-507f9148] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-507f9148] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-507f9148] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-507f9148] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.desc[data-v-507f9148] {\n    margin: 9;\n    text-align: center;\n}\n.input-field[data-v-507f9148] {\n    margin-bottom: 25;\n}\n.input[data-v-507f9148] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-507f9148]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-507f9148] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-507f9148] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-507f9148] {\n    margin-bottom: 20;\n}\n.bold[data-v-507f9148] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.date-picker {\n    background-color: white;\n    border-color: black;\n    border-width: 2;\n    border-radius: 10;\n    color: black;\n    vertical-align: middle;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.date-picker {\n    background-color: white;\n    border-color: black;\n    border-width: 2;\n    border-radius: 10;\n    color: black;\n    vertical-align: middle;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-height-main {\n  height: 63%\n}\n\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    color: #D51A1A;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-btn {\n    margin-left: 50;\n    margin-right: 50;\n}\n\n\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&":
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
    { class: "card " + _vm.variant },
    [_vm._t("header"), _vm._t("content")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=template&id=507f9148&scoped=true&":
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
    { attrs: { actionBarHidden: "true" }, on: { loaded: _vm.onLoaded } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Label", {
                staticClass: "header",
                attrs: { text: "Enter Code" }
              }),
              _c("Label", {
                staticClass: "desc",
                attrs: { text: "Please enter the code you received" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "0" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Code",
                          isEnabled: !_vm.processing,
                          keyboardType: "phone",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          text: _vm.user.password
                        },
                        on: {
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "password", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-dark" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: {
                  text: _vm.isLoggingIn ? "Log In" : "Sign Up",
                  isEnabled: !_vm.processing
                },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: {
                  "*v-show": "isLoggingIn",
                  text: "Didn't receive code?"
                },
                on: {
                  tap: function($event) {
                    return _vm.noCode()
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
    { on: { loaded: _vm.onLoaded } },
    [
      _c("ActionBar", { attrs: { title: "Add Contact" } }),
      _c(
        "ScrollView",
        { staticStyle: { marginTop: "6%" } },
        [
          _c(
            "StackLayout",
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
                        staticStyle: {
                          margin: "5",
                          width: "23%",
                          height: "60"
                        },
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
                        staticStyle: { width: "77%" },
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
                                height: "15%",
                                marginTop: "-37px",
                                backgroundColor: "#2C3251"
                              }
                            },
                            _vm._l(_vm.locations, function(location) {
                              return _c("Label", {
                                key: location.place_id,
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
                              marginBottom: "3%",
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
                    staticClass: "btn btn-primary",
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
                attrs: { hint: "Type in a location", text: _vm.searchPhrase },
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
      _vm.phone && _vm.nick && _vm.location && _vm.chosenDate && !_vm.processing
        ? _c("Button", {
            staticClass: "btn btn-outline",
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



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
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
    { attrs: { actionBarHidden: "true" }, on: { loaded: _vm.onLoaded } },
    [
      _c(
        "StackLayout",
        [
          _c(
            "Tabs",
            { attrs: { height: "100%", tabsPosition: "bottom" } },
            [
              _c(
                "TabStrip",
                [
                  _c(
                    "TabStripItem",
                    [
                      false
                        ? undefined
                        : _vm._e(),
                      _c("Image", { attrs: { src: "res://home" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      false
                        ? undefined
                        : _vm._e(),
                      _c("Image", { attrs: { src: "res://settings" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      false
                        ? undefined
                        : _vm._e(),
                      _c("Image", { attrs: { src: "res://search" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      false
                        ? undefined
                        : _vm._e(),
                      _c("Image", { attrs: { src: "res://browse" } })
                    ],
                    1
                  ),
                  _c(
                    "TabStripItem",
                    [
                      false
                        ? undefined
                        : _vm._e(),
                      _c("Image", { attrs: { src: "res://favorites" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "GridLayout",
                    [
                      _c(
                        "StackLayout",
                        {
                          staticStyle: { height: "100%" },
                          attrs: { orientation: "vertical" }
                        },
                        [
                          !_vm.processing
                            ? _c(
                                "GridLayout",
                                {
                                  staticClass: "bg-dark",
                                  staticStyle: { height: "24%", padding: "23" },
                                  attrs: { columns: "*, *", rows: "auto, auto" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "medium",
                                    attrs: { text: _vm.day, row: "0", col: "0" }
                                  }),
                                  _c("Label", {
                                    staticClass: "body small",
                                    attrs: {
                                      text:
                                        _vm.month +
                                        " " +
                                        _vm.date +
                                        ", " +
                                        _vm.year,
                                      row: "1",
                                      col: "0",
                                      color: "#C2C8E6"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "large text-right",
                                    attrs: {
                                      text: _vm.summary.meetings_today,
                                      row: "0",
                                      col: "1",
                                      color: "#89D5E2"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "small text-right body",
                                    attrs: {
                                      text: "contacts today",
                                      row: "1",
                                      col: "1",
                                      color: "#89D5E2"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          !_vm.processing
                            ? _c(
                                "GridLayout",
                                {
                                  staticClass: "bg-dark",
                                  staticStyle: {
                                    height: "15%",
                                    marginBottom: "2%"
                                  },
                                  attrs: { columns: "*, *", rows: "auto, auto" }
                                },
                                [
                                  true
                                    ? _c("Button", {
                                        staticClass: "btn btn-primary",
                                        staticStyle: {
                                          marginLeft: "23",
                                          marginTop: "1",
                                          marginBottom: "1"
                                        },
                                        attrs: {
                                          text: "Activity",
                                          isEnabled: false,
                                          row: "1",
                                          col: "0",
                                          color: "#C2C8E6"
                                        },
                                        on: { tap: _vm.openContactForm }
                                      })
                                    : undefined,
                                  _c("Button", {
                                    staticClass: "btn btn-primary",
                                    staticStyle: {
                                      marginTop: "1",
                                      marginLeft: "5",
                                      marginBottom: "1"
                                    },
                                    attrs: {
                                      text: "Contact",
                                      row: "1",
                                      col: "1",
                                      color: "#C2C8E6"
                                    },
                                    on: { tap: _vm.openContactForm }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          !_vm.processing
                            ? _c(
                                "StackLayout",
                                {
                                  staticClass: "home-height-main",
                                  staticStyle: { textAlign: "center" },
                                  attrs: { orientation: "vertical" }
                                },
                                [
                                  _c("label", {
                                    staticStyle: {
                                      width: "180",
                                      color: "black"
                                    },
                                    attrs: { text: _vm.percentageDescription }
                                  }),
                                  true
                                    ? _c(
                                        "RadRadialGauge",
                                        { staticStyle: { height: "60%" } },
                                        [
                                          _c(
                                            "RadialScale",
                                            {
                                              directives: [
                                                {
                                                  name: "tkRadialGaugeScales",
                                                  rawName:
                                                    "v-tkRadialGaugeScales"
                                                }
                                              ],
                                              attrs: {
                                                minimum: "0",
                                                maximum: "6",
                                                radius: "0.90"
                                              }
                                            },
                                            [
                                              _c("ScaleStyle", {
                                                directives: [
                                                  {
                                                    name: "tkRadialScaleStyle",
                                                    rawName:
                                                      "v-tkRadialScaleStyle"
                                                  }
                                                ],
                                                attrs: {
                                                  majorTicksCount: "7",
                                                  minorTicksCount: "9",
                                                  lineThickness: "0",
                                                  labelsCount: "7",
                                                  ticksOffset: "0"
                                                }
                                              }),
                                              _c(
                                                "RadialBarIndicator",
                                                {
                                                  directives: [
                                                    {
                                                      name:
                                                        "tkRadialScaleIndicators",
                                                      rawName:
                                                        "v-tkRadialScaleIndicators"
                                                    }
                                                  ],
                                                  attrs: {
                                                    minimum: "0",
                                                    maximum: "1.2",
                                                    location: "0.97"
                                                  }
                                                },
                                                [
                                                  _c("BarIndicatorStyle", {
                                                    directives: [
                                                      {
                                                        name:
                                                          "tkRadialBarIndicatorStyle",
                                                        rawName:
                                                          "v-tkRadialBarIndicatorStyle"
                                                      }
                                                    ],
                                                    attrs: {
                                                      fillColor: "#dddddd"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _c(
                                                "RadialBarIndicator",
                                                {
                                                  directives: [
                                                    {
                                                      name:
                                                        "tkRadialScaleIndicators",
                                                      rawName:
                                                        "v-tkRadialScaleIndicators"
                                                    }
                                                  ],
                                                  attrs: {
                                                    minimum: "1.2",
                                                    maximum: "2.4",
                                                    location: "0.97"
                                                  }
                                                },
                                                [
                                                  _c("BarIndicatorStyle", {
                                                    directives: [
                                                      {
                                                        name:
                                                          "tkRadialBarIndicatorStyle",
                                                        rawName:
                                                          "v-tkRadialBarIndicatorStyle"
                                                      }
                                                    ],
                                                    attrs: {
                                                      fillColor: "#9DCA56"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _c(
                                                "RadialBarIndicator",
                                                {
                                                  directives: [
                                                    {
                                                      name:
                                                        "tkRadialScaleIndicators",
                                                      rawName:
                                                        "v-tkRadialScaleIndicators"
                                                    }
                                                  ],
                                                  attrs: {
                                                    minimum: "2.4",
                                                    maximum: "3.6",
                                                    location: "0.97"
                                                  }
                                                },
                                                [
                                                  _c("BarIndicatorStyle", {
                                                    directives: [
                                                      {
                                                        name:
                                                          "tkRadialBarIndicatorStyle",
                                                        rawName:
                                                          "v-tkRadialBarIndicatorStyle"
                                                      }
                                                    ],
                                                    attrs: {
                                                      fillColor: "#F0C44D"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _c(
                                                "RadialBarIndicator",
                                                {
                                                  directives: [
                                                    {
                                                      name:
                                                        "tkRadialScaleIndicators",
                                                      rawName:
                                                        "v-tkRadialScaleIndicators"
                                                    }
                                                  ],
                                                  attrs: {
                                                    minimum: "3.6",
                                                    maximum: "4.8",
                                                    location: "0.97"
                                                  }
                                                },
                                                [
                                                  _c("BarIndicatorStyle", {
                                                    directives: [
                                                      {
                                                        name:
                                                          "tkRadialBarIndicatorStyle",
                                                        rawName:
                                                          "v-tkRadialBarIndicatorStyle"
                                                      }
                                                    ],
                                                    attrs: {
                                                      fillColor: "#E27633"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _c(
                                                "RadialBarIndicator",
                                                {
                                                  directives: [
                                                    {
                                                      name:
                                                        "tkRadialScaleIndicators",
                                                      rawName:
                                                        "v-tkRadialScaleIndicators"
                                                    }
                                                  ],
                                                  attrs: {
                                                    minimum: "4.8",
                                                    maximum: "6",
                                                    location: "0.97"
                                                  }
                                                },
                                                [
                                                  _c("BarIndicatorStyle", {
                                                    directives: [
                                                      {
                                                        name:
                                                          "tkRadialBarIndicatorStyle",
                                                        rawName:
                                                          "v-tkRadialBarIndicatorStyle"
                                                      }
                                                    ],
                                                    attrs: {
                                                      fillColor: "#A7010E"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _c("RadialNeedle", {
                                                directives: [
                                                  {
                                                    name:
                                                      "tkRadialScaleIndicators",
                                                    rawName:
                                                      "v-tkRadialScaleIndicators"
                                                  }
                                                ],
                                                attrs: { value: _vm.percentage }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : undefined,
                                  _c("Button", {
                                    staticClass: "btn btn-primary",
                                    staticStyle: { backgroundColor: "red" },
                                    attrs: {
                                      text: "Self Check Quiz",
                                      color: "#C2C8E6"
                                    },
                                    on: { tap: _vm.openForm }
                                  }),
                                  _c("ActivityIndicator", {
                                    attrs: {
                                      rowSpan: "3",
                                      busy: _vm.processing
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "GridLayout",
                    [
                      _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical" } },
                        [
                          !_vm.processing
                            ? _c(
                                "GridLayout",
                                {
                                  staticClass: "bg-dark",
                                  staticStyle: { height: "120", padding: "23" },
                                  attrs: { columns: "*, *", rows: "auto, auto" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "medium",
                                    attrs: {
                                      text: "Activities",
                                      row: "0",
                                      col: "0"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "body small",
                                    attrs: {
                                      text:
                                        _vm.month +
                                        " " +
                                        _vm.date +
                                        ", " +
                                        _vm.year,
                                      row: "1",
                                      col: "0",
                                      color: "#C2C8E6"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm.contacts.length < 1
                            ? _c("Label", {
                                staticClass: "body small",
                                staticStyle: { color: "black", margin: "23" },
                                attrs: {
                                  text: "You have not added any contacts"
                                }
                              })
                            : _vm._e(),
                          !_vm.processingActivities && _vm.contacts.length > 0
                            ? _c(
                                "ScrollView",
                                { attrs: { height: "1200px" } },
                                [
                                  _c(
                                    "StackLayout",
                                    _vm._l(_vm.contacts, function(contact) {
                                      return _c("Card", {
                                        key: contact.dt + contact.contactee_usn,
                                        attrs: {
                                          score: contact.contactee_score
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "header",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "StackLayout",
                                                    {
                                                      staticClass: "card-header"
                                                    },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "Date: " +
                                                            _vm._s(contact.dt)
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            },
                                            {
                                              key: "content",
                                              fn: function() {
                                                return [
                                                  _c(
                                                    "StackLayout",
                                                    {
                                                      staticClass:
                                                        "card-content"
                                                    },
                                                    [
                                                      _c("label", [
                                                        _vm._v(
                                                          "You met: " +
                                                            _vm._s(
                                                              contact.contactee_usn
                                                            )
                                                        )
                                                      ]),
                                                      _c("label", [
                                                        _vm._v(
                                                          "Danger Level: " +
                                                            _vm._s(
                                                              contact.contactee_score >
                                                                0
                                                                ? 100 -
                                                                    contact.contactee_score +
                                                                    "%"
                                                                : "UNKOWN"
                                                            ) +
                                                            " "
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              },
                                              proxy: true
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      })
                                    }),
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "GridLayout",
                    [
                      _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical" } },
                        [
                          !_vm.processing
                            ? _c(
                                "GridLayout",
                                {
                                  staticClass: "bg-dark",
                                  staticStyle: { height: "120", padding: "23" },
                                  attrs: { columns: "*, *", rows: "auto, auto" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "medium",
                                    attrs: {
                                      text: "Exposure",
                                      row: "0",
                                      col: "0"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "body small",
                                    attrs: {
                                      text: "Levels",
                                      row: "1",
                                      col: "0",
                                      color: "#C2C8E6"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          !_vm.anyLevel()
                            ? _c("Label", {
                                staticClass: "body small",
                                staticStyle: { color: "black", margin: "23" },
                                attrs: {
                                  text: "You have not been exposed on any level"
                                }
                              })
                            : _vm._e(),
                          !_vm.processingExposure && _vm.anyLevel()
                            ? _c(
                                "ScrollView",
                                { attrs: { height: "1200px" } },
                                [
                                  _c(
                                    "StackLayout",
                                    [
                                      _vm._l(_vm.exposure_level_1, function(
                                        item
                                      ) {
                                        return _c("Card", {
                                          key: item.dt,
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "header",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "StackLayout",
                                                      {
                                                        staticClass:
                                                          "card-header"
                                                      },
                                                      [
                                                        _c("label", [
                                                          _vm._v(
                                                            "Date: " +
                                                              _vm._s(item.dt)
                                                          )
                                                        ]),
                                                        _c("label", [
                                                          _vm._v(
                                                            "Degree: First"
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              },
                                              {
                                                key: "content",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "StackLayout",
                                                      {
                                                        staticClass:
                                                          "card-content"
                                                      },
                                                      [
                                                        _c("label", [
                                                          _vm._v(
                                                            "Number of Times: " +
                                                              _vm._s(item.cnt)
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      }),
                                      _vm._l(_vm.exposure_level_2, function(
                                        item
                                      ) {
                                        return _c("Card", {
                                          key: item.dt,
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "header",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "StackLayout",
                                                      {
                                                        staticClass:
                                                          "card-header"
                                                      },
                                                      [
                                                        _c("label", [
                                                          _vm._v(
                                                            "Date: " +
                                                              _vm._s(item.dt)
                                                          )
                                                        ]),
                                                        _c("label", [
                                                          _vm._v(
                                                            "Degree: Second"
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              },
                                              {
                                                key: "content",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "StackLayout",
                                                      {
                                                        staticClass:
                                                          "card-content"
                                                      },
                                                      [
                                                        _c("label", [
                                                          _vm._v(
                                                            "Number of Times: " +
                                                              _vm._s(item.cnt)
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      }),
                                      _vm._l(_vm.exposure_level_3, function(
                                        item
                                      ) {
                                        return _c("Card", {
                                          key: item.dt,
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "header",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "StackLayout",
                                                      {
                                                        staticClass:
                                                          "card-header"
                                                      },
                                                      [
                                                        _c("label", [
                                                          _vm._v(
                                                            "Date: " +
                                                              _vm._s(item.dt)
                                                          )
                                                        ]),
                                                        _c("label", [
                                                          _vm._v(
                                                            "Degree: Third"
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              },
                                              {
                                                key: "content",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "StackLayout",
                                                      {
                                                        staticClass:
                                                          "card-content"
                                                      },
                                                      [
                                                        _c("label", [
                                                          _vm._v(
                                                            "Number of Times: " +
                                                              _vm._s(item.cnt)
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      })
                                    ],
                                    2
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "GridLayout",
                    [
                      _vm.currentGeoLocation.latitude && _vm.webviewSrc
                        ? _c("WebView", {
                            attrs: {
                              height: "99%",
                              src: _vm.webviewSrc,
                              loaded: "onWebViewLoaded"
                            }
                          })
                        : _vm._e(),
                      !_vm.currentGeoLocation.latitude && !_vm.webviewSrc
                        ? _c("Button", {
                            staticClass: "btn btn-primary m-t-20",
                            attrs: { text: "Enable Location" },
                            on: { tap: _vm.enableLocationServices }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "TabContentItem",
                [
                  _c(
                    "GridLayout",
                    [
                      _c(
                        "StackLayout",
                        { attrs: { orientation: "vertical" } },
                        [
                          !_vm.processing
                            ? _c(
                                "GridLayout",
                                {
                                  staticClass: "bg-dark",
                                  staticStyle: { height: "120", padding: "23" },
                                  attrs: { columns: "*, *", rows: "auto, auto" }
                                },
                                [
                                  _c("Label", {
                                    staticClass: "medium",
                                    attrs: {
                                      text: "Account",
                                      row: "0",
                                      col: "0"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "body small",
                                    attrs: {
                                      text: "Options",
                                      row: "1",
                                      col: "0",
                                      color: "#C2C8E6"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _c("Button", {
                            staticClass: "btn btn-primary m-t-20",
                            attrs: {
                              text: "Logout",
                              isEnabled: !_vm.processing
                            },
                            on: { tap: _vm.logout }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
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
    { attrs: { actionBarHidden: "true" }, on: { loaded: _vm.onLoaded } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("Image", {
                staticClass: "logo",
                attrs: { src: "~/images/logo.png" }
              }),
              _c("Label", { staticClass: "header", attrs: { text: "Trace" } }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    { attrs: { orientation: "horizontal", row: "0" } },
                    [
                      _c("ListPicker", {
                        staticStyle: {
                          margin: "5",
                          width: "23%",
                          height: "60"
                        },
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
                        staticStyle: { width: "83%" },
                        attrs: {
                          hint: "7xxxxxx",
                          isEnabled: !_vm.processing,
                          keyboardType: "phone",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          text: _vm.user.phone
                        },
                        on: {
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "phone", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", {
                        staticClass: "hr-dark",
                        staticStyle: { width: "77%" }
                      })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20",
                attrs: {
                  text: _vm.isLoggingIn ? "Send Code" : "Sign Up",
                  isEnabled: !_vm.processing
                },
                on: { tap: _vm.submit }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=template&id=41aa09f5&":
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
      _c("ActionBar", { attrs: { title: _vm.quiz_name } }),
      _c(
        "ScrollView",
        { staticStyle: { marginTop: "11%" } },
        [
          !_vm.processing && !_vm.completed
            ? _c(
                "StackLayout",
                [
                  _vm._l(_vm.items, function(question) {
                    return _c(
                      "StackLayout",
                      {
                        key: question.position,
                        staticStyle: {
                          margin: "13",
                          marginLeft: "33",
                          marginRight: "33",
                          height: "33%",
                          marginTop: "15%"
                        }
                      },
                      [
                        _c("Label", {
                          staticStyle: { margin: "3", color: "black" },
                          attrs: {
                            text:
                              question.postion + ". " + question.question_text,
                            textWrap: "true"
                          }
                        }),
                        _c("ListPicker", {
                          staticStyle: { margin: "5" },
                          attrs: {
                            items: question.display_answers,
                            selectedIndex: question.selectedIndex
                          },
                          on: {
                            selectedIndexChange: function($event) {
                              return _vm.$set(
                                question,
                                "selectedIndex",
                                $event.value
                              )
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: "Submit" },
                    on: { tap: _vm.submit }
                  })
                ],
                2
              )
            : _vm._e(),
          _vm.completed
            ? _c(
                "StackLayout",
                {
                  staticStyle: { height: "300", textAlign: "center" },
                  attrs: { orientation: "vertical" }
                },
                [
                  _c(
                    "RadRadialGauge",
                    { staticStyle: { height: "220" } },
                    [
                      _c(
                        "RadialScale",
                        {
                          directives: [
                            {
                              name: "tkRadialGaugeScales",
                              rawName: "v-tkRadialGaugeScales"
                            }
                          ],
                          attrs: { minimum: "0", maximum: "6", radius: "0.90" }
                        },
                        [
                          _c("ScaleStyle", {
                            directives: [
                              {
                                name: "tkRadialScaleStyle",
                                rawName: "v-tkRadialScaleStyle"
                              }
                            ],
                            attrs: {
                              majorTicksCount: "7",
                              minorTicksCount: "9",
                              lineThickness: "0",
                              labelsCount: "7",
                              ticksOffset: "0"
                            }
                          }),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "0",
                                maximum: "1.2",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#dddddd" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "1.2",
                                maximum: "2.4",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#9DCA56" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "2.4",
                                maximum: "3.6",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#F0C44D" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "3.6",
                                maximum: "4.8",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#E27633" }
                              })
                            ],
                            1
                          ),
                          _c(
                            "RadialBarIndicator",
                            {
                              directives: [
                                {
                                  name: "tkRadialScaleIndicators",
                                  rawName: "v-tkRadialScaleIndicators"
                                }
                              ],
                              attrs: {
                                minimum: "4.8",
                                maximum: "6",
                                location: "0.97"
                              }
                            },
                            [
                              _c("BarIndicatorStyle", {
                                directives: [
                                  {
                                    name: "tkRadialBarIndicatorStyle",
                                    rawName: "v-tkRadialBarIndicatorStyle"
                                  }
                                ],
                                attrs: { fillColor: "#A7010E" }
                              })
                            ],
                            1
                          ),
                          _c("RadialNeedle", {
                            directives: [
                              {
                                name: "tkRadialScaleIndicators",
                                rawName: "v-tkRadialScaleIndicators"
                              }
                            ],
                            attrs: { value: _vm.percentage }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c("label", {
                    staticStyle: { color: "black" },
                    attrs: { text: _vm.percentageDescription, textWrap: "true" }
                  })
                ],
                1
              )
            : _vm._e(),
          _c("ActivityIndicator", {
            attrs: { rowSpan: "3", busy: _vm.processing, color: "red" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TimeLine.vue?vue&type=template&id=0521783c&":
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
      _c("ActionBar", { attrs: { actionBarHidden: "true" } }),
      _c(
        "DockLayout",
        { staticClass: "bg-dark", attrs: { stretchLastChild: "true" } },
        [
          _c(
            "StackLayout",
            {
              staticClass: "bg-dark",
              attrs: { orientation: "vertical", dock: "top" }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "action-bar p-20",
                  attrs: { rows: "auto", columns: "75,*,75" }
                },
                [
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconToday.png",
                      row: "0",
                      col: "0",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "left",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToHome }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconCalendar.png",
                      row: "0",
                      col: "1",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "center"
                    }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconBalance.png",
                      row: "0",
                      col: "2",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "right",
                      opacity: "0.2"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "m-y-30 m-x-20",
                  attrs: { columns: "*, *", rows: "auto, auto" }
                },
                [
                  _c("Label", {
                    staticClass: "large",
                    attrs: { text: _vm.day, row: "0", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "body small",
                    attrs: {
                      text: _vm.month + " " + _vm.date + ", " + _vm.year,
                      row: "1",
                      col: "0",
                      color: "#C2C8E6"
                    }
                  }),
                  _c("Label", {
                    staticClass: "large text-right",
                    attrs: { text: "5", row: "0", col: "1", color: "#89D5E2" }
                  }),
                  _c("Label", {
                    staticClass: "body small text-right",
                    attrs: {
                      text: "Met today",
                      row: "1",
                      col: "1",
                      color: "#89D5E2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          true
            ? _c(
                "StackLayout",
                {
                  staticClass: "m-t-30 bg-dark",
                  attrs: { orientation: "vertical" }
                },
                [
                  _c("Button", {
                    staticClass: "btn btn-primary m-t-20",
                    attrs: { text: "Logout", isEnabled: !_vm.processing },
                    on: { tap: _vm.logout }
                  })
                ],
                1
              )
            : undefined
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./common/constants.js": "./common/constants.js",
	"./css/aqua.css": "./css/aqua.css",
	"./css/blue.css": "./css/blue.css",
	"./css/brown.css": "./css/brown.css",
	"./css/core.dark.css": "./css/core.dark.css",
	"./css/core.light.android copy.css": "./css/core.light.android copy.css",
	"./css/core.light.css": "./css/core.light.css",
	"./css/core.light.ios copy.css": "./css/core.light.ios copy.css",
	"./css/forest.css": "./css/forest.css",
	"./css/grey.css": "./css/grey.css",
	"./css/lemon.css": "./css/lemon.css",
	"./css/lime.css": "./css/lime.css",
	"./css/orange.css": "./css/orange.css",
	"./css/purple.css": "./css/purple.css",
	"./css/ruby.css": "./css/ruby.css",
	"./css/sky.css": "./css/sky.css",
	"./routes/index.js": "./routes/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!./css/core.light.css"));
global.registerModule("./css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!./css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'css/core.light.css'"},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#D51A1A"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]},{"type":"rule","selectors":[".modal-form"],"declarations":[{"type":"declaration","property":"margin","value":"13"}]},{"type":"rule","selectors":[".modal-form-field"],"declarations":[{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"border-color","value":"black"},{"type":"declaration","property":"margin-top","value":"13"},{"type":"declaration","property":"margin-bottom","value":"13"}]},{"type":"rule","selectors":[".bg-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#2C3251"}]},{"type":"rule","selectors":[".bg-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#3498db"}]},{"type":"rule","selectors":[".bg-danger"],"declarations":[{"type":"declaration","property":"background-color","value":"#D51A1A"}]},{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#2C3251"}]},{"type":"rule","selectors":["label"],"declarations":[{"type":"comment","comment":" https://www.nativescript.org/blog/using-custom-fonts-in-a-nativescript-app "},{"type":"declaration","property":"font-family","value":"\"Quicksand\", \"Quicksand-Regular\", \"Quicksand-Bold\""},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".large"],"declarations":[{"type":"declaration","property":"font-size","value":"40"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"vertical-align","value":"top"}]},{"type":"rule","selectors":[".medium"],"declarations":[{"type":"declaration","property":"font-size","value":"28"},{"type":"comment","comment":" font-weight: bold; "},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"vertical-align","value":"top"}]},{"type":"rule","selectors":[".small"],"declarations":[{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin","value":"0"},{"type":"comment","comment":" text-align: left;  "}]},{"type":"rule","selectors":[".hr-light"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"opacity","value":"0.1"}]},{"type":"rule","selectors":[".hr-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#2C3251"},{"type":"declaration","property":"opacity","value":"0.1"}]},{"type":"comment","comment":" cards "},{"type":"rule","selectors":[".card-header"],"declarations":[{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"65"},{"type":"declaration","property":"max-height","value":"65"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"justify-content","value":"space-between"},{"type":"declaration","property":"flex","value":"1 0 auto"},{"type":"declaration","property":"margin","value":"10"},{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":[".card-header-title"],"declarations":[{"type":"declaration","property":"padding-left","value":"25"},{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"line-height","value":"65"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".card-content"],"declarations":[{"type":"declaration","property":"padding","value":"10"},{"type":"declaration","property":"flex","value":"1 0 auto"}]},{"type":"rule","selectors":[".card-content-text"],"declarations":[{"type":"declaration","property":"margin","value":"0"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"letter-spacing","value":"1px"}]},{"type":"rule","selectors":[".card-footer"],"declarations":[{"type":"declaration","property":"height","value":"40"},{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"justify-content","value":"flex-end"},{"type":"declaration","property":"flex-shrink","value":"0"}]},{"type":"rule","selectors":[".card:nth-child(1)"],"declarations":[{"type":"declaration","property":"background-color","value":"#3498db"}]},{"type":"rule","selectors":[".card:nth-child(2)"],"declarations":[{"type":"declaration","property":"background-color","value":"#34495e"}]},{"type":"rule","selectors":[".card:nth-child(3)"],"declarations":[{"type":"declaration","property":"background-color","value":"#9b59b6"}]},{"type":"rule","selectors":[".row"],"declarations":[{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"margin-top","value":"100"}]}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routes/index.js");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


var appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

var tok = appSettings.getString("tok", null); // Uncommment the following to see NativeScript-Vue output logs

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = false;
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(tok ? _routes__WEBPACK_IMPORTED_MODULE_1__["default"].home : _routes__WEBPACK_IMPORTED_MODULE_1__["default"].login)])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./common/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_API", function() { return BASE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GKEY", function() { return GKEY; });
var BASE_API = "https://demo.risahinc.com/api/v1/";
var GKEY = "AIzaSyAs8-be0NIXz3zU8W55mV3yrAD41aDTkcs";

/***/ }),

/***/ "./components/Card.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f883d62a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Card.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=style&index=0&id=f883d62a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f883d62a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Card.vue?vue&type=template&id=f883d62a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f883d62a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Code.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Code_vue_vue_type_template_id_507f9148_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Code.vue?vue&type=template&id=507f9148&scoped=true&");
/* harmony import */ var _Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Code.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Code.vue?vue&type=style&index=0&id=507f9148&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Code_vue_vue_type_template_id_507f9148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Code_vue_vue_type_template_id_507f9148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "507f9148",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Code.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Code.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Code.vue?vue&type=style&index=0&id=507f9148&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=style&index=0&id=507f9148&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_style_index_0_id_507f9148_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Code.vue?vue&type=template&id=507f9148&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_template_id_507f9148_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Code.vue?vue&type=template&id=507f9148&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_template_id_507f9148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Code_vue_vue_type_template_id_507f9148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ContactAdd.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactAdd_vue_vue_type_template_id_f5229908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ContactAdd.vue?vue&type=template&id=f5229908&");
/* harmony import */ var _ContactAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ContactAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ContactAdd.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContactAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactAdd_vue_vue_type_template_id_f5229908___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactAdd_vue_vue_type_template_id_f5229908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/ContactAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ContactAdd.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ContactAdd.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ContactAdd.vue?vue&type=template&id=f5229908&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_template_id_f5229908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ContactAdd.vue?vue&type=template&id=f5229908&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_template_id_f5229908___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactAdd_vue_vue_type_template_id_f5229908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/ContactModal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactModal_vue_vue_type_template_id_b667aa70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/ContactModal.vue?vue&type=template&id=b667aa70&");
/* harmony import */ var _ContactModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/ContactModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/ContactModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContactModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactModal_vue_vue_type_template_id_b667aa70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactModal_vue_vue_type_template_id_b667aa70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/ContactModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/ContactModal.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/ContactModal.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/ContactModal.vue?vue&type=template&id=b667aa70&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_template_id_b667aa70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/ContactModal.vue?vue&type=template&id=b667aa70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_template_id_b667aa70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactModal_vue_vue_type_template_id_b667aa70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/QuizView.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/QuizView.vue?vue&type=template&id=41aa09f5&");
/* harmony import */ var _QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/QuizView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/QuizView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/QuizView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/QuizView.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/QuizView.vue?vue&type=template&id=41aa09f5&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=template&id=41aa09f5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuizView_vue_vue_type_template_id_41aa09f5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/TimeLine.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimeLine_vue_vue_type_template_id_0521783c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/TimeLine.vue?vue&type=template&id=0521783c&");
/* harmony import */ var _TimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/TimeLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimeLine_vue_vue_type_template_id_0521783c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimeLine_vue_vue_type_template_id_0521783c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/TimeLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/TimeLine.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/TimeLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/TimeLine.vue?vue&type=template&id=0521783c&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_template_id_0521783c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/TimeLine.vue?vue&type=template&id=0521783c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_template_id_0521783c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLine_vue_vue_type_template_id_0521783c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./css/aqua.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#aee406}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#aee406;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#00caab;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#aee406;width:30;height:30}.btn{color:#aee406;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c5f924}.btn-primary{background-color:#aee406;border-color:#aee406;color:#fff}.btn-primary.btn-active:highlighted{background-color:#88b205;border-color:#88b205}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#aee406;color:#aee406}.btn-outline.btn-active:highlighted{background-color:#c5f924}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#aee406}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#aee406;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#aee406}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#000;background-color:#aee406}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#000}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#aee406}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#aee406;color:#aee406}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#aee406;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#aee406;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#aee406}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/blue.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#30bcff}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#30bcff;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#3d5afe;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#30bcff;width:30;height:30}.btn{color:#30bcff;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#63cdff}.btn-primary{background-color:#30bcff;border-color:#30bcff;color:#fff}.btn-primary.btn-active:highlighted{background-color:#00aafc;border-color:#00aafc}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#30bcff;color:#30bcff}.btn-outline.btn-active:highlighted{background-color:#63cdff}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#30bcff}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#30bcff;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#30bcff}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#30bcff}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#30bcff}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#30bcff;color:#30bcff}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#30bcff;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#30bcff;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#30bcff}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/brown.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#aee406}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#aee406;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#795548;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#aee406;width:30;height:30}.btn{color:#aee406;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c5f924}.btn-primary{background-color:#aee406;border-color:#aee406;color:#fff}.btn-primary.btn-active:highlighted{background-color:#88b205;border-color:#88b205}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#aee406;color:#aee406}.btn-outline.btn-active:highlighted{background-color:#c5f924}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#aee406}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#aee406;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#aee406}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#000;background-color:#aee406}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#000}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#aee406}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#aee406;color:#aee406}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#aee406;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#aee406;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#aee406}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/core.dark.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v1.0.6 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#30bcff}.text-danger{color:#d50000}.text-muted{color:gray}.bg-primary{background-color:#30bcff;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#303030;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#30bcff;width:30;height:30}.btn{color:#30bcff;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c0ebff}.btn-primary{background-color:#30bcff;border-color:#30bcff;color:#fff}.btn-primary.btn-active:highlighted{background-color:#01a0ec;border-color:#01a0ec}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#30bcff;color:#30bcff}.btn-outline.btn-active:highlighted{background-color:#c0ebff}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#30bcff}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#fff}.body,.body2,.footnote{font-weight:normal;color:#b3b3b3}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#fff;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#b3b3b3;font-size:14}.page{background-color:#303030}.progress{color:#30bcff;background-color:#bababa}.segmented-bar{font-size:13;background-color:#303030;color:#fff;selected-background-color:#30bcff}.sidedrawer-left,.sidedrawer-center{background-color:#303030}.sidedrawer-header{background-color:#30bcff;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#fff}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#30bcff;background-color:#2b2b2b}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#30bcff}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#30bcff;color:#30bcff}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#303030}.tab-view .tab-view-item{background-color:#303030;tabs-background-color:#303030}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#fff;opacity:.9}.logo-wrap .login-logo-sub{color:#fff;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#fff;margin-top:10}.action-bar .action-bar-title{color:#fff}.action-bar .action-item{color:#fff}.form .input[isEnabled='false']{background-color:#303030}.list-group{background-color:#303030}.list-group .list-group-item{background-color:#303030}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#30bcff;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#a0a0a0}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#30bcff;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#30bcff}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/core.light.android copy.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v1.0.6 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#30bcff}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#30bcff;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#F8F8F8;color:#212121}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#30bcff;width:30;height:30}.btn{color:#30bcff;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c0ebff}.btn-primary{background-color:#30bcff;border-color:#30bcff;color:#fff}.btn-primary.btn-active:highlighted{background-color:#01a0ec;border-color:#01a0ec}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#30bcff;color:#30bcff}.btn-outline.btn-active:highlighted{background-color:#c0ebff}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#30bcff}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#30bcff;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#30bcff}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#30bcff}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#30bcff}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#30bcff;color:#30bcff}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#30bcff;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#30bcff;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#30bcff}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/core.light.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v1.0.6 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#30bcff}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#30bcff;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#F8F8F8;color:#212121}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#30bcff;width:30;height:30}.btn{color:#30bcff;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c0ebff}.btn-primary{background-color:#30bcff;border-color:#30bcff;color:#fff}.btn-primary.btn-active:highlighted{background-color:#01a0ec;border-color:#01a0ec}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#30bcff;color:#30bcff}.btn-outline.btn-active:highlighted{background-color:#c0ebff}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#30bcff}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#30bcff;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#30bcff}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#30bcff}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#30bcff}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#30bcff;color:#30bcff}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#30bcff;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#30bcff;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#30bcff}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/core.light.ios copy.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v1.0.6 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#30bcff}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#30bcff;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#F8F8F8;color:#212121}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#30bcff;width:30;height:30}.btn{color:#30bcff;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c0ebff}.btn-primary{background-color:#30bcff;border-color:#30bcff;color:#fff}.btn-primary.btn-active:highlighted{background-color:#01a0ec;border-color:#01a0ec}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#30bcff;color:#30bcff}.btn-outline.btn-active:highlighted{background-color:#c0ebff}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#30bcff}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#30bcff;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#30bcff}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#30bcff}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#30bcff}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#30bcff;color:#30bcff}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.btn{border-width:0;font-family:'SF UI Text Medium';font-size:15}.btn-outline{border-width:1}.btn-rounded-sm{border-radius:4}.btn-rounded-lg{border-radius:19}.form{font-family:'SF UI Text Regular'}.form .input{font-size:15}.form .input.input-rounded{border-radius:27}.h1{font-size:32}.slider{margin:10 15}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#949494}.switch{margin:8 15}.list-group .list-group-item{padding:16 15 16 15}.list-group .list-group-item .thumb{margin-right:15}.list-group .list-group-item .list-group-item-heading{margin-bottom:5}.segmented-bar{margin:0 15;color:#30bcff}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/forest.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#00caab}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#00caab;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#006968;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#00caab;width:30;height:30}.btn{color:#00caab;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#00fdd6}.btn-primary{background-color:#00caab;border-color:#00caab;color:#fff}.btn-primary.btn-active:highlighted{background-color:#009780;border-color:#009780}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#00caab;color:#00caab}.btn-outline.btn-active:highlighted{background-color:#00fdd6}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#00caab}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#00caab;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#00caab}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#00caab}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#00caab}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#00caab;color:#00caab}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#00caab;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#00caab;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#00caab}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/grey.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#aee406}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#aee406;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#5c687c;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#aee406;width:30;height:30}.btn{color:#aee406;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#c5f924}.btn-primary{background-color:#aee406;border-color:#aee406;color:#fff}.btn-primary.btn-active:highlighted{background-color:#88b205;border-color:#88b205}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#aee406;color:#aee406}.btn-outline.btn-active:highlighted{background-color:#c5f924}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#aee406}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#aee406;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#aee406}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#000;background-color:#aee406}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#000}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#aee406}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#aee406;color:#aee406}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#aee406;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#aee406;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#aee406}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/lemon.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#5c687c}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#5c687c;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#ffea00;color:#303030}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#5c687c;width:30;height:30}.btn{color:#5c687c;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#748198}.btn-primary{background-color:#5c687c;border-color:#5c687c;color:#fff}.btn-primary.btn-active:highlighted{background-color:#464f5f;border-color:#464f5f}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#5c687c;color:#5c687c}.btn-outline.btn-active:highlighted{background-color:#748198}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#5c687c}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#5c687c;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#5c687c}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#5c687c}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#5c687c}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#5c687c;color:#5c687c}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{color:#303030}.action-bar .action-item{color:#303030}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#5c687c;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#5c687c;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#5c687c}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/lime.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#006968}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#006968;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#aee406;color:#303030}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#006968;width:30;height:30}.btn{color:#006968;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#009c9b}.btn-primary{background-color:#006968;border-color:#006968;color:#fff}.btn-primary.btn-active:highlighted{background-color:#003635;border-color:#003635}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#006968;color:#006968}.btn-outline.btn-active:highlighted{background-color:#009c9b}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#006968}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#006968;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#006968}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#006968}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#006968}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#006968;color:#006968}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{color:#303030}.action-bar .action-item{color:#303030}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#006968;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#006968;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#006968}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/orange.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#795548}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#795548;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#f57c00;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#795548;width:30;height:30}.btn{color:#795548;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#996b5b}.btn-primary{background-color:#795548;border-color:#795548;color:#fff}.btn-primary.btn-active:highlighted{background-color:#593f35;border-color:#593f35}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#795548;color:#795548}.btn-outline.btn-active:highlighted{background-color:#996b5b}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#795548}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#795548;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#795548}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#795548}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#795548}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#795548;color:#795548}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{color:#fff}.action-bar .action-item{color:#fff}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#795548;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#795548;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#795548}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/purple.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#30bcff}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#30bcff;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#8130ff;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#30bcff;width:30;height:30}.btn{color:#30bcff;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#63cdff}.btn-primary{background-color:#30bcff;border-color:#30bcff;color:#fff}.btn-primary.btn-active:highlighted{background-color:#00aafc;border-color:#00aafc}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#30bcff;color:#30bcff}.btn-outline.btn-active:highlighted{background-color:#63cdff}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#30bcff}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#30bcff;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#30bcff}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#fff;background-color:#30bcff}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#fff}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#30bcff}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#30bcff;color:#30bcff}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{color:#fff}.action-bar .action-item{color:#fff}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#30bcff;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#30bcff;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#30bcff}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/ruby.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#ffea00}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#ffea00;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#ff1744;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#ffea00;width:30;height:30}.btn{color:#ffea00;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#fe3}.btn-primary{background-color:#ffea00;border-color:#ffea00;color:#303030}.btn-primary.btn-active:highlighted{background-color:#cb0;border-color:#cb0}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#ffea00;color:#ffea00}.btn-outline.btn-active:highlighted{background-color:#fe3}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#ffea00}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#ffea00;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#ffea00}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#000;background-color:#ffea00}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#000}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#ffea00}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#ffea00;color:#ffea00}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#ffea00;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#ffea00;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#ffea00}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./css/sky.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * NativeScript Theme v0.1.0 (https://nativescript.org)\n * Copyright 2016-2016 The Theme Authors\n * Copyright 2016-2016 Telerik\n * Licensed under MIT (https://github.com/NativeScript/theme/blob/master/LICENSE)\n */.c-white{color:#fff}.c-bg-white{background-color:#fff}.c-black{color:#000}.c-bg-black{background-color:#000}.c-aqua{color:#00caab}.c-bg-aqua{background-color:#00caab}.c-blue{color:#3d5afe}.c-bg-blue{background-color:#3d5afe}.c-charcoal{color:#303030}.c-bg-charcoal{background-color:#303030}.c-brown{color:#795548}.c-bg-brown{background-color:#795548}.c-forest{color:#006968}.c-bg-forest{background-color:#006968}.c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}.c-grey-light{color:#bababa}.c-bg-grey-light{background-color:#bababa}.c-grey-dark{color:#5c687c}.c-bg-grey-dark{background-color:#5c687c}.c-purple{color:#8130ff}.c-bg-purple{background-color:#8130ff}.c-lemon{color:#ffea00}.c-bg-lemon{background-color:#ffea00}.c-lime{color:#aee406}.c-bg-lime{background-color:#aee406}.c-orange{color:#f57c00}.c-bg-orange{background-color:#f57c00}.c-ruby{color:#ff1744}.c-bg-ruby{background-color:#ff1744}.c-sky{color:#30bcff}.c-bg-sky{background-color:#30bcff}.w-full{width:100%}.w-100{width:100}.h-full{height:100%}.h-100{height:100}.m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}.m-2{margin:2}.m-t-2{margin-top:2}.m-r-2{margin-right:2}.m-b-2{margin-bottom:2}.m-l-2{margin-left:2}.m-x-2{margin-right:2;margin-left:2}.m-y-2{margin-top:2;margin-bottom:2}.m-4{margin:4}.m-t-4{margin-top:4}.m-r-4{margin-right:4}.m-b-4{margin-bottom:4}.m-l-4{margin-left:4}.m-x-4{margin-right:4;margin-left:4}.m-y-4{margin-top:4;margin-bottom:4}.m-5{margin:5}.m-t-5{margin-top:5}.m-r-5{margin-right:5}.m-b-5{margin-bottom:5}.m-l-5{margin-left:5}.m-x-5{margin-right:5;margin-left:5}.m-y-5{margin-top:5;margin-bottom:5}.m-8{margin:8}.m-t-8{margin-top:8}.m-r-8{margin-right:8}.m-b-8{margin-bottom:8}.m-l-8{margin-left:8}.m-x-8{margin-right:8;margin-left:8}.m-y-8{margin-top:8;margin-bottom:8}.m-10{margin:10}.m-t-10{margin-top:10}.m-r-10{margin-right:10}.m-b-10{margin-bottom:10}.m-l-10{margin-left:10}.m-x-10{margin-right:10;margin-left:10}.m-y-10{margin-top:10;margin-bottom:10}.m-12{margin:12}.m-t-12{margin-top:12}.m-r-12{margin-right:12}.m-b-12{margin-bottom:12}.m-l-12{margin-left:12}.m-x-12{margin-right:12;margin-left:12}.m-y-12{margin-top:12;margin-bottom:12}.m-15{margin:15}.m-t-15{margin-top:15}.m-r-15{margin-right:15}.m-b-15{margin-bottom:15}.m-l-15{margin-left:15}.m-x-15{margin-right:15;margin-left:15}.m-y-15{margin-top:15;margin-bottom:15}.m-16{margin:16}.m-t-16{margin-top:16}.m-r-16{margin-right:16}.m-b-16{margin-bottom:16}.m-l-16{margin-left:16}.m-x-16{margin-right:16;margin-left:16}.m-y-16{margin-top:16;margin-bottom:16}.m-20{margin:20}.m-t-20{margin-top:20}.m-r-20{margin-right:20}.m-b-20{margin-bottom:20}.m-l-20{margin-left:20}.m-x-20{margin-right:20;margin-left:20}.m-y-20{margin-top:20;margin-bottom:20}.m-24{margin:24}.m-t-24{margin-top:24}.m-r-24{margin-right:24}.m-b-24{margin-bottom:24}.m-l-24{margin-left:24}.m-x-24{margin-right:24;margin-left:24}.m-y-24{margin-top:24;margin-bottom:24}.m-25{margin:25}.m-t-25{margin-top:25}.m-r-25{margin-right:25}.m-b-25{margin-bottom:25}.m-l-25{margin-left:25}.m-x-25{margin-right:25;margin-left:25}.m-y-25{margin-top:25;margin-bottom:25}.m-28{margin:28}.m-t-28{margin-top:28}.m-r-28{margin-right:28}.m-b-28{margin-bottom:28}.m-l-28{margin-left:28}.m-x-28{margin-right:28;margin-left:28}.m-y-28{margin-top:28;margin-bottom:28}.m-30{margin:30}.m-t-30{margin-top:30}.m-r-30{margin-right:30}.m-b-30{margin-bottom:30}.m-l-30{margin-left:30}.m-x-30{margin-right:30;margin-left:30}.m-y-30{margin-top:30;margin-bottom:30}.p-0{padding:0}.p-t-0{padding-top:0}.p-r-0{padding-right:0}.p-b-0{padding-bottom:0}.p-l-0{padding-left:0}.p-x-0{padding-right:0;padding-left:0}.p-y-0{padding-top:0;padding-bottom:0}.p-2{padding:2}.p-t-2{padding-top:2}.p-r-2{padding-right:2}.p-b-2{padding-bottom:2}.p-l-2{padding-left:2}.p-x-2{padding-right:2;padding-left:2}.p-y-2{padding-top:2;padding-bottom:2}.p-4{padding:4}.p-t-4{padding-top:4}.p-r-4{padding-right:4}.p-b-4{padding-bottom:4}.p-l-4{padding-left:4}.p-x-4{padding-right:4;padding-left:4}.p-y-4{padding-top:4;padding-bottom:4}.p-5{padding:5}.p-t-5{padding-top:5}.p-r-5{padding-right:5}.p-b-5{padding-bottom:5}.p-l-5{padding-left:5}.p-x-5{padding-right:5;padding-left:5}.p-y-5{padding-top:5;padding-bottom:5}.p-8{padding:8}.p-t-8{padding-top:8}.p-r-8{padding-right:8}.p-b-8{padding-bottom:8}.p-l-8{padding-left:8}.p-x-8{padding-right:8;padding-left:8}.p-y-8{padding-top:8;padding-bottom:8}.p-10{padding:10}.p-t-10{padding-top:10}.p-r-10{padding-right:10}.p-b-10{padding-bottom:10}.p-l-10{padding-left:10}.p-x-10{padding-right:10;padding-left:10}.p-y-10{padding-top:10;padding-bottom:10}.p-12{padding:12}.p-t-12{padding-top:12}.p-r-12{padding-right:12}.p-b-12{padding-bottom:12}.p-l-12{padding-left:12}.p-x-12{padding-right:12;padding-left:12}.p-y-12{padding-top:12;padding-bottom:12}.p-15{padding:15}.p-t-15{padding-top:15}.p-r-15{padding-right:15}.p-b-15{padding-bottom:15}.p-l-15{padding-left:15}.p-x-15{padding-right:15;padding-left:15}.p-y-15{padding-top:15;padding-bottom:15}.p-16{padding:16}.p-t-16{padding-top:16}.p-r-16{padding-right:16}.p-b-16{padding-bottom:16}.p-l-16{padding-left:16}.p-x-16{padding-right:16;padding-left:16}.p-y-16{padding-top:16;padding-bottom:16}.p-20{padding:20}.p-t-20{padding-top:20}.p-r-20{padding-right:20}.p-b-20{padding-bottom:20}.p-l-20{padding-left:20}.p-x-20{padding-right:20;padding-left:20}.p-y-20{padding-top:20;padding-bottom:20}.p-24{padding:24}.p-t-24{padding-top:24}.p-r-24{padding-right:24}.p-b-24{padding-bottom:24}.p-l-24{padding-left:24}.p-x-24{padding-right:24;padding-left:24}.p-y-24{padding-top:24;padding-bottom:24}.p-25{padding:25}.p-t-25{padding-top:25}.p-r-25{padding-right:25}.p-b-25{padding-bottom:25}.p-l-25{padding-left:25}.p-x-25{padding-right:25;padding-left:25}.p-y-25{padding-top:25;padding-bottom:25}.p-28{padding:28}.p-t-28{padding-top:28}.p-r-28{padding-right:28}.p-b-28{padding-bottom:28}.p-l-28{padding-left:28}.p-x-28{padding-right:28;padding-left:28}.p-y-28{padding-top:28;padding-bottom:28}.p-30{padding:30}.p-t-30{padding-top:30}.p-r-30{padding-right:30}.p-b-30{padding-bottom:30}.p-l-30{padding-left:30}.p-x-30{padding-right:30;padding-left:30}.p-y-30{padding-top:30;padding-bottom:30}.hr-light{height:1;background-color:#e0e0e0;width:100%}.hr-dark{height:1;background-color:#303030;width:100%}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.font-weight-normal{font-weight:normal}.font-weight-bold{font-weight:bold}.font-italic{font-style:italic}.t-10{font-size:10}.t-12{font-size:12}.t-14{font-size:14}.t-15{font-size:15}.t-16{font-size:16}.t-17{font-size:17}.t-18{font-size:18}.t-19{font-size:19}.t-20{font-size:20}.t-25{font-size:25}.t-30{font-size:30}.img-rounded{border-radius:5}.img-circle{border-radius:20}.img-thumbnail{border-radius:0}.invisible{visibility:collapse}.pull-left{horizontal-align:left}.pull-right{horizontal-align:right}.m-x-auto{horizontal-align:center}.m-y-auto{vertical-align:center}.text-primary{color:#ffea00}.text-danger{color:#d50000}.text-muted{color:#9e9e9e}.bg-primary{background-color:#ffea00;color:#fff}.bg-danger{background-color:#d50000;color:#fff}.action-bar{background-color:#30bcff;color:#fff}.action-bar .action-bar-title{font-weight:bold;font-size:17;vertical-align:center}.action-bar .action-item{font-weight:normal}.activity-indicator{color:#ffea00;width:30;height:30}.btn{color:#ffea00;background-color:transparent;min-height:36;min-width:64;padding:10 10 10 10;font-size:18;margin:8 16 8 16}.btn.btn-active:highlighted{color:#fff;background-color:#fe3}.btn-primary{background-color:#ffea00;border-color:#ffea00;color:#303030}.btn-primary.btn-active:highlighted{background-color:#cb0;border-color:#cb0}.btn-primary.btn-aqua{background-color:#00caab}.btn-primary.btn-blue{background-color:#3d5afe}.btn-primary.btn-brown{background-color:#795548}.btn-primary.btn-forest{background-color:#006968}.btn-primary.btn-grey{background-color:#5c687c}.btn-primary.btn-lemon{background-color:#ffea00;color:#000}.btn-primary.btn-lime{background-color:#aee406;color:#000}.btn-primary.btn-orange{background-color:#f57c00}.btn-primary.btn-purple{background-color:#8130ff}.btn-primary.btn-ruby{background-color:#ff1744}.btn-primary.btn-sky{background-color:#30bcff}.btn-outline{background-color:transparent;border-color:#ffea00;color:#ffea00}.btn-outline.btn-active:highlighted{background-color:#fe3}.btn[isEnabled=false]{color:#a4a4a4;background-color:#e0e0e0;border-color:#e0e0e0}.fa{font-family:FontAwesome, fontawesome-webfont}.form .input{padding:16 8 16 8;background-color:transparent}.form .input.input-border{border-width:1;border-color:#e0e0e0;border-radius:2;padding:16}.form .input.input-rounded{border-width:1;border-color:#e0e0e0;border-radius:28;padding:16}.form .input[isEnabled='false']{background-color:#fafafa}.form .input-field{margin:8}.form .input-field .label{font-size:12;color:#bababa}.form .input-field .input{padding:0;margin:0 0 8 0}.form .input-field .hr-light.active,.form .input-field .hr-dark.active{background-color:#ffea00}.form .input-field.input-sides .label{font-size:18;margin:0 0 8 0}.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:4;font-weight:normal;color:#212121}.body,.body2,.footnote{font-weight:normal;color:#757575}.h1{font-size:32}.h2{font-size:22}.h3{font-size:15}.h4{font-size:12}.h5{font-size:11}.h6{font-size:10}.body{font-size:14}.body2{font-size:17}.footnote{font-size:13}.list-group .list-group-item{color:#212121;font-size:16;margin:0;padding:16}.list-group .list-group-item Label{vertical-align:center}.list-group .list-group-item .thumb{stretch:fill;width:40;height:40;margin-right:16}.list-group .list-group-item.active{background-color:#e0e0e0}.list-group .list-group-item .list-group-item-text{color:#757575;font-size:14}.page{background-color:#fff}.progress{color:#ffea00;background-color:#bababa}.segmented-bar{font-size:13;background-color:#fff;color:#212121;selected-background-color:#ffea00}.sidedrawer-left,.sidedrawer-center{background-color:#fafafa}.sidedrawer-header{background-color:#fafafa;height:148;width:100%}.sidedrawer-left .sidedrawer-header{padding:16 16 0 16}.sidedrawer-center .sidedrawer-header{padding:20 15 0 15}.sidedrawer-header-image{background-color:#e0e0e0}.sidedrawer-left .sidedrawer-header-image{height:64;width:64;border-radius:32;horizontal-align:left;margin-bottom:36}.sidedrawer-center .sidedrawer-header-image{height:74;width:74;border-radius:37;horizontal-align:center;margin-bottom:24}.sidedrawer-header-brand{color:#737373}.sidedrawer-left .sidedrawer-header-brand{horizontal-align:left;font-size:14}.sidedrawer-center .sidedrawer-header-brand{horizontal-align:center;font-size:15}.sidedrawer-list-item{height:48;horizontal-align:left;width:100%;orientation:horizontal}.sidedrawer-list-item .sidedrawer-list-item-icon{width:24;text-align:center;font-size:20;height:48;vertical-align:center}.sidedrawer-list-item.active{color:#000;background-color:#ffea00}.sidedrawer-list-item.active .sidedrawer-list-item-icon{color:#000}.sidedrawer-left .sidedrawer-list-item-icon{margin:0 16 0 16}.sidedrawer-center .sidedrawer-list-item-icon{margin:0 0 0 15}.sidedrawer-list-item-text{horizontal-align:left;text-align:left;font-size:15;background-color:transparent;border-width:0.1;width:80%;vertical-align:center}.sidedrawer-left .sidedrawer-list-item-text{padding-left:16}.sidedrawer-center .sidedrawer-list-item-text{padding-left:15}.slider{background-color:#ffea00}.slider[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.switch[checked=true]{background-color:#ffea00;color:#ffea00}.switch[checked=true][isEnabled=false]{background-color:#e0e0e0;color:#fff}.switch[isEnabled=false]{background-color:#e0e0e0;color:#e0e0e0}.tab-view{selected-color:#30bcff;tabs-background-color:#fff}.tab-view .tab-view-item{background-color:#fff;tabs-background-color:#fff}#login-background{margin-top:-20;background-size:cover;background-position:center}.login-wrap{padding:0 40}.logo-wrap{margin:60 0 10 0;padding:20 0}.logo-wrap .login-logo{text-align:center;font-size:30;font-weight:bold;margin-bottom:10;opacity:1;color:#212121;opacity:.9}.logo-wrap .login-logo-sub{color:#212121;opacity:.8;text-align:center}.login-wrapper{padding:20;background-color:#fff;border-radius:3}.login-wrapper TextField{padding:10 10;margin:10 0 0 0}.go-back{font-size:14;text-align:center;color:#212121;margin-top:10}.action-bar .action-bar-title{font-weight:500;font-size:20}.action-bar .action-item{android-elevation:0;background-color:rgba(255,0,0,0);border-color:rgba(255,0,0,0);border-width:1}.btn{font-family:'Roboto Medium';font-size:14}.btn-primary{border-color:rgba(255,0,0,0)}.btn-outline{android-elevation:0;background-color:rgba(255,0,0,0);border-width:1;border-color:#ffea00;height:36;padding:0}.btn-rounded-sm{border-radius:2;height:36;padding:0}.btn-rounded-lg{border-radius:40;height:36;padding:0}.form{font-family:'Roboto Regular'}.form .input{font-size:16}.h1{font-size:34}.h2{font-size:24}.h3{font-size:16}.h5{font-size:11;font-weight:bold}.body2{font-size:14;font-weight:500}.sidedrawer-list-item-icon{margin:0 16 0 16;padding-top:14}.sidedrawer-list-item-icon,.sidedrawer-list-item{color:#737373}.sidedrawer-list-item{font-family:'Roboto Medium';font-size:14}.slider{color:#ffea00;margin:20 16}.switch{margin:14 16;color:#e0e0e0;background-color:#e0e0e0}.switch[checked=true]{color:#ffea00}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (false) {}


/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Code.vue");
/* harmony import */ var _components_QuizView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/QuizView.vue");
/* harmony import */ var _components_ContactAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/ContactAdd.vue");





var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  code: _components_Code__WEBPACK_IMPORTED_MODULE_2__["default"],
  quiz: _components_QuizView__WEBPACK_IMPORTED_MODULE_3__["default"],
  addContact: _components_ContactAdd__WEBPACK_IMPORTED_MODULE_4__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

},[["./app.js","runtime","vendor"]]]);