<template>
    <div class="footer2">
        <div class="cc">
            <div class="icon" v-for="item in icons" :key="item.id">
                <van-icon :name="item.icon" />
                <div>{{ item.text }}</div>
            </div>
        </div>




        <van-button round type="info" block>圆形按钮</van-button>


    </div>
</template>

<script>

export default {
    data() {
        return {
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
.footer2 {
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 5rem;
    background-color: orange;
}

.cc {
    display: flex;
    align-items: center;
}

.icon {
    text-align: center;
    height: 3rem;

}

.iconc {
    width: 45%;
    margin: auto;
}
</style>
