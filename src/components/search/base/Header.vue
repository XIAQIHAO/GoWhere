<template>
<div>
    <div class="header clearfix">
        <router-link to="/" tag="i" class="iconfont icon-fanhui"></router-link>
        <div class="header-search">
        
           <input type="text" placeholder="输入城市或景点">
        </div>
        <router-link to='' tag="div" class="header-right">
            <span>搜索</span>
         
        </router-link>
      
    </div>
    <div class="itter"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>
<style scoped lang='stylus'>
.header>i,.header-search>i
    text-align: center
    display: block
    position: absolute
    left: .5rem
  

.header>.icon-fanhui
    font-size: 2rem
   

.header
    position:relative
    padding:0 5rem 0 3.5rem
    height: 5rem
    
    line-height: 5rem
    box-sizing: border-box
    color: sliver



.header>.header-search
    position: relative
    float: left
    width: 100%
    height:100%
   

.header>.header-search>input
    height: 3.5rem
    width: 100%
    border-radius: 2.5rem
    border: none;
    text-align: center
    background-color: rgb(245, 275, 280)
    font-size :1.4rem
    
    

.header-right
    position: absolute;
    top:0
    right:0
    width: 6rem
    height: 100%
    font-size: 1.5rem
    text-align: center
    
   .itter
   height .5rem
   background-color: rgb(245, 245, 245)
   
.icon-fanhui::before{
    color:black
}
</style>


