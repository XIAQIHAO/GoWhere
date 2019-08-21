<template>
  <div class="cities" ref="wrapper">

    <!-- <div> -->
       <div class="title">当前城市</div>
       <ul class="list clearfix">
         <li>{{$store.state.citys}}</li>
       </ul>
      <div class="title">热门城市</div>
    <ul class="list clearfix">
      <li v-for="hots in hot" :key="hots.id" @click="handclick(hots.name)">{{hots.name}}</li>
    </ul>

    <div class="href">
      <div class="title">字母排序</div>
      <ul class="list clearfix">
        <li v-for="hrefs in city" :key="hrefs.id" >
          <a :href="hrefs.title|hre">{{hrefs.title}}</a>
        </li>
      </ul>
    </div>

    <div class="wrap" v-for="item in city" :key="item.id" :id="item.title">
      <div class="title">{{item.title}}</div>
      <ul class="list clearfix">
        <li v-for="hots in item.lists" :key="hots.id"  @click="handclick(hots)">{{hots}}</li>
      </ul>
    </div> 
    </div>
  <!-- </div> -->
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {};
  },
  props: ["hot", "city"],
  filters: {
    hre(mes) {
      return "#" + mes;
    }
  },
  computed: {},
  mounted(){
    // this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods:{
    handclick(value){
        this.$store.commit("getCity",value);
        this.$router.push('/')
    }
  }
};
</script>
<style scoped>
/* .cities{
  height: 60rem;
  overflow: hidden;
} */
.title {
  padding: 1.1rem 0.6rem;
  background-color: rgb(245, 245, 245);
  font-size: 1.3rem;
}
.list > li {
  float: left;
  width: 25%;
  border-bottom: 1px dashed silver;
  border-right: 1px dashed silver;
  box-sizing: border-box;
  padding: 1rem 0;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list > li:nth-of-type(4),
.list > li:nth-of-type(8),
.list > li:nth-of-type(12) {
  border-right: 0;
}
.list > li > a {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-size: 1.6rem;
}
/* .href{
  position: relative;
  z-index: 10;
} */
</style>


