<template>
    <div>
        <div class="demo-image">
            <img src="../../assets/web/6.png" alt="汽车托运">
            <div class="block-v">
                <div class="winxin">微信联系一对一客服,立刻获取报价 <i class="el-icon-thumb"></i></div>
                <div class="block" v-for="item in url" :key="item">
                    <el-image style="width: 8rem; height: 8rem" :src="item" fit="fit"></el-image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fits: ['fill'],
            url: [require('../../assets/web/erweima/1.png'), require('../../assets/web/erweima/2.png')],
        }
    },
}
</script>
<style scoped>
.demo-image {
    position: fixed;
    bottom: 0;
    background-color: rgba(90, 90, 90, 0.753);
    height: 10rem;
    z-index: 9;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.demo-image img {
    height: 8rem;
    margin-top: 0.5rem;
}

.block-v {
    display: flex;
    width: 50rem;
    justify-content: space-around;
    /* margin-top: 1rem; */

}

.winxin {
    height: 8rem;
    line-height: 8rem;
    color: rgb(255, 3, 3);
    font-size: 2rem;
    font-weight: 600;
}

.el-icon-thumb {
    transform: rotate(90deg);
}

.el-image:last-child {
    margin-right: 1rem;
}
</style>
