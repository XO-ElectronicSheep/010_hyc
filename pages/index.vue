<template>
  <div class="carouselcc" v-if="isMobile">

    <!-- pc端 -->
    <div class="cercc">
      <el-carousel :interval="4000" height="30rem">
        <el-carousel-item>
          <img src="../assets/banner1.jpg" alt="汽车托运" class="carousel-image">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/banner2.jpg" alt="汽车托运" class="carousel-image">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/banner3.jpg" alt="汽车托运" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <Carousel />
    <Imgs_ser />
  </div>

  <!-- 移动 -->
  <div v-else class="carouselcc">
    <div class="cercc">
      <img src="../assets/pan1.png" alt="">
      <div class="back1">HAOYUNCHE</div>
      <div class="back2">
        <p>中振品牌</p>
        <p>.</p>
        <p>视频</p>
      </div>
      <p class="pdian"></p>
      <div class="video-vuec">
        <section class="vueVideo">
          <div v-video-player:myVideoPlayer="playerOptions" class="video-player-box" :playsinline="playsinline"></div>
        </section>
      </div>
    </div>
    <div class="ponav">
      <div class="hr"></div>
      <div class="getus">
        超过 <div class="numc">9679,679</div>位客户选择我们
      </div>
      <div class="hr"></div>
    </div>
    <Carousel />

  </div>
</template>

<script>
import Carousel from '~/components/carousel.vue';
import Imgs_ser from '~/components/imgs_ser.vue';


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
    console.log('this is current player instance object', this.myVideoPlayer)
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

.img_car {
  width: 100%;
}

.cercc img {
  width: 100%;
}

.back1 {
  color: #f4f4f4;
  font-size: 6rem;
  text-align: center;
  margin-top: -1.3rem;
  font-weight: 600;
}

.back2 {
  display: flex;
  justify-content: center;
  margin-top: -4.3rem;
}

.back2 p {
  font-weight: 600;
  font-size: 2.5rem;
  margin: 0 0.5rem;
  color: red;
}

.back2 p:first-child {
  color: black;
  font-weight: 700;
}

.back2 p:nth-child(2) {
  margin-top: -0.7rem;
}


.pdian {

  width: 4rem;
  height: 0;
  margin: 0 auto;
  border-bottom: 0.2rem solid #ff841e;
  margin-top: 1rem;
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
</style>
