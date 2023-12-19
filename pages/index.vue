<template>
    <div>
        <Header />
        <nuxt-child /> <!-- 这里显示页面内容 -->
        <Footer />
    </div>
</template>

<script>
import Footer from '~/components/web/footerc.vue'
import Header from '~/components/web/header.vue'
export default {
    components: {
        Footer,
        Header
    },
    data() {
        return {
        }
    },
    mounted() {
        if (this.isMobile()) {
            this.$router.push('/mobile')
        }
    },
    methods: {
        isMobile() {
            const userAgent = navigator.userAgent.toLowerCase()
            return /mobile|android|iphone|ipad|phone/i.test(userAgent)
        }
    }
}
</script>

<style scoped></style>
