<template>
<div class="col-12 col-sm-6 col-md-6 col-lg-3 pl-2 pr-2  mb-3 pt-2 pb-2">
    <div class="card rounded-0 post-card">
        <picture>
            <img :src="`storage/img/${post.img_url}`" alt="image" class="post-img" />
        </picture>
        <div class="card-body">
            <h5 class="card-title text-center font-weight-bold">{{ post.name}}</h5>
            <p class="card-text text-justify">{{post.description | truncate(150, '...')}}</p>
            <router-link class="btn-main" :to="{name: 'blog-item', params: { title: post.title }}">
                Детальнее
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'PostCard',
    props:{
        post:Object
    },
}
</script>
