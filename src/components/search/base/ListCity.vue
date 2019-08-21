<template>
  <div class="show-city">
    <div class="sousuo">
      <span>热门搜索</span>
      <span @click="fn">换一换</span>
    </div>
    <div class="wrap">
      <div class="beaf">
        <div class="left">
          <p>热</p>
          <p>门</p>
          <p>景</p>
          <p>点</p>
        </div>
        <div class="right">
          <ul class="list clearfix">
            <li v-for="item in List.one" :key="item.id">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="br"></div>
    <div class="wrap">
      <div class="beaf beafs">
        <div class="left">
          <p>热门</p>
          <p>城市</p>
        </div>
        <div class="right">
          <ul class="list clearfix lists">
            <li v-for="item in List.two" :key="item.id">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="br"></div>
    <div class="search">
      <a href="javascript:;">搜索身边得景点</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          one: [
            "长沙世界之窗",
            "岳阳平江石牛寨",
            "枫林花海",
            "石岩湖",
            "岳阳楼-君山岛景区",
            "湖北阳新天空之城"
          ],
          two: ["香港", "湘西", "长沙", "常德"]
        },
        {
          one: [
            "衡山",
            "长隆野生动物世界",
            "上海迪士尼乐园",
            "香港迪士尼乐园",
            "天门山深林公园",
            "泰山"
          ],
          two: ["武汉", "赤壁市", "北京", "衡阳"]
        },
        {
          one: [
            "橘子洲",
            "涠洲岛船票",
            "知音号游船",
            "宁乡炭河古城",
            "岳阳海立方海洋公园",
            "泰八达岭长城"
          ],
          two: ["杭州", "张家界", "大理", "衡怀"]
        },
        {
            one:[
                "五尖山国家森林公园",
                "大峡谷",
                "广州白水寨嘉华温泉酒店",
                "白水寨",
                "泰山地下龙宫"
            ],
            two:["厦门","婺源县","南岳区","深圳"]
        },
         {
            one:[
                "五深圳小梅沙海洋世界",
                "明十三陵",
                "小乔墓",
                "白岳阳花语世界",
                "泰山地下龙宫",
                "三醉亭",
                "亚特兰蒂斯失落的空间水族馆"
            ],
            two:["广州","西安","南汝州","三门县"]
        }
      ],
      index: 0
    };
  },
  computed: {
    List() {
      return this.list[this.index];
    }
  },
  methods:{
      fn(){
          this.index+=1;
          this.index = this.index>3?0:this.index
      }
  }
 
};
</script>
<style scoped>
.sousuo {
  background-color: rgb(245, 275, 280);
  height: 4rem;
  padding: 0 1rem;
  line-height: 4rem;
  box-sizing: border-box;
  font-size: 1.3rem;
}
.sousuo > span:first-child {
  float: left;
}
.sousuo > span:last-child {
  float: right;
  color: rgb(0, 172, 216);
}
.wrap {
  padding: 0 1rem;
  box-sizing: border-box;
}
.beaf {
  padding: 1rem 0;
  display: flex;
  height: 8rem;
}
.beaf > .left {
  flex: 1;
  color: skyblue;
  font-size: 1.4rem;
  text-align: center;
  border-right: 0.1rem dashed silver;
}
.beaf > .right {
  flex: 8;
}
.list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  box-sizing: border-box;
  height: 8rem;
  align-items: center;
}
.list > li {
  text-align: center;
  padding: 0 2rem;
  border-right: 1px dashed silver;
  box-sizing: border-box;
  font-size: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.br {
  height: 1px;
  background-color:  rgba(192, 192, 192, 0.5);
}
.beafs {
  height: 4rem;
}
.lists {
  height: 4rem;
}
.lists>li{
    padding: 0;
    width: 25%;
    box-sizing: border-box;
}
.search {
  padding: 1rem;
  box-shadow: 0 1px 0 silver;
}
.search > a {
  display: block;
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
  border: 1px solid rgba(192, 192, 192, 0.5);
  padding: 0.8rem 0;
  text-align: center;
}
</style>


