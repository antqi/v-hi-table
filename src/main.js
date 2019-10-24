import Vue from 'vue'
import App from './app.vue'
import Table from '@/lib/table'
import TableTd from '@/lib/table-td'
// 组件样式
import '@/style/modules/index.styl'

Vue.use(Table)
Vue.use(TableTd)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
