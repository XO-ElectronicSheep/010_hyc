<template>
    <div class="nav">
        <div class="nav_c" v-for="item in dec" :key="item.id">
            <img :src="item.img" alt="">
            <div class="beij">{{ item.text1 }}</div>
            <div class="redtext">
                {{ item.text2 }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dec: [
                {
                    id: 1,
                    img: require('../../../assets/banner2.jpg'),
                    text1: '私家车托运',
                    text2: '--全国路线  往返发车--'
                },
                {
                    id: 2,
                    img: require('../../../assets/banner2.jpg'),
                    text1: '二手车托运',
                    text2: '--全国保险  全程跟踪--'
                },
                {
                    id: 3,
                    img: require('../../../assets/banner2.jpg'),
                    text1: '单台配送',
                    text2: '--快捷发车  量身定制--'
                },
                {
                    id: 4,
                    img: require('../../../assets/banner2.jpg'),
                    text1: '广告车托运',
                    text2: '--经验丰富  专业操作--'
                },
                {
                    id: 5,
                    img: require('../../../assets/banner2.jpg'),
                    text1: '商品车托运',
                    text2: '--价格透明  批发发运--'
                },
                {
                    id: 6,
                    img: require('../../../assets/banner2.jpg'),
                    text1: '巡展车托运',
                    text2: '--装车即走  安全高效--'
                },
            ]
        }
    },

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
