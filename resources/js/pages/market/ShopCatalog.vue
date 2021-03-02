<template>
    <main class="main pb-5">
        <div class="wrapper">
            <div class="row no-gutters">
                <BreadcrumbComponent :pageName="pageName" />
                <div class="col-12  col-lg-3 pb-5">
                    <aside class="aside">
                        <form action="">
                            <div
                                class="product-category form-row pl-1 pr-1 pt-1"
                            >
                                <div
                                    class="product-producer form-row pl-1 pr-1 pt-1"
                                >
                                    <div class="col-12">
                                        <h5 class="text-left filter-title">
                                            Поиск
                                        </h5>
                                        <hr />
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                name="search"
                                                class="form-control"
                                                placeholder="Введите название товара ..."
                                                v-model="selected.search"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <h5 class="text-left filter-title">
                                        Категория
                                    </h5>
                                    <hr />
                                </div>
                                <div class="col-12">
                                    <label
                                        class="container"
                                        v-for="(category, index) in categories"
                                        :key="index"
                                    >
                                        <span class="checkbox-text"
                                            >{{ category.name }} </span
                                        >
                                        <input
                                            type="checkbox"
                                            name="category"
                                            :value="category.id"
                                            :id="'category' + index"
                                            v-model="selected.categories"
                                        />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="price-filter form-row pl-1 pr-1 ">
                                <div class="col-12">
                                    <h5 class="text-left filter-title">Цена</h5>
                                    <hr />
                                </div>
                                <div class="col-12">
                                    <label
                                        class="container"
                                        v-for="(price, index) in prices"
                                        :key="index"
                                    >
                                        <span class="checkbox-text">
                                            {{ price.name }}</span
                                        >
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            :value="index"
                                            :id="'price' + index"
                                            v-model="selected.prices"
                                        />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div
                                class="product-producer form-row pl-1 pr-1 pt-1"
                            >
                                <div class="col-12">
                                    <h5 class="text-left filter-title">
                                        Производитель
                                    </h5>
                                    <hr />
                                </div>
                                <div class="col-12">
                                    <label
                                        class="container"
                                        v-for="(producer, index) in producers"
                                        :key="index"
                                    >
                                        <div v-if="producer.products_count > 0">
                                            <span class="checkbox-text"
                                                >{{ producer.name }} </span
                                            >
                                            <input
                                                type="checkbox"
                                                name="producer"
                                                :value="producer.id"
                                                :id="'producer' + index"
                                                v-model="selected.producers"
                                            />
                                            <span class="checkmark"></span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </aside>
                </div>
                <div class="col-12 col-lg-9 pl-3">
                    <div class="row no-gutters">
                        <div class="col-12">
                            <div
                                class="d-flex flex-row flex-wrap justify-content-between"
                            >
                                <div class="product-qty  w-25">
                                    <h3 class="font-weight-bold pt-2 pl-2">
                                        В наличии ({{ this.meta_data.total }})
                                        шт.
                                    </h3>
                                </div>
                                <div class="product-sort d-flex  ">
                                    <div class="dropdown">
                                        <button
                                            class="btn-main p-3 w-100"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Сортировать:
                                        </button>
                                        <div
                                            class="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton"
                                        >
                                            <div class="mt-1 mb-1">
                                                <button
                                                    class="btn-main"
                                                    @click="change_sort('max')"
                                                >
                                                    По макс цене
                                                </button>
                                            </div>
                                            <div class="mt-1 mb-1">
                                                <button
                                                    class="btn-main"
                                                    @click="change_sort('min')"
                                                >
                                                    По мин цене
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div
                            class="col-12 col-sm-12 col-md-6 col-lg-4 p-1 mt-2 mb-2"
                            v-for="(product, index) in products"
                            :key="index"
                        >
                            <router-link
                                :to="{
                                    name: 'product',
                                    params: { title: product.title }
                                }"
                            >
                                <div class="card">
                                    <a href="">
                                        <picture>
                                            <img
                                                :src="'/img/' + product.img_url"
                                                alt="image"
                                                class="img-card"
                                            />
                                        </picture>
                                    </a>
                                    <div class="card-body">
                                        <small class="card-text text-secondary">
                                            Цена за 1 кг <br />
                                            мин. заказ 1 кг</small
                                        >
                                        <a href="">
                                            <h6
                                                class="mt-2 mb-2 card-title font-weight-bold text-black"
                                            >
                                                {{ product.name }}
                                            </h6>
                                        </a>
                                        <div
                                            class="d-flex flex-row flex-wrap justify-content-between"
                                        >
                                            <div class="price">
                                                <p class="product-price ">
                                                    {{
                                                        product.price
                                                            | priceFormat
                                                            | toFix
                                                    }}
                                                </p>
                                            </div>
                                            <div class="button-add-to-cart">
                                                <router-link
                                                    :to="{
                                                        name: 'product',
                                                        params: {
                                                            title: product.title
                                                        }
                                                    }"
                                                    class="card-btn"
                                                >
                                                    <i
                                                        class="fas fa-plus text-white"
                                                    ></i>
                                                    <picture>
                                                        <img
                                                            :src="
                                                                '/img/basket.svg'
                                                            "
                                                            alt=""
                                                            class="basket-icon"
                                                        />
                                                    </picture>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-12">
                            <nav aria-label="Page navigation product">
                                <pagination
                                    :meta_data="meta_data"
                                    v-on:next="fetchProducts"
                                >
                                </pagination>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import { mapActions } from "vuex";
