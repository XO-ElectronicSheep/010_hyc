<template>
    <div class="carouselcc">
        <!-- pc端 -->
        <div class="cercc">
            <el-carousel :interval="2000" height="50rem">
                <el-carousel-item>
                    <img src="../../assets/web/banner1.jpg" alt="汽车托运" class="carousel-image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/web/banner2.jpg" alt="汽车托运" class="carousel-image">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../../assets/web/banner3.jpg" alt="汽车托运" class="carousel-image">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {

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


.carousel-image {
    height: 500px !important;
}
</style>
