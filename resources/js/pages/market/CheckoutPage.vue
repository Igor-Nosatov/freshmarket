<template>
    <main class="main ">
        <div class="row no-gutters pb-5 pl-3 pr-3" v-if="carts.length > 0">
            <BreadcrumbComponent :pageName="pageName" class="pl-5 pt-4 mt-3" />
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-1">
                <form @submit.prevent="orderProduct">
                    <div class="row no-gutters">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 p-1">
                            <div
                                class="checkout-block border border-success p-2"
                            >
                                <div class="form-row mt-3 mb-3">
                                    <div class="col-12">
                                        <h3 class="order-title">
                                            Контактные данные
                                        </h3>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div
                                        class="col-12 col-sm-6 col-md-4 col-lg-4 p-2"
                                    >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="checkout.first_name"
                                            placeholder="Ваше имя"
                                        />
                                    </div>
                                    <div
                                        class="col-12 col-sm-6 col-md-4 col-lg-4 p-2"
                                    >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="checkout.phone"
                                            placeholder="Ваш номер телефона"
                                        />
                                    </div>
                                    <div
                                        class="col-12 col-sm-6 col-md-4 col-lg-4 p-2"
                                    >
                                        <input
                                            type="email"
                                            class="form-control"
                                            v-model="checkout.email"
                                            placeholder="Ваш емейл"
                                        />
                                    </div>
                                    <div
                                        class="col-12 col-sm-6 col-md-4 col-lg-4 p-2"
                                    >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="checkout.client_receiver"
                                            placeholder="Имя получателя"
                                        />
                                    </div>
                                    <div
                                        class="col-12 col-sm-6 col-md-4 col-lg-4 p-2"
                                    >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="checkout.phone_receiver"
                                            placeholder="Номер телефона получателя"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row no-gutters ">
                                <div
                                    class="col-12 col-sm-12 col-md-12 col-lg-12  p-2  border border-success mt-2"
                                >
                                    <div class="form-row mt-3 mb-3">
                                        <div class="col-12">
                                            <h3 class="order-title">
                                                Доставка
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="checkout-block">
                                        <div class="form-row">
                                            <div
                                                class="col-12 col-sm-6 col-md-3 col-lg-3  p-2 "
                                            >
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="radio"
                                                        v-model="
                                                            checkout.delivery
                                                        "
                                                        name="delivery"
                                                        id="delivery1"
                                                        value="Доставка курьером"
                                                        checked
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="delivery1"
                                                    >
                                                        Доставка курьером
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-3 col-lg-3  p-2"
                                            >
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        type="radio"
                                                        v-model="
                                                            checkout.delivery
                                                        "
                                                        name="delivery"
                                                        id="delivery2"
                                                        value="Самовывоз"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="delivery2"
                                                    >
                                                        Самовывоз
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-3  p-2"
                                            >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="checkout.city"
                                                    placeholder="Город"
                                                />
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-3  p-2"
                                            >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="checkout.street"
                                                    placeholder="Улица"
                                                />
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-2  p-2"
                                            >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="checkout.house"
                                                    placeholder="Дом"
                                                />
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-2  p-2"
                                            >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="checkout.apartment"
                                                    placeholder="Кв."
                                                />
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-2  p-2"
                                            >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="checkout.floor"
                                                    placeholder="Этаж"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="col-12 col-sm-12 col-md-12 col-lg-12  p-2  border border-success mt-2"
                                >
                                    <div class="form-row mt-3  mb-3">
                                        <div class="col-12">
                                            <h3 class="order-title">Оплата</h3>
                                        </div>
                                    </div>
                                    <div class="checkout-block">
                                        <div class="form-row">
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-4  p-2"
                                            >
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        v-model="
                                                            checkout.payment_type
                                                        "
                                                        type="radio"
                                                        name="payment"
                                                        id="payment1"
                                                        value="Банковской картой"
                                                        checked
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="payment1"
                                                    >
                                                        Банковской картой
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-4  p-2"
                                            >
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        v-model="
                                                            checkout.payment_type
                                                        "
                                                        type="radio"
                                                        name="payment"
                                                        id="payment2"
                                                        value="Наличными курьеру"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="payment2"
                                                    >
                                                        Наличными курьеру
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                class="col-12 col-sm-6 col-md-4 col-lg-4  p-2"
                                            >
                                                <div class="form-check">
                                                    <input
                                                        class="form-check-input"
                                                        v-model="
                                                            checkout.payment_type
                                                        "
                                                        type="radio"
                                                        name="payment"
                                                        id="payment3"
                                                        value="Наложным платежем"
                                                    />
                                                    <label
                                                        class="form-check-label"
                                                        for="payment3"
                                                    >
                                                        Наложным платежем
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row mt-3 mb-3 p-1">
                                <div
                                    class="col-12 col-sm-12 col-md-12 col-lg-12 p-2  border border-success "
                                >
                                    <h3 class="order-title  mt-3 mb-3">
                                        Комментарий к заказу
                                    </h3>
                                    <div class="checkout-block">
                                        <textarea
                                            v-model="checkout.comment"
                                            class="form-control"
                                            rows="9"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center"
                        >
                            <button class="btn-main btn-checkout" type="submit">
                                Потвердить заказ
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-1">
                <h3 class="order-title mt-3 mb-3">Итого</h3>
                <div class="row no-gutters total-price checkout-block ">
                    <div class="col-12">
                        <div class="order-product">
                            <ul class="nav flex-column">
                                <li
                                    class="nav-item"
                                    v-for="(cart, index) in carts"
                                    :key="index"
                                >
                                    <picture>
                                        <img
                                            :src="
                                                '/img/' + cart.products.img_url
                                            "
                                            class="checkout-img"
                                        /> </picture
                                    ><span>{{ cart.products.name }}</span>
                                    <img
                                        :src="`storage/img/close.svg`"
                                        alt=""
                                    />
                                    <span>{{ cart.quantity }}шт.</span>
                                    <hr />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="total-price pt-3">
                            <h3 class="font-weight-bold">
                                К оплате: <span>{{ cartTotal }}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row no-gutters pt-5 pb-5" v-if="carts.length === 0">
            <Empty />
        </div>
    </main>
