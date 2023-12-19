<template>
    <div class="nav">
        <!-- pc布局 -->
        <div class="nav-pc-flx">
            <div class="ael-center">
                <img src="../../assets/20231030105704.png" alt="金百顺" class="nav_p">
            </div>
            <div class="dd">
                <el-menu :default-active="activeIndex" @select="handleSelect" active-text-color="#ff0000" mode="horizontal">
                    <el-menu-item v-for="(item, index) of navs" :key="index" :index="String(index)">
                        <div class="nav_er">{{ item.title }}</div>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="ael-center">
                <div class="tel">
                    <i class="el-icon-phone-outline">
                        免费热线:
                    </i>
                    {{ telephone }}
                </div>
            </div>
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
                { path: '/about', title: '公司介绍' },
                { path: '/case', title: '托运案例' },

            ],
            telephone: '400-6655-958'
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
        },
    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    background-color: #ffffff;

}


.nav-pc-flx {
    display: flex;
    justify-content: center;

}


.tel {
    color: red;
    font-size: 2.6rem;

}

.el-menu-item {
    border: none !important;
}


.el-menu {
    background-color: #ffffff;
}

.el-menu-item:hover {
    background-color: #f5f5f5 !important;
    color: red !important;
}

.ael-center {
    display: flex;
    align-items: center;
    margin: auto 5rem;
}

.ael-center img {
    width: 19rem;
    height: 6rem;
}


.el-menu {
    border-bottom: none !important;
}
</style>
