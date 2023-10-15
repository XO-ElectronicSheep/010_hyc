<template>
    <div class="footer2">
        <div class="dd">
            <div class="cc">
                <div class="icon" @click="showPopup">
                    <van-icon name="balance-list-o" />
                    <div>获取报价</div>
                </div>
            </div>
            <!-- <div class="cc">
                <div class="icon">
                    <van-icon name="comment-o" />
                    <div>在线咨询</div>
                </div>
            </div> -->
            <div class="cc">
                <div class="icon">
                    <van-icon name="chat-o" @click="showWinxin" />
                    <div>添加微信</div>
                </div>
            </div>
        </div>
        <a :href="'tel:' + phoneNumber"> <van-button round type="info" block class="telacc"> 免费拨打电话</van-button></a>
        <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
            <Footerlab />
        </van-popup>

        <van-popup v-model="wxShow" :style="{ height: '26rem', width: '30rem' }">
            <div class="ppo">
                <div class="navpop">
                    复制官方微信号，快速获取运价！
                </div>
                <div class="weixin">微信号:haoyunche</div>
                <div class="butncc">
                    <van-button class="btnd" type="primary" @click="copyAndOpenWeChat">复制微信号</van-button>
                </div>

            </div>
        </van-popup>
    </div>
</template>

<script scoped>
import ClipboardJS from 'clipboard'
import Footerlab from './footerlab.vue';
export default {
    components: {
        Footerlab
    },
    data() {
        return {
            phoneNumber: '111-1111-111',
            show: false,
            wxShow: false
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        showWinxin() {
            this.wxShow = true;
        },
        copyAndOpenWeChat() {
            // 复制微信号
            const wechatId = 'haoyunche'
            const clipboard = new ClipboardJS('.copy-button', {
                text: () => wechatId
            })

            // 打开微信
            const wechatUrl = 'weixin://'
            window.location.href = wechatUrl

            // 销毁clipboard实例
            clipboard.destroy()
        }
    },

}

</script>

<style scoped>
.van-popup {
    border-radius: 2rem;
}

.ppo {
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
}

.navpop {
    font-size: 2rem;
    font-weight: 700;

}

.butncc {
    width: 50%;
    margin: auto;
}

.btnd {
    width: 100% !important;
    background-color: #1aad17 !important;
    color: white !important;
    border-radius: 1rem;
    margin: auto !important;
}

.weixin {
    height: 6.5rem;
    background-color: #f7f7f7;
    color: #666;
    border-radius: 2rem;
    line-height: 6.5rem;
    text-align: center;
    font-size: 2rem;
    margin: 2rem auto;
}

a:link {
    width: 40%;
    font-size: 1.6rem;
    text-decoration: none;
    color: #fb3c3b;
}

.footer2 {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 6rem;
    background-color: orange;
    position: fixed;
    background: linear-gradient(to right, rgb(250, 180, 87), rgb(252, 86, 86));
    bottom: 0;
    z-index: 999;
}

.cc {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;

}

.icon {
    text-align: center;
    height: 3rem;
    color: aliceblue;


}

.iconc {
    width: 45%;
    margin: auto;
}

.telacc {
    width: 100%;
    background: linear-gradient(to right, rgb(255, 224, 184), rgb(255, 204, 93)) !important;
    border: none;
    color: red;
    font-weight: 700;
}

/* .buttons{
    line-height: 5rem;
} */

.dd {
    display: flex;
    width: 55%;
    justify-content: space-evenly;
}

.van-icon {
    font-size: 1.5rem;
}
</style>
