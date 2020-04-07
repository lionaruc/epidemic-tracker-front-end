webpackHotUpdate("bundle",{

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
    [
      _vm._t("header"),
      _vm._t("content"),
      _c("p", [_vm._v("Risk: " + _vm._s(100 - this.score) + "%")])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQudnVlP2FjZWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0EsY0FEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUxBOztBQU1BO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBTEE7QUFOQSxHOzs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssK0JBQStCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS42ODYzMTk3OGZiMzNmMGFlYWY1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPFN0YWNrTGF5b3V0ICA6Y2xhc3M9XCInY2FyZCAnICsgdmFyaWFudFwiPlxuXG4gIDxzbG90IG5hbWU9J2hlYWRlcic+PC9zbG90PiBcblxuICA8c2xvdCBuYW1lPSdjb250ZW50JyA+PC9zbG90PlxuXG4gIDxwPlJpc2s6IHt7MTAwLXRoaXMuc2NvcmV9fSU8L3A+ICBcbiAgICBcbjwvU3RhY2tMYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NhcmQnLFxuICBjcmVhdGVkICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjYXJkIGNyZWF0ZWQnKTtcbiAgICAgIHRoaXMudmFyaWFudCA9IHRoaXMuc2NvcmUgPiAwICYmIHRoaXMuc2NvcmUgPCA1MD8gJ2JnLWRhbmdlcic6ICdiZy1wcmltYXJ5JztcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YXJpYW50OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYmctcHJpbWFyeSdcbiAgICB9LFxuICAgIHNjb3JlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG5cbi5jYXJke1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDo5MCU7XG4gICAgaGVpZ2h0OjEwJTtcbiAgICBcbiAgICBtYXJnaW4tbGVmdDoyMDtcbiAgICBtYXJnaW4tcmlnaHQ6MjA7XG5cbiAgICBtYXJnaW46IDc7XG5cbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMDtcbiAgICBcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIFxuICAgIH1cblxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7IGNsYXNzOiBcImNhcmQgXCIgKyBfdm0udmFyaWFudCB9LFxuICAgIFtcbiAgICAgIF92bS5fdChcImhlYWRlclwiKSxcbiAgICAgIF92bS5fdChcImNvbnRlbnRcIiksXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlJpc2s6IFwiICsgX3ZtLl9zKDEwMCAtIHRoaXMuc2NvcmUpICsgXCIlXCIpXSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=