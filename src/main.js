import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './Main.vue'
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

