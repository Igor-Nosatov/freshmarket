(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
  props: ['meta_data'],
  data: function data() {
    return {
      offset: 2
    };
  },
  computed: {
    pages: function pages() {
      var pages = [];

      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }

      return pages;
    },
    rangeStart: function rangeStart() {
      var start = this.meta_data.current_page - this.offset;
      return start > 0 ? start : 1;
    },
    rangeEnd: function rangeEnd() {
      return Math.ceil(this.meta_data.total / this.meta_data.per_page);
    }
  },
  methods: {
    next: function next(page) {
      this.$emit('next', page);
    }
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
  props: ['product']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/pages/market/Catalog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _vuex_modules_catalog_types_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../vuex/modules/catalog/types/actions */ "./resources/js copy/vuex/modules/catalog/types/actions.js");
/* harmony import */ var _vuex_modules_catalog_types_getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../vuex/modules/catalog/types/getters */ "./resources/js copy/vuex/modules/catalog/types/getters.js");
/* harmony import */ var _components_common_components_CatalogItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/common_components/CatalogItem.vue */ "./resources/js copy/components/common_components/CatalogItem.vue");
/* harmony import */ var _components_common_components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/common_components/Breadcrumb.vue */ "./resources/js copy/components/common_components/Breadcrumb.vue");
/* harmony import */ var _components_catalog_components_Pagination_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/catalog_components/Pagination.vue */ "./resources/js copy/components/catalog_components/Pagination.vue");
/* harmony import */ var _services_catalog_catalogService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/catalog/catalogService */ "./resources/js copy/services/catalog/catalogService.js");
/* harmony import */ var _services_requestService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/requestService */ "./resources/js copy/services/requestService.js");
/* harmony import */ var _helpers_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../helpers/search */ "./resources/js copy/helpers/search.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Breadcrumb: _components_common_components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CatalogItem: _components_common_components_CatalogItem_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Pagination: _components_catalog_components_Pagination_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      pageName: "",
      prices: [],
      products: [],
      categories: [],
      producers: [],
      selected: {
        type: [],
        sortBy: null,
        prices: [],
        categories: [],
        producers: [],
        search: "",
        custom_search: "",
        sort_field: "name",
        sort_direction: "desc"
      },
      meta_data: {
        last_page: null,
        current_page: 1,
        prev_page_url: null,
        per_page: null,
        total: ""
      }
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.fetchProducts();

              _this.fetchProducers();

              _this.fetchPrices();

              _this.fetchCategories();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    selected: {
      handler: function handler() {
        this.fetchProducts();
        this.getCategories();
        this.fetchProducers();
        this.fetchPrices();
        this.meta_data.total;
      },
      deep: true
    },
    search: _helpers_search__WEBPACK_IMPORTED_MODULE_11__["default"],
    custom_search: _helpers_search__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("catalog", {
    getProducts: _vuex_modules_catalog_types_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_CATALOG_PRODUCT"],
    getCategories: _vuex_modules_catalog_types_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_CATEGORIES"],
    getPrice: _vuex_modules_catalog_types_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_PRICE_FOR_PRODUCTS"],
    getProducers: _vuex_modules_catalog_types_actions__WEBPACK_IMPORTED_MODULE_4__["FETCH_PRODUCERS"]
  })), {}, {
    fetchCategories: function fetchCategories() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.getCategories("".concat(_this2.$route.params.slug), {
                  params: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(_this2.selected, "categories")
                });

              case 2:
                _this2.categories = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchProducers: function fetchProducers() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.getProducers("".concat(_this3.$route.params.slug), {
                  params: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(_this3.selected, "producers")
                });

              case 2:
                _this3.producers = _context3.sent;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchPrices: function fetchPrices() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.getPrice("".concat(_this4.$route.params.slug), {
                  params: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.omit(_this4.selected, "prices")
                });

              case 2:
                _this4.prices = _context4.sent;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchProducts: function fetchProducts() {
      var _arguments = arguments,
          _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var page;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/catalog/".concat(_this5.$route.params.slug), {
                  params: _objectSpread(_objectSpread({}, _this5.selected), {}, {
                    page: page
                  })
                }).then(function (response) {
                  _this5.products = response.data.products.data;
                  _this5.pageName = response.data.types[0].name;
                  _this5.meta_data.last_page = response.data.products.last_page;
                  _this5.meta_data.current_page = response.data.products.current_page;
                  _this5.meta_data.prev_page_url = response.data.products.prev_page_url;
                  _this5.meta_data.total = response.data.products.total;
                  _this5.meta_data.per_page = response.data.products.per_page;
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    change_sort: function change_sort(field) {
      switch (field) {
        case "min":
          this.selected.sort_field = "price";
          this.selected.sort_direction = "asc";
          break;

        case "max":
          this.selected.sort_field = "price";
          this.selected.sort_direction = "desc";
          break;
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\na.page-link[data-v-30c4cf22]{\n    cursor:pointer;\n    width:100%;\n    margin:0px !important;\n}\n.page-item.active .page-link[data-v-30c4cf22] {\n    background-color: #96c93d!important;\n}\n.pagination>li>a[data-v-30c4cf22] {\n    padding-left: 22px !important;\n}\n.disabled[data-v-30c4cf22]{\n    border-color: #2c3e50 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product-price[data-v-0cf0f8c9]{\n    color:#000!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dropdown-menu[data-v-6e38f668] {\n    background-color: transparent;\n    border: 0px solid rgba(0, 0, 0, 0.15);\n    border-radius: 0rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=template&id=30c4cf22&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=template&id=30c4cf22&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("nav", { staticClass: "mt-3" }, [
    _c(
      "ul",
      { staticClass: "pagination pagination-lg d-flex flex-wrap" },
      [
        _c(
          "li",
          {
            staticClass: "page-item",
            class: { disabled: _vm.meta_data.prev_page_url === null }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                on: {
                  click: function($event) {
                    return _vm.next(_vm.meta_data.current_page - 1)
                  }
                }
              },
              [_vm._v("\n                «\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.pages, function(page) {
          return _c(
            "li",
            {
              key: page,
              staticClass: "page-item",
              class: { active: _vm.meta_data.current_page === page }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.next(page)
                    }
                  }
                },
                [_vm._v("\n                " + _vm._s(page) + "\n            ")]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "page-item",
            class: {
              disabled: _vm.meta_data.current_page === _vm.meta_data.last_page
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                on: {
                  click: function($event) {
                    return _vm.next(_vm.meta_data.current_page + 1)
                  }
                }
              },
              [_vm._v("\n                »\n            ")]
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "col-12 col-sm-12 col-md-6 col-lg-4 p-1 mt-2 mb-2" },
    [
      _c(
        "router-link",
        {
          attrs: {
            to: { name: "product", params: { title: _vm.product.title } }
          }
        },
        [
          _c("div", { staticClass: "card" }, [
            _c("a", { attrs: { href: "" } }, [
              _c("picture", [
                _c("img", {
                  staticClass: "img-card",
                  attrs: { src: "/img/" + _vm.product.img_url, alt: "image" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("small", { staticClass: "card-text text-secondary" }, [
                _vm._v(" Цена за 1 кг "),
                _c("br"),
                _vm._v(" мин. заказ 1 кг")
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "" } }, [
                _c(
                  "h6",
                  {
                    staticClass:
                      "mt-2 mb-2 card-title font-weight-bold text-black"
                  },
                  [_vm._v(_vm._s(_vm.product.name))]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex flex-row flex-wrap justify-content-between"
                },
                [
                  _c("div", { staticClass: "price" }, [
                    _c("p", { staticClass: "product-price " }, [
                      _vm._v(
                        _vm._s(
                          _vm._f("toFix")(
                            _vm._f("priceFormat")(_vm.product.price)
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "button-add-to-cart" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "card-btn",
                          attrs: {
                            to: {
                              name: "product",
                              params: { title: _vm.product.title }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus text-white" }),
                          _vm._v(" "),
                          _c("picture", [
                            _c("img", {
                              staticClass: "basket-icon",
                              attrs: { src: "/img/basket.svg", alt: "" }
                            })
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=template&id=6e38f668&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js copy/pages/market/Catalog.vue?vue&type=template&id=6e38f668&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("main", { staticClass: "main pb-5" }, [
    _c("div", { staticClass: "wrapper" }, [
      _c(
        "div",
        { staticClass: "row no-gutters" },
        [
          _c("Breadcrumb", { attrs: { pageName: _vm.pageName } }),
          _vm._v(" "),
          _c("div", { staticClass: "col-12  col-lg-3 pb-5" }, [
            _c("aside", { staticClass: "aside" }, [
              _c("form", { attrs: { action: "" } }, [
                _c(
                  "div",
                  { staticClass: "product-category form-row pl-1 pr-1 pt-1" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "product-producer form-row pl-1 pr-1 pt-1"
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selected.search,
                                  expression: "selected.search"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "search",
                                placeholder: "Введите название товара ..."
                              },
                              domProps: { value: _vm.selected.search },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.selected,
                                    "search",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      _vm._l(_vm.categories, function(category, index) {
                        return _c(
                          "label",
                          { key: index, staticClass: "container" },
                          [
                            _c("span", { staticClass: "checkbox-text" }, [
                              _vm._v(
                                _vm._s(category.name) +
                                  " (" +
                                  _vm._s(category.products_count) +
                                  ")"
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selected.categories,
                                  expression: "selected.categories"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                name: "category",
                                id: "category" + index
                              },
                              domProps: {
                                value: category.id,
                                checked: Array.isArray(_vm.selected.categories)
                                  ? _vm._i(
                                      _vm.selected.categories,
                                      category.id
                                    ) > -1
                                  : _vm.selected.categories
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.selected.categories,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = category.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.selected,
                                          "categories",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.selected,
                                          "categories",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.selected, "categories", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "checkmark" })
                          ]
                        )
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "price-filter form-row pl-1 pr-1 " }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    _vm._l(_vm.prices, function(price, index) {
                      return _c(
                        "label",
                        { key: index, staticClass: "container" },
                        [
                          _c("span", { staticClass: "checkbox-text" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(price.name)
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selected.prices,
                                expression: "selected.prices"
                              }
                            ],
                            attrs: {
                              type: "checkbox",
                              name: "checkbox",
                              id: "price" + index
                            },
                            domProps: {
                              value: index,
                              checked: Array.isArray(_vm.selected.prices)
                                ? _vm._i(_vm.selected.prices, index) > -1
                                : _vm.selected.prices
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.selected.prices,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = index,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.selected,
                                        "prices",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.selected,
                                        "prices",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.selected, "prices", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "checkmark" })
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "product-producer form-row pl-1 pr-1 pt-1" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12" },
                      _vm._l(_vm.producers, function(producer, index) {
                        return _c(
                          "label",
                          { key: index, staticClass: "container" },
                          [
                            producer.products_count > 0
                              ? _c("div", [
                                  _c("span", { staticClass: "checkbox-text" }, [
                                    _vm._v(
                                      _vm._s(producer.name) +
                                        " (" +
                                        _vm._s(producer.products_count) +
                                        ")"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.selected.producers,
                                        expression: "selected.producers"
                                      }
                                    ],
                                    attrs: {
                                      type: "checkbox",
                                      name: "producer",
                                      id: "producer" + index
                                    },
                                    domProps: {
                                      value: producer.id,
                                      checked: Array.isArray(
                                        _vm.selected.producers
                                      )
                                        ? _vm._i(
                                            _vm.selected.producers,
                                            producer.id
                                          ) > -1
                                        : _vm.selected.producers
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.selected.producers,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = producer.id,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.selected,
                                                "producers",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.selected,
                                                "producers",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(
                                            _vm.selected,
                                            "producers",
                                            $$c
                                          )
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "checkmark" })
                                ])
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-lg-9 pl-3" }, [
            _c("div", { staticClass: "row no-gutters" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-row flex-wrap justify-content-between"
                  },
                  [
                    _c("div", { staticClass: "product-qty  w-25" }, [
                      _c("h3", { staticClass: "font-weight-bold pt-2 pl-2" }, [
                        _vm._v(
                          "\n                                    В наличии (" +
                            _vm._s(this.meta_data.total) +
                            ")\n                                    шт.\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "product-sort d-flex  " }, [
                      _c("div", { staticClass: "dropdown" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn-main p-3 w-100",
                            attrs: {
                              type: "button",
                              id: "dropdownMenuButton",
                              "data-toggle": "dropdown",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _vm._v(
                              "\n                                        Сортировать:\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdownMenuButton" }
                          },
                          [
                            _c("div", { staticClass: "mt-1 mb-1" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-main",
                                  on: {
                                    click: function($event) {
                                      return _vm.change_sort("max")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                По макс цене\n                                            "
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-1 mb-1" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-main",
                                  on: {
                                    click: function($event) {
                                      return _vm.change_sort("min")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                                По мин цене\n                                            "
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row no-gutters" },
              _vm._l(_vm.products, function(product) {
                return _c("CatalogItem", {
                  key: product.id,
                  attrs: { product: product }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row no-gutters" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "nav",
                  { attrs: { "aria-label": "Page navigation product" } },
                  [
                    _c("pagination", {
                      attrs: { meta_data: _vm.meta_data },
                      on: { next: _vm.fetchProducts }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
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
    return _c("div", { staticClass: "col-12" }, [
      _c("h5", { staticClass: "text-left filter-title" }, [
        _vm._v(
          "\n                                        Поиск\n                                    "
        )
      ]),
      _vm._v(" "),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h5", { staticClass: "text-left filter-title" }, [
        _vm._v(
          "\n                                    Категория\n                                "
        )
      ]),
      _vm._v(" "),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h5", { staticClass: "text-left filter-title" }, [_vm._v("Цена")]),
      _vm._v(" "),
      _c("hr")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("h5", { staticClass: "text-left filter-title" }, [
        _vm._v(
          "\n                                    Производитель\n                                "
        )
      ]),
      _vm._v(" "),
      _c("hr")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js copy/components/catalog_components/Pagination.vue":
/*!************************************************************************!*\
  !*** ./resources/js copy/components/catalog_components/Pagination.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_30c4cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=30c4cf22&scoped=true& */ "./resources/js copy/components/catalog_components/Pagination.vue?vue&type=template&id=30c4cf22&scoped=true&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js copy/components/catalog_components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Pagination_vue_vue_type_style_index_0_id_30c4cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css& */ "./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_30c4cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_30c4cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30c4cf22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js copy/components/catalog_components/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js copy/components/catalog_components/Pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js copy/components/catalog_components/Pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_30c4cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=style&index=0&id=30c4cf22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_30c4cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_30c4cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_30c4cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_id_30c4cf22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js copy/components/catalog_components/Pagination.vue?vue&type=template&id=30c4cf22&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js copy/components/catalog_components/Pagination.vue?vue&type=template&id=30c4cf22&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_30c4cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=30c4cf22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/catalog_components/Pagination.vue?vue&type=template&id=30c4cf22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_30c4cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_30c4cf22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js copy/components/common_components/CatalogItem.vue":
/*!************************************************************************!*\
  !*** ./resources/js copy/components/common_components/CatalogItem.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CatalogItem_vue_vue_type_template_id_0cf0f8c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true& */ "./resources/js copy/components/common_components/CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true&");
/* harmony import */ var _CatalogItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CatalogItem.vue?vue&type=script&lang=js& */ "./resources/js copy/components/common_components/CatalogItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CatalogItem_vue_vue_type_style_index_0_id_0cf0f8c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css& */ "./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CatalogItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CatalogItem_vue_vue_type_template_id_0cf0f8c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CatalogItem_vue_vue_type_template_id_0cf0f8c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cf0f8c9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js copy/components/common_components/CatalogItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js copy/components/common_components/CatalogItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js copy/components/common_components/CatalogItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_style_index_0_id_0cf0f8c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=style&index=0&id=0cf0f8c9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_style_index_0_id_0cf0f8c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_style_index_0_id_0cf0f8c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_style_index_0_id_0cf0f8c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_style_index_0_id_0cf0f8c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js copy/components/common_components/CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js copy/components/common_components/CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_template_id_0cf0f8c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/components/common_components/CatalogItem.vue?vue&type=template&id=0cf0f8c9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_template_id_0cf0f8c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CatalogItem_vue_vue_type_template_id_0cf0f8c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js copy/helpers/search.js":
/*!*********************************************!*\
  !*** ./resources/js copy/helpers/search.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (this["this"].meta_data.current_page + 1 > this["this"].meta_data.last_page) this["this"].meta_data.current_page = this.meta_data.last_page - 1;
});

/***/ }),

/***/ "./resources/js copy/pages/market/Catalog.vue":
/*!****************************************************!*\
  !*** ./resources/js copy/pages/market/Catalog.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Catalog_vue_vue_type_template_id_6e38f668_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Catalog.vue?vue&type=template&id=6e38f668&scoped=true& */ "./resources/js copy/pages/market/Catalog.vue?vue&type=template&id=6e38f668&scoped=true&");
/* harmony import */ var _Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalog.vue?vue&type=script&lang=js& */ "./resources/js copy/pages/market/Catalog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Catalog_vue_vue_type_style_index_0_id_6e38f668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css& */ "./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Catalog_vue_vue_type_template_id_6e38f668_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Catalog_vue_vue_type_template_id_6e38f668_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e38f668",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js copy/pages/market/Catalog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js copy/pages/market/Catalog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js copy/pages/market/Catalog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Catalog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_6e38f668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=style&index=0&id=6e38f668&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_6e38f668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_6e38f668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_6e38f668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_style_index_0_id_6e38f668_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js copy/pages/market/Catalog.vue?vue&type=template&id=6e38f668&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js copy/pages/market/Catalog.vue?vue&type=template&id=6e38f668&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_6e38f668_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Catalog.vue?vue&type=template&id=6e38f668&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js copy/pages/market/Catalog.vue?vue&type=template&id=6e38f668&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_6e38f668_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Catalog_vue_vue_type_template_id_6e38f668_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js copy/services/catalog/catalogService.js":
/*!**************************************************************!*\
  !*** ./resources/js copy/services/catalog/catalogService.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../requestService.js */ "./resources/js copy/services/requestService.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var apiEndpoint = '/catalog/';
var catalogService = {
  fetchProductsByType: function fetchProductsByType(params, body) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _requestService_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiEndpoint + params, body);

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  fetchCategories: function fetchCategories(params, body) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _response$data;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _requestService_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiEndpoint + params, body);

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.categories);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  fetchProducers: function fetchProducers(params, body) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _response$data2;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _requestService_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiEndpoint + params, body);

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.producers);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  fetchPrices: function fetchPrices(params, body) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var _response$data3;

      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _requestService_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(apiEndpoint + params, body);

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.prices);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (catalogService);

/***/ }),

/***/ "./resources/js copy/services/requestService.js":
/*!******************************************************!*\
  !*** ./resources/js copy/services/requestService.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_URL = '/api';
var requestService = {
  get: function get(url) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(API_URL + url, {
      params: params,
      headers: headers
    });
  },
  post: function post(url) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(API_URL + url, body, config);
  },
  put: function put(url) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(API_URL + url, body, config);
  },
  "delete": function _delete(url) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](API_URL + url, config);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (requestService);

/***/ }),

/***/ "./resources/js copy/vuex/modules/catalog/types/actions.js":
/*!*****************************************************************!*\
  !*** ./resources/js copy/vuex/modules/catalog/types/actions.js ***!
  \*****************************************************************/
/*! exports provided: FETCH_CATALOG_PRODUCT, FETCH_CATEGORIES, FETCH_PRICE_FOR_PRODUCTS, FETCH_PRODUCERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATALOG_PRODUCT", function() { return FETCH_CATALOG_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIES", function() { return FETCH_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRICE_FOR_PRODUCTS", function() { return FETCH_PRICE_FOR_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCERS", function() { return FETCH_PRODUCERS; });
var FETCH_CATALOG_PRODUCT = 'FETCH_CATALOG_PRODUCT';
var FETCH_CATEGORIES = 'FETCH_CATEGORIES';
var FETCH_PRICE_FOR_PRODUCTS = 'FETCH_PRICE_FOR_PRODUCTS';
var FETCH_PRODUCERS = 'FETCH_PRODUCERS';

/***/ }),

/***/ "./resources/js copy/vuex/modules/catalog/types/getters.js":
/*!*****************************************************************!*\
  !*** ./resources/js copy/vuex/modules/catalog/types/getters.js ***!
  \*****************************************************************/
/*! exports provided: GET_CATALOG_PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATALOG_PRODUCTS", function() { return GET_CATALOG_PRODUCTS; });
var GET_CATALOG_PRODUCTS = 'GET_CATALOG_PRODUCTS';

/***/ })

}]);