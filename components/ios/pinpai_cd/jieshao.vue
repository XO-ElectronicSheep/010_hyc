<template>
    <div class="aa">
        <div class="jieshao">
            <div class="item" v-for="item in goods" :key="item.id">
                <div class="i_item">
                    <van-icon :name="item.icon" />
                    <p class="test">{{ item.text }}</p>
                    <p class="text2">{{ item.text2 }}</p>
                    <p class="text2">{{ item.text3 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: ['message', 'tow'],
    data() {
        return {
            goods: [
                {
                    id: 1,
                    icon: 'medal-o',
                    text: '首批',
                    text3: '轿车托运公司之一',
                    text2: '获行业资质的'
                },
                {
                    id: 2,
                    icon: 'location-o',
                    text: '30个',
                    text2: '分公司办事处',
                    text3: '遍布全国'
                },
                {
                    id: 3,
                    icon: 'setting-o',
                    text: '200+',
                    text2: '全国服务站点'
                },
                {
                    id: 4,
                    icon: 'flag-o',
                    text: '3000+',
                    text2: '全国4S店合作'
                },
                {
                    id: 5,
                    icon: 'chart-trending-o',
                    text: '10万',
                    text2: '轿车年发运量'
                },
                {
                    id: 6,
                    icon: 'user-circle-o',
                    text: '500万',
                    text2: '车主口碑信赖'
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
    display: block;
}

.jieshao {
    width: 97%;
    height: 34rem;
    background-color: #f5f5f5;
    border-radius: 2rem;
    margin: auto;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    align-content: center;
}

.van-icon {
    font-size: 4rem;
    color: #dfaa33;
}

.item {
    width: 33%;
    height: 10rem;
}



.item p {
    word-wrap: break-word;
}

.test {
    font-size: 2.5rem;
    font-weight: 600;
    color: red;
}

.text2 {
    font-size: 1.3rem;

}

.item {
    margin: 1rem;
}

.item:nth-child(6),
.item:nth-child(5) {
    margin-top: 0;
    margin-bottom: 0;
}

.item:nth-child(3),
.item:nth-child(4) {
    margin-bottom: 0;
}
</style>
