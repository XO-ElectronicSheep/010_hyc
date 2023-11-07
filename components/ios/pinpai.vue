<template>
    <div class="pinpai  aa" v-if="message">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>视频</p>
        </div>
        <p class="pdian"></p>
    </div>

    <div class="pinpai" v-else-if="tow">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>六大实力体现</p>
        </div>
        <p class="pdian"></p>
        <Jieshao />
    </div>

    <div class="pinpai" v-else-if="san">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>三大贴心服务</p>
        </div>
        <p class="pdian"></p>
        <Top2 />
    </div>

    <div class="pinpai" v-else-if="fuwu">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>服务中心</p>
        </div>
        <p class="pdian"></p>
        <Sctext />
    </div>

    <div class="pinpai" v-else-if="baozhang">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>四大安全保障</p>
        </div>
        <p class="pdian"></p>
        <Baozhangtop />
    </div>


    <div class="pinpai" v-else-if="hetong">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>合同及保险</p>
        </div>
        <p class="pdian"></p>
        <Hetong />
    </div>

    <div class="pinpai" v-else-if="youshi">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>品牌优势</p>
        </div>
        <p class="pdian"></p>
        <Youshi />
    </div>


    <div class="pinpai" v-else-if="jianjie">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>品牌简介</p>
        </div>
        <p class="pdian"></p>
        <Jianjie />
    </div>

    <div class="pinpai" v-else-if="anli">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>托运案例</p>
        </div>
        <p class="pdian"></p>
        <Anli />
    </div>



    <div class="pinpai" v-else-if="banshi">
        <div class="back1">JINBAISHUN</div>
        <div class="back2">
            <p>金百顺运车</p>
            <p></p>
            <p>全国办事处地址</p>
        </div>
        <p class="pdian"></p>
        <div class="footer">
            <div class="telfeng">
                全国统一服务电话-点击拨打： <a href="tel:400-6655-958">400-6655-958</a>
            </div>
            <div>北京公司--北京市顺义区临河开发区南环路与通顺路东南</div>
            <div>广州公司--广东省广州市增城区广百骏盈物流园3层</div>
            <div>海口公司--海南省海口市秀英区南港铁路码头停车场11号</div>
            <div>三亚公司--海南省三亚市吉阳区吉阳大204号逸夫中学东50</div>
            <div> 琼海公司--海南省琼海市新海路机动车辆检测中心对面</div>
            <div>东莞公司--广东省东莞市沙田镇银通路31号</div>
            <div>深圳公司--广东省深圳市南山区光前工业区桃源二手车交易中心</div>
            <div>哈市公司--黑龙江哈尔滨市香坊区学府东路一号龙运物流园</div>
            <div>长春公司--吉林省长春市绿园区长沈路金百顺停车场</div>
            <div>沈阳公司--大东区沈阳东收费站东北（沈吉高速公路北）</div>
            <div>大连公司--金州区大窑湾</div>
            <div>成都公司--龙泉驿区车城西三路</div>
            <div>上海公司--嘉定区园工路103号（西上海物流）</div>
            <div>天津公司--滨海新区天威工业园（青年汇华中路东）</div>
            <div>拉萨公司--城关区金珠西路与农科路交口南20米</div>
            <div>昆明公司--官渡区金马路铁公鸡钢铁物流港</div>
            <div>南宁公司--西乡塘区S5101（广西高峰农业物流市场）</div>
            <div> 杭州公司--拱墅区冯家塘</div>
            <div>南京公司--江宁区诚信大道长水街（停车场）</div>
            <div>太原公司--迎泽区万山沟</div>
            <div>青岛公司--李沧区四流中路8号</div>
            <div>乌鲁木齐--头屯河区海棠路</div>
            <div>呼和浩特--回民区G110（中泰物流园）</div>
        </div>



    </div>
</template>

<script>
import Jieshao from './pinpai_cd/jieshao.vue'
import Top2 from './pinpai_cd/top2.vue'
import Sctext from './pinpai_cd/sctext.vue'
import Baozhangtop from './pinpai_cd/baozhangtop.vue'
import Anli from './pinpai_cd/anli.vue'
import Hetong from './pinpai_cd/hetong.vue'
import Youshi from './pinpai_cd/youshi.vue'
import Jianjie from './pinpai_cd/jianjie.vue'
export default {
    components: {
        Jieshao,
        Top2,
        Sctext,
        Baozhangtop,
        Hetong,
        Youshi,
        Jianjie,
        Anli
    },
    props: ['message', 'tow', 'san', 'fuwu', 'baozhang', 'hetong', 'youshi', 'jianjie', 'banshi', 'anli'],

    mounted() {
        // console.log(this.message)
    }
};

</script>

<style scoped>
.aa {
    margin-top: 2rem;
}

.pinpai {
    width: 100%;
    height: auto;
}

.back1 {
    color: #f4f4f4;
    font-size: 6rem;
    text-align: center;

    font-weight: 600;
}

.back2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -4.3rem;

}

.back2 p {
    font-weight: 600;
    font-size: 2.5rem;
    margin: 0 0.5rem;
    color: red;
}

.back2 p:first-child {
    color: black;
    font-weight: 700;
}

.back2 p:nth-child(2) {
    height: 0.5rem;
    width: 0.5rem;
    background-color: red;
    border-radius: 50%;

}


.pdian {
    width: 4rem;
    height: 0;
    margin: 0 auto;
    border-bottom: 0.2rem solid #ff841e;
    margin-top: 1rem;
}

.footer {
    font-size: 1.4rem;
}

.telfeng {
    font-size: 1.8rem;
}

a {
    text-decoration: none;
    color: red;
}
</style>
