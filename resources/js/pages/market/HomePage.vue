<template>
    <main class="main">
        <BannerSection />
        <PromoComponent />
        <HighPriceProduct />
        <SubscribeSection />
        <NewProduct />
        <Promo1Component />
        <PostSection />
    </main>
</template>

<script>
import PromoComponent from "./../../components/home_components/PromoComponent.vue";
import Promo1Component from "./../../components/home_components/Promo1Component.vue";
import BannerSection from "./../../components/home_components/BannerSection.vue";
import SubscribeSection from "./../../components/home_components/SubscribeSection.vue";
import PostSection from "./../../components/home_components/PostSection.vue";
import NewProduct from "./../../components/home_components/NewProduct.vue";
import HighPriceProduct from "./../../components/home_components/HighPriceProduct.vue";
import PostCard from "./../../components/common_components/PostCard.vue";

export default {
    name:'HomePage',
    components: {
        PostCard,
        PromoComponent,
        Promo1Component,
        NewProduct,
        HighPriceProduct,
        BannerSection,
        SubscribeSection,
        PostSection
    }
};
</script>
