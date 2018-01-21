<template>
    <div>
        <!-- 导航栏 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to='/'>首页</router-link> &gt;
                <router-link to="{name:goodsList}">购物商城</router-link> &gt;
                <router-link to=''>商品详情</router-link>
            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <goods-slide :imglist='goodsInfoById.imglist'></goods-slide>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <div class="goods-spec">
                              <goods-info :gsInfo='goodsInfoById.goodsinfo'></goods-info>

                            </div>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->
                            <!-- <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;"> -->
                                <el-tabs tab-position="top">
                                    <el-tab-pane label="商品介绍">
                                        <div class="tab-content entry" style="display:block;" v-html="goodsInfoById.goodsinfo.content">
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="商品评论">
                                        <div class="tab-content" style="display: block;">
                                            <!--网友评论-->
                                            <comment tablename='goods'></comment>
                                            <!--/网友评论-->
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                            <!-- </div> -->
                            <!--/选项卡-->

                            <!--选项内容-->

                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->

                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <top-list :list='goodsInfoById.hotgoodslist'></top-list>
                            </div>
                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>
    
    <script>
import TopList from "./common/TopList.vue";
import Comment from "./common/Comment.vue";
import GoodsInfo from "./common/GoodsInfo.vue";
import GoodsSlide from "./common/GoodsSlide.vue";
export default {
  components: {
    TopList,
    Comment,
    GoodsInfo,
    GoodsSlide
  },
  data() {
    return {
      id: null,
      goodsInfoById: {
        goodsinfo: {},
        imglist: [],
        hotgoodslist: []
      }
    };
  },
  methods: {
    getGoodsDetail() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        console.log(res);
        this.goodsInfoById = res.data.message;
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getGoodsDetail();
  },
//   监听$route对象当id改变是获取对应的商品详情
watch:{
    $route(){
        this.id=this.$route.params.id;
        this.getGoodsDetail();
    }
}
};
</script>
    
    <style scoped>

</style>