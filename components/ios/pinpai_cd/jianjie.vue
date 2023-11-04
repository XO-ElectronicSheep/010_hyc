<template>
    <div class="navf">
        <img src="../../../assets/ios/20231101151806.jpg" alt="汽车托运">
        <div class="text1">
            {{ text1 }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text1: '金百顺运车专注于轿车托运，公司市商品车运输服务商、致力打造中国商品车托运、私家车托运服务企业。'
        }
    },
    mounted() {

    }
};

</script>

<style scoped>
.navf {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

img {
    width: 40%;
    height: 13rem;
    padding: 0.5rem;
    border: 0.1rem solid black;
}

.text1 {
    width: 45%;
    margin: 1rem;
    font-size: 1.7rem;
}
</style>
