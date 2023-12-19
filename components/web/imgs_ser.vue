<template>
    <div class="neirong">
        <div class="goods">
            <div class="fenge">
            </div>
            <div class="en-1">专注轿车托运 <p>12年</p>
            </div>
            <div class="cn-2">金百顺品牌合同及保险</div>
        </div>
        <div class="zhanshi_hetou">
            <div class="ht">
                <i class="el-icon-postcard">
                    <span class="header-1">汽车独立保险</span>
                </i>
                <p>
                    汽车托运保险几点注意：1、保单上的被保险人和地址联系电话匹配您所提供的信息。2、在保单表格中的货物名称包含您的车型和车牌号信息。3、保险金额符合您爱车当前价值。4、起运地和目和地符合您所要托运的出发地和到达地。
                </p>
            </div>
            <div class="ht">
                <i class="el-icon-connection">
                    <span class="header-1">正式合同一式两份</span>
                </i>
                <p>关于轿车托运合同，大家有几点需要注意的：1、是否盖有托运公司的公章，有盖章才有法律效应。2、是否记录车辆相关情况：车内携带的物品、公理数、油量、车辆外观。3、是否写明价格以及支付方式，避免被多次收费或隐性收费。
                </p>
            </div>
            <div class="ht">
                <i class="el-icon-notebook-2">
                    <span class="header-1">资质证书-专业保障</span>
                </i>
                <p>
                    重要提醒：从事汽车托运的企业必须具备以下两个资质证书才能承接相关服务。<br>
                    （三证合一的 《营业执照》、《道路运输经营许可证》）
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.neirong {
    width: 100%;
    background-color: #1f1f1f;
    height: 27rem;
    display: flex;
}

.goods {
    width: 30%;
    height: 30rem;
    /* box-shadow: -5px 5px 5px #a5a5a5;
    margin: 1rem auto; */
    text-align: center;
    color: #808080;
    padding-top: 2rem;
}

.goods img {
    width: 15rem;
    height: 4rem;
}

.en-1 {
    padding-top: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    text-align: end;
    color: white;
}

.en-1 p {
    font-size: 2rem;
    color: red;
    font-weight: bold;

}

.cn-2 {
    color: #ffffff;
    padding-top: 1rem;
    font-size: 3rem;
}

.fenge {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
}

.fenge p {
    margin-top: 1rem;
    font-size: 0.2rem;
    font-weight: bold;
}

.zhanshi_hetou {
    width: 64%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ht {

    width: 28rem;
    height: 17rem;
    justify-content: center;
    align-items: center;
    /* background-color: #f5f5f5; */
    border-radius: 1rem;
    text-align: center;
    color: white;
}

.ht i {
    font-size: 3.2rem;
    color: #ff0000;
    line-height: 3.2rem;
    margin-top: 0.5rem;
}

.ht i span {
    font-size: 2rem;
    color: #000000;

}

.ht p {
    font-size: 1.3rem !important;
    width: 25rem;
    margin: 0.2rem auto;
    text-align: center;
    margin-top: 2rem;
}

.header-1 {
    color: white !important;
}


.goods-ios {
    height: 15rem;
    padding-top: 1rem;
    display: flex;
    font-size: 2rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.en-1-ios p {
    color: #ff0000;
    font-weight: 600;
    text-align: center;
}

.cn-2-ios {
    font-size: 2.5rem;
}

.zhanshi_hetou-ios {
    background-color: rgba(255, 255, 255, 0.3);
    /* border: 0.1rem solid black; */
    color: red;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.ht-ios {
    flex: 0 0 auto;
    /* 可选，用于控制元素的宽度 */
    width: 60%;
    /* 可选，用于控制元素的宽度 */
    text-align: center;
    padding: 0.3rem 0;
}
</style>
