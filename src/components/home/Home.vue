<template>
    <div>
         <home-header></home-header>
         <div class="gowhere" ref="wrapper">
       <div class="wrap"> 
        <home-swiper></home-swiper>
        <home-nav></home-nav>
        <home-cheap></home-cheap>
        <home-like :infos="likeList"></home-like>
        <home-week :message='weekList'></home-week>
       </div>
       </div>
    </div>    
</template>

<script>
import HomeHeader from './base/HomeHeader'
import HomeSwiper from './base/HomeSwiper'
import HomeNav from './base/HomeNav'
import HomeCheap from './base/HomeCheap'
import HomeLike from './base/HomLike'
import {getHome} from '@/api'
import HomeWeek from './base/HomeWeek'
import BScroll from 'better-scroll'

export default {
    name:'Home',
    data(){
        return{
        likeList:[],
        weekList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomeCheap,
        HomeLike,
        HomeWeek
    },
    created(){
        getHome().then(mes=>{
        let {data:{recommendList,weekendList}} = mes
        this.likeList = recommendList;
        this.weekList = weekendList;
        
        })
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
    }
}
</script>

<style>

.gowhere{
  
  height: 100vh;
 overflow: hidden;

   
}
.gowhere>div{
    padding-top: 4.4rem;
    height:367rem;
}
.items{
    padding: .6rem 0;
    background-color: rgb(245, 245, 245);
    margin: 1rem 0;
}
</style>
