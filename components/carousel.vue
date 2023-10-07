<template>
    <div class="moeay" v-if="isMobile">
        <div class="topc">立刻获取 &nbsp; <p>轿车托运报价</p>
        </div>
        <div class="getwen">
            <div class="cars">
                <el-cascader size="large" :options="options" v-model="value" @change="cars" placeholder="选填/车型选择">
                </el-cascader>
            </div>
            <div class="app">
                <el-cascader size="large" :options="pcTextArr" v-model="selectedOptions" @change="handleChange_start"
                    placeholder="选填/出发地选择">
                </el-cascader>
            </div>
            <div class="app">
                <el-cascader size="large" :options="pcTextArr" v-model="endOptions" @change="handleChange_end"
                    placeholder="选填/终点地选择">
                </el-cascader>
            </div>
            <div class="telip">
                <el-form ref="phoneForm" :model="formData" :rules="formRules" class="el-form-ios">
                    <el-form-item prop="phone">
                        <el-input v-model="formData.phone" placeholder="必填/请输入手机号" maxlength="11" size="large"></el-input>
                    </el-form-item>
                    <el-form-item class="button-pc">
                        <el-button type="danger" @click="submitForm">点击获取报价</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="getwen-3">

            <div class="headerg">
                <img src="../assets/logpinpa.png" alt="好运车">
            </div>
            <div class="app-1">
                <div>车型</div>
                <el-cascader size="large" :options="options" v-model="value" @change="cars" placeholder="车型选择">
                </el-cascader>
            </div>
            <div class="app-1">
                <div>出发地</div>
                <el-cascader size="large" :options="pcTextArr" v-model="selectedOptions" @change="handleChange_start"
                    placeholder="出发地选择">
                </el-cascader>
            </div>
            <div class="app-1">
                <div>终点地</div>
                <el-cascader size="large" :options="pcTextArr" v-model="endOptions" @change="handleChange_end"
                    placeholder="终点地选择">
                </el-cascader>
            </div>
            <div class="telip-2">
                <el-form ref="phoneForm" :model="formData" :rules="formRules">
                    <el-form-item prop="phone">
                        <div>手机号</div>
                        <el-input v-model="formData.phone" placeholder="请输入手机号" maxlength="11" size="large"></el-input>
                    </el-form-item>
                    <el-form-item class="button-pc-1">
                        <el-button type="primary" @click="submitForm">点击获取报价</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { pcTextArr } from 'element-china-area-data'
export default {
    data() {
        return {
            pcTextArr,
            selectedOptions: [],
            endOptions: [],
            con: {
                title: '网站留言',
                cars_size: '',
                start_city: "",
                end_city: "",
                mobile: 0
            },
            options: [{
                value: '轿车',
                label: '轿车'
            }, {
                value: 'MPV',
                label: 'MPV'
            }, {
                value: 'SUV',
                label: 'SUV'
            }, {
                value: '跑车',
                label: '跑车'
            }, {
                value: '面包车',
                label: '面包车'
            }, {
                value: '皮卡',
                label: '皮卡'
            }, {
                value: '其他',
                label: '其他'
            }
            ],
            value: '',
            select: '',
            formData: {
                phone: ''
            },
            formRules: {
                phone: [
                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (!/^1[0-9]{10}$/.test(value)) {
                                callback(new Error('请输入有效的手机号码'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur'
                    }
                ]
            },
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    methods: {
        handleChange_start(value1) {
            this.con.start_city = value1[value1.length - 1]
            console.log(this.con)
            console.log(pcTextArr)
        },
        handleChange_end(value2) {
            this.con.end_city = value2[value2.length - 1]
            console.log(this.con)
        },
        cars(value3) {
            this.con.cars_size = value3[0]
        },
        submitForm() {
            this.$refs.phoneForm.validate((valid) => {
                if (valid) {
                    // 手机号码验证通过
                    // 在此处添加逻辑来处理验证通过后的操作，例如提交表单或其他操作
                    // ...
                    this.con.mobile = this.formData.phone
                    console.log(this.con)
                    // 清空输入框
                    this.selectedOptions = []
                    this.endOptions = []
                    this.value = ''
                    this.formData.phone = '';
                    this.$alert('一对一客服将在30分钟内联系您', '提交成功', {
                        confirmButtonText: '确定',
                        type: 'success',
                        center: true
                    });

                }

            });
        }

    }
}
</script>

<style scoped>
.moeay {
    display: flex;
    width: 100%;
    /*   border: 0.1rem solid rgb(207, 207, 207); */
    margin: 1rem auto;
    height: 20rem;
    flex-wrap: wrap;
    background-color: #ffffff88;
    /*  box-shadow: -10px 5px 5px #a5a5a5; */
    border-radius: 1rem;
}



.topc .getwen {
    flex-basis: 100%;
}

.topc {
    width: 100%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.topc p {
    color: red;
    font-weight: bold;
}

.getwen div {
    height: 4rem;
    margin: auto 1rem;
}

.getwen {
    display: flex;
    /* border: 0.2rem solid rgb(175, 175, 175); */
    width: 95%;
    height: 12rem;
    margin: 0 auto;
    box-shadow: -5px 8px 3px #c7c7c7;
    /* align-items: center; */
    justify-content: center;
    border-radius: 1rem;
    background-color: white;
    border-top: 0.1rem solid #c7c7c7;
    border-right: 0.1rem solid #c7c7c7;
    border-left: 0.1rem solid #c7c7c7;
}



.el-form-ios {
    display: flex;
    align-items: center;
}

.button-pc {
    margin-left: 2rem !important;
}

/* .el-select .el-input .el-cascader {
    width: 100% !important;
}

.el-input {
    border: none !important;
} */

div a {
    text-decoration: none;
    color: black;
}

.yonghu {
    width: 95%;
    margin: 1rem auto;
}


.ios-form-item {
    width: 80%;
    margin: 0 auto;
}

.headerg {
    width: 80%;
    text-align: center;
    margin: 0.8rem auto;
}



.el-input {
    margin-bottom: 0 !important;
}

.app-1 {
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
}

.app-1 div:first-child {
    line-height: 3.5rem;
    width: 10%;
    font-size: 1.3rem;
    margin-right: 1rem;
}
</style>
