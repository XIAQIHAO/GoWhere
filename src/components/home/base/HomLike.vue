<template>
  <div class="like">
    <h3>猜你喜欢</h3>
    <ul class="list clearfix">
      <li v-for="item in infos" :key="item.id">
       <router-link :to="{name:'Detail',params:{id:item.id}}" tag='div' class="imgs">
           <img :src="item.imgUrl" alt="item.title" srcset="" @click="palace(item)">
       </router-link >
        <div class="content">
          <p>{{item.title}}</p>
          <div class="icon">
           <div class="icon-wrap">
             <span class="isbuli">
            <i class="iconfont icon-xingxing" v-for="items in 5 " :key='items.id'></i>
           </span>
            

            <span class="bulibuli" :style="item.score|star">
            <i class="iconfont icon-xingxing" v-for="item in 5" :key='item.id'></i>
            </span>
           
           </div>
            <span class="comment">{{item.score|score}}</span>
              <span class="info">{{item.comment}}</span>
               
            <p class="price">
                <span>{{item.price}}</span>
                <span>{{item.area}}</span>
            </p>
            <div class="title">
               {{item.desc}}
              
            </div>
          </div>
        </div>
      </li>
    </ul>
   
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props:['infos'],
  filters:{
    star(mes){
        return{
          width:mes*100/5+"%"
        }
    },
    score(mes){
      return mes.toFixed(1)
    }
  },
  methods:{
    palace(item){
     this.$store.commit("getpalace",item.title);
    }
  }
};
</script>
<style scoped>
.like>h3{
  padding: 0 1rem;
}
.list {
 padding: 1rem;
}
.list > li {
    display: flex;
   
}
.list>li>.imgs{
    flex: 2;
    display: flex;
    align-items: center;
}
.list>li>.imgs>img{
  display: inline-block;
    width: 9rem;
    height: 9rem;
    
}
.content {
  
   flex: 5;
  padding: 1rem 0 0 1rem;
  box-sizing: border-box;
}
.content > p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.icon{
    font-size: 0;
}
.icon>.isbuli{
  display: inline-block;
  
  
}
.icon-wrap{
  float: left;
   position: relative;

}
.icon-wrap>.bulibuli{
    display:inline;
    position: absolute;
    left: 0;
    top: 0;
   overflow: hidden;
  
}

.icon-wrap>.bulibuli>.icon-xingxing::before{
   color: orangered;
}

.icon>.info,.comment{
    padding-left: 1rem;
    font-size: 1.5rem
}
.comment{
  color: orange;
}
.comment::after{
  display: inline-block;
  content: "  分"

}
.price{
     font-size: 2rem;
     margin-top:1rem;
    
    
}
.price>span:first-child{
     color:orange;
}
.price>span:nth-of-type(2){
    float: right;
      font-size: 1.5rem;
}
.title{
    padding-top: 1.5rem;
    text-align: center;
    font-size: 1.3rem;
    color: rgb(255, 85, 85);
}
.info::after{
    display: inline-block;
    content: "条评论"
}
.price > span:nth-of-type(1)::before{
 content: "￥";
 font-size:1.3rem;
}
.price > span:nth-of-type(1)::after{
content: "起";
font-size: 1.3rem;
color: silver;
}
</style>

