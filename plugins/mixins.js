import Vue from 'vue'

Vue.mixin({
    data() {
        return {
            isMobile: false,
            windowWidthc: 0,
        }
    },
    methods: {
        handleResize() {
            this.windowWidthc = window.innerWidth;
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
        windowWidthc: {
            immediate: true,
            handler(widthw) {
                if (widthw < 890) {
                    this.isMobile = !this.isMobile
                }

            }
        }
    }
})