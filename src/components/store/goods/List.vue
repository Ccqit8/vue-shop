<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>
        <goods-top></goods-top>
        <goods-main></goods-main>
    </div>
</template>
    
    <script>
    import goodsTop from './common/GoodsTop.vue';
    import goodsMain from './common/GoodsMain.vue';
export default {
    data() {
        return {
            
        }
    },
    components: {
      goodsTop,goodsMain
    }
};
</script>
    
    <style scoped>

</style>