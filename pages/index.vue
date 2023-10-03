<template>
  <div class="carouselcc">

    <!-- pc端 -->
    <div class="cercc" v-if="isMobile">
      <el-carousel :interval="4000" height="46rem">
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


    <div class="moeay">

      <div class="topc">算一算专业托运轿车需要多少钱？</div>

      <div class="getwen">
        <div class="cat-select">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>

      </div>
    </div>


  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      options: [{
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },


}
</script>

<style scoped>
.carouselcc {
  margin-top: 6rem;

}

.img_car {
  width: 100%;
}



.image-container {
  border-radius: 3rem;
  border: 1px;
}
</style>
