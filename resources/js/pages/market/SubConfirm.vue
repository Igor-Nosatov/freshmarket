<template>
    <main class="main pt-5 pb-5">
        <div class="wrapper">
            <div class="row justify-content-center no-gutters">
                <div class="col-8">
                    <h1 class="display-4 text-center">
                        Вы подписались на наши новости! С вами свяжеться наш
                        колцентр!
                    </h1>
                    <img
                        :src="`storage/img/confirm.jpeg`"
                        class="confirm-image"
                        alt=""
                    />
                    <div class="row no-gutters pt-3 pb-3 justify-content-center">
                        <div class="col-6">
                            <router-link
                                :to="{ name: 'home' }"
                                class="card-btn p-3 font-weight-bold text-uppercase text-white  mx-auto"
                            >
                                Вернуться на главную страницу</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name:'SubConfirm'
  }
</script>
