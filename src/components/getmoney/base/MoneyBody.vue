<template>
  <div class="money-body">
    <div class="userinfo">
        <p>尊敬的:<span>{{this.$store.state.users.username}}</span></p>
        <p>电话尾号:<span>{{phone}}</span></p>
    </div>
    <div class="money-info">
      <p>{{this.$store.state.product.title}}</p>
      <div class="timer clearfix">
        <span>
          游玩时间
          <span>{{this.$store.state.product.time}}</span>
        </span>
        <span>{{newday}}</span>
        <i class="iconfont icon-fanhui"></i>
      </div>
      <p>短信接收</p>
    </div>
    <div class="item">
      <span>请选择支付方式</span>
    </div>
    <div class="item items">
      <span class="pay-way">支付方式</span>
      <span class="way">
        <em>微信</em>
        <i class="iconfont icon-fanhui"></i>
      </span>
    </div>
    <div class="item itmes item-money">
        <span>需付款</span>
        <span class="money-right">
           {{total}}
        </span>
    </div>
    <div class="payment">
       <a href="javascript:;" @click="open">
            <el-button type="text"><span class="payfor">立即支付</span></el-button>
       </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        alltotal:"",
        newday:''
    };
  },
 
  computed:{
      total(){
          return this.$store.state.totals+".00"
      },
      phone(){
        let number = [...this.$store.state.users.phone];
         number.splice(0,7);
         return number.join("")
      }
  },
  created(){
      let date = new Date();
          if(this.$store.state.product.on){
              date.setDate(date.getDate()+1)
          }else{
              date.setDate(date.getDate()+2)
          }
            console.log(date.getDay())
          switch(date.getDay()){
              case 1:
                  this.newday = "星期一";
                  break;
                   case 2:
                  this.newday = "星期二";
                  console.log(123)
                  break;
                   case 3:
                  this.newday = "星期三";
                  console.log(456)
                  break;
                   case 4:
                  this.newday = "星期四";
                  break;
                   case 5:
                  this.newday = "星期五";
                  break;
                   case 6:
                  this.newday = "星期六";
                  break;
                   case 0:
                  this.newday = "星期日";
                  break;
          }
          console.log(this.newday)
  },
  methods:{
     open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('h3', { style: 'color: teal' }, '不好意思没有钱玩不起!!!!')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 2000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message:'好的，那打扰了'
          });
          setTimeout(()=>{
            this.$router.push("/");
          },800)
        });
      }
  },
  created(){
    console.log(this.$store.state.users)
  }
};
</script>
<style scoped>
.userinfo{
  padding:1rem;
  letter-spacing: .2rem;
  color: black;
}
.userinfo > p {
  line-height: 3rem;
}
.userinfo > p >span{
  color: rgb(0,172,216);
}
.userinfo > p:nth-of-type(1) >span::after{
  content: "先生/女士";
  letter-spacing: 0;
  color:silver;
  
}
.money-info {
  padding: 2rem 1rem;
  box-sizing: border-box;
  background-color: #fff;
}
.money-info > p:nth-of-type(1) {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 2rem;
}
.timer {
  line-height: 4rem;
  font-size: 1.6rem;
}
.timer > i,
.way > i {
  display: inline-block;
  transform: rotate(180deg);
  float: right;
}
.timer > .icon-fanhui::before {
  color: silver;
}
.way > .icon-fanhui::before {
  color: rgb(0, 172, 216);
}
.item {
  
  padding: 1.5rem 1rem;
  font-size: 1.3rem;
}
.items {
  background-color: white;
  padding: 3rem 1rem;
  border-bottom: 0.1rem solid rgb(245, 245, 245);
  border-top: 0.1rem solid rgb(245, 245, 245);
  font-size: 2rem;
}
.way {
  float: right;
}
.way > i {
  float: none;
}
.pay-way{
    color: rgba(192,192, 192, .8);
}
.item-money{
    font-size: 2.2rem;
    padding: 4rem 1rem;
    color: black;
}
.money-right{
    float: right;
}
.money-right::before{
    content: "￥"
}
.payment{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
}
.payment > a{
    display: block;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    text-decoration: none;
    background-color: orangered;
    border-radius: .5rem;
}
.payfor{
  color: white;
}
</style>
