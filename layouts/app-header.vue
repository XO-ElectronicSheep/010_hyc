<template>
    <div class="nav" v-if="isMobile">
        <!-- pc布局 -->
        <div class="nav-pc-flx">
            <div class="ael-center">
                <img src="../assets/log_nav.jpg" alt="好运车" class="nav_p">
            </div>
            <div class="sss">
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


    <div class="nav-2" v-else>
        <!-- 移动布局 -->
        <!-- <div v class="yidong">
            <div>
                <i class="el-icon-house size-icon" @click="goToPage('/')"></i>
            </div>
            <div>
                好运车托运
            </div>
            <div>
                <el-dropdown trigger="click" @visible-change="handleVisibleChange">
                    <span class="el-dropdown-link">
                        <i class="el-icon-s-operation size-icon" v-if="isDropdown"></i>
                        <i class="el-icon-close size-icon" v-else></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item, index) of navs" :key="index" :index="String(index)">
                            <nuxt-link :to=item.path class="getyidong">{{ item.title }}</nuxt-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div> -->
        <div class="nav-header">
            <div><img src="../assets/log_nav.jpg" alt="好运车">全国服务热线:400-678-2880</div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            isDropdown: true,
            activeIndex: '-1',
            navs: [
                { path: '/', title: '首页' },
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
        },
        /* 移动端nav切换 */
        handleVisibleChange(visible) {
            this.isDropdown = !visible
        },
        goToPage(routec) {
            this.$router.push({
                path: String(routec)
            })

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

}

.ael-center img {
    width: 13rem;
}


.yidong {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    font-size: 2rem;
}

.size-icon {
    font-size: 2.6rem;
    margin: 0 1rem;
}

.nav_er {
    margin: 0 4.5rem;
}

.getyidong {
    cursor: default;
    text-decoration: none;
    color: inherit;
}


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
