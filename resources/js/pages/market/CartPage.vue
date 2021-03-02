<template>
    <main class="main pt-5 pb-5">
        <div class="wrapper">
            <div class="row no-gutters">
                <BreadcrumbComponent :pageName="pageName" />
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="product-cart">
                        <CartItem
                            v-for="(product, index) in cart"
                            :product="product"
                            :key="index"
                            @deleteItem="deleteProductId"
                            @increment="increment"
                            @decrement="decrement"
                        />
                    </div>
                </div>
                <div v-if="cart.length > 0">
                   <Exists/>
                </div>
                <div v-if="cart.length === 0">
                   <Empty/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapActions } from "vuex";
import * as actions from "./../../vuex/modules/cart/types/actions";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";
import CartItem from "./../../components/cart_components/CartItem.vue";
import Exists from "./../../components/cart_components/Exists.vue";
import Empty from "./../../components/cart_components/Empty.vue";

export default {
    name:'CartPage',
    components: {
        BreadcrumbComponent,
        CartItem,
        Empty,
        Exists
    },
    data() {
        return {
            cart: {},
            pageName: "Корзина"
        };
    },
    async created() {
        this.fetchCart()
    },
    methods: {
        ...mapActions("cart", {
            fetchProductCart: actions.FETCH_PRODUCT_CART,
            deleteProductFromCart : actions.DELETE_PRODUCT_BY_ID,
            incrementCart: actions.INCREMENT_CART_PRODUCT,
            decrementCart: actions.DECREMENT_CART_PRODUCT,
        }),
        async fetchCart(){
            this.fetchProductCart().then(response => {
                this.cart = response;
            });
        },
        async deleteProductId(data) {
            await this.deleteProductFromCart(data)
        },
        async increment(data) {
            return await this.incrementCart(data);
        },
        async decrement(data) {
            return await this.decrementCart(data);
        }
    }
};
</script>
