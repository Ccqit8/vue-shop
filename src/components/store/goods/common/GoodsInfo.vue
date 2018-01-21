<template>
    <div>
        <h1>{{gsInfo.title}}</h1>
        <p class="subtitle">{{gsInfo.sub_title}}</p>
        <div class="spec-box">
            <dl>
                <dt>货号</dt>
                <dd id="commodityGoodsNo">{{gsInfo.goods_no}}</dd>
            </dl>
            <dl>
                <dt>市场价</dt>
                <dd>
                    <s id="commodityMarketPrice">¥{{gsInfo.market_price}}</s>
                </dd>
            </dl>
            <dl>
                <dt>销售价</dt>
                <dd>
                    <em class="price" id="commoditySellPrice">¥{{gsInfo.sell_price}}</em>
                </dd>
            </dl>
        </div>

        <div class="spec-box">
            <dl>
                <dt>购买数量</dt>
                <dd>
                    <div class="stock-box">
                        <!-- <input id="commodityChannelId" type="hidden" value="2">
                                                <input id="commodityArticleId" type="hidden" value="98">
                                                <input id="commodityGoodsId" type="hidden" value="0">
                                                <input id="commoditySelectNum" type="text" maxlength="9" value="1" maxvalue="10" onkeydown="return checkNumber(event);">
                                                <a class="add" onclick="addCartNum(1);">+</a>
                                                <a class="remove" onclick="addCartNum(-1);">-</a> -->
                        <el-input-number size="mini" v-model="gsnum" :min="1" :max="gsInfo.stock_quantity" label="描述文字"></el-input-number>
                    </div>
                    <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{gsInfo.stock_quantity}}</em>件
                    </span>
                </dd>
            </dl>
            <dl>
                <dd>
                    <div class="btn-buy" id="buyButton">
                        <button class="buy" onclick="cartAdd(this,'/',1,'/shopping.html');">立即购买</button>
                        <button class="add" onclick="add">加入购物车</button>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    props:['gsInfo'],
    data() {
        return {
             gsnum:1,
        }
    },
    methods:{
       add(){
           
       } 
    }
};
</script>

<style scoped>

</style>