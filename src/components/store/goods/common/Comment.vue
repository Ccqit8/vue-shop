<template>
    <div class="comment-box">
        <!--取得评论总数-->
        <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="sentComment">
            <div class="avatar-box">
                <i class="iconfont icon-user-full"></i>
            </div>
            <div class="conn-box">
                <div class="editor">
                    <textarea id="txtContent" v-model='comment' name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                    <span class="Validform_checktip"></span>
                </div>
                <div class="subcon">
                    <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                    <span class="Validform_checktip"></span>
                </div>
            </div>
        </form>
        <ul id="commentList" class="list-box">
            <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;" v-if='commentInfo.length==0'>暂无评论，快来抢沙发吧！</p>
            <li v-for='(item,index) in commentInfo' :key='index'>
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="inner-box">
                    <div class="info">
                        <span>{{item.user_name}}</span>
                        <span>{{item.add_time}}</span>
                    </div>
                    <p>{{item.content}}</p>
                </div>
            </li>
            <!-- <li>
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="inner-box">
                    <div class="info">
                        <span>匿名用户</span>
                        <span>2017/10/23 14:59:36</span>
                    </div>
                    <p>很清晰调动单很清晰调动单</p>
                </div>
            </li> -->
        </ul>
        <!--放置页码-->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.pageIndex"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pagination.pegeSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalcount">
            </el-pagination>
        </div>
        <!--/放置页码-->
    </div>
</template>

<script>
export default {
  props: ["tablename"],
  data() {
    return {
      artid: null,
      totalcount:0,
      comment:'',
      commentInfo:[],
      pagination: {
        pageIndex: 1,
        pageSize: 10
      }
    };
  },
  methods: {
    getComment() {
      this.$http
        .get(this.$api.commentList + this.tablename + "/" + this.artid, {
          params: this.pagination
        })
        .then(res => {
          console.log(res);
          this.totalcount=res.data.totalcount;
          this.pagination.pageIndex=res.data.pageIndex;
          this.pagination.pageSize=res.data.pageSize;
          this.commentInfo=res.data.message;
        //   console.log(typeof(this.totalcount),this.pagination);
        });
    },
    sentComment(){
        this.$http.post(this.$api.comment+this.tablename+'/'+this.artid, {
            commenttxt:this.comment
        }
       
        ).then(res=>{
            // console.log(res);
            this.comment='';
            this.getComment();
        })
    },
     handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.pagination.pageSize=val;
         this.getComment();
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.pagination.pageIndex=val;
        this.getComment();
      }
  },
  created() {
      this.artid=this.$route.params.id;
      console.log(this.artid);
    this.getComment();
  }
};
</script>

<style scoped>

</style>