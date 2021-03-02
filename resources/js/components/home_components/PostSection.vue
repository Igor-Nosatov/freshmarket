<template>
  <div class="blog-posts-section pt-5 pb-5">
    <div class="wrapper">
      <div class="row no-gutters">
        <div class="col-12">
          <h3
            class="blog-posts-section__title text-center font-weight-bold pt-2 pb-5"
          >
            Наш блог
          </h3>
        </div>
        <div
          class="col-12 col-sm-6 col-md-6 col-lg-3 pl-2 pr-2 mb-3 pt-2 pb-2"
          v-for="post in random_posts"
          :key="post.id"
        >
          <div class="card rounded-0">
            <picture>
              <img
                :src="'./storage/img/' + post.img_url"
                alt="image"
                class="post-img"
              />
            </picture>
            <div class="card-body">
              <h5 class="card-title text-center font-weight-bold">
                {{ post.name }}
              </h5>
              <p class="card-text text-justify">
                {{ post.description | truncate(55, "...") }}
              </p>
              <router-link
                class="btn-main w-100"
                :to="{
                  name: 'blog-item',
                  params: { title: post.title },
                }"
              >
                Детальнее
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import * as actions from "./../../vuex/modules/home/types/actions";
export default {
  name:'PostSection',
  async created() {
    this.fetchRandPosts();
  },
  computed: {
    ...mapState("home", ["random_posts"]),
  },
  methods: {
    ...mapActions("home", {
      fetchRandPosts: actions.GET_RANDOM_POSTS,
    }),
  },
};
</script>
