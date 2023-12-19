<template>
    <div>
        <carousela />
        <carousel />
        <div class="accs">
            <img :src="randomImagePath" :alt="list.alt" />
            <div v-html="list.content" class="content"></div>
        </div>
        <jieshaoanli />

        <div class="acccdd">其他案例</div>
        <div class="suiji">
            <div v-for="(items, index) in addList.data" :key="index" class="naifei">
                <nuxt-link class="nuxtLink" :to="{ name: 'index-case-id', params: { id: items.ID } }">
                    <div class="addc">
                        <img :src="items.randomImage" :alt="items.title" :title="items.title">
                        <div class="text2">
                            <div class="title1">
                                {{ items.title }}
                            </div>
                            <div class="description1">
                                {{ items.description }}
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <footera />
    </div>
</template>
<script>
import footera from '~/components/web/footera.vue';
import carousel from '~/components/web/carousel.vue';
import carousela from '~/components/web/carousela.vue';
import getRandomImage from '../../../plugins/randomImage';
import jieshaoanli from '~/components/web/jieshaoanli.vue';
export default {
    async asyncData({ params, $axios }) {
        const id = params.id;
        // 根据动态参数 id 获取展位数据
        const response = await $axios.get('http://124.220.23.104:3002/api/getText', {
            params: {
                WebName: 'JinBaiShun',
                id: id
            }
        });
        // 根据动态参数 id 获取展位数据
        const response2 = await $axios.get('http://124.220.23.104:3002/text/getData', {
            params: {
                WebName: 'JinBaiShun',
                page: '0'
            }
        });
        return {
            addList: response2.data,
            list: response.data,
        }
    },
    /* 页面配置 */
    components: {
        footera,
        carousel,
        carousela,
        jieshaoanli
    },
    data() {
        return {
            list: '',
            randomImagePath: '',
            addlist: ''
        }

    },
    methods: {
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        handimg() {
            // 使用 map 方法循环遍历数组，并给每个对象添加新的属性
            this.addList.data = this.addList.data.map(item => {
                const randomImage = getRandomImage();
                return {
                    ...item,
                    randomImage: randomImage
                };
            });
        },

    },
    beforeUpdate() {
        this.handimg();
        this.randomImagePath = getRandomImage();
    },
    head() {
        return {
            title: this.list.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.list.description
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.list.keywords
                },
                { hid: 'og:title', property: 'og:title', content: this.list.title },
                { hid: 'og:description', property: 'og:description', content: this.list.description }
            ],
        };
    },
    mounted() {
        this.handimg();
        this.randomImagePath = getRandomImage();
    }
}
</script>

<style scoped>
.accs {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 70%;
    margin: auto;
}

.content {
    background-color: #fff;
    padding: 10px;
    font-size: 2rem;
}

img {
    max-width: 100%;
    height: auto;
}

h1 {
    font-size: 5rem !important;
}

.naifei {
    width: 80%;
    margin: auto;

}

div img {
    width: 14rem;
    height: 12rem;
    border-radius: 1rem;
    margin-right: 1rem;
}


.title1 {
    font-size: 2.3rem;
}


.block {

    margin: auto;
    margin-bottom: 2rem;
    text-align: center;
}

.description1 {
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
}

.addc {
    display: flex;
    width: 100%;
    height: 14rem;
    margin: auto;
    margin-bottom: 3rem;
    border-radius: 1rem;
    /* border: 0.1rem solid black; */
    padding: 1rem;
    justify-content: center;
}

.addc:first-child {
    margin-top: 2rem;
}

.nuxtLink {
    color: black !important;
    width: 60% !important;
}

.goods {
    margin-top: 6rem;
}

.text2 {
    margin-left: 2rem;
    width: 80rem;
}

.goodcs {
    color: red;
    font-size: 5rem;
    text-align: center;
}

.nuxtLink {
    color: black !important;
    width: 60% !important;
}

.naifei {
    width: 80%;
    margin: auto;

}

div img {
    width: 14rem;
    height: 12rem;
    border-radius: 1rem;
    margin-right: 1rem;
}


.title1 {
    font-size: 2.3rem;
}


.block {

    margin: auto;
    margin-bottom: 2rem;
    text-align: center;
}

.description1 {
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
}

.addc {
    display: flex;
    width: 100%;
    height: 14rem;
    margin: auto;
    margin-bottom: 3rem;
    border-radius: 1rem;
    /* border: 0.1rem solid black; */
    padding: 1rem;
    justify-content: center;
}

.addc:first-child {
    margin-top: 2rem;
}

.acccdd {
    font-size: 3rem;
    background-color: #0070c0;
    text-align: center;
    color: white;
    height: 5rem;
    line-height: 5rem;
}
</style>
