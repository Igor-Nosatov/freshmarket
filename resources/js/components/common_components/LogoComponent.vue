<template>
<h3 class="title-logo">
    <router-link class="navbar-brand" :to="{name: 'home'}">
        <span class="letter1">F</span>
        <span class="letter2">r</span>
        <span class="letter3">e</span>
        <span class="letter4">s</span>
        <span class="letter5">h</span>
    </router-link>
    <router-link class="navbar-brand" :to="{name: 'home'}">
        <span class="letter1">M</span>
        <span class="letter2">a</span>
        <span class="letter3">r</span>
        <span class="letter4">k</span>
        <span class="letter5">e</span>
        <span class="letter6">t</span>
    </router-link>
</h3>
</template>
<script>
export default {
    name:'LogoComponent',
}
</script>
