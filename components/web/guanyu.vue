<template>
    <div class="adsss">
        <div class="carouselcc">
            <!-- pc端 -->
            <div class="header1">
                关于金百顺 About Yifeng
            </div>
            <div class="imgsss">
                <div class="imgcdss">
                    金百顺
                </div>
                <div class="imgcdsdd">让运车变得更方便</div>
                <div class="accd">
                    <div>
                        太平洋保险公司合作
                    </div>
                    <div>专业大型托车司机</div>
                    <div>全国各地400个网点</div>
                </div>
                <div class="cdsss">
                    公司目前在上海、北京、重庆、广州、深圳、三亚、成都、天津等重要城市以及各大省会都设立了网点。为轿车托运提供安全、及时、高效的运输服务。
                    <nuxt-link class="cdsss11" to="/about">
                        【...详情】
                    </nuxt-link>
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
.adsss {
    margin-bottom: 2rem;
}

.cercc {
    width: 100%;
}

.carouselcc {
    margin-top: 6rem;
    background-color: white !important;
}


.carousel-image {
    height: 500px !important;
}

.header1 {
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #888888;
}

.cdsss11 {
    color: red;
}

.imgsss {
    width: 80%;
    margin: auto;
}

.imgcdss {
    background-image: url('../../assets/web/tit_1.png');
    background-repeat: no-repeat;
    height: 3.5rem;
    text-align: center;
    width: 22rem;
    font-size: 2rem;
    line-height: 3.5rem;
    color: white;
    font-weight: 700;
}

.imgcdsdd {
    color: red;
    font-size: 3rem;
    font-weight: 700;
    margin-top: -4rem;
    margin-left: 21rem;
}

.accd {
    display: flex;
    width: 50rem;
    justify-content: space-evenly;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #888888;
}

.cdsss {
    font-size: 1.5rem;
    text-indent: 2em;
}
</style>
