<template>
    <div>
        <Header />
        <!-- 移动 -->
        <div class="carouselcc">
            <div class="cercc">
                <img src="../../assets/ios/navheader.jpg" alt="汽车托运">
                <div class="navbule">专注轿车托运老品牌</div>
            </div>
            <div class="ponav">
                <div class="hr"></div>
                <div class="getus">
                    超过 <div class="numc">{{ numberUser }}</div>位客户选择我们
                </div>
                <div class="hr"></div>
            </div>
            <AbLab />
            <Pinpai message=1 />
            <div class="video-vuec">
                <section class="vueVideo">
                    <div v-video-player:myVideoPlayer="playerOptions" class="video-player-box" :playsinline="playsinline">
                    </div>
                </section>
            </div>
            <div class="biange">
                <div class="items" v-for="item of biaoge" :key="item.id">
                    <van-icon :name="item.icon" />
                    <p class="icontext"><a href="tel:12222222">{{ item.text }}</a>
                    </p>
                </div>
            </div>
            <Imglvg />
            <Pinpai tow=1 />
            <Pinpai san=1 />
            <Flex9 />
            <Pinpai fuwu=1 />
            <Pinpai baozhang=1 />
            <AbLab />
            <Pinpai hetong=1 />
            <Duonian />
            <Pinpai youshi=1 />
            <Pinpai jianjie=1 />
            <Pinpai anli=1 />
            <Pinpai banshi=1 />
            <AbLab />
        </div>
        <Footera />
        <Footerm />
    </div>
</template>

<script>
import Header from '~/components/ios/header.vue';
import AbLab from '~/components/ios/ablab.vue';
import Imglvg from '~/components/ios/img_lvg.vue';
import Pinpai from '~/components/ios/pinpai.vue'
import Flex9 from '~/components/ios/flex9.vue';
import Footerm from '~/components/ios/footerm.vue';
import Duonian from '~/components/ios/duonian.vue';
import Footera from '~/components/ios/footera.vue';
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

export default {
    components: {
        AbLab,
        Header,
        Imglvg,
        Pinpai,
        Flex9,
        Footerm,
        Duonian,
        Footera
    },
    data() {
        return {
            intervalId: null,
            numberUser: 2347182,
            timerCount: 5,
            biaoge: [
                {
                    id: 1,
                    icon: 'logistics',
                    text: '私家车托运'
                },
                {
                    id: 2,
                    icon: 'link-o',
                    text: '单台配送'
                },
                {
                    id: 3,
                    icon: 'todo-list-o',
                    text: '托运流程'
                },
                {
                    id: 4,
                    icon: 'location-o',
                    text: '托运路线'
                },
                {
                    id: 5,
                    icon: 'gem-o',
                    text: '品牌简介'
                },
                {
                    id: 6,
                    icon: 'service-o',
                    text: '联系我们'
                },
            ],
            playsinline: true,
            playerOptions: {
                // 播放器配置
                muted: false, // 是否静音
                language: 'zh-CN',
                aspectRatio: '16:9',
                //playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                controls: true,
                preload: 'false', // 视频预加载
                fluid: true,
                sources: [
                    {
                        type: 'video/mp4',
                        src:
                            'http://124.220.23.104:3001/video'
                    }
                ],
                poster: 'http://124.220.23.104:3001/video-img', // 封面图
                notSupportedMessage: '此视频暂无法播放，请稍后再试'
            }
        }
    },
    methods: {
        generateRandomNumber() {
            let randomNumber = "";
            for (var i = 0; i < 7; i++) {
                randomNumber += Math.floor(Math.random() * 10);
            }
            return randomNumber;
        }
    },
    comments: {

    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.numberUser = this.generateRandomNumber();
            this.timerCount--;

            if (this.timerCount === 0) {
                this.numberUser = 9328123
                clearInterval(this.intervalId);
            }
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    }


}
</script>

<style scoped>
.cercc {
    width: 100%;
}

.carouselcc {
    margin-top: 0.5rem;
    background-color: white !important;
}

.img_car {
    width: 100%;
}

.cercc img {
    display: flex;
    width: 100%;
    /* margin-bottom: 1rem; */
    height: 35rem;
}



.videod {
    width: 100%;
    height: auto;
}

.video-vuec {
    margin-top: 0.5rem;
    height: auto;
}

.ponav {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.getus {
    display: flex;
    justify-content: center;
    margin: 0 1rem;
    font-size: 1.5rem;
}

.hr {
    width: 6rem;
    margin-bottom: 0.75rem;
    border-bottom: 0.1rem rgba(131, 131, 131, 0.541) solid;
}

.numc {
    color: red;
}

.biange {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.van-icon {
    background-color: #148acf;
    width: 100%;
    height: 5rem;
    font-size: 4rem;

    text-align: center;
    color: white;
    border-radius: 1.5rem;
    line-height: 5rem;
}

.biange .items {
    width: 25%;
    margin: 1rem;
    /* background-color: #148acf; */
    border-radius: 1rem;

}


.navbule {
    width: 100%;
    height: 4rem;
    background-color: #148acf;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 4rem;
    text-align: center;
    letter-spacing: 1rem;
    margin-top: -0.1rem;
}

.icontext {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 0.2rem;
}

a {
    color: black;
    text-decoration: none;
}
</style>
