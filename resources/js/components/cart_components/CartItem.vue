<template>
    <div class="row no-gutters">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 pl-3 pr-3">
            <div class="mb-3 sell-cart">
                <div class="row no-gutters">
                    <div class="col-6 col-sm-6 col-md-6 col-lg-2 pl-5">
                        
                            <picture>
                                <img
                                    :src="'/img/' + product.products.img_url"
                                    class="card-image ml-auto"
                                />
                            </picture>
                       
                    </div>
                    <div class="col-6 col-sm-6 col-md-6 col-lg-1 pt-3 d-flex justify-content-center del-btn">
                        <button
                            class="btn btn-danger rounded-0  mx-auto mt-4 delete-btn"
                           @click="deleteProduct(product.id)"
                        >
                            <i class="fas fa-minus-circle"></i>
                        </button>
                    </div>
                    <div class="col-6  col-sm-6 col-md-6 col-lg-2">
                        <div class="card-body">
                            <h6
                                class="text-center card-title font-weight-bold mt-4 pt-1 "
                            >
                                {{ product.products.name }}
                            </h6>
                        </div>
                    </div> 
                    <div class="col-6  col-sm-6 col-md-6 col-lg-2 ">
                        <div class="card-body">
                            <p
                                class="text-center product-cart-price font-weight-bold mt-4 pt-1"
                            >
                                Цена: {{ product.products.price.toFixed(2) + " L" }} <br />
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-6  col-sm-6 col-md-6 col-lg-2  pb-3 d-flex justify-content-center"
                    >
                        <div class="qty-block d-flex flex-row pl-1 mt-3">
                            <button
                                class="btn-qty mt-3"
                                id="decrease"
                                @click="decrementItem"
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
                                @click="incrementItem"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div
                        class="col-6  col-sm-6 col-md-6 col-lg-3 pb-3 d-flex justify-content-center"
                    >
                        <p
                            class="text-center product-cart-price font-weight-bold mt-4 pt-4 "
                        >
                            Общая цена за товар: {{ subTotal }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as getters from "./../../vuex/modules/cart/types/getters";
export default {
    props:{
        product:Object
    },
    data() {
        return {
            count: this.product.quantity
        };
    },
    computed: {
        ...mapGetters("cart", {
            getSubtotal: getters.GET_SUM_SUBTOTAL
        }),
        subTotal(){
          return this.getSubtotal(this.product.id);
        }
    },
    methods: {
        deleteProduct() {
            this.$emit("deleteItem", this.product.id);
        }, 
        decrementItem() {
            this.$emit("decrement", this.product.id);
        },
        incrementItem() {
            this.$emit("increment", this.product.id);
        },
    }
};
</script>
