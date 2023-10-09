<template>
    <div class="carouselcc">

        <!-- pc端 -->
        <div class="cercc">
            <el-carousel :interval="4000" height="30rem">
                <el-carousel-item>
                    <img src="../../assets/banner1.jpg" alt="汽车托运" class="carousel-image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/banner2.jpg" alt="汽车托运" class="carousel-image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/banner3.jpg" alt="汽车托运" class="carousel-image">
                </el-carousel-item>
            </el-carousel>
        </div>
        <Carousel />
        <Imgs_ser />
    </div>
</template>
  
<script>
import Carousel from '~/components/web/carousel.vue';
import Imgs_ser from '~/components/web/imgs_ser.vue';


import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
    components: {
        Carousel,
        Imgs_ser
    },
    data() {
        return {
            playsinline: true,
            playerOptions: {
                // 播放器配置
                muted: false, // 是否静音
                language: 'zh-CN',
                aspectRatio: '16:8',
                //playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                controls: true,
                preload: 'false', // 视频预加载
                fluid: true,
                sources: [
                    {
                        type: 'video/mp4',
                        src:
                            'http://localhost:3001/video'
                    }
                ],
                poster: 'http://localhost:3001/video-img', // 封面图
                notSupportedMessage: '此视频暂无法播放，请稍后再试'
            }
        }
    },
    mounted() {
        /*  console.log('this is current player instance object', this.myVideoPlayer) */
    },



}
</script>
  
<style scoped>
.cercc {
    width: 100%;
}

.carouselcc {
    margin-top: 6rem;
    background-color: white !important;
}
</style>
  