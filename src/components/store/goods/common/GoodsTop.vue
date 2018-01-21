<template>
    <div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <!--此处声明下面可重复循环-->

                                <li v-for='(item,index) in all.catelist' :key='item.id'>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for='subitem in item.subcates' :key='subitem.id'> {{subitem.title}} </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <router-link to=''>{{item.title}}</router-link>
                                            </dt>
                                            <app-category :list='item.subcates'></app-category>
                                            <!-- <dd>

                                                <a href="/goods/43.html">手机通讯</a>

                                                <a href="/goods/44.html">摄影摄像</a>

                                                <a href="/goods/45.html">存储设备</a>
                                            </dd> -->
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->

                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                            <div id="focus-box" class="focus-box">
                                <el-carousel indicator-position="outside">
                                    <el-carousel-item v-for="item in all.sliderlist" :key="item.id">
                                        <!-- <h3>{{ item.title }}</h3> -->
                                        <img :src="item.img_url" alt="">
                                    </el-carousel-item>
                                </el-carousel>
                                <!-- <ul class="slides">
                                    <li class="" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;">
                                        <a href="/goods.html">
                                            <img src="/templates/main/images/focus_1.png" draggable="false">
                                        </a>
                                    </li>
                                    <li style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;" class="flex-active-slide">
                                        <a href="/goods.html">
                                            <img src="/templates/main/images/focus_2.png" draggable="false">
                                        </a>
                                    </li>
                                </ul>
                                <ol class="flex-control-nav flex-control-paging">
                                    <li>
                                        <a class="">1</a>
                                    </li>
                                    <li>
                                        <a class="flex-active">2</a>
                                    </li>
                                </ol> -->
                            </div>

                        </div>
                    </div>
                    <!--/幻灯片-->

                    <!--推荐商品-->
                     <div class="left-220">
                   <top-list :list='all.toplist'></top-list>
                    <!--/推荐商品-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCategory from "./category";
import  TopList from "./TopList";
export default {
  components: {
    AppCategory,
    TopList
  },
  data() {
    return {
      all: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
    };
  },
  created() {
    this.$http.get(this.$api.goodsTop).then(res => {
    //   console.log(res);
      this.all = res.data.message;
    });
  }
};
</script>
<style scoped>

.el-carousel__container {
    /* position: relative; */
    height: 359px;
}
     .el-carousel__item img {
        height: 359px;
         /* width:100%; */
  }

  .banner-img {
    position: relative;
    width: 100%;
    height: 359px;
    overflow: hidden;
}
</style>