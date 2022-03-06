import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//目标：全局组件的基本使用
//1.创建组件 -- 文件名.vue
//2. 引入组件
import Pannel from './components/Pannel_1'

//3.全局 -- 注册组件
//语法：vue.component("组件名"，组件对象)
Vue.component("PannelG", Pannel)

new Vue({
    render: h => h(App),
}).$mount('#app')