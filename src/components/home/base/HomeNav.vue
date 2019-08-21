<template>
  <div class="nav">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for="imgs in List" :key="imgs.id">
        <ul class="list">
          <li v-for="(item,index) in imgs" :key="index" @click="go(index)">
            <img :src="item.imgurl" alt="去哪儿网" srcset />
            <p>{{item.title}}</p>
          </li>
        </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="items"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        //循环

        speed: 800
      },
      list: [
        {
          id: "001",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "景点门票"
        },
        {
          id: "002",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
          title: "故宫"
        },
        {
          id: "003",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          title: "北京必游"
        },
        {
          id: "004",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
          title: "水上乐园"
        },
        {
          id: "005",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          title: "一日游"
        },
        {
          id: "006",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
          title: "古水北镇"
        },
        {
          id: "007",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          title: "动植物园"
        },
        {
          id: "008",
          imgurl:
            "http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png",
          title: "北京野生动物园"
        },
        {
          id: "009",
          imgurl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
          title: "北京世园会"
        },
        {
          id: "010",
          imgurl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png",
          title: "文惠卷"
        }
      ]
    };
  },
  computed: {
    List() {
      let images = [];
      this.list.forEach((item, index) => {
        let page = ~~(index / 8);
        if (!images[page]) {
          images[page] = [];
        }
        images[page].push(item);
      });
      return images;
    }
  },
  methods: {
    go(index) {
      switch (index) {
        case 0:
          this.$router.push({
            name: "Detail",
            params: { id: "0001" }
          });
          break;
        case 1:
          this.$router.push({
            name: "Detail",
            params: { id: "0004" }
          });
          break;
        case 2:
          this.$router.push({
            name: "Detail",
            params: { id: "0005" }
          });
          break;
        case 3:
          this.$router.push({
            name: "Detail",
            params: { id: "0005" }
          });
          break;
        case 4:
          this.$router.push({
            name: "Detail",
            params: { id: "0006" }
          });
          break;
        case 5:
          this.$router.push({
            name: "Detail",
            params: { id: "0007" }
          });
          break;
        case 6:
          this.$router.push({
            name: "Detail",
            params: { id: "0008" }
          });
          break;
        case 7:
          this.$router.push({
            name: "Detail",
            params: { id: "0009" }
          });
          break;
      }
    }
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
  padding: 1rem 0;
  width: 100%;
}
.swiper-pagination-bullets {
  bottom: 0 !important;
}

.nav ul > li {
  width: 25%;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.nav ul > li > img {
  width: 5.5rem;
  height: 5.5rem;
}
.nav >>> .swiper-pagination-bullet-active {
  background-color: orange !important;
}
</style>

