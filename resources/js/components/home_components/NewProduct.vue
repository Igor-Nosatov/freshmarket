<template>
    <div class="shop-section pt-5 pb-5">
            <div class="wrapper">
                <div class="row no-gutters">
                    <div class="col-12">
                        <h2
                            class="shop-section__title text-center font-weight-bold"
                        >
                            Новинки!!!
                        </h2>
                    </div> 
                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 p-3"  v-for="(product, index) in new_products"
               
                :key="index">
  <router-link :to="{name: 'product', params: { title: product.title }}">
        <div class="card">
            <a href="">
                <picture>
                    <img :src="'/img/'+product.img_url" alt="image" class="img-card" />
                </picture>
            </a>
            <div class="card-body">
                <small class="card-text text-secondary"> Цена за 1 кг <br> мин. заказ 1 кг</small> <a href="">
                    <h6 class="mt-2 mb-2 card-title font-weight-bold text-black">{{product.name}}</h6>
                </a>
                <div class="d-flex flex-row flex-wrap justify-content-between">
                    <div class="price">
                        <p class="product-price text-black">{{ product.price  | priceFormat | toFix }}</p>
                    </div>
                    <div class="button-add-to-cart">
                        <router-link :to="{name: 'product', params: { title: product.title }}" class="card-btn">
                            <i class="fas fa-plus text-white"></i>
                            <picture>
                                <img :src="'/img/basket.svg'" alt="" class="basket-icon">
                            </picture>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as actions from "./../../vuex/modules/home/types/actions";

export default {
    name:'NewProduct',
    async created() {
      await this.fetchNewProducts();
    },
    computed: {
        ...mapState("home", [
            "new_products",
        ]),
    },
    methods: {
        ...mapActions("home", {
            fetchNewProducts: actions.GET_NEW_PRODUCTS,
        }),
    }
};
</script>



