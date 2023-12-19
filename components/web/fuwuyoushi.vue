<template>
    <div class="acc">
        <div class="fuyouyoushi">
            服务优势 Consignment process
        </div>
        <div class="sdssdssd">
            <div class="dfsss">
                <div class="claaass">
                    <img src="../../assets/web/jingyan.jpg" alt="多年托运经验" class="asdd">
                    <div class="sdsd">01</div>
                    <div class="tkto">多年托运经验</div>
                    <div class="pinpai">品牌源于2008年</div>
                    <div class="zhuanzhu">专注轿车托运！</div>
                </div>
            </div>
            <div class="dfsss">
                <div class="claaass">
                    <img src="../../assets/web/ydy.jpg" alt="专属客服" class="asdd">
                    <div class="sdsd">02</div>
                    <div class="tkto">专属客服</div>
                    <div class="pinpai">客服一对一服务，</div>
                    <div class="zhuanzhu">实时解答运车疑问</div>
                </div>
            </div>
            <div class="dfsss">
                <div class="claaass">
                    <img src="../../assets/web/tisong.jpg" alt="上门提送" class="asdd">
                    <div class="sdsd">03</div>
                    <div class="tkto">上门提送</div>
                    <div class="pinpai">上门提车，送车上门</div>
                    <div class="zhuanzhu">省时、省心、省事！</div>
                </div>
            </div>
            <div class="dfsss">
                <div class="claaass">
                    <img src="../../assets/web/baoxian.jpg" alt="电子合同" class="asdd">
                    <div class="sdsd">04</div>
                    <div class="tkto">电子合同</div>
                    <div class="pinpai">轿车托运公众号</div>
                    <div class="zhuanzhu">随时随地查看合同</div>
                </div>
            </div>
            <div class="dfsss">
                <div class="claaass">
                    <img src="../../assets/web/wangdian.jpg" alt="订单追踪" class="asdd">
                    <div class="sdsd">05</div>
                    <div class="tkto">订单追踪</div>
                    <div class="pinpai">自带北斗系统</div>
                    <div class="zhuanzhu">随时查看车辆状态</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },

}
</script>
<style scoped>
.fuyouyoushi {
    color: #999;
    font-size: 2rem;
    margin-top: 1rem;
    text-align: center;
}

.sdssdssd {
    display: flex;
    width: 85%;
    margin: auto;
}

.acc {
    width: 80%;
    margin: auto;
    margin-top: 5rem;
}

.dfsss {
    margin-top: 2rem;
    margin-right: 2rem;
}

.claaass {
    width: 24rem;
    border: 0.1rem solid #e8e8e8;
    border-top: 0.5rem solid red;
    height: 28rem;
}

.sdsd {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    border-radius: 50%;
    border: 0.5rem solid white;
    background-color: red;
    color: white;
    text-align: center;
    line-height: 3rem;
    margin-top: -2rem;
    position: relative;
    margin-left: 10rem;
    z-index: 1;
}

.pinpai,
.zhuanzhu {
    color: #666666;
    text-align: center;
    margin-top: 2rem;
    font-size: 1.5rem;

}

.zhuanzhu {
    color: #666666;
}

.tkto {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
}
</style>
