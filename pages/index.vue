<template>
    <div>
        <div class="nav">
            <!-- pc布局 -->
            <div class="nav-pc-flx">
                <div class="ael-center">
                    <img src="../assets/log_nav.jpg" alt="好运车" class="nav_p">
                </div>
                <div class="dd">
                    <el-menu :default-active="activeIndex" @select="handleSelect" active-text-color="#ff0000"
                        mode="horizontal">
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

        <nuxt /> <!-- 这里显示页面内容 -->
        <footerc />
    </div>
</template>

<script>
import footerc from '~/components/web/footerc.vue'
export default {
    components: {
        footerc
    },
    data() {
        return {
            fits: ['fill'],
            url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
            isDropdown: true,
            activeIndex: '-1',
            navs: [
                { path: 'pages/frontpage', title: '首页' },
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
</style>
