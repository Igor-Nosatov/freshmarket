<template>
    <div class="col-12 pl-5 pr-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'home' }">Главная</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'cart' }">Корзина</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    Оформление заказа
                </li>
            </ol>
        </nav>
        <h3 class="font-weight-bold">Оформление Заказа</h3>
    </div>
</template>
