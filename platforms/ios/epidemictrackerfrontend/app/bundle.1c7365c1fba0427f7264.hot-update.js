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
    [_vm._t("header"), _vm._t("content")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQudnVlP2FjZWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBLGNBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FMQTs7QUFNQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUxBO0FBTkEsRzs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLCtCQUErQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLjFjNzM2NWMxZmJhMDQyN2Y3MjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48U3RhY2tMYXlvdXQgIDpjbGFzcz1cIidjYXJkICcgKyB2YXJpYW50XCI+XG5cbiAgPHNsb3QgbmFtZT0naGVhZGVyJz48L3Nsb3Q+IFxuXG4gIDxzbG90IG5hbWU9J2NvbnRlbnQnID48L3Nsb3Q+XG4gICAgXG48L1N0YWNrTGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjYXJkJyxcbiAgY3JlYXRlZCAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2FyZCBjcmVhdGVkJyk7XG4gICAgICB0aGlzLnZhcmlhbnQgPSB0aGlzLnNjb3JlID4gMCAmJiB0aGlzLnNjb3JlIDwgNTA/ICdiZy1kYW5nZXInOiAnYmctcHJpbWFyeSc7XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2JnLXByaW1hcnknXG4gICAgfSxcbiAgICBzY29yZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuXG4uY2FyZHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6OTAlO1xuICAgIGhlaWdodDoxMCU7XG4gICAgXG4gICAgbWFyZ2luLWxlZnQ6MjA7XG4gICAgbWFyZ2luLXJpZ2h0OjIwO1xuXG4gICAgbWFyZ2luOiA3O1xuXG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTA7XG4gICAgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBcbiAgICB9XG5cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgeyBjbGFzczogXCJjYXJkIFwiICsgX3ZtLnZhcmlhbnQgfSxcbiAgICBbX3ZtLl90KFwiaGVhZGVyXCIpLCBfdm0uX3QoXCJjb250ZW50XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9