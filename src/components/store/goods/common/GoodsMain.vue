<template>
    <div>
        <div class="section" v-for='(item,index)  in goodsGroup' :key='index'>
            <!--子类-->
            <div class="main-tit" >
                <h2>{{item.catetitle}}</h2>
                <p>
                    <router-link to='' v-for='subitem in item.level2catelist' :key='subitem.subcateid'>{{subitem.subcatetitle}}</router-link>
                    <router-link to=''>更多<i>+</i></router-link>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li  v-for='datasitem in item.datas' :key='datasitem.artID'>
                            <router-link :to="{name:'goodsDetail',params:{id:datasitem.artID}}">
                                <div class="img-box">
                                    <img :src="datasitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{datasitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{datasitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{datasitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{datasitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsGroup: {}
        }
    },
    methods: {
        getGoodsGroup() {
            this.$http.get(this.$api.goodsContent).then(res=>{
                // console.log(res);
                this.goodsGroup=res.data.message;
            })
        }
    },
    created(){
        this.getGoodsGroup();
    }
};
</script>

<style scoped>

</style>