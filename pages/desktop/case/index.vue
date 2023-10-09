<template>
    <div class="goods">
        <h3>案例表</h3>
        <nuxt-link :to="{ name: 'case-detail', query: { a: 111, b: 222 } }"> 一号</nuxt-link>
        <nuxt />


    </div>
</template>

<script>


export default {


    components: {

    }
}
</script>

<style scoped></style>
