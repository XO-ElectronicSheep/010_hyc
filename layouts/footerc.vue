<template>
    <div v-if="isMobile">
        <div class="demo-image">
            <img src="../assets/6.png" alt="汽车托运">
            <div class="block-v">
                <div class="winxin">微信联系一对一客服 <i class="el-icon-thumb"></i></div>
                <div class="block" v-for="item in url" :key="item">
                    <el-image style="width: 80px; height: 80px" :src="item" fit="fit"></el-image>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="yidong-d">
        <div>
            <i class="el-icon-truck i-iocn"></i>
            <i>运车保障</i>
        </div>
        <div>
            <i class="el-icon-phone-outline i-iocn"></i>
            <i>电话咨询</i>
        </div>
        <div>
            <i class="el-icon-chat-dot-round i-iocn"></i>
            <i>微信咨询</i>
        </div>
        <div>
            <i class="el-icon-files i-iocn"></i>
            <i>运车案例</i>
        </div>
        <div>
            <i class="el-icon-star-off i-iocn"></i>
            <i>私家车托运</i>
        </div>
    </div>
</template>
  
  
<script>
export default {
    data() {
        return {
            fits: ['fill'],
            url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']
        }
    }
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

.yidong-d {
    width: 100%;
    height: 6rem;
    background-color: #d50618;
    color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 9;
}

.yidong-d div {
    flex-grow: 1;
    border-right: 0.1rem solid white;
    display: flex;
    flex-wrap: wrap;
}




.yidong-d div i {
    flex: 0 0 auto;
    /* 可选，用于控制元素的宽度 */
    width: 100%;
    /* 可选，用于控制元素的宽度 */

    font-size: 1.3rem;
    text-align: center;
    font-style: normal;
}

.i-iocn {
    font-size: 2.3rem !important;
    margin-top: 0.5rem;

}

.yidong-d div:last-child {

    border-right: none;
}
</style>
  