import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import './styles/index.scss'

import './assets/font/iconfont'
import './assets/font/iconfont.css'

import ElementUI from 'element-ui';
import './styles/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VCharts from 'v-charts'
Vue.use(VCharts);

Vue.config.productionTip = false
delete Icon.Default.prototype._getIconUrl;

import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import 'leaflet.browser.print/dist/leaflet.browser.print'
Vue.prototype.base_url = process.env.BASE_URL;


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
