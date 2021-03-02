<template>
    <main class="main">
        <SingleProduct/>
        <ProductCard />
        <ClientInfo />
    </main>
</template>

<script>
import SingleProduct from "./../../components/product_components/SingleProduct.vue";
import ClientInfo from "./../../components/product_components/ClientInfo.vue";
import ProductCard from "./../../components/product_components/ProductCard.vue";

export default {
    name:'ProductPage',
    components: {
        SingleProduct,
        ProductCard,
        ClientInfo
    },
};
</script>
