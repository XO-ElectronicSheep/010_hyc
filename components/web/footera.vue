<template>
    <div>
        <div class="goods">
            <div class="footer">
                <div class="footer-a">
                    <div class="accdd">热门城市</div>
                    <div class="accd">
                        <div class="acc" v-for="item in list">
                            <a href="/">{{ item }}</a>
                        </div>
                    </div>
                </div>
                <div class="gooee">
                </div>
                <div class="caada">
                    <div class="caada2" v-for="item in listac">
                        <a href="/">{{ item }}</a>
                    </div>
                </div>
                <div class="footers">
                    <div class="aaaa">
                        免责声明：本网站部分内容由本站上传，如权利人发现存在误传其图片情形，请及时与本站联系。运好车 保留所有权利
                    </div>
                    <div>
                        金百顺轿车托运-京ICP备18037345号
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
/* .goods {
    margin-top: 8rem;

} */

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
