<template>
  <div class="promote">
    <div class="promote-wrap">
      <slot name="p"></slot>
    </div>
    <ul class="list clearfix">
      <li v-for="(item,index) in message" :key="item.id">
        <div class="wrap">
          <div class="wrap-l">
            <p>{{item.title}}</p>
            <p style="font-size:1.3rem;margin-top:.3rem">
              <img :src="item.imgUrl" class="sure" />
              <span>{{item.current}}</span>
            </p>
            <ul class="clearfix lists">
              <li v-for="lists in item.style" :key="lists.id">{{lists}}</li>
            </ul>
          </div>
          <div class="wrap-r">
            <a href="javascript:;">
              <em class="price">
                <big>{{item.price}}</big>
              </em>
              <em class="btn" @click="show(index)">预定</em>
            </a>
          </div>
        </div>
      </li>
    </ul>
    <slot name="item"></slot>
    <div class="ticket" v-show="isshow" @click="shows"></div>
    <div class="ticket-box animated bounceInDown" v-show="isshow">
      <div class="demo">
        <div class="hr"></div>
        <div class="ticket-info">
          <h4>{{products.title}}</h4>
          <span class="close" @click="shows"></span>
          <p>
            <span>{{products.price}}</span>
            <span>/张</span>
          </p>
        </div>
        <div class="ticket-select">
          <h5>价格日历</h5>
          <ul class="date clearfix">
            <li>
              <span>今天</span>
              <p>{{newdate}}</p>
            </li>
            <li @click="on=0" :class="{active:on==0}">
              <span>明天</span>
              <p>{{newdate1}}</p>
            </li>
            <li @click="on=1" :class="{active:on==1}">
              <span>后天</span>
              <p>{{newdate2}}</p>
            </li>
            <li>
              <span>其他日期</span>
            </li>
          </ul>
          <p style="color:orange;font-size:1.2rem;margin-top:.5rem;">需要在当天的17:00前预订</p>
        </div>
        <div class="hr" @click="eventBus">立即预订</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: false,
      num: "",
      products: "",
      on:0
    };
  },
  props: ["message"],
  methods: {
    show(index) {
      this.isshow = !this.isshow;
      this.num = index;
      this.products = this.message[this.num];
    },
    shows() {
      this.isshow = !this.isshow;
    },
    eventBus(){
      this.$router.push("/payment")
      let producted = {title:this.products.title,price:this.products.price,time:this.dates,on:this.on}
      this.$store.commit("getproduct",producted)
     this.isshow = false;

    }
  },
  
  computed: {
    newdate() {
      let date = new Date();
      // date.setDate(date.getDate()+info);
      let [month, day] = [date.getMonth() + 1, date.getDate()];
      return month + "月" + day + "日";
    },
    newdate1() {
      let date = new Date();
      date.setDate(date.getDate() + 1);
      let [month, day] = [date.getMonth() + 1, date.getDate()];
      return month + "月" + day + "日";
    },
    newdate2() {
      let date = new Date();
      date.setDate(date.getDate() + 2);
      let [month, day] = [date.getMonth() + 1, date.getDate()];
      return month + "月" + day + "日";
    },
    dates(){
      let date = new Date();
      if(this.on){
        date.setDate(date.getDate() + 2);
        let [year,month, day] = [date.getFullYear(),date.getMonth() + 1, date.getDate()];
        return year+"-"+month + "-" + day;
      }else{
        date.setDate(date.getDate() + 1);
        let [year,month, day] = [date.getFullYear(),date.getMonth() + 1, date.getDate()];
       return year+"-"+month + "-" + day;
      }
  }
  },
  
  
};
</script>
<style scoped>
.promote-wrap {
  padding: 0 1rem;
  box-sizing: border-box;
}
.promote-wrap > p {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(192, 192, 192, 0.1);
}
.list > li {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(192, 192, 192, 0.1);
}
.wrap {
  display: flex;
}
.wrap > .wrap-l {
  flex: 6;
}
.wrap > .wrap-r {
  position: relative;
  flex: 2;
  text-align: center;
}
.wrap > .wrap-r > a {
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  color: orange;
  left: 50%;
  text-decoration: none;
}
.wrap-l .sure {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.2rem;
}
.wrap-r > a > .price::before {
  display: inline;
  content: "￥";
  font-size: 1.3rem;
}
.wrap-r > a > .btn {
  display: block;
  background-color: orange;
  color: white;
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 0.5rem;
}
a {
  -webkit-tap-highlight-color: transparent;
}
.wrap > div {
  padding: 0 1rem;
  box-sizing: border-box;
}
.wrap-l > .lists > li {
  float: left;
  margin-top: 0.3rem;
  font-size: 1rem;
  border: 1px solid skyblue;
  color: skyblue;
  border-radius: 0.2rem;
  padding: 0 0.5rem;
  margin-right: 0.3rem;
}
.item {
  background-color: rgb(245, 245, 245);
  height: 1rem;
}
.ticket {
  position: fixed;
  z-index: 10;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.ticket-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 10;
}
.demo {
  position: relative;
  padding: 1rem 0 4.5rem 0;
}
.demo > .hr {
  position: absolute;
  height: 3.5rem;
  width: 100%;
  text-align: center;
  background-color: orange;
  left: 0;
  bottom: 0;
  color: white;
  line-height: 3.5rem;
}

.demo h4 {
  font-size: 1.6rem;
}
.ticket-info {
  position: relative;
  padding-bottom: 2rem;
  padding-right: 2rem;
}
.ticket-info p > span:first-child {
  color: orange;
  font-size: 1.8rem;
}
.ticket-info p > span:first-child::before {
  display: inline;
  content: "￥";
  font-size: 1.2rem;
}
.ticket-info p > span:last-child {
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
}
.ticket-info .close {
  position: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.ticket-info .close::after,
.ticket-info .close::before {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 1px;
  content: "";
  background-color: rgba(0, 0, 0, 0.5);
  top: 50%;
  transform: translateY(-50%);
}
.ticket-info .close::after {
  transform: rotate(45deg);
}
.ticket-info .close::before {
  transform: rotate(-45deg);
}
.ticket-select > ul {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.ticket-select > ul > li {
  width: 23%;
  border: 0.1rem solid rgb(192, 192, 192);
  border-radius: 0.3rem;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 1.3rem;
}
.ticket-select > ul > li:first-child {
  border: 0.1rem solid rgba(192, 192, 192, 0.8);
  color: rgba(192, 192, 192, 0.8);
}

.active{
  background-color: rgb(0, 172, 216) !important;
  color: white !important;
}
.ticket-select > ul > li:nth-of-type(4) {
  position: relative;
}
.ticket-select > ul > li:nth-of-type(4) > span {
  display: block;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
</style>


