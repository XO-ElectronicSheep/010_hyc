<template>
    <div class="pinpai" v-if="message">
        <div class="back1">HAOYUNCHE</div>
        <div class="back2">
            <p>中振品牌</p>
            <p></p>
            <p>视频</p>
        </div>
        <p class="pdian"></p>
    </div>

    <div class="pinpai" v-else-if="tow">
        <div class="back1">HAOYUNCHE</div>
        <div class="back2">
            <p>中振品牌</p>
            <p></p>
            <p>六大实力体现</p>
        </div>
        <p class="pdian"></p>
        <Jieshao />
    </div>

    <div class="pinpai" v-else-if="san">
        <div class="back1">HAOYUNCHE</div>
        <div class="back2">
            <p>中振品牌</p>
            <p></p>
            <p>三大贴心服务</p>
        </div>
        <p class="pdian"></p>
        <Top2 />
    </div>


    <div class="pinpai" v-else-if="fuwu">
        <div class="back1">HAOYUNCHE</div>
        <div class="back2">
            <p>中振品牌</p>
            <p></p>
            <p>服务中心</p>
        </div>
        <p class="pdian"></p>

    </div>
</template>

<script>
import Jieshao from '~/components/ios/pinpai_cd/jieshao.vue'
import Top2 from '~/components/ios/pinpai_cd/top2.vue'
export default {
    components: {
        Jieshao,
        Top2
    },
    props: ['message', 'tow', 'san', 'fuwu'],

    mounted() {
        // console.log(this.message)
    }
};

</script>

<style scoped>
.pinpai {
    width: 100%;
    height: auto;
}

.back1 {
    color: #f4f4f4;
    font-size: 6rem;
    text-align: center;

    font-weight: 600;
}

.back2 {
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 0.5rem;
    width: 0.5rem;
    background-color: red;
    border-radius: 50%;

}


.pdian {

    width: 4rem;
    height: 0;
    margin: 0 auto;
    border-bottom: 0.2rem solid #ff841e;
    margin-top: 1rem;
}
</style>
