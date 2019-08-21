<template>
  <div class="detail">
    <heads :Images="imageslist"></heads>
    <info></info>
    <promote :message="product">
      <p slot="p">去哪儿推荐</p>
      <div class="item" slot="item"></div>
    </promote>
    <recomend :message="product"></recomend>
    <comment :comments="commentList"></comment>
  </div>
</template>
<script>
import heads from "./base/heads" 
import info from "./base/info"
import BScroll from "better-scroll"
import { getImg } from "@/api"
import promote from "./base/promote"
import recomend from "./base/recomend"
import comment from './base/comment'
export default {
  data() {
    return {
      List: {},
      product: [],
      imageslist:[],
      commentList:[]
    };
  },

  components: {
    heads,
    info,
    promote,
    recomend,
    comment
  },
   activated() {
      this.getData();
    
  },
  methods:{
    async getData(){
        let {
      data: { List, product,comment}
    } = await getImg(this.$route.params.id);
    this.product = product;
    this.imageslist = List;
    this.commentList = comment;
    this.$store.commit("getImages", List);
   
    }
  }
};
</script>
<style scoped>
.detail {
  height: 2000px;
}
</style>


