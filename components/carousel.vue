<template>
    <div class="carouselcc">
        <el-carousel :interval="4000" height="460px">

            <el-carousel-item>
                <img src="../assets/banner1.jpg" alt="汽车托运">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/banner2.jpg" alt="汽车托运">
            </el-carousel-item>
            <el-carousel-item>
                <img src="../assets/banner3.jpg" alt="汽车托运">
            </el-carousel-item>
        </el-carousel>

        <div class="moeay">
            <div class="getwen">
                <div class="topc">算一算专业托运轿车需要多少钱？</div>
                <div class="getuser">
                    1111
                </div>
            </div>
        </div>

        <div class="moeay">
            <div class="getwen">
                <div class="topc">算一算专业托运轿车需要多少钱？</div>
                <div class="getuser">
                    1111
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    components: {

    }

}
</script>

<style scoped>
.carouselcc {
    margin-top: 6rem;

}

.img_car {
    width: 100%;
}

.moeay {
    display: flex;
    justify-content: space-around;
    height: 230px;
}

.getwen {
    margin-top: 20px;
    width: 70%;
    border: 1px solid rgb(192, 192, 192);
    background-color: white;
    text-align: center;
}

.topc {
    margin-top: 10px;
    font-size: 30px;
    color: rgb(66, 66, 66);
}

.getuser {
    width: 90%;
    margin: 0 auto;
    height: 60px;
    margin-top: 10px;
    border: 3px solid red;
}
</style>
