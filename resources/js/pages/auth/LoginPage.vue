<template>
    <main class="main pb-4 pl-2 pr-2">
        <div class="wrapper">
            <div class="row no-gutters  justify-content-center">
                <BreadcrumbComponent :pageName="pageName" />
                <div class="col-12 col-sm-12 col-md-8 col-lg-6 p-5 border border-dark">
                    <h2 class="text-center mt-2 mb-2">Вход в учетную запись</h2>
                    <form class="enter-form" @submit.prevent="login">
                        <div class="mb-4">
                            <label
                                class="block text-grey-darker text-sm font-bold mb-2"
                                for="email"
                                >Ваш Емейл</label
                            >
                            <input
                                v-model.trim="email"
                                class="form-control rounded-0"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-grey-darker text-sm font-bold mb-2"
                                for="password"
                                >Пароль</label
                            >
                            <input
                                v-model.trim="password"
                                class="form-control rounded-0"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button class="btn-main p-3 mt-3" type="submit">
                            Вход в аккаунт
                        </button>
                        <h4 class="mt-3">
                            <router-link
                                class="nav-link"
                                :to="{ name: 'register' }"
                            >
                                <i
                                    class="fas fa-key fa-2x header-text-color"
                                ></i>
                                Если нет учетной записи ---> Регистрация
                            </router-link>
                        </h4>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import auth from "./../../services/auth/auth";
import BreadcrumbComponent from "./../../components/common_components/BreadcrumbComponent.vue";
export default {
    name: "LoginPage",
    components: {
        BreadcrumbComponent
    },
    data: function() {
        return {
            email: "",
            password: "",
            loading: false,
            pageName: "Вход в аккаунт"
        };
    },
    methods: {
        login() {
            this.loading = true;
            auth.login(this.email, this.password)
                .then(response => {
                    this.$router.push("/");
                    this.loading = true;
                })
                .catch(err => {
                    this.passwordErrors.push("Пароль или Емейл некорре́ктный");
                    this.loading = false;
                });
        }
    }
};
</script>
