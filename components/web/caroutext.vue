<template>
    <div class="liuchengss">
        <h1 class="goodcs">轿车托运流程</h1>
        <div class="goods">
            <div class="liucheng">
                <div class="ls">
                    <div class="iconcss">
                        <i class="el-icon-user"></i>
                    </div>
                    <div class="text">
                        上门提车
                    </div>
                    <div class="text2">
                        <div class="text11">
                            <span class="text10">01</span>
                            <span class="textsp">电话预约上门提车时间和地点</span>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <i class="el-icon-right"></i>
                </div>
            </div>
            <div class="liucheng">
                <div class="ls">
                    <div class="iconcss">
                        <i class="el-icon-document"></i>
                    </div>
                    <div class="text">
                        车辆检车
                    </div>
                    <div class="text2">
                        <div class="text11">
                            <span class="text10">02</span>
                            <span class="textsp">车辆合法证明及车辆外观检查</span>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <i class="el-icon-right"></i>
                </div>
            </div>
            <div class="liucheng">
                <div class="ls">
                    <div class="iconcss">
                        <i class="el-icon-notebook-2"></i>
                    </div>
                    <div class="text">
                        合同与保险
                    </div>
                    <div class="text2">
                        <div class="text11">
                            <span class="text10">03</span>
                            <span class="textsp">签订承运合同、购买承运保险</span>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <i class="el-icon-right"></i>
                </div>
            </div>
            <div class="liucheng">
                <div class="ls">
                    <div class="iconcss">
                        <i class="el-icon-truck"></i>
                    </div>
                    <div class="text">
                        装车承运
                    </div>
                    <div class="text2">
                        <div class="text11">
                            <span class="text10">04</span>
                            <span class="textsp">与商品车一起安全承运</span>
                        </div>
                    </div>
                </div>
                <div class="icon">
                    <i class="el-icon-right"></i>
                </div>
            </div>


            <div class="liucheng">
                <div class="ls">
                    <div class="iconcss">
                        <i class="el-icon-location-information"></i>
                    </div>
                    <div class="text">
                        送车上门
                    </div>
                    <div class="text2">
                        <div class="text11">
                            <span class="text10">05</span>
                            <span class="textsp">抵达目的地 送车上门 支付运费</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.liuchengss {
    margin-bottom: 2rem;
    height: 30rem;
}

.liucheng {
    height: 10rem;
}

.icon {
    margin-left: 17rem;
    height: 10rem;
    line-height: 10rem;
    margin-top: -12rem;
}

.icon i {
    font-size: 7rem;
    color: #60b2ef;
    font-weight: 700;
}

.ls {
    width: 13.5rem;
    height: 16rem;
    background-image: url('../../assets/web/sec51.png');
    background-repeat: no-repeat;

}


.textsp {
    color: #666;
}

.text11 {
    margin-top: 3.5rem;
}

.text10 {
    font-size: 3rem;
    font-style: italic;
    color: #4ba5e8;
}

.goods {
    margin-top: 6rem;
    width: 80%;
    height: 30rem;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
}

.iconcss {
    font-size: 4rem !important;
    color: rgb(255, 255, 255);
    width: 4rem;
    margin: auto;
    padding-top: 3rem;
}

.text {
    color: white;
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
}

.goodcs {
    color: red;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
}

.nuxtLink {
    color: black !important;
    width: 60% !important;
}

.naifei {
    width: 80%;
    margin: auto;

}

div img {
    width: 14rem;
    height: 12rem;
    border-radius: 1rem;
    margin-right: 1rem;
}

.title1 {
    font-size: 2.3rem;
}

.block {

    margin: auto;
    margin-bottom: 2rem;
    text-align: center;
}

.description1 {
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
}

.addc {
    display: flex;
    width: 100%;
    height: 14rem;
    margin: auto;
    margin-bottom: 3rem;
    border-radius: 1rem;
    /* border: 0.1rem solid black; */
    padding: 1rem;
    justify-content: center;
}

.addc:first-child {
    margin-top: 2rem;
}
</style>
