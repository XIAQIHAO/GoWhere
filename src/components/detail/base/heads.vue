<template>
    <div class="heads">
        <div class="top" v-show="!shows" :style="styles"><router-link class="iconfont icon-fanhui" to="/" tag="i"></router-link>{{this.$store.state.Images.title}}</div>
        <div class="box-img">
            <img :src="this.$store.state.Images.imgUrl" alt="" @click.stop="show">
            <router-link class="back" to="/" tag="span">
                <i class="iconfont icon-fanhui" v-show="shows"></i>
            </router-link>
           <div class="img-desc">
               <span>{{this.$store.state.Images.num|nums}}</span>
               <p>{{this.$store.state.Images.title}}</p>
           </div>
        </div>
        <banner v-if="isshow" @hides="hide" :List="Images.imgList"></banner>
    </div>
</template>
<script>
import banner from '@/banner/banner'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
               isshow:false,
               shows:true,
               styles:{},
               ImgList:{}
               
        }
    },
    props:['Images'],
    components:{
        banner
    },
    methods:{
        show(){
            this.isshow = true;
        },
        hide(){
            this.isshow  = false
        },
        handle(){
            let scrollTop = document.documentElement.scrollTop;
            if(scrollTop>40){
                this.shows = false
                this.styles = {
                    opacity:(scrollTop-50)/200
                }
               
            }else{
                this.shows = true
            }
        }
       
        
    },
    filters:{
        nums(mes){
               if(mes<10){
                   return "0"+mes+"张"
               }else{
                   return mes+"张"
               }
            }
        
    },

    mounted(){
        window.addEventListener('scroll',this.handle)
          
    },
   
 
    
   
    
  
   
}
</script>
<style scoped>
.box-img{
    position: relative;
}
.box-img>img{
    width: 100%;
    height: 18rem;
}
.back{
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0,.5);
    top: .5rem;
    left: .5rem;
    padding: .8rem;
    border-radius: 50%;
}
.img-desc{
   position: absolute;
   left: 0;
   bottom: 0;
   padding: 1rem;
   box-sizing: border-box;
   color: white;
}
.img-desc>span{
    padding: .1rem 1rem;
     background-color: rgba(0, 0, 0,.5);
     border-radius: 1rem;
     font-size: 1.3rem;

}
.img-desc>p{
    font-size: 1.8rem;
    margin-top: .5rem;
}
.top{
    position: fixed;
    left:0;
    top: 0;
    width: 100%;
    background-color: rgb(0,172,216);
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    z-index: 10;
    color: white;
    box-sizing: border-box;
    
}
.top>i{
    position: absolute;
    left: .5rem;
    float: left;
   

}
</style>


