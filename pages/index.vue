<template>
  <div class="carouselcc">

    <!-- pc端 -->
    <div class="cercc" v-if="isMobile">
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


    <!-- 移动 -->
    <div class="cercc" v-else>
      <el-carousel :interval="4000" height="18rem">
        <el-carousel-item class="image-container">
          <img src="../assets/banner1.jpg" alt="汽车托运" class="carousel-image">
        </el-carousel-item>
        <el-carousel-item class="image-container">
          <img src="../assets/banner2.jpg" alt="汽车托运" class="carousel-image">
        </el-carousel-item>
        <el-carousel-item class="image-container">
          <img src="../assets/banner3.jpg" alt="汽车托运" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div>

    <Carousel />
    <Imgs_ser />
  </div>
</template>

<script>
import Carousel from '~/components/carousel.vue';
import Imgs_ser from '~/components/imgs_ser.vue';
export default {
  components: {
    Carousel,
    Imgs_ser
  },


}
</script>

<style scoped>
.cercc {
  width: 100%;
}

.carouselcc {
  margin-top: 6rem;

}

.img_car {
  width: 100%;
}
</style>
