<template>
    <div class="aanav">
        <div class="duon">
            <div class="dd-c">
                多年专注运车
            </div>
            <div class="dd-c">
                打磨标准化流程
            </div>
            <div class="dd-c">
                您的轿车托运贴心管家
            </div>
        </div>
        <div class="liucheng">
            <div class="icon1">
                <div class="icon12" v-for="item in goods1" :key="item.id">
                    <van-icon :name="item.icon" />
                </div>
            </div>
            <div class="text1">
                <div class="text12" v-for="item in text1" :key="item.id">
                    {{ item.text }}
                </div>
            </div>
            <div class="text2">
                <div class="text23" v-for="item in text2" :key="item.id">
                    {{ item.text2 }}
                </div>
            </div>
            <div class="icon2">
                <div class="icon12" v-for="item in goods2" :key="item.id">
                    <van-icon :name="item.icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goods1: [
                {
                    id: 1,
                    icon: 'location-o',
                },
                {
                    id: 2,
                    icon: 'setting-o',
                },
                {
                    id: 3,
                    icon: 'edit',
                },
                {
                    id: 4,
                    icon: 'manager-o',
                },

            ],
            text1: [
                {
                    id: 1,
                    text: '01、确认交车地点'
                },
                {
                    id: 2,
                    text: '03、检验车辆，双方确认'
                },
                {
                    id: 3,
                    text: '05、购买商业保险'
                },
                {
                    id: 4,
                    text: '07、车辆到达目的地，司机与收车人联系，并核实身份信息'
                },

            ],
            text2: [
                {
                    id: 1,
                    text2: '02、随性车辆合法证件，行驶证复印件，钥匙'
                },
                {
                    id: 2,
                    text2: '04、签订运输协定'
                },
                {
                    id: 3,
                    text2: '06、专业四级进行装车'
                },
                {
                    id: 4,
                    text2: '08、完成运输、支付运费给司机，完成运输'
                },

            ],
            goods2: [
                {
                    id: 1,
                    icon: 'coupon-o',
                },
                {
                    id: 2,
                    icon: 'notes-o',
                },
                {
                    id: 3,
                    icon: 'friends-o',
                },
                {
                    id: 4,
                    icon: 'passed',
                },

            ],
        }
    },

}
</script>

<style scoped>
.duon {
    width: 100%;
    z-index: 999;

    /* display: flex;
    flex-wrap: wrap; */
    margin-top: 3rem;
    justify-content: space-evenly;

    text-align: center;
}

.dd-c {
    font-size: 2.6rem;
    font-weight: 700;
    margin: 1rem;
}

.dd-c:last-child {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 1rem;
    color: #e25041;
}


.liucheng {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30rem;
}

.icon12 {
    width: 5rem;
    height: 5rem;
    font-size: 4rem;
    line-height: 5rem;
    text-align: center;
    border-radius: 1.3rem;
    background: linear-gradient(to right, #8feee3, #6ee5e6);
    color: white;
    margin-top: 1.5rem;
}

.icon12:nth-child(2) {

    background: linear-gradient(to right, #3bc79f, #19b988);

}

.icon12:nth-child(3) {

    background: linear-gradient(to right, #9d7ef6, #8f6cef);

}

.icon12:nth-child(4) {
    background: linear-gradient(to right, #ff88aa, #fe6988);

}

.icon2 .icon12:nth-child(1) {
    background: linear-gradient(to right, #ffe101, #ffd700);

}

.icon2 .icon12:nth-child(2) {
    background: linear-gradient(to right, #10bffb, #3ea5f4);

}

.icon2 .icon12:nth-child(3) {
    background: linear-gradient(to right, #fed31b, #f7b420);

}

.icon2 .icon12:nth-child(4) {
    background: linear-gradient(to right, #c8f176, #9fdc5d);

}

.icon2 {
    margin-top: 4rem;
}

.text1,
.text2 {
    width: 35%;
}

.text12 {
    border-bottom: 0.1rem solid #e3dcdc;
    border-right: 0.1rem solid #e3dcdc;
    margin-top: 4rem;
}

.text23 {
    border-bottom: 0.1rem solid #e3dcdc;
    border-left: 0.1rem solid #e3dcdc;
    margin-top: 5rem;
}
</style>
