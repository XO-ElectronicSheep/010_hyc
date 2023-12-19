<template>
    <div class="nav">
        <div class="nav_c" v-for="item in dec" :key="item.id">
            <nuxt-link class="nuxtLink" :to="{ name: 'mobile-id', params: { id: item.ID } }">
                <img :src="item.url" :alt="item.alt">
                <div class="beij">{{ item.title }}</div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            dec: [
            ],
            imgas: [
                require('../../../assets/ios/anli/0.jpg'),
                require('../../../assets/ios/anli/1.jpg'),
                require('../../../assets/ios/anli/2.jpg'),
                require('../../../assets/ios/anli/3.jpg'),
                require('../../../assets/ios/anli/4.jpg'),
                require('../../../assets/ios/anli/5.jpg')
            ]
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('http://124.220.23.104:3002/text/getData', {
                    params: {
                        WebName: 'JinBaiShun',
                        page: '0'
                    }
                })
                // 处理请求成功的响应数据
                console.log(response.data)
                this.dec = response.data.data
                this.dec.forEach((item, index) => {
                    item.url = this.imgas[index]
                })
                console.log(this.dec)
            } catch (error) {
                // 处理请求失败的错误
                console.error(error)
            }
        },
    },
    mounted() {
        this.fetchData();

    }
}
</script>

<style scoped>
.nav {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
}

.nav_c img {
    width: 100%;
    height: 10rem;
    border-radius: 1rem;
}

.nav_c {
    width: 45%;
    height: 13rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
}

.beij {
    height: 2rem;
    font-size: 1.5rem;
    background-color: rgba(19, 19, 19, 0.63);
    width: 100%;
    line-height: 2rem;
    text-align: center;
    color: white;
    margin-top: -3.1rem;
    border-radius: 1rem;
}

.redtext {
    color: red;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: -1.9rem;
}
</style>
