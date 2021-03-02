<template>
    <main class="main pt-5 pb-5">
        <div class="wrapper">
            <div class="row no-gutters">
                <BreadcrumbComponent :pageName="pageName" />
                <CartItem/>
                <div v-if="wishes.length">
                    <Exists/>
                </div>
                <div v-if="!wishes.length">
                    <Empty/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import * as actions from "./../../vuex/modules/wishlist/types/actions";
import * as actionCart from "./../../vuex/modules/cart/types/actions";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";
import CartItem from "./../../components/wishlist_components/CartItem.vue";
import Empty from "./../../components/wishlist_components/Empty.vue";
import Exists from "./../../components/wishlist_components/Exists.vue";

export default {
    name:'WishlistPage',
    components: {
        BreadcrumbComponent,
        CartItem,
        Empty,
        Exists
    },
    data() {
        return {
            pageName: "Понравившиеся товары",
            wishes: [],
            carts: []
        };
    },
    async created() {
        this.wishes = await this.fetchProductWishlist();
        this.carts = await this.fetchProductCart();
    },
    methods: {
        ...mapActions("wishlist", {
            fetchProductWishlist: actions.FETCH_PRODUCT_WISHLIST,
            deleteProductFromWishlist: actions.DELETE_PRODUCT_BY_ID,
            incrementWishlist: actions.INCREMENT_WISHLIST_PRODUCT,
            decrementWishlist: actions.DECREMENT_WISHLIST_PRODUCT,
            addToCart: actions.ADD_TO_CART
        }),
        ...mapActions("cart", {
            fetchProductCart: actionCart.FETCH_PRODUCT_CART
        }),
        async deleteWishlist(data) {
            await this.deleteProductFromWishlist(data);
        },
        async increment(data) {
            return await this.incrementWishlist(data);
        },
        async decrement(data) {
            return await this.decrementWishlist(data);
        },

        async sendToCart(data) {
            let quantity = data.quantity;
            let product_id = data.product_id;
            let result = this.carts.filter(
                product => product.product_id === product_id
            );
            let productExist = result[0].product_id;

           /* if (result.length === 0) {
                await cartService
                    .sendToCartFromWishlist({
                        product_id,
                        quantity
                    })
                    .then(response =>
                        this.$router.push({
                            name: "cart"
                        })
                    );
            } else {
                if (productExist) {
                    this.$router.push({
                        name: "cart"
                    });
                } else {
                    await cartService
                        .sendToCartFromWishlist({
                            product_id,
                            quantity
                        })
                        .then(response =>
                            this.$router.push({
                                name: "cart"
                            })
                        );
                }
            }*/
        }
    }
};
</script>
