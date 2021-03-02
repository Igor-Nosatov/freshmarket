(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BreadcrumbComponent",
  props: {
    pageName: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth/auth */ "./resources/js/services/auth/auth.js");
/* harmony import */ var _components_common_components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/common_components/BreadcrumbComponent.vue */ "./resources/js/components/common_components/BreadcrumbComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "RegisterPage",
  components: {
    BreadcrumbComponent: _components_common_components_BreadcrumbComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      errors: "",
      name: "",
      email: "",
      password: "",
      pageName: "Регистрация аккаунта"
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _services_auth_auth__WEBPACK_IMPORTED_MODULE_0__["default"].register(this.name, this.email, this.password).then(function (response) {
        _this.$router.push("/");
      })["catch"](function (err) {
        _this.emailErrors.push("У вас уже есть такой email");

        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=template&id=0db66aba&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=template&id=0db66aba& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          [
            _vm._v(
              "\n                Страница -> " +
                _vm._s(_vm.pageName) +
                "\n            "
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("main", { staticClass: "main pb-4 pl-2 pr-2" }, [
    _c("div", { staticClass: "wrapper" }, [
      _c(
        "div",
        { staticClass: "row no-gutters  justify-content-center" },
        [
          _c("BreadcrumbComponent", { attrs: { pageName: _vm.pageName } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 col-sm-12 col-lg-6 p-5 border border-dark" },
            [
              _c("h2", { staticClass: "text-center  mt-2 mb-2" }, [
                _vm._v("Регистрация")
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "enter-form",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: " flex flex-col pt-4" }, [
                    _c(
                      "label",
                      { staticClass: "text-lg", attrs: { for: "email" } },
                      [_vm._v("Почта")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.email,
                          expression: "email",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control rounded-0",
                      attrs: { type: "email", name: "email", required: "" },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value.trim()
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col pt-4" }, [
                    _c(
                      "label",
                      { staticClass: "text-lg", attrs: { for: "name" } },
                      [_vm._v("Имя")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.name,
                          expression: "name",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control rounded-0",
                      attrs: { type: "text", name: "name", required: "" },
                      domProps: { value: _vm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value.trim()
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col pt-4" }, [
                    _c(
                      "label",
                      { staticClass: "text-lg", attrs: { for: "password" } },
                      [_vm._v("Пароль")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.password,
                          expression: "password",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control rounded-0",
                      attrs: {
                        type: "password",
                        name: "password",
                        required: ""
                      },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value.trim()
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn-main p-3 mt-3",
                      attrs: { type: "submit" }
                    },
                    [
                      _vm._v(
                        "\n                        Регистрация\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "h4",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: { name: "login" } }
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-key fa-2x header-text-color"
                          }),
                          _vm._v(
                            "\n                            Если есть учетная запись ---> Вход в учётную\n                            запись\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/common_components/BreadcrumbComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/common_components/BreadcrumbComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BreadcrumbComponent_vue_vue_type_template_id_0db66aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadcrumbComponent.vue?vue&type=template&id=0db66aba& */ "./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=template&id=0db66aba&");
/* harmony import */ var _BreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadcrumbComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadcrumbComponent_vue_vue_type_template_id_0db66aba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BreadcrumbComponent_vue_vue_type_template_id_0db66aba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common_components/BreadcrumbComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadcrumbComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=template&id=0db66aba&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=template&id=0db66aba& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbComponent_vue_vue_type_template_id_0db66aba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadcrumbComponent.vue?vue&type=template&id=0db66aba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common_components/BreadcrumbComponent.vue?vue&type=template&id=0db66aba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbComponent_vue_vue_type_template_id_0db66aba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadcrumbComponent_vue_vue_type_template_id_0db66aba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/auth/RegisterPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/auth/RegisterPage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=template&id=30eb5a60& */ "./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&");
/* harmony import */ var _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterPage.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/RegisterPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/RegisterPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterPage.vue?vue&type=template&id=30eb5a60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/RegisterPage.vue?vue&type=template&id=30eb5a60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterPage_vue_vue_type_template_id_30eb5a60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/auth/api.js":
/*!*******************************************!*\
  !*** ./resources/js/services/auth/api.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routing_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../routing/router */ "./resources/js/routing/router.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./resources/js/services/auth/auth.js");



var api = {
  apiUrl: "/api",
  post: function post(path, body) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(this.apiUrl).concat(path), body)["catch"](api.handleError);
  },
  get: function get(path) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(this.apiUrl).concat(path))["catch"](api.handleError);
  },
  handleError: function handleError(err) {
    var code = err.response.status;

    if (code === 403) {
      console.log('forbidden');
    }

    if (code === 401) {
      console.log('unauthorized');
      _auth__WEBPACK_IMPORTED_MODULE_2__["default"].resetHeaders();
      _routing_router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
        name: 'home'
      });
    }

    return Promise.reject(err);
  },
  user: {
    get: function get() {
      return api.get("/user");
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/services/auth/auth.js":
/*!********************************************!*\
  !*** ./resources/js/services/auth/auth.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./resources/js/services/auth/api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var auth = {
  init: function init() {
    var token = this.loggedIn();

    if (token) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = {
        'Authorization': "Bearer ".concat(token)
      };
    }
  },
  loggedIn: function loggedIn() {
    if (!localStorage) return null;
    return localStorage.getItem('token');
  },
  user: function user() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  },
  setToken: function setToken(token) {
    localStorage.setItem('token', token);
  },
  login: function () {
    var _login = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {
      var response, token, response_1;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(window.location.origin, "/api/login"), {
                email: email,
                password: password
              });

            case 3:
              response = _context.sent;
              token = response.data['access_token'];
              localStorage.setItem('token', token);
              axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = {
                'Authorization': "Bearer ".concat(token)
              };
              _context.next = 9;
              return _api__WEBPACK_IMPORTED_MODULE_2__["default"].user.get();

            case 9:
              response_1 = _context.sent;
              localStorage.setItem('user', JSON.stringify(response_1.data));
              _context.next = 19;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.response);
              _context.next = 18;
              return Promise.reject(_context.t0.response);

            case 18:
              return _context.abrupt("return", _context.sent);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    function login(_x, _x2) {
      return _login.apply(this, arguments);
    }

    return login;
  }(),
  register: function () {
    var _register = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(name, email, password) {
      var response, token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(window.location.origin, "/api/register"), {
                name: name,
                email: email,
                password: password
              });

            case 2:
              response = _context2.sent;

              if (!response.error) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", false);

            case 5:
              token = response.data['access_token'];
              localStorage.setItem('token', token);
              axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = {
                'Authorization': "Bearer ".concat(token)
              };
              _api__WEBPACK_IMPORTED_MODULE_2__["default"].user.get().then(function (response) {
                localStorage.setItem('user', JSON.stringify(response.data));
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function register(_x3, _x4, _x5) {
      return _register.apply(this, arguments);
    }

    return register;
  }(),
  resetHeaders: function resetHeaders() {
    localStorage.removeItem('token');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = {
      'Authorization': ''
    };
  },
  logout: function logout() {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(window.location.origin, "/api/logout")).then(function (res) {
      return auth.resetHeaders();
    })["catch"](function (err) {
      return auth.resetHeaders();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ })

}]);