<template>
    <div class="nav">
        <img src="../../assets/20231030105704.png" alt="轿车托运">
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
                        placeholder="请输入手机号" name="tel" maxlength="11" />
                </div>
                <div class="postd">
                    <van-field v-model="outcsinfo.cars" label="车型" required :rules="[{ required: true }]"
                        placeholder="请输入车型" name="cars" />
                </div>
            </div>
            <div class="getUser">
                <van-button square type="info" native-type="submit" size="large"
                    class="twinkle my-button van-button--gradient-blue">立刻询价</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import { areaList } from '@vant/area-data';
import { Toast } from 'vant';
import axios from 'axios';
export default {
    data() {
        return {
            areaList, // 地址
            outcsinfo: {
                webname: '金百顺',
                place: '',
                come: '',
                tel: '',
                cars: '',
                isUsers: '1',
                return_visit_information: '移动端'
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
        async onSubmit(values) {
            Toast.success({ message: '    提交成功      稍后客服将联系您' });
            const response = await axios.get('http://124.220.23.104:3002/api/saveData', {
                params: {
                    ...this.outcsinfo
                }
            });
            this.outcsinfo.place = ''
            this.outcsinfo.come = ''
            this.outcsinfo.tel = ''
            this.outcsinfo.cars = ''
        },
    }
}

</script>

<style scoped>
.nav {
    width: 100%;
    height: 42rem;
}

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
    width: 60%;
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



.van-button {
    border-radius: 1rem;
}

.van-button--gradient-blue {
    /* 设置按钮为渐变蓝色 */
    background: linear-gradient(to right, #00c6ff, #0072ff);
    color: white;
}
</style>
