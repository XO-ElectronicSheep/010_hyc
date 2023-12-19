<template>
    <div>
        <carousela />
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
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="list.totalPages * 10" @current-change="handlePageChange"
                    :current-page="currentPage" background :pager-count="11">
                </el-pagination>
            </div>
            <nuxt />
        </div>
        <footera />
    </div>
</template>
<script>
import carousela from '~/components/web/carousela.vue';
import footera from '~/components/web/footera.vue';
import getRandomImage from '../../../plugins/randomImage';
export default {
    components: {
        carousela,
        footera
    },
    /* 页面配置 */
    head() {
        return {
            title: '页面标题', // 设置页面标题
            meta: [
                { hid: 'description', name: 'description', content: '页面描述' }
            ],
        }
    },
    data() {
        return {
            list: '',
            currentPage: 1,
            randomImagePath: '',
            randomImages: []
        };
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
        handlePageChange(newPage) {
            this.currentPage = newPage;
            this.fetchData(newPage);
        },
        async fetchData(index) {
            const data = await this.$axios.get('http://124.220.23.104:3002/text/getData', {
                params: {
                    WebName: 'JinBaiShun',
                    page: index - 1
                }
            });
            this.list = data.data
            this.handimg();
        },
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
        //this.generateRandomImages();
        this.handimg();
    }
}
</script>
<style scoped>
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
