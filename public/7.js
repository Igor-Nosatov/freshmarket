(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{3:function(t,e,a){"use strict";var s={name:"BreadcrumbComponent",props:{pageName:String}},r=a(1),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12"},[a("h3",{staticClass:"page-title"},[t._v(t._s(t.pageName))]),t._v(" "),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"home"}}},[t._v("Главная")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n                Страница -> "+t._s(t.pageName)+"\n            ")])])])])}),[],!1,null,null,null);e.a=c.exports},65:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s),c=a(14),i=a.n(c),n=a(4),o=a.n(n),l=a(2),d=a(12),u=a(3),p=function(){this.this.meta_data.current_page+1>this.this.meta_data.last_page&&(this.this.meta_data.current_page=this.meta_data.last_page-1)},m={props:{meta_data:Array},data:function(){return{offset:2}},computed:{pages:function(){for(var t=[],e=this.rangeStart;e<=this.rangeEnd;e++)t.push(e);return t},rangeStart:function(){var t=this.meta_data.current_page-this.offset;return t>0?t:1},rangeEnd:function(){return Math.ceil(this.meta_data.total/this.meta_data.per_page)}},methods:{next:function(t){this.$emit("next",t)}}},v=a(1),_=Object(v.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"mt-3"},[a("ul",{staticClass:"pagination pagination-lg d-flex flex-wrap"},[a("li",{staticClass:"page-item",class:{disabled:null===t.meta_data.prev_page_url}},[a("a",{staticClass:"page-link",on:{click:function(e){return t.next(t.meta_data.current_page-1)}}},[t._v("\n                «\n            ")])]),t._v(" "),t._l(t.pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.meta_data.current_page===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.next(e)}}},[t._v("\n                "+t._s(e)+"\n            ")])])})),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:t.meta_data.current_page===t.meta_data.last_page}},[a("a",{staticClass:"page-link",on:{click:function(e){return t.next(t.meta_data.current_page+1)}}},[t._v("\n                »\n            ")])])],2)])}),[],!1,null,null,null).exports;function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){g(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function g(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function C(t,e,a,s,r,c,i){try{var n=t[c](i),o=n.value}catch(t){return void a(t)}n.done?e(o):Promise.resolve(o).then(s,r)}function b(t){return function(){var e=this,a=arguments;return new Promise((function(s,r){var c=t.apply(e,a);function i(t){C(c,s,r,i,n,"next",t)}function n(t){C(c,s,r,i,n,"throw",t)}i(void 0)}))}}var w={name:"ShopCatalog",components:{BreadcrumbComponent:u.a,Pagination:_},data:function(){return{pageName:"Каталог товаров",products:[],prices:[],categories:[],producers:[],meta_data:{last_page:null,current_page:1,prev_page_url:null,per_page:null,total:""},selected:{type:[],sortBy:null,prices:[],categories:[],producers:[],search:"",custom_search:"",sort_field:"name",sort_direction:"desc"}}},watch:{selected:{handler:function(){this.fetchProducts(),this.getCategories(),this.fetchProducers(),this.fetchPrices(),this.meta_data.total},deep:!0},search:p,custom_search:p},created:function(){var t=this;return b(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchProducts(),t.fetchProducers(),t.fetchPrices(),t.fetchCategories();case 4:case"end":return e.stop()}}),e)})))()},methods:h(h({},Object(l.b)("catalog",{getCategories:d.b,getPrice:d.c,getProducers:d.d})),{},{fetchCategories:function(){var t=this;return b(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCategories("".concat(t.$route.params.slug),{params:i.a.omit(t.selected,"categories")});case 2:t.categories=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchProducers:function(){var t=this;return b(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getProducers("".concat(t.$route.params.slug),{params:i.a.omit(t.selected,"producers")});case 2:t.producers=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchPrices:function(){var t=this;return b(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPrice("".concat(t.$route.params.slug),{params:i.a.omit(t.selected,"prices")});case 2:t.prices=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchProducts:function(){var t=arguments,e=this;return b(r.a.mark((function a(){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=t.length>0&&void 0!==t[0]?t[0]:1,o.a.get("/api/catalog/".concat(e.$route.params.slug),{params:h(h({},e.selected),{},{page:s})}).then((function(t){e.products=t.data.products.data,e.pageName=t.data.types[0].name,e.meta_data.last_page=t.data.products.last_page,e.meta_data.current_page=t.data.products.current_page,e.meta_data.prev_page_url=t.data.products.prev_page_url,e.meta_data.total=t.data.products.total,e.meta_data.per_page=t.data.products.per_page}));case 2:case"end":return a.stop()}}),a)})))()},change_sort:function(t){switch(t){case"min":this.selected.sort_field="price",this.selected.sort_direction="asc";break;case"max":this.selected.sort_field="price",this.selected.sort_direction="desc"}}})},x=Object(v.a)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main pb-5"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"row no-gutters"},[a("BreadcrumbComponent",{attrs:{pageName:t.pageName}}),t._v(" "),a("div",{staticClass:"col-12  col-lg-3 pb-5"},[a("aside",{staticClass:"aside"},[a("form",{attrs:{action:""}},[a("div",{staticClass:"product-category form-row pl-1 pr-1 pt-1"},[a("div",{staticClass:"product-producer form-row pl-1 pr-1 pt-1"},[t._m(0),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.search,expression:"selected.search"}],staticClass:"form-control",attrs:{type:"text",name:"search",placeholder:"Введите название товара ..."},domProps:{value:t.selected.search},on:{input:function(e){e.target.composing||t.$set(t.selected,"search",e.target.value)}}})])])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"col-12"},t._l(t.categories,(function(e,s){return a("label",{key:s,staticClass:"container"},[a("span",{staticClass:"checkbox-text"},[t._v(t._s(e.name)+" ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.categories,expression:"selected.categories"}],attrs:{type:"checkbox",name:"category",id:"category"+s},domProps:{value:e.id,checked:Array.isArray(t.selected.categories)?t._i(t.selected.categories,e.id)>-1:t.selected.categories},on:{change:function(a){var s=t.selected.categories,r=a.target,c=!!r.checked;if(Array.isArray(s)){var i=e.id,n=t._i(s,i);r.checked?n<0&&t.$set(t.selected,"categories",s.concat([i])):n>-1&&t.$set(t.selected,"categories",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.selected,"categories",c)}}}),t._v(" "),a("span",{staticClass:"checkmark"})])})),0)]),t._v(" "),a("div",{staticClass:"price-filter form-row pl-1 pr-1 "},[t._m(2),t._v(" "),a("div",{staticClass:"col-12"},t._l(t.prices,(function(e,s){return a("label",{key:s,staticClass:"container"},[a("span",{staticClass:"checkbox-text"},[t._v("\n                                        "+t._s(e.name))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.prices,expression:"selected.prices"}],attrs:{type:"checkbox",name:"checkbox",id:"price"+s},domProps:{value:s,checked:Array.isArray(t.selected.prices)?t._i(t.selected.prices,s)>-1:t.selected.prices},on:{change:function(e){var a=t.selected.prices,r=e.target,c=!!r.checked;if(Array.isArray(a)){var i=s,n=t._i(a,i);r.checked?n<0&&t.$set(t.selected,"prices",a.concat([i])):n>-1&&t.$set(t.selected,"prices",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.selected,"prices",c)}}}),t._v(" "),a("span",{staticClass:"checkmark"})])})),0)]),t._v(" "),a("div",{staticClass:"product-producer form-row pl-1 pr-1 pt-1"},[t._m(3),t._v(" "),a("div",{staticClass:"col-12"},t._l(t.producers,(function(e,s){return a("label",{key:s,staticClass:"container"},[e.products_count>0?a("div",[a("span",{staticClass:"checkbox-text"},[t._v(t._s(e.name)+" ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected.producers,expression:"selected.producers"}],attrs:{type:"checkbox",name:"producer",id:"producer"+s},domProps:{value:e.id,checked:Array.isArray(t.selected.producers)?t._i(t.selected.producers,e.id)>-1:t.selected.producers},on:{change:function(a){var s=t.selected.producers,r=a.target,c=!!r.checked;if(Array.isArray(s)){var i=e.id,n=t._i(s,i);r.checked?n<0&&t.$set(t.selected,"producers",s.concat([i])):n>-1&&t.$set(t.selected,"producers",s.slice(0,n).concat(s.slice(n+1)))}else t.$set(t.selected,"producers",c)}}}),t._v(" "),a("span",{staticClass:"checkmark"})]):t._e()])})),0)])])])]),t._v(" "),a("div",{staticClass:"col-12 col-lg-9 pl-3"},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"d-flex flex-row flex-wrap justify-content-between"},[a("div",{staticClass:"product-qty  w-25"},[a("h3",{staticClass:"font-weight-bold pt-2 pl-2"},[t._v("\n                                    В наличии ("+t._s(this.meta_data.total)+")\n                                    шт.\n                                ")])]),t._v(" "),a("div",{staticClass:"product-sort d-flex  "},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn-main p-3 w-100",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                        Сортировать:\n                                    ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[a("div",{staticClass:"mt-1 mb-1"},[a("button",{staticClass:"btn-main",on:{click:function(e){return t.change_sort("max")}}},[t._v("\n                                                По макс цене\n                                            ")])]),t._v(" "),a("div",{staticClass:"mt-1 mb-1"},[a("button",{staticClass:"btn-main",on:{click:function(e){return t.change_sort("min")}}},[t._v("\n                                                По мин цене\n                                            ")])])])])])])])]),t._v(" "),a("div",{staticClass:"row no-gutters"},t._l(t.products,(function(e,s){return a("div",{key:s,staticClass:"col-12 col-sm-12 col-md-6 col-lg-4 p-1 mt-2 mb-2"},[a("router-link",{attrs:{to:{name:"product",params:{title:e.title}}}},[a("div",{staticClass:"card"},[a("a",{attrs:{href:""}},[a("picture",[a("img",{staticClass:"img-card",attrs:{src:"/img/"+e.img_url,alt:"image"}})])]),t._v(" "),a("div",{staticClass:"card-body"},[a("small",{staticClass:"card-text text-secondary"},[t._v("\n                                        Цена за 1 кг "),a("br"),t._v("\n                                        мин. заказ 1 кг")]),t._v(" "),a("a",{attrs:{href:""}},[a("h6",{staticClass:"mt-2 mb-2 card-title font-weight-bold text-black"},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")])]),t._v(" "),a("div",{staticClass:"d-flex flex-row flex-wrap justify-content-between"},[a("div",{staticClass:"price"},[a("p",{staticClass:"product-price "},[t._v("\n                                                "+t._s(t._f("toFix")(t._f("priceFormat")(e.price)))+"\n                                            ")])]),t._v(" "),a("div",{staticClass:"button-add-to-cart"},[a("router-link",{staticClass:"card-btn",attrs:{to:{name:"product",params:{title:e.title}}}},[a("i",{staticClass:"fas fa-plus text-white"}),t._v(" "),a("picture",[a("img",{staticClass:"basket-icon",attrs:{src:"/img/basket.svg",alt:""}})])])],1)])])])])],1)})),0),t._v(" "),a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-12"},[a("nav",{attrs:{"aria-label":"Page navigation product"}},[a("pagination",{attrs:{meta_data:t.meta_data},on:{next:t.fetchProducts}})],1)])])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h5",{staticClass:"text-left filter-title"},[this._v("\n                                        Поиск\n                                    ")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h5",{staticClass:"text-left filter-title"},[this._v("\n                                    Категория\n                                ")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h5",{staticClass:"text-left filter-title"},[this._v("Цена")]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h5",{staticClass:"text-left filter-title"},[this._v("\n                                    Производитель\n                                ")]),this._v(" "),e("hr")])}],!1,null,null,null);e.default=x.exports}}]);