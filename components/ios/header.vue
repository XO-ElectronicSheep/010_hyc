<template>
    <div class="nav-2">
        <!-- 移动布局 -->
        <div class="nav-header">
            <div><img src="../../assets/log_nav.jpg" alt="好运车">全国服务热线:400-678-2880</div>
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
.nav-2 {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
}

.nav-header {
    width: 95%;
    height: 4rem;
    background-color: #f6f6f6;
    display: flex;
    margin: auto;
    /* margin-top: 1.5rem; */
    justify-content: space-around;
    border-radius: 1rem;
}

.nav-header img {
    width: 5rem;
    height: 4rem;
}

.nav-header div {
    font-size: 2rem;
    color: #1889cd;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