import * as actions from "./../../vuex/modules/catalog/types/actions";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";
import searchProduct from "./../../helpers/search";

import Pagination from "./../../components/catalog_components/Pagination.vue";

export default {
    name:'ShopCatalog',
    components: {
        BreadcrumbComponent,
        Pagination
    },
    data() {
        return {
            pageName: "Каталог товаров",
            products: [],
            prices: [],
            categories: [],
            producers: [],
            meta_data: {
                last_page: null,
                current_page: 1,
                prev_page_url: null,
                per_page: null,
                total: ""
            },
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
            }
        };
    },
    watch: {
        selected: {
            handler: function() {
                this.fetchProducts();
                this.getCategories();
                this.fetchProducers();
                this.fetchPrices();
                this.meta_data.total;
            },
            deep: true
        },
        search: searchProduct,
        custom_search: searchProduct
    },
    async created() {
        this.fetchProducts();
        this.fetchProducers();
        this.fetchPrices();
        this.fetchCategories();
    },
    methods: {
        ...mapActions("catalog", {
            getCategories: actions.FETCH_CATEGORIES,
            getPrice: actions.FETCH_PRICE_FOR_PRODUCTS,
            getProducers: actions.FETCH_PRODUCERS
        }),
        async fetchCategories() {
            this.categories = await this.getCategories(
                `${this.$route.params.slug}`,
                {
                    params: _.omit(this.selected, "categories")
                }
            );
        },
        async fetchProducers() {
            this.producers = await this.getProducers(
                `${this.$route.params.slug}`,
                {
                    params: _.omit(this.selected, "producers")
                }
            );
        },
        async fetchPrices() {
            this.prices = await this.getPrice(`${this.$route.params.slug}`, {
                params: _.omit(this.selected, "prices")
            });
        },
        async fetchProducts(page = 1) {
            axios
                .get(`/api/catalog/${this.$route.params.slug}`, {
                    params: {
                        ...this.selected,
                        page
                    }
                })
                .then(response => {
                    this.products = response.data.products.data;
                    this.pageName = response.data.types[0].name;
                    this.meta_data.last_page = response.data.products.last_page;
                    this.meta_data.current_page =
                        response.data.products.current_page;
                    this.meta_data.prev_page_url =
                        response.data.products.prev_page_url;
                    this.meta_data.total = response.data.products.total;
                    this.meta_data.per_page = response.data.products.per_page;
                });
        },
        change_sort(field) {
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
    }
};
</script>
