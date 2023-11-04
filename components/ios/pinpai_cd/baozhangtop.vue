<template>
    <div class="aa">
        <div class="jieshao">
            <div class="item" v-for="item in goods" :key="item.id">
                <p class="test">{{ item.num }}</p>
                <p class="test2">{{ item.text }}</p>
                <p class="test3">{{ item.text1 }}</p>
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
                    num: '01',
                    text: '专业/安全保证',
                    text1: '获得行业资质，把用户担心的问题放到第一位，确保轿车安全抵达'
                },
                {
                    id: 2,
                    num: '02',
                    text: '专长/全国运输',
                    text1: '广州、深圳、上海、北京、成都、海口等城市开设分公司办事处30个，可提供10万辆运送仓储'
                },
                {
                    id: 3,
                    num: '03',
                    text: '专一/全程保险',
                    text1: '保险公司指定轿车托运投保点，为您的爱车全程护航，确保轿车无忧托运，安全托运'
                },
                {
                    id: 4,
                    num: '04',
                    text: '专心/一对一服务',
                    text1: '从提供咨询、托运跟踪到后续服务，提供一对一的管家式服务，安心、放心、省心和贴心'
                }
            ]
        }
    }
};

</script>

<style scoped>
.aa {
    margin-top: 2rem;
    margin-bottom: 4rem;
}

.jieshao {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.item {
    width: 45%;
}

.test {
    text-align: center;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 3.5rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(to right, #f10000, #a90201);
    margin: 0 auto;
}

p {
    text-align: center;
}

.test2 {
    margin-top: 0.6rem;
    color: red;
    font-size: 1.5rem;
    border-bottom: 0.1rem solid #d9d9d9;
    font-weight: 600;
}


.test3 {
    margin-top: 1rem;
    font-size: 1.3rem;

}

.item:nth-child(3),
.item:nth-child(4) {
    margin-top: 1rem;
}
</style>
