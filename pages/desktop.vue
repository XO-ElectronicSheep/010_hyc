<template>
    <div>
        <Header />
        <nuxt /> <!-- 这里显示页面内容 -->
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

}
</script>

<style scoped></style>