</template>

<script>
import _ from "lodash";
import { mapActions, mapGetters } from "vuex";
import * as actions from "./../../vuex/modules/checkout/types/actions";
import * as actionsCart from "./../../vuex/modules/cart/types/actions";
import * as gettersCart from "./../../vuex/modules/cart/types/getters";
import Empty from "./../../components/checkout_components/Empty.vue";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";

export default {
    name:'CheckoutPage',
    components: {
        BreadcrumbComponent,
        Empty
    },
    data() {
        return {
            pageName: "Оформление покупок",
            carts: {},
            checkout: {
                first_name: "",
                phone: "",
                email: "",
                client_receiver: "",
                phone_receiver: "",
                delivery: "",
                city: "",
                street: "",
                house: "",
                floor: "",
                apartment: "",
                payment_type: "",
                comment: ""
            }
        };
    },
    async created() {
        this.fetchCart();
    },
    computed: {
        ...mapGetters("cart", {
            cartTotal: gettersCart.CART_TOTAL_SUM
        })
    },
    methods: {
        ...mapActions("checkout", {
            checkoutProduct: actions.ADD_CHECKOUT_DATA
        }),
        ...mapActions("cart", {
            fetchProductCart: actionsCart.FETCH_PRODUCT_CART
        }),
        async fetchCart() {
            this.fetchProductCart().then(response => {
                this.carts = response;
            });
        },
        async orderProduct() {
            await this.checkoutProduct(this.checkout).then(
                this.$router.push({
                    name: "confirm"
                })
            );
        }
    }
};
</script>
