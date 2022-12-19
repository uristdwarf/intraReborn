import User from "./components/userProfile/User.vue";
import Projects from "./components/projects/Projects.vue";
import Project from "./components/projects/Project.vue";
import Reviews from "./components/reviews/Reviews.vue";
import Review from "./components/reviews/Review.vue";
import * as VueRouter from "vue-router";

const routes = [
    { path: "/", component: User },
    { path: "/projects", component: Projects },
    { path: "/projects/:name", component: Project },
    { path: "/reviews", component: Reviews },
    { path: "/reviews/:id", component: Review },
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});
