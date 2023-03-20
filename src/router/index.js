import VueRouter from 'vue-router'
import NotFound from "@/views/404.vue";
import welcome from '@/views/welcome/index.vue'

const router = new VueRouter({
    mode: 'hash',
    base: '',
    routes: [
        {
            name: "欢迎",
            path: "/",
            component: welcome,
            meta: {
                title: "welcome",
            },
        },
        {
            name: "欢迎1",
            path: "/welcome",
            component: welcome,
            meta: {
                title: "welcome",
            },
        },
        {
            name: "404",
            path: "*",
            component: NotFound,
            meta: {
                title: "子应用404",
            },
            props: true,
        },

    ],
});

console.log('=====', router)

// router.onError(() => {
//     router.push({
//         path: "/404",
//     });
// });

export default router;
