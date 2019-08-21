<template>
  <div class="header-box">
    <div class="header clearfix">
      <i class="iconfont icon-fanhui"></i>
      <div class="header-search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入城市/景点/游玩主题" @focus="fn" />
      </div>
      <router-link to="/city" tag="div" class="header-right">
        <span>{{this.$store.state.citys}}</span>
        <i class="iconfont icon-sanjiao"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    fn() {
      this.$router.push("/search");
    }
  }
};
</script>
<style scoped lang='stylus'>
.header-box{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:11
}

.header>i, .header-search>i {
  text-align: center;
  display: block;
  position: absolute;
  left: 0.5rem;
}

.header>.icon-fanhui {
  font-size: 2rem;
}

.header {
  position: relative;
  padding: 0 6rem 0 3.5rem;
  height: 4.4rem;
  background-color: rgb(0, 172, 216);
  line-height: 4.4rem;
  box-sizing: border-box;
  color: white;
  z-index: 10;
}

.header>.header-search {
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
  line-height: 4.1rem;
}

.header>.header-search>input {
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  text-indent: 2.5rem;
}

.header-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 6rem;
  height: 100%;
  font-size: 1.5rem;
  text-align: center;
  color: white;
}
</style>


