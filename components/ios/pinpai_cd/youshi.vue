<template>
    <div>
        <div class="nav" v-for="item in goods" :key="item.id">
            <div class="nava">
                <div>{{ item.nav }}</div>
            </div>
            <div class="navb">
                <img :src="item.img" alt="汽车托运">
                <div class="navba">
                    {{ item.img_text }}
                </div>
            </div>
            <div class="navc">
                <img :src="item.img_vs" alt="轿车托运 ">
            </div>
            <div class="navd">
                <img :src="item.img2" alt="私家车托运 ">
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
                    img: require('assets/ios/pinpai/1.jpg'),
                    img_text: '金百顺专业的商品运输车托运您的爱车，装卸更安全，更省心，放心',
                    img_vs: require('assets/ios/20231030174547.png'),
                    img2: require('assets/ios/pinpai/20231101142257.jpg'),
                    img_text2: '爱车与获取混装，易刮伤，需要使用吊车、叉车装卸，易损伤到车的底盘'
                },
                {
                    id: 2,
                    nav: '运输方式对比',
                    img: require('assets/ios/pinpai/2.jpg'),
                    img_text: '金百顺正规的轿车托运合同，资质证书齐全',
                    img_vs: require('assets/ios/20231030174547.png'),
                    img2: require('assets/ios/pinpai/20231101142444.jpg'),
                    img_text2: '无正规，无专业的轿车托运合同，无轿车运输资质'
                },
                {
                    id: 3,
                    nav: '运输方式对比',
                    img: require('assets/ios/pinpai/3.jpg'),
                    img_text: '金百顺购买独立的运输险，车主可以自行理赔，完全保障安全',
                    img_vs: require('assets/ios/20231030174547.png'),
                    img2: require('assets/ios/pinpai/20231101142451.jpg'),
                    img_text2: '不购买独立的轿车运输保险，无安全保障，更不能自行理赔'
                },
                {
                    id: 4,
                    nav: '运输方式对比',
                    img: require('assets/ios/pinpai/4.jpg'),
                    img_text: '金百顺价格透明，绝不隐形收费，绝不二次收费',
                    img_vs: require('assets/ios/20231030174547.png'),
                    img2: require('assets/ios/pinpai/20231101142639.jpg'),
                    img_text2: '报价便宜，但是存在重复，二次收费和隐形收费'
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
    color: rgb(0, 0, 0);
}
</style>
