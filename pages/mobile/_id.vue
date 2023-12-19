<template>
    <div class="ofsd">
        <div class="fanhui">
            <i class="el-icon-arrow-left" @click="goBack"></i>
        </div>
        <ablab class="acc" />
        <div class="accs">
            <img :src="randomImagePath" :alt="list.alt" />
            <div v-html="list.content" class="content"></div>
        </div>
        <ablab />
        <div class="accd">
            其他案例
        </div>
        <nanec />
        <footerm />
    </div>
</template>
<script>
import ablab from '~/components/ios/ablab.vue';
import getRandomImage from '~/plugins/randomImage';
import nanec from '~/components/ios/pinpai_cd/nanec.vue'
import axios from 'axios';
import footerm from '~/components/ios/footerm.vue';
export default {
    components: {
        ablab,
        nanec,
        footerm
    },
    data() {
        return {
            list: '',
            randomImagePath: '',
            totalPage: '',
            page: '',
            response2: ''
        }
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
    methods: {
        goBack() {
            this.$router.back();
        },
        getRandomNumber(min, max) {
            // 生成 min 到 max 之间的随机整数
            // 使用 Math.floor() 向下取整，Math.random() 生成 0 到 1 之间的随机小数
            // 将随机小数乘以范围差值，再加上最小值，得到最终的随机整数
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        async accdc() {
            const adds = await axios.get('http://124.220.23.104:3002/text/getData', {
                params: {
                    WebName: 'JinBaiShun',
                    page: this.page
                }
            })
            this.response2 = adds.data
        }
    },
    async asyncData({ params, $axios }) {
        const id = params.id;
        // 根据动态参数 id 获取展位数据
        const response = await $axios.get('http://124.220.23.104:3002/api/getText', {
            params: {
                WebName: 'JinBaiShun',
                id: id
            }
        });
        const page = await $axios.get('http://124.220.23.104:3002/text/LimitGetData', {
            params: {
                WebName: 'JinBaiShun'
            }
        });
        return {
            list: response.data,
            totalPage: page.data.totalPages - 1,
        }
    },
    mounted() {
        this.randomImagePath = getRandomImage();
        this.Page = Math.floor(Math.random() * (this.totalPage - 1 + 1)) + 1;
        this.accdc();
        console.log(this.page)
    }
}
</script>
<style scoped>
.fanhui {
    padding-top: 0.5rem;
    width: 100%;
    height: 3.5rem;
    background-color: #a7a7a7;

}

.el-icon-arrow-left {
    font-size: 3rem;
}

.accs {
    margin-top: 5rem;
}

.fanhui {
    position: fixed;
    top: 0;
    z-index: 999;

}

.acc {
    margin-top: 3rem;
}


.accd {
    margin-top: 2rem;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    text-align: center;
    background-color: #0b57d081;
    font-weight: 700;
}
</style>
