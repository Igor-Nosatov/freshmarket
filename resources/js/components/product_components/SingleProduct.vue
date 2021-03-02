<template>
    <div class="single-product pb-3">
        <div class="wrapper">
            <div class="row no-gutters">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <picture>
                        <img
                            :src="'/img/' + product.img_url"
                            alt="image"
                            class="img-fluid"
                        />
                    </picture>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-5 pl-2 pr-2">
                    <p class="product-code">Код товара: {{ product.code }}</p>
                    <h6 class="page-title">
                        {{ product.name }} <br />
                        <span> | минимальный заказ: 1 кг</span>
                    </h6>

                    <h4 class="product-price" v-if="isNaN(product.price)"></h4>
                     <h4 class="product-price" v-else>{{ product.price | toFix }}</h4>
                    <h5 class="page-title">Характеристики</h5>
                    <div class="d-flex flex-row justify-content-between">
                        <ul class="nav flex-column">
                            <li class="nav-product">
                                <span class="font-weight-bold">
                                    Страна происхождения:
                                    {{ producer.name }}</span
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex flex-row justify-content-between">
                        <p>{{ product.description }}</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start">
                        <form
                            @submit.prevent="addToCart(product.id)"
                            class="ml-1 mr-1"
                        >
                            <div
                                class="d-flex flex-row flex-wrap justify-content-between"
                            >
                                <div class="button-add-to-cart">
                                    <button class="btn-product ml-1">
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>
                        </form>

                        <form
                            @submit.prevent="addToWishlist(product.id)"
                            class="ml-1 mr-1"
                        >
                            <div
                                class="d-flex flex-row flex-wrap justify-content-between"
                            >
                                <button class="btn-product" type="submit">
                                    Добавить в список желаний
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as actions from "./../../vuex/modules/product/types/actions";
import * as actionsCart from "./../../vuex/modules/cart/types/actions";
import * as actionsWishlist from "./../../vuex/modules/wishlist/types/actions";

export default {
    data() {
        return {
            cart: [],
            wishlist: []
        };
    },
    async created() {
        await  this.fetchSingleProduct(`${this.$route.params.title}`);
        await  this.fetchProducerProduct(`${this.$route.params.title}`);
        await this.fetchCart();
        await this.fetchWishlist();
        console.log(await this.fetchWishlist());
    },
    computed: {
        ...mapState("product", ["product", "producer"])
    },
    methods: {
        ...mapActions("product", {
            fetchSingleProduct: actions.FETCH_SINGLE_PRODUCT,
            fetchProducerProduct: actions.FETCH_PRODUCER,
            addCart: actions.ADD_TO_CART,
            addWishlist: actions.ADD_TO_WISHLIST
        }),
        ...mapActions("cart", {
            fetchProductCart: actionsCart.FETCH_PRODUCT_CART
        }),
        ...mapActions("wishlist", {
            fetchProductWishlist: actionsWishlist.FETCH_PRODUCT_WISHLIST
        }),
        async fetchCart() {
             await this.fetchProductCart().then(response => {
                this.cart = response;
            });
        },
        async fetchWishlist() {
            await this.fetchProductWishlist().then(response => {
                this.wishlist = response;
            });
        },
        async addToCart(product_id) {
            let quantity = 1;
            let result = this.cart.filter(c => c.product_id === product_id);

            if (this.cart.length === 0) {
                await this.addCart({ quantity, product_id }).then(
                    this.$router.push({
                        name: "cart"
                    })
                );
            } else if(!result.length)
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
        },

        async addToWishlist(product_id) {
            let quantity = 1;
            let result = this.wishlist.filter(w => w.product_id === product_id);

            if (this.wishlist.length === 0) {
                await this.addWishlist({ quantity, product_id }).then(
                    this.$router.push({
                        name: "wishlist"
                    })
                );
            } else if(!result.length)
            {
               await this.addWishlist({ quantity, product_id }).then(
                    this.$router.push({
                        name: "wishlist"
                    })
                ); 
            }else
            {
               this.$router.push({
                    name: "wishlist"
                }); 
            }
        }
    }
};
</script>
