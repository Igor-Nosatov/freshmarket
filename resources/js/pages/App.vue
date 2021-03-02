<template>
<div class="body-wrapper">
     <header>
        <TopHeader />
        <div class="bottom-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-bottom">
                <div class="row no-gutters w-100 pt-4 pb-3">
                    <div class="col-md-6 col-lg-6">
                        <LogoComponent />
                    </div>
                    <div class="col-md-12 col-lg-6 ">
                        <button class=" mt-2 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <picture>
                                <img :src="`./storage/img/menu.svg`" alt="menu-icon" class="menu-icon">
                            </picture>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarHeader">
                            <ul class="navbar-nav navbar-header mx-auto">
                                <li v-for="(type, index) in types" :key="index" class="nav-item mt-4">
                                    <router-link :to="{name: 'catalog', params: { slug: type.slug }}" class="nav-link  p-1 header-text-color">
                                        {{type.name}}
                                    </router-link>
                                </li>
                                <div class=" navbar-header d-flex flex-row">
                                    <li class="nav-item pt-2">
                                        <router-link class="nav-link account-link" v-if="!loggedIn()" :to="{name: 'login'}" >
                                            <i class="far fa-user"></i>
                                            Войти
                                        </router-link>

                                        <a v-if="loggedIn()" class="nav-item nav-link logout-link" @click="logout">
                                            <i class="far fa-user"></i>
                                            Выход
                                        </a>
                                    </li>
                                    <li class="nav-item pl-2 pt-2">
                                        <router-link class="nav-link" :to="{name: 'cart'}">
                                            <i class="fas fa-shopping-basket"></i>
                                        </router-link>
                                    </li>
                                    <li class="nav-item pl-2 pt-2">
                                        <router-link class="nav-link" :to="{name: 'wishlist'}">
                                            <i class="pr-3 far fa-heart"></i>
                                        </router-link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <router-view :key="$route.fullPath"></router-view>
    <FooterComponent />
</div>
</template>
<script>
import axios from 'axios';
import TopHeader from './../components/common_components/TopHeader.vue'
import LogoComponent from './../components/common_components/LogoComponent.vue'
import FooterComponent from './../components/common_components/FooterComponent.vue'

export default {
    components: {
        TopHeader,
        LogoComponent,
        FooterComponent
    },
    data() {
        return {
            types: [],
            user: {}
        }
    },
    mounted() {
        this.fetchTypes();
    },
    methods: {
        fetchTypes() {
            axios
                .get('/api/types/')
                .then((res) => {
                    this.types = res.data.types;
                });
        },
        logout() {
            return axios.get(`${window.location.origin}/api/logout`)
                .then(res => {
                    location.reload();
                    return localStorage.clear();
                }).catch(err => {
                    console.log(err)
                     location.reload();
                    return localStorage.clear();
                });
        },
        loggedIn() {
            if (!localStorage) return null;
            return localStorage.getItem('token');
        },
    }

}
</script>

