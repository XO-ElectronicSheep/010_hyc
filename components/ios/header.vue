<template>
    <div class="nav">
        <!-- 移动布局 -->
        <div class="nav-header">
            <div><img src="../../assets/ios/kefu.png" alt="汽车托运">全国服务热线:400-678-2880</div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
        }
    },

}
</script>

<style scoped>
.nav {
    display: flex;
    /*   position: fixed;
    top: 0; */
    background-color: white;
    width: 100%;
    height: 5.5rem;
}

.nav-header {
    width: 95%;
    height: 4rem;
    background-color: #f6f6f6;
    display: flex;
    margin: auto;
    justify-content: space-around;
    border-radius: 1rem;

}

.nav-header img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}

.nav-header div {
    font-size: 1.7rem;
    color: #1889cd;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
