<template>
  <div class="cheap">
    <ul class="list clearfix">
      <li :class="{active:cur==1}" @click="cur=1">今日特惠</li>
      <li :class="{active:cur==2}" @click="cur=2">特惠门票</li>
      <li :class="{active:cur==3}" @click="cur=3">特惠一日游</li>
    </ul>
    <div class="box">
      <ul class="lists clearfix animated fadeIn" v-show="cur==1">
        <li v-for="item in list1" :key="item.id">
          <img :src="item.imgurl" alt />
          <h4>{{item.thema}}</h4>
          <p>{{item.title}}</p>
          <span>{{item.price}}</span>
        </li>
      </ul>
      <ul class="lists clearfix animated fadeIn" v-show="cur==2">
        <li v-for="item in list2" :key="item.id">
          <img :src="item.imgurl" alt />
          <h4>{{item.thema}}</h4>
          <p>{{item.title}}</p>
          <span>{{item.price}}</span>
        </li>
      </ul>
      <ul class="lists clearfix animated fadeIn" v-show="cur==3">
        <li v-for="item in list3" :key="item.id">
          <img :src="item.imgurl" alt />
          <h4>{{item.thema}}</h4>
          <p>{{item.title}}</p>
          <span>{{item.price}}</span>
        </li>
      </ul>
    </div>
    <div class="items"></div>
  </div>
</template>
<script>
 
export default {
   
    data(){
        return{ 
            cur:'1',
            list1:[
                {
                    id:'001',
                    imgurl:'//imgs.qunarzz.com/vs_ceph_vs_tts/c557105c-132c-4d23-8dc7-19acdf16e64e.jpg_r_480x320x90_85100b2e.jpg',
                    thema:'长沙-张家界 3天跟团游',
                    title:'纯玩0购物│住碧桂园│张家界天门山+凤凰玻璃桥+黄龙洞3日│赠芙蓉镇+美食宴',
                    price:'798'
                      
                
                },
                 {
                    id:'002',
                    imgurl:'//imgs.qunarzz.com/p/tts7/1802/89/8dda8cbe05153e02.jpg_r_480x320x90_0a6343fa.jpg',
                    thema:'长沙-刘少奇故居 1天跟团游',
                    title:'顺达专营 韶山毛泽东故居+滴水洞+刘少奇故居一日游二环主干道可接',
                    price:'121'
                      
                
                },
                 {
                    id:'003',
                    imgurl:'//imgs.qunarzz.com/vs_ceph_vs_tts/adbf3ff8-0176-4394-a841-12098440a4cb.jpg_r_480x320x90_80f4de02.jpg',
                    thema:'长沙-海南 5天跟团游',
                    title:'三亚5日暑期减200🔥+1元升6天分界洲岛南湾猴岛亚龙湾赠沙滩派对网红夜市',
                    price:'1410'
                      
                
                },
                 {
                    id:'004',
                    imgurl:'//imgs.qunarzz.com/p/tts8/1709/b8/d2e54f10367b3e02.jpg_r_480x320x90_349c646e.jpg',
                    thema:'长沙-蜈支洲岛 5天跟团游',
                    title:'海岛特惠0自费！升级1晚海景房+三亚蜈支洲岛+西岛+南山|拉斯维加斯秀+篝火',
                    price:'1350'
                      
                
                },
            ],
            list2:[
                 {
                    id:'001',
                    imgurl:'//imgs.qunarzz.com/sight/p0/1608/4f/4fc3f5a1b838f279a3.water.jpg_256x144_4387e536.jpg',
                    thema:'[北京]【中高考生专享】北京杜莎夫人蜡像馆中高考生票 ',
                    title:'中轴线上的巨星之旅',
                    price:'65'
                      
                
                },
                 {
                    id:'002',
                    imgurl:'//imgs.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_256x144_22f0e440.jpg',
                    thema:'[北京]【中高考生专享】太平洋海底世界考生专享票',
                    title:'漫步海底，欣赏五彩缤纷的海底生物',
                    price:'60'
                      
                
                },
                 {
                    id:'003',
                    imgurl:'//imgs.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_256x144_ba9e0ef5.jpg',
                    thema:'[北京]北京故宫大门票+资深导游讲解（配无线耳麦）  *成人票',
                    title:'我爱北京天安门，天安门上太阳升',
                    price:'89'
                      
                
                },
                 {
                    id:'004',
                    imgurl:'//imgs.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_256x144_f673ffc7.jpg',
                    thema:'[北京]【活动票】金海湖成人票',
                    title:'峰峦叠翠，野卉生香，云影波光，美景如画',
                    price:'19.9'
                      
                
                },
            ],
            list3:[
                 {
                    id:'001',
                    imgurl:'//imgs.qunarzz.com/p/tts3/1902/8e/7cc7a29f9f45f102.jpg_256x144_c3b64c73.jpg',
                    thema:'长沙出发一日游',
                    title:'【真正纯玩可含餐】长沙到花明楼-韶山毛主席故居-纪念馆一日游',
                    price:'45'
                      
                
                },
                 {
                    id:'002',
                    imgurl:'//imgs.qunarzz.com/p/tts1/1806/df/01d49a0568747f02.jpg_256x144_e72bb494.jpg',
                    thema:'长沙出发一日游',
                    title:'【真正纯玩/故居VIP通道】花明楼+韶山主席故居+滴水洞一日',
                    price:'88'
                      
                
                },
                 {
                    id:'003',
                    imgurl:'//imgs.qunarzz.com/p/tts4/1807/10/5373a899d2ba7c02.jpg_256x144_8bfe2e2e.jpg',
                    thema:'长沙出发一日游',
                    title:'【长沙特色游】橘子洲+岳麓山+省博物馆+天心阁+火宫殿一日',
                    price:'89'
                      
                
                },
                 {
                    id:'004',
                    imgurl:'//imgs.qunarzz.com/p/tts1/1904/93/a33ffbb39654c102.jpg_256x144_c9f11e38.jpg',
                    thema:'张家界一日游',
                    title:'【2-8人小包团】天门山一日游（上门接送+索道+玻璃栈道）',
                    price:'188'
                      
                
                },
            
            ]
        }
    },
    
}
</script>
<style scoped>


.list > li {
  float: left;
  width: 8rem;
  border: 1px solid silver;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  margin-left: 1.3rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
}
.active {
  background-color: rgb(29, 192, 200);
  color: white;
}
.lists {
  padding:1.3rem 1.3rem 0;
  box-sizing: border-box;
}
.lists > li {
  float: left;
  width: 50%;
  padding-bottom: 1rem;
  box-sizing: border-box;
}
.lists > li:nth-of-type(2n-1) {
  padding-right: 1rem;
}
.lists > li > img {
  width: 100%;
  border-radius: 0.3rem;
  height: 11rem;
}
.lists > li > p,.lists > li > h4{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
}
.lists > li > p {
    font-size: 1.4rem;
 
}
.lists > li > span {
  color: rgb(255, 161, 0);
  font-size: 1.8rem;
  font-weight: bold;
}
.lists > li > span::before {
  display: inline;
  content: "￥";
}
.lists > li > span::after{
   display: inline;
  content: "起";
  font-size: 1.2rem;
  
}
</style>


