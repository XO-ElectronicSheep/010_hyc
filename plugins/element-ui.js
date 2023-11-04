
import Vue from 'vue'

//整体引入全局使用
/* import ElementUI from 'element-ui'
Vue.use(ElementUI); */

// 全局引入 
/* import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale }) */

import {
    Button, Input, Menu,
    Submenu,
    MenuItem,
    Cascader,
    Form,
    FormItem,
} from 'element-ui'
import { Carousel, CarouselItem } from 'element-ui'
import { MessageBox } from 'element-ui'
import { Image } from 'element-ui'

Vue.use(Image)
Vue.prototype.$msgbox = MessageBox
Vue.use(Button)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Cascader)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Carousel)
Vue.use(CarouselItem)