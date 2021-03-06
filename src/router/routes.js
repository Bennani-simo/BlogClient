import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import MyPost from "@/components/MyPosts.vue";
import store from "@/store"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/my-posts",
        name: "MyPosts",
        component: MyPost,
        beforeEnter: authGuard
    },
];

const authGuard = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
    } else {
        next("/login")
    }
};

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
