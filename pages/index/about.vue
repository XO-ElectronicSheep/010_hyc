<template>
    <div>
        <carousela />
        <div class="goods">
            <h1 class="nav">〖我们只运车，不发货〗</h1>
            <div class="asdd">
                <p>运好车轿车托运（隶属于北京运好运输有限公司），公司是商品车运输服务商、私家车托运服务商，致力打造中国领先的商品车托运、私家车托运服务企业。是广汽丰田、本田、日产、传奇、上海通用、北京现代、一汽大众等主机厂物流供应商，在全国大中城市拥有办事处，各大城市均可以到达。您只需一个电话,我们的服务队伍将快速地为您上门服务。
                </p>
                <p>我们轿车托运的八大优势</p>
                <p>【上门取车】本公司接到客户委托后一小时内安排相关人员，上门取车 !</p>
                <p>【方便快捷】只需一个电话！一切帮您搞定，人在家中，车走全国。</p>
                <p>【安全无忧】严格遵照公司要求、每台车辆进行购买运输保险 !</p>
                <p>【速度时效】每天准时发车！全程GPS定位，安全快捷。</p>
                <p>【专属客服】客服实时在线！每单业务均有专属客服人员。</p>
                <p>【安排装车】所有车辆均当天装车、当天发车 !</p>
                <p>【到达派送】车辆到达之后立即通报收车人取车、也可以送车上门 !</p>
                <p>【付款灵活】可以车到付款！长期运车可签月结承运合同。</p>
                <p>我们坚信只有专业才能立足，只有真诚才有客户，只有奉献才能发展。</p>
                <p>我们相信专业的团队、精诚合作是企业宝贵的财富。</p>
            </div>
            <div class="pinpai">
                <div class="p1">
                    <p>2008</p>
                    <div>品牌源于2008年</div>
                </div>
                <div class="p1">
                    <p>13</p>
                    <div>多年安全运输经验</div>
                </div>
                <div class="p1">
                    <p>300+</p>
                    <div>中国服务城市</div>
                </div>
            </div>
            <div class="wenhua">
                <div class="wenhua2">
                    <div class="yewenhua1">
                        <div class="ywh2">
                            <p>企业文化</p>
                            <p>corporate culture</p>
                            <p>
                                公司以诚信求发展，在共赢、携手共进的基础上，愿与社会各界朋友建立长期、稳定的战略合作伙伴关系，同时也竭诚为您...
                            </p>
                        </div>
                    </div>
                    <div class="asddimg">
                        <img src="../../assets/web/about_2.jpg" alt="汽车托运">
                    </div>
                    <div class="asddimg">
                        <img src="../../assets/web/about_3.jpg" alt="汽车托运">
                    </div>
                    <div class="yewenhua2">
                        <div class="ywh2">
                            <p>公司服务</p>
                            <p>Corporate services</p>
                            <p>
                                形成以华东、华南、华中、东北为基地，辐射全国的运输资源网络，为现代、大众、本田、福特、长安、奇瑞、沃尔沃、宝马、奔驰、奥迪、马自达以及个人私人车提供轿车运输服务。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jieshao">
                <div class="jieshao5">
                    <div class="jieshao1">
                        品牌介绍
                    </div>
                    <div class="jieshao2">
                        选择运好车 选择美好生活
                    </div>
                    <div class="jieshao3">
                        公司在经营中采取科学的管理制度，完善的内部管理，秉承“专业创造价值”的经营理念;坚持客户至上的服务理念;坚持诚实守信、敬业创新的管理理念，受到广大新老合作伙伴及同行的青睐与认可。在行业竞争日趋激烈的今天，海通运输整合多种资源，优化运营线路，大力提高运营效率...
                    </div>
                    <div class="jieshao4">
                        服务热线:400-6655-958
                    </div>
                </div>
            </div>
            <Footera />
        </div>
    </div>
</template>

