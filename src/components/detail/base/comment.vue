<template>
  <div class="comment">
    <div class="user-comment">
      <p>用户评论</p>
    </div>
    <div class="comment-box" v-for="(commentList,index) in comments" :key="index">
      <div class="icon clearfix">
        <div class="icon-wrap">
          <span class="isbuli">
            <i class="iconfont icon-xingxing" v-for="items in 5 " :key="items.id"></i>
          </span>
          <span class="bulibuli" :style="commentList.store|star">
            <i class="iconfont icon-xingxing" v-for="item in 5" :key="item.id"></i>
          </span>
        </div>
        <span
          style="float:right; line-height: 3.5rem;"
          @click="comm(commentList)"
        >{{commentList.date}}</span>
      </div>

      <p class="comment-info" :class="{pstyle:commentList.ishows}">
        <span>{{commentList.desc}}</span>
      </p>
      <p class="change-text">
        <span class="change" :class="{iconstyle:commentList.ishows}">
          <i class="iconfont icon-fanhui" @click="toggles(commentList)"></i>
        </span>
      </p>
      <div
        class="comment-img"
        @click="showimg(commentList,index)"
        v-show="commentList.imgList.length"
      >
        <ul class="list clearfix">
          <li v-for="(item,i) in commentList.imgList" :key="i" v-show="i<6">
            <img :src="item" alt />
          </li>
        </ul>
        <span class="photo-num" v-show="commentList.imgList.length||!commentList.imgList.lenght==6">共{{commentList.imgList.length}}张</span>
      </div>
      <banner :List="comments[index].imgList" v-if="commentList.ishow" @hides="hides(commentList)"></banner>
    </div>
  </div>
</template>
<script>
import banner from "@/banner/banner";
export default {
  data() {
    return {
      current: true,
      pstyle: {},
      iconstyle: {}
    };
  },
  props: ["comments"],
  filters: {
    star(mes) {
      return {
        width: (mes * 100) / 5 + "%"
      };
    }
  },
  methods: {
    hides(item) {
      item.ishow = false;
    },
    showimg(item) {
      item.ishow = true;
    },

    toggles(item) {
      item.ishows = !item.ishows;
    }
  },
  components: {
    banner
  }
};
</script>
<style scoped>
.pstyle {
  height: auto !important;
  overflow: auto !important;
}
.iconstyle {
  transform: rotate(90deg) !important;
}
.user-comment {
  border-bottom: 0.1rem solid rgba(192, 192, 192, 0.5);
}
.user-comment > p {
  font-size: 1.7rem;
  padding: 1rem;
  box-sizing: border-box;
}
.icon {
  padding: 0 1rem;
  line-height: 3rem;
  font-size: 1.2rem;
}
.icon-wrap {
  float: left;
  position: relative;
  height: 3rem;
}
.icon-wrap > .isbuli {
  display: inline-block;
}

.icon-wrap > .bulibuli {
  display: inline-block;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
}

.icon-wrap > .bulibuli > .icon-xingxing::before {
  color: orangered;
}
.comment-info {
  height: 105px;
  overflow: hidden;
  padding: 1rem;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
}
.change {
  display: inline-block;
  transform: rotate(-90deg);
  transition: all 0.5s;
}
.change-text {
  text-align: center;
}
.change > i {
  font-size: 1.8rem;
  font-weight: bold;
}
.change > .icon-fanhui::before {
  color: silver;
}
.comment-img {
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
}
.comment-img > .list > li {
  float: left;
  width: 33.33333%;
  height: 8rem;
  padding: 0.3rem;
  box-sizing: border-box;
}
.comment-img > .list > li > img {
  width: 100%;
  height: 100%;
}
.comment-img > .photo-num {
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 2.5rem;
  right: 1.3rem;
  padding: 0.3rem 1.5rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  color: white;
  font-size: 1.2rem;
  padding-right: 0.3rem;
  text-align: right;
}
.comment-box {
  padding: 1rem 0;
}
</style>