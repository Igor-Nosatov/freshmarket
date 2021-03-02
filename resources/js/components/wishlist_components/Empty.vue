<template>
<div class="total-price-block mt-4 mb-4 pl-5 pr-5 mx-auto">
    <h2>
        Товара в списке желаний нет, вернитесь назад или
        перейдите в каталог или на главную страницу
    </h2>
    <router-link :to="{ name: 'home' }" class="btn-main w-25 mt-2">Главная страница</router-link>
</div>
</template>
