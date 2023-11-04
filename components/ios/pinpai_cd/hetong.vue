<template>
    <div class="aa">
        <img src="../../../assets/ios/20231101153720.jpg" alt="汽车托运">
        <div class="null-a"></div>
        <div class="cbd">
            <div>
                专业保障
            </div>
            <div>
                为您的爱车护航
            </div>
            <p></p>
        </div>
        <div class="jieshao">
            <div class="item" v-for="item in goods" :key="item.id">
                <van-icon :name="item.icon" />
                <p class="test2">{{ item.text }}</p>
                <p class="test3">{{ item.text1 }}</p>
            </div>
            <div>
                因为专注/所以专业
            </div>
            <div>
                全国服务热线：400-678-2880
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
                    icon: 'logistics',
                    text: '汽车托运',
                    text1: '独立保险',
                }, {
                    id: 2,
                    icon: 'newspaper-o',
                    text: '正规合同',
                    text1: '一式两份',
                }, {
                    id: 3,
                    icon: 'good-job-o',
                    text: '专业托运',
                    text1: '老牌信赖',
                },

            ]
        }
    },
    mounted() {

    }
};

</script>

<style scoped>
.aa {
    width: 100%;
    margin-top: 3rem;
    position: relative;
    height: 26rem;
}

.aa img {
    width: 60%;
    height: 20rem;
    position: absolute;
    top: 3rem;
    left: 1rem;
    z-index: 2;
}

.null-a {
    border: 0.1rem solid #ff9e48;
    position: absolute;
    width: 60%;
    height: 20rem;
    top: 2rem;
    left: 4rem;
    z-index: 1;
}

.cbd {
    position: absolute;
    top: 5rem;
    right: 3rem;
    font-size: 1.5rem;
    background-color: white;
    z-index: 2;
}

.cbd p {
    width: 4rem;
    border-bottom: 0.3rem solid orange;
}

.jieshao {
    width: 50%;
    background-color: #f74343;
    position: absolute;
    z-index: 4;
    right: 2%;
    top: 12rem;
    color: white;
    height: 15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.item {
    margin-top: 1rem;
    font-size: 1.3rem;
    text-align: center;
}

.van-icon {
    font-size: 5rem;
}
</style>
