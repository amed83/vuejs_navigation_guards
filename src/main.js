import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import Homepage from './components/Homepage.vue'
Vue.use(VueCookies);
import Login from './components/Login.vue'
import SellerView from './components/SellerView.vue'
import AdminView from './components/AdminView.vue'
import AccessDenied from './components/AccessDenied.vue'

const routes=[ 
        {
        name: 'Login',
        path: '/login',
            components:{
                login:Login
            }
        },
        {
        name: 'Homepage',
        path: '/homepage',
            components:{
                homepage:Homepage
            }
        },
        {
        name: 'SellerView',
        path: '/sellerView',
            components:{
                sellerView:SellerView
            }
        },
        {
        name: 'AdminView',
        path: '/adminView',
            components:{
                adminView:AdminView
            }
        },
        {
        name: 'AccessDenied',
        path: '/accessDenied',
            components:{
                accessDenied:AccessDenied
            }
        },
    {path:'/', redirect:'/login'}
]



const router = new VueRouter({routes: routes,mode:'history'  });

router.beforeResolve((to,from,next)=>{
    const user= store.getters.userJustLogged
    if(!user && to.path =='/'){
        store.dispatch('hideErrorMessage')
        next('login')
    }
    else if(!user && to.path!=='/login'){
        store.dispatch('showErrorMessage')
        next('login')
    }
    else if(user && to.path=='/login') {
        next()
    }
    else if(!user && to.path==='/login'){
        next()
    }
    else if((user==='seller' && to.path==='/AdminView') || (user==='admin' && to.path==='/SellerView')){
        next('accessDenied')
    }
    else{
        next()
    }

})


Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue(Vue.util.extend({ store,router }, App)).$mount('#app');
