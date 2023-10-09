<template>
    <div class="nav">
        <img src="../../assets/logpinpa.png" alt="">
        <van-form @submit="onSubmit">
            <div class="labSetlect">
                <div class="postd">
                    <van-field readonly clickable is-link required name="come" :value="outcsinfo.come" label="出发地"
                        input-align="right" placeholder="请选择" @click="onAddress" :rules="[{ required: true }]" />
                    <van-popup v-model="showAddress" position="bottom">
                        <van-area title="请选择外出地点" @confirm="changeAddress" :area-list="areaList" columns-num="2"
                            @cancel="showAddress = false" />
                    </van-popup>
                </div>
                <div class="postd">
                    <van-field readonly clickable is-link required name="place" :value="outcsinfo.place" label="终点地"
                        input-align="right" placeholder="请选择" @click="onAddress2" :rules="[{ required: true }]" />
                    <van-popup v-model="showAddress2" position="bottom">
                        <van-area title="请选择外出地点" @confirm="changeAddress2" :area-list="areaList" columns-num="2"
                            @cancel="showAddress2 = false" />
                    </van-popup>
                </div>
                <div class="postd">
                    <van-field v-model="outcsinfo.tel" type="tel" label="手机号" required
                        :rules="[{ required: true, pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' }]"
                        placeholder="请输入手机号" name="tel" />
                </div>
                <div class="postd">
                    <van-field v-model="outcsinfo.cars" label="车型" required :rules="[{ required: true }]"
                        placeholder="请输入车型" name="cars" maxlength="11" />
                </div>
            </div>
            <div class="getUser">
                <van-button square type="info" native-type="submit" size="large"
                    class="custom-button my-button van-button--gradient-blue">立刻询价</van-button>
            </div>

        </van-form>
    </div>
</template>

<script>
import { areaList } from '@vant/area-data';
export default {
    data() {
        return {
            areaList, // 地址
            outcsinfo: {
                place: '',//终点地
                come: '',//出发地
                tel: '',//电话
                cars: ''
            },
            showAddress: false, // 隐藏弹出框
            showAddress2: false, // 隐藏弹出框
        }
    },// data结束
    methods: {
        // 打开地址选择
        onAddress() {
            this.showAddress = true
        },
        onAddress2() {
            this.showAddress2 = true
        },
        // 点击地址选择框的确认
        changeAddress(event) {
            // console.log(event,'返回格式数组')
            this.showAddress = false
            let st = ''
            event.forEach((item) => {
                st = st + item.name
            })
            this.outcsinfo.come = st
        },
        changeAddress2(event) {
            // console.log(event,'返回格式数组')
            this.showAddress2 = false
            let st = ''
            event.forEach((item) => {
                st = st + item.name
            })
            this.outcsinfo.place = st
        },


        onSubmit(values) {
            console.log('submit', values);
        },
    }
}

</script>

<style scoped>
.postd {
    width: 80%;
    margin: 2rem auto;
}

.postd:first-child {
    width: 80%;
    margin-top: 1.5rem;
}

.nav img {
    display: flex;
    width: 45%;
    margin: 0 auto;
    margin-top: 1rem;

}

.van-cell {
    border: 0.1rem solid #e9e9e9;
    border-radius: 1rem;
}

.getUser {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    height: 4rem;

}

.custom-button {
    /* 添加自定义样式 */
    animation: gradientAnimation 1s infinite;
}

.van-button {
    border-radius: 1rem;
}

.van-button--gradient-blue {
    /* 设置按钮为渐变蓝色 */
    background: linear-gradient(to right, #00c6ff, #0072ff);
    color: white;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
