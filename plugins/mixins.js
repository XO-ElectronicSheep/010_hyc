import Vue from 'vue'

Vue.mixin({
    data() {
        return {
            isMobile: false,
            windowWidth: 0,
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
    },
    mounted() {
        this.handleResize(); // 在组件挂载时先执行一次
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        windowWidth: {
            immediate: true,
            handler(widthw) {
                if (widthw < 768) {
                    this.isMobile = !this.isMobile
                }
            }
        }
    }
})