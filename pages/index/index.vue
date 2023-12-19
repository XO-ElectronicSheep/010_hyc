<template>
    <div class="carouselcc">
        <!-- pc端 -->
        <carousela />
        <Carousel />
        <guanyu />
        <caroutext />
        <fuwuyoushi />
        <div class="goodse">
            <div class="goods">
                <h1 class="goodcs">托运案例</h1>
                <div v-for="(items, index) in list.data" :key="index" class="naifei">
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
        </div>
        <Imgs_ser />
        <footera />
    </div>
</template>
<script>
import Carousel from '~/components/web/carousel.vue';
import Imgs_ser from '~/components/web/imgs_ser.vue';
import carousela from '~/components/web/carousela.vue';
import footera from '~/components/web/footera.vue';
import caroutext from '~/components/web/caroutext.vue';
import getRandomImage from '../../plugins/randomImage';
import guanyu from '~/components/web/guanyu.vue';
import fuwuyoushi from '~/components/web/fuwuyoushi.vue';
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
    components: {
        Carousel,
        Imgs_ser,
        carousela,
        footera,
        caroutext,
        guanyu,
        fuwuyoushi
    },

    data() {
        return {
            list: ''
        }
    },
    async asyncData({ $axios }) {
        const response = await $axios.get('http://124.220.23.104:3002/text/getData', {
            params: {
                WebName: 'JinBaiShun',
                page: '0'
            }
        });
        return {
            list: response.data,
        }
    },
    methods: {
        handimg() {
            // 使用 map 方法循环遍历数组，并给每个对象添加新的属性
            this.list.data = this.list.data.map(item => {
                const randomImage = getRandomImage();
                return {
                    ...item,
                    randomImage: randomImage
                };
            });
        }
    },
    mounted() {
        /*  console.log('this is current player instance object', this.myVideoPlayer) */
        this.handimg();
    },
}
</script>

<style scoped>
.cercc {
    width: 100%;
}

.goodse {
    margin-top: 5rem;
}

.carouselcc {
    margin-top: 6rem;
    background-color: white !important;
}


.carousel-image {
    height: 500px !important;
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
</style>
