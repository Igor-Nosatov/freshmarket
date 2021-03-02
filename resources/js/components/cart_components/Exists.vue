<template>
    <div class="total-price-block mt-4 mb-4 pl-5 pr-5">
        <div class="cart-wrapper">
            <div class="row no-gutters total-price-info pt-4">
                <div class="col-5 col-sm-5 col-md-2 col-lg-5">
                    <p class="pl-3 product-total-price">
                        Итого товаров на сумму :
                        {{ cartTotal }}
                    </p>
                </div>
                <div class="col-7 col-sm-7 col-md-5 col-lg-7">
                    <div class="order-info  pl-4 pr-4">
                        <p class="">
                            Нажимая на кнопку "Перейти к оформлению заказа"<br />Вы
                            соглашаетесь с правилами обработки данных
                        </p>
                    </div>
                    <div class="order-action pl-4 pr-4 pb-5">
                        <router-link
                            class="btn-main w-100 p-3 mb-3"
                            :to="{ name: 'checkout' }"
                        >
                            Оформить Заказ</router-link
                        >
                        <router-link
                            class="btn btn-danger rounded-0  w-100 p-3  "
                            :to="{ name: 'home' }"
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
import {  mapGetters } from "vuex";
import * as getters from "./../../vuex/modules/cart/types/getters";
export default {
        computed: {
        ...mapGetters("cart",{
            cartTotal : getters.CART_TOTAL_SUM
        }),
    },
};
</script>


