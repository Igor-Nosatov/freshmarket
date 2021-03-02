<template>
    <div class="subscribe-section">
        <div class="wrapper">
            <div class="row no-gutters">
                <div
                    class="col-12 col-sm-12 offset-md-4 col-md-5 offset-lg-4 col-lg-4 pt-5 "
                >
                    <form class="subscribe-form" @submit.prevent="addToNews">
                        <div
                            class="form-row d-flex flex-row justify-content-center"
                        >
                            <div class="form-group col-md-12">
                                <div class="input-group mb-2">
                                    <input
                                        id="email"
                                        type="text"
                                        v-model="email"
                                        placeholder="user@user.com"
                                        class="form-control sub-form-control rounded-0"
                                    />

                                    <div class="input-group-prepend">
                                        <button type="submit" class="btn-main">
                                            Подписаться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import * as actions from "./../../vuex/modules/home/types/actions";

export default {
    name:'SubscribeSection',
    data() {
        return {
            email: ""
        };
    },
    methods: {
        ...mapActions("home", {
            addToNewsLetter: actions.ADD_TO_NEWSLETTER
        }),

        async addToNews() {
            await this.addToNewsLetter({
                email: this.email
            }).then(this.$router.push({ name: "subconfirm" }));
        }
    }
};
</script>
