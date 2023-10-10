<template>
    <div class="aa">
        <div class="jieshao">
            <div class="item" v-for="item in goods" :key="item.id">
                <div class="i_item">
                    <p class="text">{{ item.text }}</p>
                    <p class="text2">{{ item.text2 }}</p>
                </div>
                <p class="text3">{{ item.text3 }}</p>
            </div>
        </div>
        <div class="navf">
            <div class="toptow" v-for="item in top2c" :key="item.id">
                <img :src="item.img" alt="">
                <div class="texttop">
                    <div class="fista">{{ item.name }}</div>
                    <div class="dddd">
                        <span class="towb">{{ item.name2 }}</span>
                        <span class="lastc">{{ item.name3 }}</span>
                    </div>
                </div>
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
                    text: '01',
                    text2: '更安全',
                    text3: '独立保险/无忧托运'
                },
                {
                    id: 2,
                    text: '02',
                    text2: '更高效',
                    text3: '运输路线/辐射全国'
                },
                {
                    id: 3,
                    text: '03',
                    text2: '更贴心',
                    text3: '托运合同/资质齐全'
                }
            ],
            top2c: [
                {
                    id: 1,
                    name: '私家车托运',
                    name2: '更高效/更安全/更贴心',

                    img: require('../../../assets/banner2.jpg')
                },
                {
                    id: 2,
                    name: '单台托运',
                    name2: '尊车爱车，',
                    name3: '用心呵护所托',
                    img: require('../../../assets/banner2.jpg')
                },
            ]
        }
    },
    mounted() {

    }
};

</script>

<style scoped>
.jieshao {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 6rem;
}

.i_item {
    display: flex;
    height: 2rem;
    border: 0.1rem solid orange;
    width: 10rem;
    margin: 1rem;
    text-align: center;
}

p {
    height: 2rem;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
}

p:first-child {
    color: white;
    background-color: red;
}

p:nth-child(2) {
    font-size: 1.5rem;
    width: 100%;
    color: red;
}

.item .text3 {
    font-size: 1.3rem;
    width: 100%;
    color: black;
}


.navf {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
}

.toptow {
    width: 45%;
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: 5px 5px 10px #e5e5e5;
    height: 100%;
}

.toptow img {
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
}

.fista {
    font-size: 1.5rem;
    font-weight: 600;
}

.lastc,
.towb {
    color: red;
    font-size: 1.3rem;
}

.dddd {
    margin-bottom: 1rem;
}
</style>
