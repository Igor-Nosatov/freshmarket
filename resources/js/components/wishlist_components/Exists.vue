<template>
    <div class="total-price-block mt-4 mb-4 pl-5 pr-5 w-100">
        <div class="cart-wrapper">
            <div class="row no-gutters total-price-info pt-4">
                <div class="col-5 col-sm-5 col-md-2 col-lg-5">
                    <p class="pl-3 product-total-price">
                        Итого товаров на сумму :
                        {{ cartTotal | priceFormat | toFix }}
                    </p>
                </div>
                <div class="col-7 col-sm-7 col-md-5 col-lg-7">
                    <div class="order-action">
                        <router-link :to="{ name: 'home' }"
                            >Продолжить покупки
                            <picture>
                                <img :src="`storage/img/link.svg`" alt="" />
                            </picture>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
import * as getters from "./../../vuex/modules/wishlist/types/getters";

export default {
     computed: {
        ...mapGetters("wishlist", {
            cartTotal: getters.WISHLIST_TOTAL_SUM
        })
    },
};
</script>
