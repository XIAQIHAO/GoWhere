<template>
  <div class="money-top">
    <div class="top">
      <span>收银台</span>
      <i class="iconfont icon-fanhui" @click="back"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
      back(){
          this.$router.back()
      }
  }
};
</script>
<style scoped>
.top{
  position: relative;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  border-bottom: .1rem solid rgba(0, 0, 0, .1);
  color: black;
  font-size: 2rem;
  background-color: #fff;
}
.top > i{
  display:inline-block;
  position: absolute;
  left: 1rem;
  top: 0;

}
.top > .icon-fanhui::before{
  color: black;
  font-weight: bold;
}
</style>