<template>
    <div class="tuoyun">
        <div class="leixin">
            托运车型
        </div>
        <div class="jiusix">
            <div class="cars" v-for="item in flexData" :key="item.id">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            flexData: [
                {
                    id: 1,
                    name: '微型车'
                }, {
                    id: 2,
                    name: '跑车'
                }, {
                    id: 3,
                    name: '小型车'
                }, {
                    id: 4,
                    name: '中型车'
                }, {
                    id: 5,
                    name: 'MPV车'
                }, {
                    id: 6,
                    name: 'SUV车'
                }, {
                    id: 7,
                    name: '面包车'
                }, {
                    id: 8,
                    name: '皮卡车'
                }, {
                    id: 9,
                    name: '其他车型'
                },

            ]
        }
    },

}
</script>

<style scoped>
.tuoyun {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 2rem;
    width: 95%;

}

.leixin {
    width: 100%;
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
}

.jiusix {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;

}

.cars {
    width: 30%;
    height: 5rem;
    background-color: #148acf;
    border-radius: 1rem;
    color: white;
    text-align: center;
    line-height: 5rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
}
</style>
