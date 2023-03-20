import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router/index";

function render(props = {}) {
    const { container, token = false } = props;
    Vue.use(VueRouter)
    Vue.use(ElementUI)

    new Vue({
        router,
        props: {
            SSO_TOKEN: token
        },
        render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app');
}

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta && to.meta.title) {
        // @ts-ignore
        document.title = to.meta.title;
    }
    next();
});

render()
