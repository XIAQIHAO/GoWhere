<template>
  <div class="recomend">
    <div class="ticket" ref="ticket" :style="testobj">
      <ul class="list">
        <li :class="{styles:cur==0}" @click="handlclick(0)">门票</li>
        <li :class="{styles:cur==1}" @click="handlclick(1)">一日游</li>
      </ul>
    </div>
    <div class="recod" v-for="item in calendarInfo" :key = "item.id">
      <div class="h3" ref="heavn">
        <p>{{item.title}}</p>
      </div>

      <div>
        <div>
          <div class="h3" v-for="items in item.result" :key="items.id">
            <p class="clearfix" @click="show(items)">
              <em>{{items.subtitle}}</em>
              <span>
                <em>{{items.price}}</em>
                <i class="iconfont icon-fanhui" :style="items.transform"></i>
              </span>
            </p>
            <promote :message="message" v-show="items.ishow"></promote>
          </div>
        </div>
      </div>

      <div class="item"></div>
    </div>
  </div>
</template>
<script>
import promote from "@/components/detail/base/promote";
export default {
  data() {
    return {
      cur: 0,
      testobj: {},
      styles:{},
      calendarInfo:[ 
        {
         result:[
             {price:128,subtitle:"[全天]中高考学生专享票",ishow:false,transform:''},
              {price:288,subtitle:"奥运周年夜场票",ishow:false,transform:''}
         ],
          title: "活动票",
         
        },
        {
         result:[
             {price:699,subtitle:"[全天]成人票",ishow:false,transform:''},
              {price:460,subtitle:"[夜场]成人票",ishow:false,transform:''}
         ],
          title: "门票",
           transform:''
        },
        {
         result:[
             {price:180,subtitle:"成人票",ishow:false,transform:''},
              {price:220,subtitle:"儿童票",ishow:false,transform:''}
         ],
          title: "蹦床馆",
           transform:''
        },
        {
         result:[
             {price:400,subtitle:"单人年卡",ishow:false,transform:''},
              {price:220,subtitle:"北京欢乐谷花橙畅游卡成人票",ishow:false,transform:''}
         ],
          title: "年卡",
           transform:''
        },
        {
          result:[
            {price:188,subtitle:"[天津出发]北京欢乐谷一日游",ishow:false,transform:''}
          ],
          title:"一日游",
          transform:''
        }
      ],
      styles: {}
    }
  },
  props: ["message"],
  methods: {
    handle() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 608) {
        this.testobj = {
          position: "fixed",
          width: "100%",
          top: "40px",
          background: "rgba(192, 192, 192, 0.2)",
          zIndex: "10"
        };
      } else {
        this.testobj = {};
      }
    },
    show(items) {
      items.ishow = !items.ishow;
      if(items.ishow){
        items.transform ={
          transform: 'rotate(90deg)',
          transition:'all .3s' 
                }
      }else{
       items.transform ={
          transform: 'rotate(-90deg)',
          transition:'all .3s'  
                }
      }
    },
    handlclick(bool){
      if(bool){
        this.cur = 1
        document.documentElement.scrollTop = this.$refs.heavn[3].offsetTop+10;
      }else{
        this.cur = 0
        document.documentElement.scrollTop = this.$refs.heavn[0].offsetTop-43;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
  },
  components: {
    promote
  },
 
};
</script>
<style scoped>
.recomend {
  width: 100vw;
  overflow: hidden;
}
.recod {
  padding: 0 1rem;
  box-sizing: border-box;
}
.h3 > p {
  font-size: 1.4rem;
  line-height: 4rem;
  background-color: white;
  margin: 0 -1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  color: #666666;
}
.h3 > p > span {
  float: right;
}
.h3 > p > span {
  color: orange;
  font-size: 2rem;
}
.h3 > p > span > em::before {
  content: "￥";
}
.h3 > p > span > em::before,
.h3 > p > span > em::after {
  display: inline;
  font-size: 1.3rem;
}
.h3 > p > span > em::after {
  content: "起";
  color: rgba(192, 192, 192, 1);
  font-size: 1.1rem;
  margin-left: 0.2rem;
}
.h3 > p > span > i {
  display: inline-block;
  transform: rotate(-90deg);
  margin-left: 0.5rem;
}
.h3 > p > span > .icon-fanhui::before {
  color: silver;
  font-size: 1.4rem;
  font-weight: bold;
}
.recod > .h3:first-child > p {
  font-size: 1.6rem;
}
.recod > .h3 {
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 0 1rem;
  border-bottom: 0.1rem solid rgba(192, 192, 192, 0.2);
  background-color: rgba(192, 192, 192, 0.2);
  box-sizing: border-box;

}
.list {
  display: flex;
  justify-content: space-around;
  line-height: 4rem;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid rgba(192, 192, 192, 0.2);
  box-sizing: border-box;
  background-color: white;
}
.promote{
    background-color: rgba(192, 192, 192, 0.2);
}
.list > li {
  padding: 0 2rem;
  box-sizing: border-box;
}
.styles {
  border-bottom: 0.2rem solid rgb(0, 172, 216);
}
.item {
  background-color: rgb(245, 245, 245);
  height: 1rem;
  margin: 0 -1rem;
  box-sizing: border-box;
}
</style>

