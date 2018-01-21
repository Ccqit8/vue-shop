<template>
    <div>
        <div class="magnifier" id="magnifier1">
            <div class="magnifier-container">
                <!-- < div class="images-cover"></div> -->
                <div class='images-cover'></div>

                <!--当前图片显示容器-->
                <div class="move-view"></div>
                <!--跟随鼠标移动的盒子-->
            </div>
            <div class="magnifier-assembly">
                <div class="magnifier-btn">
                    <span class="magnifier-btn-left">&lt;</span>
                    <span class="magnifier-btn-right">&gt;</span>
                </div>
                <!--按钮组-->
                <div class="magnifier-line">
                    <ul class="clearfix animation03">
                        <li v-for='item in imglist' :key='item.id'>
                            <div class="small-img">
                                <img :src="item.original_path" />
                            </div>
                        </li>
                        <!-- <li>
                        <div class="small-img">
                            <img src="images/2.png" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="images/3.png" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="images/4.png" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="images/1.png" />
                        </div>
                    </li> -->
                    </ul>
                </div>
                <!--缩略图-->
            </div>
            <div class="magnifier-view"></div>
            <!--经过放大的图片显示容器-->
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import "@/lib/imgzoom/css/magnifier.css";
import "@/lib/imgzoom/js/magnifier.js";
export default {
  props: ["imglist"],
  watch: {
      imglist(){
            this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      $("#magnifier1").imgzoon({
        magnifier: "#magnifier1",
        width: 300,
        height: 300,
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 5 //缩放比例
      });
    });
      }
  }
};
</script>

<style scoped>

</style>