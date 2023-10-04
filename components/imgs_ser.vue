<template>
    <div class="neirong" v-if="isMobile">
        <div class="goods">
            <div class="fenge">
                <img src="../assets//log_nav.jpg" alt="好运车-汽车托运">
            </div>
            <div class="en-1">专注轿车托运 <p>12年</p>
            </div>
            <div class="cn-2">好运车品牌合同及保险</div>
        </div>
        <div class="zhanshi_hetou">
            <div class="ht">
                <i class="el-icon-postcard">
                    <span class="header-1">汽车独立保险</span>
                </i>
            </div>
            <div class="ht">
                <i class="el-icon-connection">
                    <span class="header-1">正式合同一式两份</span>
                </i>
            </div>
            <div class="ht">
                <i class="el-icon-notebook-2">
                    <span class="header-1">资质证书-专业保障</span>
                </i>

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
    background-color: white;
    height: 18rem;
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

}

.en-1 p {
    font-size: 2rem;
    color: red;
    font-weight: bold;

}

.cn-2 {
    color: #474747;
    padding-top: 1rem;
    font-size: 3rem;
}

.fenge {
    display: flex;
    justify-content: center;
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

    width: 24rem;
    height: 15rem;
    justify-content: center;
    align-items: center;
}

.ht i {
    font-size: 3.2rem;
    color: #ff0000;
    line-height: 3.2rem;
}

.ht i span {
    font-size: 2rem;
    color: #000000;

}
</style>
