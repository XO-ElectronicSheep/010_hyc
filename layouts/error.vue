<template>
    <div>
        页面不存在 404
        <button @click="$router.replace('/')">返回首页</button>
    </div>
</template>

<script>


export default {
    components: {
        /* 接收错误 */
        props: ['error']

    }
}
</script>

<style scoped></style>
