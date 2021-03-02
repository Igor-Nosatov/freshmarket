<template>
<footer>
    <div class="bottom-header">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-bottom">
            <div class="row no-gutters w-100 pt-4 pb-3">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center">
                    <LogoComponent />
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-9 ">
                    <ul class="navbar-nav navbar-footer d-flex flex-row flex-wrap justify-content-around">
                        <li class="nav-item mt-3">
                            <router-link :to="{name: 'blog'}" class="nav-link  p-1 header-text-color">
                                Блог
                            </router-link>
                        </li>
                        <li class="nav-item mt-3">
                            <router-link :to="{name: 'cart'}" class="nav-link  p-1 header-text-color">
                                Корзина
                            </router-link>
                        </li>
                        <li class="nav-item mt-3">
                            <router-link :to="{name: 'checkout'}" class="nav-link  p-1 header-text-color">
                                Заказы
                            </router-link>
                        </li>
                        <li class="nav-item mt-3">
                            <router-link :to="{name: 'garantee'}" class="nav-link  p-1 header-text-color">
                                Гарантия
                            </router-link>
                        </li>
                        <li class="nav-item mt-3">
                            <router-link :to="{name: 'delivery'}" class="nav-link  p-1 header-text-color">
                                Доставка
                            </router-link>
                        </li>
                        <li class="nav-item mt-3">
                            <router-link :to="{name: 'contact'}" class="nav-link  p-1 header-text-color">
                                Контакты
                            </router-link>
                        </li>
                        <li class="nav-item d-flex flex-row flex-wrap">
                            <a class="nav-link " href="#">
                                <i class="fab fa-facebook-f text-secondary"></i>
                            </a>
                            <a class="nav-link" href="#">
                                <i class="fab fa-twitter text-secondary"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-secondary" href="#">Все права защищены "Fresh
                                Market"
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</footer>
</template>

<script>
import LogoComponent from './../common_components/LogoComponent.vue'
export default {
    name:'FooterComponent',
    components: {
        LogoComponent
    }
}
</script>
