/* 
import Vue from 'vue'

//整体引入全局使用
import ElementUI from 'element-ui'
Vue.use(ElementUI);

// 全局引入 
 import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale })
 


 //局部引入 
import { Button } from 'element-ui'
import { Menu } from 'element-ui'
Vue.use(Button)
Vue.use(Menu) 
 */
// element-ui.js
import Vue from 'vue'
import {
    Container,
    Header,
    Aside,
    Main,
    Menu,
    MenuItem,
    Button,
    Form,
    FormItem,
    Input
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
    Container,
    Header,
    Aside,
    Main,
    Menu,
    MenuItem,
    Button,
    Form,
    FormItem,
    Input
];

const Element = {
    install(Vue) {
        components.forEach(component => {
            Vue.component(component.name, component)
        })
    }
}

Vue.use(Element, { locale })