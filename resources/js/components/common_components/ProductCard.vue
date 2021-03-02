<template>
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
</template>

<script>
export default {
    name:'ProductCard',
    props:{
        product:Object
    },
}
</script>

<style scoped>
.product-price{
    color:#000!important;
}
</style>
