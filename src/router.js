import VueRouter from 'vue-router';

import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';



const routes = [
    { path: '/stocks', component: Stocks },
    { path: '/portfolio', component: Portfolio }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;


