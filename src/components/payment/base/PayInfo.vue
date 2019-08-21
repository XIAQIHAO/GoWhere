<template>
  <div class="pay-info">
    <div class="pay-header">
      <span>订单详情</span>
      <i class="iconfont icon-fanhui" @click="back"></i>
    </div>
    <div class="pay-product">
      <h3>{{$store.state.product.title}}</h3>
      <ul class="list clearfix">
        <li>
          <img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" alt />
          <span>{{this.$store.state.product.time}}</span>
        </li>
        <li>
          <img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" alt srcset />
          <span>随时退</span>
        </li>
      </ul>
      <div class="pay-money">
        <span>{{$store.state.product.price}}</span>
        <a href="javascript:;">预订须知</a>
      </div>
    </div>
    <div class="item"></div>
    <div class="account">
      <div class="account-box">
        <span>购买数量</span>
        <em>
          <span>最多买{{num}}</span>张
        </em>
        <div class="account-form">
          <span @click="count(0)">-</span>
          <input type="text" v-model="counts" />
          <span @click="count(1)">+</span>
        </div>
      </div>
    </div>
    <div class="item"></div>

    <div class="custom clearfix">
      <form action class="clearfix">
        <p>
          <label for>游客</label>
          <input type="text" placeholder="请填写姓名" @blur="on(1)" v-model="username" @click.stop="off" />
        </p>
        <div class="alert clearfix">
          <p :style="style1">{{p1}}</p>
        </div>
        <p>
          <label for>手机号</label>
          <input type="text" placeholder="请填写手机号" @blur="on(2)" v-model="phone" @click.stop="off" />
        </p>
        <div class="alert clearfix">
          <p :style="style2">{{p2}}</p>
        </div>
        <p>
          <label for>身份证</label>
          <input type="text" placeholder="请填写正确的身份证" @blur="on(3)" v-model="idcard" @click.stop="off" />
        </p>
        <div class="alert clearfix">
          <p :style="style3">{{p3}}</p>
        </div>
        <div class="submits" :class="{posstyle:pos}">
          <div class="price">
            <p>
              <span>{{total}}</span>
            </p>
          </div>
          <div class="sub" @click="submits">提交订单</div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counts: 1,
      username: "",
      phone: "",
      idcard: "",
      ok1: false,
      ok2: false,
      ok3: false,
      p1: "",
      p2: "",
      p3: "",
      style1: {},
      style2: {},
      style3: {},
      num: ""
     
    };
  },
   props:['pos'],
  methods: {
    back() {
      this.clear();
      this.$router.back();
    },
    clear() {
      this.username = this.phone = this.idcard = "";
      this.p1 = this.p2 = this.p3 = "";
      this.counts = 1;
      this.ok1 = this.ok2 = this.ok3 = false;
    },
    count(bool) {
      if (bool) {
        this.counts++;
        this.counts = this.counts > this.num ? this.num : this.counts;
      } else {
        this.counts--;
        this.counts = this.counts < 1 ? 1 : this.counts;
      }
    },
    on(num) {
      if (num == 1) {
        this.name();
         
      } else if (num == 2) {
        this.phones();
        
      } else if (num == 3) {
        this.idcards();
        
      }
       
       
    },
    off(){
      this.$emit("updown")
      
    },
  
    
    submits() {
      if (this.ok1 && this.ok2 && this.ok3) {
        this.$message({
          message: "恭喜你，订单预订成功",
          type: "success"
        });
        setTimeout(() => {
          this.$router.push("/getmoney");
          this.$store.commit("gettatol", this.total);
          let user = { username: this.username, phone: this.phone };
          this.$store.commit("getuser", user);
          this.clear();
        }, 1000);
      } else {
        this.name();
        this.phones();
        this.idcards();
        this.$message.error("请输入正确的用户信息!");
      }
    },
    name() {
      if (this.username.trim().length == 0 || this.username.trim().length > 5) {
        this.p1 = "请输入正确的姓名";
        this.style1 = {
          color: "orange"
        };
      } else {
        this.ok1 = true;
        this.p1 = "输入成功";
        this.style1 = { color: "rgb(0,172,216)" };
      }
    },
    phones() {
      if (this.phone.trim().length != 11) {
        this.p2 = "请输入正确的电话号码";
        this.style2 = {
          color: "orange"
        };
      } else {
        this.ok2 = true;
        this.p2 = "输入成功";
        this.style2 = { color: "rgb(0,172,216)" };
      }
    },
    idcards() {
      if (this.idcard.trim().length != 18) {
        this.p3 = "请输入正确的身份证号码";
        this.style3 = { color: "orange" };
      } else {
        this.ok3 = true;
        this.p3 = "输入成功";
        this.style3 = { color: "rgb(0,172,216)" };
      }
    }
  },
  computed: {
    total() {
      return this.counts * this.$store.state.product.price;
    }
  },
  activated() {
    this.num = ~~(Math.random() * 9 + 1);
  }
};
</script>
<style scoped>
.pay-header {
  height: 4rem;
  background-color: rgb(0, 172, 216);
  line-height: 4rem;
  text-align: center;
  color: white;
}
.pay-header > i {
  display: inline-block;
  position: absolute;
  left: 1rem;
}
.pay-info,
.submits {
  background-color: white;
}
.custom {
  padding-top: 2rem;
}
.pay-product {
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
}
.pay-product > h3 {
  padding-right: 8rem;
  box-sizing: border-box;
}
.pay-product > .list > li {
  float: left;
  line-height: 3rem;
  margin-right: 0.5rem;
}
.pay-product > .list > li > img {
  width: 1.2rem;
  height: 1.2rem;
}
.pay-money {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.2rem;
  color: orange;
  text-align: center;
}
.pay-money > span::before {
  content: "￥";
  font-size: 1.2rem;
  color: orangered;
}
.pay-money > span::after {
  content: "/张";
  font-size: 1.2rem;
  color: silver;
  margin-left: 0.2rem;
}
.pay-money > a {
  display: block;
  color: rgb(0, 172, 216);
  text-decoration: none;
  font-size: 1.5rem;
}
.item {
  background-color: rgb(245, 245, 245);
  height: 1rem;
}
.account {
  padding: 1rem;
  box-sizing: border-box;
}
.account > .account-box {
  height: 3.2rem;

  line-height: 3.2rem;
}
.account-box > em {
  color: silver;
  font-size: 1.3rem;
  margin-left: 0.5rem;
}
.account-box > .account-form {
  float: right;
  font-size: 0;
  border: 0.1rem solid silver;
  box-sizing: border-box;
  height: 3.5rem;
}
.account-form > input {
  border: none;
  height: 3.2rem;
  text-align: center;
  width: 4rem;
  font-size: 1.8rem;
}
.account-form > span {
  display: inline-block;
  font-weight: bold;
  font-size: 1.5rem;
  width: 3.5rem;
  text-align: center;
  box-sizing: border-box;
  background-color: rgb(245, 245, 245);
}
.account-form > span:nth-of-type(1) {
  border-right: 0.1rem solid silver;
}
.account-form > span:nth-of-type(2) {
  border-left: 0.1rem solid silver;
}
.custom {
  font-size: 0;
}

.custom > form > p > label {
  display: inline-block;
  width: 20%;
  font-size: 1.6rem;
}
.custom > form > p {
  padding: 0 1rem;
  height: 4rem;
  line-height: 4rem;
  border-bottom: 0.1rem solid rgb(245, 245, 245);
}
.custom > form > p > input {
  width: 70%;
  color: #666666;
  font-size: 1.6rem;
  float: right;
  height: 100%;
}
.submits {
  position: fixed;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  left: 0;
  bottom: 0;
  box-shadow: 0 0 10px black;
  z-index: 0;
}
.submits > div {
  float: left;
  width: 50%;
  height: 100%;
}
.submits > .price {
  padding-left: 1rem;
  box-sizing: border-box;
  color: orange;
  font-size: 2.5rem;
}
.submits > .price > p > span::before {
  display: inline;
  content: "产品价格￥";
  font-size: 1.3rem;
}
.submits > .sub {
  background-color: orange;
  text-align: center;
  color: white;
  font-size: 2rem;
}
.custom > form > .alert {
  height: 2rem;
  line-height: 2rem;
}
.custom > form > .alert > p {
  width: 70%;
  float: right;
  font-size: 1.2rem;
}
.posstyle{
  position: static;
}
</style>