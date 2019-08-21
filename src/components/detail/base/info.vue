<template>
  <div class="info">
    <div class="infos">
      <div class="wrap">
      <div class="left">
        <p>
          <span class="sorce">{{this.$store.state.Images.score}}</span>
          <span>{{this.$store.state.Images.desc}}</span>
        </p>
        <p>
          <span class="comment disu">{{this.$store.state.Images.comments}}</span>
          <span class="comment miss">{{this.$store.state.Images.menu}}</span>
        </p>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="right">
        <p>景点介绍</p>
        <p class="comment">开放时间、小贴士</p>
        <i class="iconfont icon-fanhui"></i>
      </div>
     
    </div>
     <div class="bottom">
          <span>{{this.$store.state.Images.adress}}</span>
           <i class="iconfont icon-fanhui"></i>
      </div>
    </div>
      <div class="item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    };
  },
 
  
};
</script>
<style scoped>
.infos{
  padding: 0 1rem;
  box-sizing: border-box;
}
.wrap{
  display: flex;
  
  box-sizing: border-box;
}
.wrap > div {
  position: relative;
  flex: 1;
  padding: .5rem;
  box-sizing: border-box;
}

.left > p:first-child {
  color: orange;
}
.left > p > .sorce {
  font-size: 2rem;
  margin-right: 0.6rem;
}
.left > p > .sorce::after {
  display: inline;
  content: "分";
}
.left > p > .comment,
.right > .comment {
  font-size: 1.2rem;
  color: rgb(192, 192, 192);
}
.left > i,
.right > i,
.bottom>i{
  display: block;
  position: absolute;
  transform: translateY(-50%) rotate(-180deg);
  top: 50%;
  right: 0;
}
.right > p:first-child{
    margin-bottom: .6rem;
}
.left > i::before ,.right > i::before,.bottom > i::before{
  display: inline;
  color: skyblue;
  font-size: 1.5rem;
}
.bottom{
    position: relative;
    padding-left: 1rem;
    box-sizing: border-box;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, .7);
}
.item{
     background-color: rgb(245, 245, 245);
     height: 1rem;
}
.disu::after{
    content: "条评论"
}
.miss::after{
    content: "条攻略"
}
</style>


