<template>
    <div class="footer2">
        <div class="dd">
            <div class="cc">
                <div class="icon" v-for="item in icons" :key="item.id">
                    <van-icon :name="item.icon" />
                    <div>{{ item.text }}</div>
                </div>
            </div>
        </div>
        <a :href="'tel:' + phoneNumber"> <van-button round type="info" block> 免费拨打电话</van-button></a>
    </div>
</template>

<script>

export default {
    data() {
        return {
            phoneNumber: '111-1111-111',
            icons: [
                {
                    id: 1,
                    icon: 'balance-list-o',
                    text: '获取报价'
                },
                {
                    id: 2,
                    icon: 'comment-o',
                    text: '在线咨询'
                },
                {
                    id: 3,
                    icon: 'chat-o',
                    text: '添加微信'
                }
            ]
        }
    },

}

</script>

<style scoped>
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

.van-button {
    width: 100%;
    background: linear-gradient(to right, rgb(255, 224, 184), rgb(255, 204, 93));
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
