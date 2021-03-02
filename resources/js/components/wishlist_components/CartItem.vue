<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="product-cart">
            <div
                class="row no-gutters"
                v-for="(product, index) in wishes"
                :product="product"
                :key="index"
            >
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 pl-3 pr-3">
                    <div class="sell-cart mb-3">
                        <div class="row no-gutters">
                            <div class="col-6 col-sm-6 col-md-6 col-lg-2 pl-4">
                                <picture>
                                    <img
                                        :src="
                                            '/img/' + product.products.img_url
                                        "
                                        class="card-image ml-auto "
                                    />
                                    <button
                                        class="btn btn-danger mt-1 rounded-0 ml-4"
                                        @click="deleteWishlist(product.id)"
                                    >
                                        <i class="fas fa-minus-circle"></i>
                                    </button>
                                </picture>
                            </div>
                            <div class="col-6 col-sm-6 col-md-6 col-lg-2 pt-3">
                                <button
                                    class="btn-qty w-75 mt-3"
                                    @click="sendToCart(product.products)"
                                >
                                    <i class="fas fa-cash-register"></i> &nbsp;
                                    Корзина
                                </button>
                            </div>
                            <div class="col-6  col-sm-6 col-md-6 col-lg-2 pt-2">
                                <div class="card-body">
                                    <h6
                                        class="text-center card-title font-weight-bold mt-2"
                                    >
                                        {{ product.products.name }}
                                    </h6>
                                </div>
                            </div>
                            <div class="col-6  col-sm-6 col-md-6 col-lg-2 pt-2">
                                <div class="card-body">
                                    <p
                                        class="text-center product-cart-price font-weight-bold mt-2"
                                    >
                                        Цена:
                                        {{
                                            product.products.price.toFixed(2) +
                                                " L"
                                        }}
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div
                                class="col-6  col-sm-6 col-md-6 col-lg-2  pb-3 d-flex justify-content-center pt-1"
                            >
                                <div
                                    class="qty-block d-flex flex-row justify-content-center pl-1 mt-2"
                                >
                                    <button
                                        class="btn-qty mt-3"
                                        id="decrease"
                                        @click="decrement(product.id)"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="number"
                                        class="w-25 mt-3 btn-qty"
                                        :value="product.quantity"
                                        readonly
                                    />
                                    <button
                                        class="btn-qty  mt-3"
                                        id="increase"
                                        @click="increment(product.id)"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div
                                class="col-6  col-sm-6 col-md-6 col-lg-2 pb-3 d-flex justify-content-center pt-3"
                            >
                                <p
                                    class="text-center product-cart-price font-weight-bold mt-4"
                                >
                                    Всего за товар:
                                    {{
                                        (
                                            product.quantity *
                                            product.products.price
                                        ).toFixed(2) + " L"
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  mapActions } from "vuex";
import * as actions from "./../../vuex/modules/wishlist/types/actions";
import * as actionsCart from "./../../vuex/modules/cart/types/actions";
import * as actionsProduct from "./../../vuex/modules/product/types/actions";
import CartItem from "./../../components/wishlist_components/CartItem.vue";
import Empty from "./../../components/wishlist_components/Empty.vue";
import Exists from "./../../components/wishlist_components/Exists.vue";

export default {
    components: {
        CartItem,
        Empty,
        Exists
    },
    data() {
        return {
            pageName: "Понравившиеся товары",
            wishes: {},
            cart: {}
        };
    },
    async created() {
        await this.fetchWishlist();
        await this.fetchProductCart();
        await this.fetchCart();
    },
    methods: {
        ...mapActions("wishlist", {
            fetchProductWishlist: actions.FETCH_PRODUCT_WISHLIST,
            deleteProductFromWishlist: actions.DELETE_PRODUCT_BY_ID,
            incrementWishlist: actions.INCREMENT_WISHLIST_PRODUCT,
            decrementWishlist: actions.DECREMENT_WISHLIST_PRODUCT
        }),
        ...mapActions("cart", {
            fetchProductCart: actionsCart.FETCH_PRODUCT_CART
        }),
        ...mapActions("product", {
            addCart: actionsProduct.ADD_TO_CART
        }),
        async fetchWishlist() {
            await this.fetchProductWishlist().then(response => {
                this.wishes = response;
            });
        },
        async fetchCart() {
            this.fetchProductCart().then(response => {
                this.cart = response;
            });
        },
        async deleteWishlist(data) {
            await this.deleteProductFromWishlist(data);
        },
        async increment(data) {
            return await this.incrementWishlist(data);
        },
        async decrement(data) {
            return await this.decrementWishlist(data);
        },
        async sendToCart(product) {
            let product_id = product.id;
            let quantity = 1;
            let result = this.cart.filter(c => c.product_id === product_id);
            let res_length = result.length;

            if (this.cart.length === 0) {
                await this.addCart({ quantity, product_id }).then(
                    this.$router.push({
                        name: "cart"
                    })
                );
            } else if(res_length === 0)
             {
                await this.addCart({ quantity, product_id }).then(
                    this.$router.push({
                        name: "cart"
                    })
                );
            } else 
            {
                this.$router.push({
                    name: "cart"
                });
            }
        }
    }
};
</script>
