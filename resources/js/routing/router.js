import Vue from "vue";
import VueRouter from "vue-router";
import auth from "./../services/auth/auth";

auth.init();
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: () =>
                import('./../pages/auth/LoginPage.vue')
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import('./../pages/auth/RegisterPage.vue')
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("./../pages/admin/AdminPage.vue"),
            meta: {
                requiresAuth: true,
                is_admin: true
            }
        },
        {
            path: "/cart",
            name: "cart",
            component: () =>
                import('./../pages/market/CartPage.vue'),
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: "/wishlist",
            name: "wishlist",
            component: () =>
                import('./../pages/market/WishlistPage.vue'),
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: "/catalog/:slug",
            name: "catalog",
            component: () =>import('./../pages/market/ShopCatalog.vue'),
                props: true
        },
        {
            path: "/catalog/product/:title",
            name: "product",
            component: () =>
                import('./../pages/market/ProductPage.vue'),
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: "/checkout",
            name: "checkout",
            component: () =>
                import('./../pages/market/CheckoutPage.vue'),
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: "/contact",
            name: "contact",
            component: () =>
                import('./../pages/service_page/ContactPage.vue'),
            meta: {
                requiresAuth: true,
                is_user: true
            }
        },
        {
            path: "/",
            name: "home",
            component: () =>
                import('./../pages/market/HomePage.vue')
        },
        {
            path: "/blog",
            name: "blog",
            component: () =>
                import('./../pages/blog/PostPage.vue')
        },
        {
            path: "/blog/single-post/:title",
            name: "blog-item",
            component: () =>
                import('./../pages/blog/SinglePost.vue'),
                props: true
        },
        {
            path: "/delivery",
            name: "delivery",
            component: () =>
                import('./../pages/service_page/DeliveryPage.vue')
        },
        {
            path: "/garantee",
            name: "garantee",
            component: () =>
                import('./../pages/service_page/GaranteePage.vue')
        },
        {
            path: "/confirm",
            name: "confirm",
            component: () =>
                import('./../pages/market/ConfirmPage.vue')
        },
        {
            path: "/subconfirm",
            name: "subconfirm",
            component: () =>
                import('./../pages/market/SubConfirm.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () =>
                import('./../pages/auth/PageNotFound.vue'),
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: 0 })
          }, 100)
        })
      }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.loggedIn()) {
            next({
                name: "login"
            });
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.is_admin == 1) {
                    next()
                } else {
                    next({
                        name: 'home'
                    })
                }
            } else if (to.matched.some(record => record.meta.is_user)) {
                if (user.is_admin == 0) {
                    next()
                } else {
                    next({
                        name: 'admin'
                    })
                }
            }
            next();
        }
    } else {
        next()
    }
});


export default router;
