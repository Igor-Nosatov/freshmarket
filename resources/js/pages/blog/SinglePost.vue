<template>
<main class="main pl-5 pr-5">
    <div class="single-product mt-5 pb-5">
        <div class="wrapper">
            <div class="row no-gutters">
                <BreadcrumbComponent :pageName="post.name" />
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 p-3">
                    <picture>
                        <img :src="'/storage/img/' + post.img_url" class="img-fluid" />
                    </picture>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 pt-5">
                    <h2 class="page-title font-weight-bold">{{ post.name }}</h2>
                    <p class="product-code text-justify">{{ post.description }}</p>
                    <router-link :to="{ name: 'blog' }" class="btn-main mr-auto p-3 w-50">
                        Перейти к другим постам
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import * as actions from "./../../vuex/modules/post/types/actions";
import * as getters from "./../../vuex/modules/post/types/getters";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";
export default {
    name:'SinglePost',
    components: {
        BreadcrumbComponent
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapGetters("posts", {
            getPostByTitle: getters.POST_BY_TITLE
        }),
        post(){
            const title = `${this.$route.params.title}`
            return  this.getPostByTitle(title);
        }
    },
    methods: {
        ...mapActions("posts", {
            fetchPosts: actions.GET_POSTS
        }),
    }
};
</script>
