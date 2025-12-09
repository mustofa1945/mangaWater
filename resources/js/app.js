// app.js atau main.js
import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import DefaultLayout from "./layout/DefaultLayout.vue";
import ReadLayout from "./layout/ReadLayout.vue";
import { Link } from "@inertiajs/vue3";
import { createPinia } from "pinia";
import {
    vShowAndClose,
    vWaitTransition,
} from "./directive/customDirective";


export const pinia = createPinia();

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || DefaultLayout || ReadLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .component("Link", Link)
            .directive("showAndClose", vShowAndClose)
            .directive("waitTransition", vWaitTransition);
        app.mount(el);
    },
});
