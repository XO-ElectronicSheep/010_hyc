<template>
    <div>
        <div class="nav">
            <!-- pc布局 -->
            <div class="nav-pc-flx">
                <div class="ael-center">
                    <img src="../../assets/log_nav.jpg" alt="好运车" class="nav_p">
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
        <div class="demo-image">
            <img src="../../assets/6.png" alt="汽车托运">
            <div class="block-v">
                <div class="winxin">微信联系一对一客服 <i class="el-icon-thumb"></i></div>
                <div class="block" v-for="item in url" :key="item">
                    <el-image style="width: 8rem; height: 8rem" :src="item" fit="fit"></el-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fits: ['fill'],
            url: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
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


/* .yidong {
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
} */


.demo-image {
    position: fixed;
    bottom: 0;
    background-color: rgba(90, 90, 90, 0.753);
    height: 10rem;
    z-index: 9;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.demo-image img {
    height: 8rem;
    margin-top: 0.5rem;
}

.block-v {
    display: flex;
    width: 50rem;
    justify-content: space-around;
    /* margin-top: 1rem; */

}

.winxin {
    height: 8rem;
    line-height: 8rem;
    color: rgb(255, 3, 3);
    font-size: 2rem;
    font-weight: 600;
}

.el-icon-thumb {
    transform: rotate(90deg);
}

.el-image:last-child {
    margin-right: 1rem;
}
</style>
