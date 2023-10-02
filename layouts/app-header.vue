<template>
    <div>
        <div class="nav">
            <img src="../assets/log_nav.jpg" alt="好运车" class="nav_p">
            <el-menu :default-active="activeIndex" @select="handleSelect" active-text-color="#ff0000" mode="horizontal">
                <el-menu-item v-for="(item, index) of navs" :key="index" :index="String(index)">
                    <p>{{ item.title }}</p>
                </el-menu-item>
            </el-menu>
            <span class="tel">
                <i class="el-icon-phone-outline"></i>
                {{ telephone }}
            </span>
        </div>

    </div>
</template>

<script>


export default {
    data() {
        return {
            activeIndex: '-1',
            navs: [
                { path: '/', title: '首页' },
                { path: '/case', title: '成功案例' },
                { path: '/about', title: '关于' },
                { path: '/case', title: '成功案例' },
                { path: '/about', title: '关于' },
            ],
            telephone: '400-682-9858'
        }
    },
    methods: {

        /* 点击nav切换 */
        handleSelect(key, keyPath) {
            this.$router.push(this.navs[key].path)
        }

    },



    watch: {

        /* 监视激活时下标 */
        $route: {
            immediate: true,
            handler(route) {
                this.navs.forEach((item, index) => {
                    if (item.path == route.path) {
                        this.activeIndex = String(index)
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
/* .nav {
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-bottom: -10px;
} */

.tel {
    color: red;
    font-size: 30px;
    margin-right: 50px;
    line-height: 70px;
}

.nav_p {
    margin-top: 5px;
    width: 180px;
    height: 50px;
}


.el-menu-item {
    border: none !important;
}

.el-menu-item p {
    font-size: 20px;
    margin-left: 50px;
    margin-right: 50px;
}
</style>
