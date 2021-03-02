(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['pageName']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/service_page/Delivery.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/pages/service_page/Delivery.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/common_components/Breadcrumb.vue */ "./resources/js copy/components/common_components/Breadcrumb.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Breadcrumb: _components_common_components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      pageName: 'Условия доставки',
      appName: "FreshMarket"
    };
  },
  mounted: function mounted() {
    this.pageName;
    this.appName = "FreshMarket";
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=template&id=348ff716&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=template&id=348ff716& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-lg-12" }, [
    _c("h3", { staticClass: "page-title" }, [_vm._v(_vm._s(_vm.pageName))]),
    _vm._v(" "),
    _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: { name: "home" } } }, [
              _vm._v("Главная")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "breadcrumb-item active",
            attrs: { "aria-current": "page" }
          },
          [_vm._v("Страница -> " + _vm._s(_vm.pageName))]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/service_page/Delivery.vue?vue&type=template&id=9deb1d58&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/pages/service_page/Delivery.vue?vue&type=template&id=9deb1d58& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "wrapper" }, [
      _c(
        "div",
        { staticClass: "row no-gutters" },
        [
          _c("Breadcrumb", { attrs: { pageName: _vm.pageName } }),
          _vm._v(" "),
          _vm._m(0)
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "tab-pane-inner" }, [
        _c("div", [
          _c("h3", { staticClass: "font-weight-bold" }, [
            _vm._v("Условия доставки по Кишиневу:")
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "list1" }, [
          _c("li", [
            _vm._v(
              "Доставка заказов по Кишиневу осуществляется бесплатно. Стоимость доставки в пригороды Кишинева составляет 100 лей."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Доставка с понедельника по пятницу осуществляется с 10:00 до 22:00 в 3 временных интервала (10:00 — 14:00, 14:00 — 18:00, 18:00 — 22:00)."
            ),
            _c("br"),
            _vm._v(
              "В субботу доставка осуществляется с 10:00 до 18:00 без временных интервалов"
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Доставка осуществляется только для товаров, входящих в состав заказа."
            ),
            _c("br"),
            _vm._v(
              "Транспортировка нескольких товаров с целью выбора одного из них на месте доставки не производится."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v("Курьер созвонится с вами за 30 минут до доставки.")
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "В обязанности службы доставки не входит перемещение изделия по квартире, монтаж и подключение, демонстрация потребительских характеристик и обучение покупателя."
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "b_attention" }, [
          _c("p", [
            _vm._v(
              "Обращаем внимание на то, что при получении товар должен быть проверен на комплектность и отсутствие внешних повреждений самим покупателем. Ставя подпись в гарантийном талоне, вы подтверждаете, что не имеете претензий к товару и продавцу."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Если товар доставлен и соответствует всем гарантийным обязательствам, но вы по каким-то причинам передумали его покупать, вам придется оплатить дорожные расходы курьера и стоимость доставки. Поэтому прежде, чем отправлять заказ, убедитесь, что выбрали именно ту модель, которую действительно хотите купить."
            )
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _c("strong", [
            _vm._v("Подъем крупногабаритных товаров на этаж или внос в дом:")
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "list1" }, [
          _c("li", [
            _vm._v(
              "Крупногабаритная техника и мебель доставляется до подъезда клиента или ворот частного дома."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Подъем товара на этаж или занос в дом, при желании клиента, осуществляется за деньги."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Минимальная стоимость подъема единицы крупногабаритной техники составляет 100 лей и включает в себя подъем техники на лифте до квартиры клиента или лестнице до третьего этажа."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "При отсутствии лифта либо при невозможности поднять крупногабаритный товар в лифте начиная с четвертого этажа стоимость подъема будет составлять 20 лей за этаж."
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "Если клиент поможет курьеру поднять товар, то стоимость подъема уменьшится наполовину."
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js copy/components/common_components/Breadcrumb.vue":
/*!***********************************************************************!*\
  !*** ./resources/js copy/components/common_components/Breadcrumb.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_348ff716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=348ff716& */ "./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=template&id=348ff716&");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js& */ "./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumb_vue_vue_type_template_id_348ff716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumb_vue_vue_type_template_id_348ff716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js copy/components/common_components/Breadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=template&id=348ff716&":
/*!******************************************************************************************************!*\
  !*** ./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=template&id=348ff716& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_348ff716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=348ff716& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/Breadcrumb.vue?vue&type=template&id=348ff716&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_348ff716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_348ff716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js copy/pages/service_page/Delivery.vue":
/*!***********************************************************!*\
  !*** ./resources/js copy/pages/service_page/Delivery.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Delivery_vue_vue_type_template_id_9deb1d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delivery.vue?vue&type=template&id=9deb1d58& */ "./resources/js copy/pages/service_page/Delivery.vue?vue&type=template&id=9deb1d58&");
/* harmony import */ var _Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delivery.vue?vue&type=script&lang=js& */ "./resources/js copy/pages/service_page/Delivery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delivery_vue_vue_type_template_id_9deb1d58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Delivery_vue_vue_type_template_id_9deb1d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js copy/pages/service_page/Delivery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js copy/pages/service_page/Delivery.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js copy/pages/service_page/Delivery.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/service_page/Delivery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js copy/pages/service_page/Delivery.vue?vue&type=template&id=9deb1d58&":
/*!******************************************************************************************!*\
  !*** ./resources/js copy/pages/service_page/Delivery.vue?vue&type=template&id=9deb1d58& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_template_id_9deb1d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Delivery.vue?vue&type=template&id=9deb1d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/service_page/Delivery.vue?vue&type=template&id=9deb1d58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_template_id_9deb1d58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_template_id_9deb1d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);