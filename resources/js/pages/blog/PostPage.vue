<template>
    <main class="main">
        <div class="blog-posts-section pt-5 pb-5">
            <div class="wrapper">
                <div class="row no-gutters">
                    <BreadcrumbComponent :pageName="pageName" />
                    <div class="col-12">
                        <h3
                            class="blog-posts-section__title text-center font-weight-bold pt-2 pb-5"
                        >
                            Добро пожаловать - супер полезная инфа для веганов,
                            сладкоежек и не только :)))
                        </h3>
                    </div>
                    <PostCard
                        v-for="post in posts"
                        :post="post"
                        :key="post.id"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions} from "vuex";
import * as actions from './../../vuex/modules/post/types/actions';
import PostCard from "./../../components/common_components/PostCard.vue";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";

export default {
    name:'PostPage',
    components: {
        PostCard,
        BreadcrumbComponent
    },
    data() {
        return {
            pageName: "Блог"
        };
    },
    created() {
        this.fetchPosts();
    },
    computed: {
        ...mapState("posts", [ 
            'posts'
        ]),
    },
    methods: {
        ...mapActions("posts", {
            fetchPosts: actions.GET_POSTS,
        })
    }
};
</script>
