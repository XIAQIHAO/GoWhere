<template>
  <div class="home-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        loop:true,
        pagination: {
          el: ".swiper-pagination",
           clickable: true,
           type: "bullets"
        },
        //循环
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
           speed: 800,
           

        
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg"
        },
        {
          id: "002",
          imgUrl:
            "//h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg"
        },
        {
          id: "003",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg"
        },
        {
          id: "004",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/a31023dce497dfebeaced802008c6209.jpg"
        },
        {
          id: "005",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.home-swiper {
  height: 15rem;
}
img {
  height: 15rem;
  width: 100%;
}

.home-swiper >>> .swiper-pagination-bullet-active {
  background-color: white !important;
}
</style>

