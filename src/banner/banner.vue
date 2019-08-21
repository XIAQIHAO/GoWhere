<template>
  <div class="banner" @click="hide">
    <div class="banner-box">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for="(items,index) of List" :key="index">
          <img class="swiper-img" :src="items" alt="去哪儿门票" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
       
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction"
        },
        //循环
        
       
      },
      
    };
  },
  props:['List'],
  methods: {
    hide() {
      this.$emit("hides");
    }
  },
  
};
</script>
<style scoped>
.banner {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  z-index: 11;
}
.banner-box {
  position: absolute;
  width: 100%;
 height: 20rem;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background-color: white;
  color: white;
}
.swiper-img{
    width: 100%;
    height: 25rem;
}
.swiper-img>img{
    width: 100%;
    height: 100%;
}
</style>





