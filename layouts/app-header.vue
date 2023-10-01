<template>
    <div>
        <el-menu :default-active="activeIndex" @select="handleSelect" active-text-color="#399" mode="horizontal">
            <el-menu-item v-for="(item, index) of navs" :key="index" :index="String(index)">{{ item.title }}</el-menu-item>
        </el-menu>
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
            ],
            username: 'cc'
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

<style scoped></style>
