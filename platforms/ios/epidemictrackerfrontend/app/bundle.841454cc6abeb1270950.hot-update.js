webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/QuizView.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted() {
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
      items: [],
      processing: true,
      token: null
    };
  },

  methods: {
    loadQuiz(quizid) {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Quizes/view/").concat(quizid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Quizes/view/").concat(quizid),
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);
        /*if(response.statusCode == 200) {
            this.items = result.quiz.questions
        }*/
        // this.processing = false;
      }, e => {
        // this.processing = false;
        this.alert("Unfortunately we could not fetch the quiz.");
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9RdWl6Vmlldy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFFQTs7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBUEE7O0FBUUEsbUJBUkE7O0FBU0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsNkJBRkE7QUFHQSxlQUhBO0FBSUEsc0JBSkE7QUFLQTtBQUxBO0FBT0EsR0FqQkE7O0FBa0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSEFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBRUE7QUFFQTs7O0FBR0E7QUFFQSxPQWRBLEVBY0E7QUFDQTtBQUNBLG1CQUNBLDRDQURBO0FBR0EsT0FuQkE7QUFvQkE7O0FBekJBO0FBbEJBLEciLCJmaWxlIjoiYnVuZGxlLjg0MTQ1NGNjNmFiZWIxMjcwOTUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIDp0aXRsZT1cIidGb3JtICcgKyBxdWl6aWRcIj48L0FjdGlvbkJhcj5cclxuXHJcbiAgICAgICAgPFNjcm9sbFZpZXcgY2xhc3M9XCJiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiZ2hnaGdoZ2hnaGdoZ2hcIi8+XHJcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAgdi1pZj1cIiFwcm9jZXNzaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cIjEwMCwqXCIgcm93cz1cIipcIiAgY2xhc3M9XCJiZy1kYXJrXCIgdi1mb3I9XCJxdWVzdGlvbiBpbiBpdGVtc1wiIDprZXk9XCJxdWVzdGlvbi5wb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsICBjb2w9XCIxXCIgOnRleHQ9XCIocXVlc3Rpb24ucG9zaXRpb24pICsgJy4gJyArIHF1ZXN0aW9uLnF1ZXN0aW9uX3RleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwibGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcblxyXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cclxuXHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xyXG5cclxuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgICAgICAvLyBhbGVydCh0aGlzLmlkKVxyXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IGl0ZW1zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUXVpeih0aGlzLnF1aXppZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczogWydxdWl6aWQnXSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgICAgIGxvYWRRdWl6KHF1aXppZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHIgPSBgJHtCQVNFX0FQSX1RdWl6ZXMvdmlldy8ke3F1aXppZH1gXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRyKVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAgYCR7QkFTRV9BUEl9UXVpemVzL3ZpZXcvJHtxdWl6aWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiAsICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy50b2tlbn0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyppZihyZXNwb25zZS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlc3VsdC5xdWl6LnF1ZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmZXRjaCB0aGUgcXVpei5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwO1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==