<script>
import carousela from '~/components/web/carousela.vue';
import Footera from '~/components/web/footera.vue';
export default {
    components: {
        carousela,
        Footera
    },
    data() {
        return {
            list: [
                '北京汽车物流',
                "上海汽车物流",
                '广州汽车物流',
                '深圳汽车物流',
                '成都汽车物流',
                '杭州汽车物流',
                '重庆汽车物流',
                '武汉汽车物流',
                '苏州汽车物流',
                '西安汽车物流',
                '天津汽车物流',
                '南京汽车物流',
                '郑州汽车物流',
                '长沙汽车物流',
                '沈阳汽车物流',
                '青岛汽车物流',
                '宁波汽车物流',
                '东莞汽车物流',
                '无锡汽车物流',
                '大连汽车物流',
                '东莞汽车物流',
                '福州汽车物流',
                '吉林汽车物流',
                '桂林汽车物流',
                '南宁汽车物流',
                '兰州汽车物流'
            ],
            listac: [
                '首页',
                '关于我们',
                '15秒获取报价',
                '放心运车',
                '常见问题',
                '联系我们',
                '车主感言',
                '服务中心'
            ]
        }
    },
}
</script>

<style scoped>
.goods {
    margin-top: 8rem;

}

.acc a {
    text-decoration: none;
    color: #83888a;
}

.nav {
    color: red;
    font-size: 4rem;
    font-weight: lighter;
    width: 100%;
    text-align: center;
}

.footers {
    color: #83888a;
    margin: auto;
    width: 75%;
    margin-top: 2rem;
    font-size: 1.8rem;
}

.asdd {
    font-size: 1.4rem;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
    font-weight: lighter;
}

p {
    line-height: 2;

}

.aaaa {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.pinpai {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}

.p1 p {
    color: red;
    font-size: 8rem;
    font-weight: bolder;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
}

.p1 div {
    font-size: 1.8rem;
    text-align: center;
}

.wenhua {
    width: 90%;
    height: 56rem;
    background-color: #fffefe;
    /* 设置背景颜色为浅灰色 */
    background-image: url('../../assets/web/bg_2.jpg');
    /* 设置背景图片 */
    background-position: center;
    /* 将背景图片居中 */
    background-repeat: no-repeat;
    /* 不重复背景图片 */
    margin: auto;
    margin-top: 4rem;

}

.wenhua2 {
    margin-left: 50rem;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
}

.yewenhua1,
.yewenhua2 {
    width: 30rem;
    height: 28rem;
    color: #fffefe;
}


.yewenhua1 {
    background-color: #32c6c1;

}

.yewenhua2 {
    background-color: #ffc109;

}


.ywh2 p:nth-child(1) {
    font-size: 2.5rem;
}

.ywh2 p:nth-child(2) {
    font-size: 1.8rem;
}

.ywh2 p:nth-child(3) {
    font-size: 1.2rem;
}

.asddimg {}

.ywh2 {
    width: 70%;
    height: 80%;
    margin: auto;
    margin-top: 5rem;
}

.jieshao {
    width: 90%;
    margin: auto;
    height: 56rem;
    background-color: #ffffff;
    margin-top: 2rem;
    line-height: 2;
    background-image: url('../../assets/web/bg_3.jpg');
    background-position: center;
    /* 将背景图片居中 */
    background-repeat: no-repeat;
    /* 不重复背景图片 */
}

.jieshao5 {
    width: 70%;
    padding-top: 14rem;
    padding-left: 9rem;

}

.jieshao1 {
    font-size: 4rem;
}

.jieshao2 {
    font-size: 2rem;
}

.jieshao3 {
    font-size: 1.5rem;
    margin-top: 2rem;
}

.jieshao4 {
    font-size: 1.5rem;
    border-radius: 0.5rem;
    height: 5rem;
    color: red;
    border: 0.1rem solid;
    width: 25%;
    font-size: 1.8rem;
    text-align: center;
    line-height: 5rem;
    margin-top: 5rem;
}

.accdd {
    color: white;
    background-color: #121212;
    width: 10rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
}

.accd {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;
}

.footer {
    background-color: #1f1f1f;
    height: 35rem;
}

.acc {
    color: #83888a;
    margin: auto 1rem;
    font-size: 1.3rem;

}

.footer-a {
    width: 75%;
    margin: auto;
}

.gooee {
    width: 100%;
    height: 1rem;
    border-bottom: #83888aa4 solid 0.1rem;
}

.caada {
    display: flex;
    width: 75%;
    margin: auto;
    margin-top: 2rem;
}

.caada a {
    color: white;
    font-size: 1.5rem;
    margin: auto;
    margin-right: 1rem;
}
</style>
