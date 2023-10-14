<template>
    <div>
        <div class="nav" v-for="item in goods" :key="item.id">
            <div class="nava">
                <div>{{ item.nav }}</div>
            </div>

            <div class="navb">
                <img :src="item.img" alt="">
                <div class="navba">
                    {{ item.img_text }}
                </div>
            </div>

            <div class="navc">
                <img :src="item.vs" alt="">
            </div>

            <div class="navd">
                <img :src="item.img2" alt="">
                <div class="navba">
                    {{ item.img_text2 }}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goods: [
                {
                    id: 1,
                    nav: '运输方式对比',
                    img: require('../../../assets/banner1.jpg'),
                    img_text: '中振专业的商品运输车托运您的爱车，装卸更安全，更省心，放心',
                    img_vs: require('assets/banner2.jpg'),
                    img2: require('assets/banner1.jpg'),
                    img_text2: '爱车与获取混装，易刮伤，需要使用吊车、叉车装卸，易损伤到车的底盘'
                },
                {
                    id: 2,
                    nav: '运输方式对比',
                    img: require('../../../assets/banner1.jpg'),
                    img_text: '中振专业的商品运输车托运您的爱车，装卸更安全，更省心，放心',
                    img_vs: require('assets/banner2.jpg'),
                    img2: require('assets/banner1.jpg'),
                    img_text2: '爱车与获取混装，易刮伤，需要使用吊车、叉车装卸，易损伤到车的底盘'
                },
                {
                    id: 3,
                    nav: '运输方式对比',
                    img: require('../../../assets/banner1.jpg'),
                    img_text: '中振专业的商品运输车托运您的爱车，装卸更安全，更省心，放心',
                    img_vs: require('assets/banner2.jpg'),
                    img2: require('assets/banner1.jpg'),
                    img_text2: '爱车与获取混装，易刮伤，需要使用吊车、叉车装卸，易损伤到车的底盘'
                },
                {
                    id: 4,
                    nav: '运输方式对比',
                    img: require('../../../assets/banner1.jpg'),
                    img_text: '中振专业的商品运输车托运您的爱车，装卸更安全，更省心，放心',
                    img_vs: require('assets/banner2.jpg'),
                    img2: require('assets/banner1.jpg'),
                    img_text2: '爱车与获取混装，易刮伤，需要使用吊车、叉车装卸，易损伤到车的底盘'
                },
            ]
        }
    },

}
</script>

<style scoped>
.nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
}

img {
    width: 100%;
    height: 10rem;
    padding: 0.3rem;
    border: 0.1rem red solid;
    border-radius: 2rem;
}

.nava {
    width: 100%;
    text-align: center;

}

.nava div {
    width: 10rem;
    border-radius: 2rem;
    background-color: #ff0100;
    margin: 1.5rem auto;
    height: 2.5rem;
    line-height: 2.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    box-shadow: 5px 5px 5px rgba(156, 156, 156, 0.5);
}

.navb {
    width: 33%;
}

.navc {
    width: 30%;

}

.navc img {
    border: none;
}

.navd {
    width: 33%;
}

.navba {
    color: red;
}
</style>
