<template>
    <div class="weeklist">
        <div class="weeklist-wrap" v-for="weeklist in WeekList" :key="weeklist.id">
            <div class="week-img">
                <img :src="weeklist.imgUrl" alt="">
            </div>
            <div class="info">
               <p>{{weeklist.name}}</p>
               <p>{{weeklist.desc}}</p>
               <div class="price">
                   <span>{{weeklist.price}}</span>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props:["WeekList"]
}
</script>
<style scoped>
.week-img>img{
    width: 100%;
}
.info>p{
    font-size: 1.3rem;
}
.info>p:first-child{
    font-size: 1.8rem;
   
    
}
.info{
    position: relative;
     padding:.5rem 1rem;
     line-height: 2.5rem;
}
.info>.price{
    position: absolute;
    right: 1rem;
    top: 0;
    color: orange;
    font-size: 1.8rem
}
.info>.price>span::before{
    content: "￥";
    font-size: 1.2rem;
    color: orangered;
}
.info>.price>span::after{
    content: "起";
    font-size: 1.2rem;
    color: #666666;
    margin-left: .2rem;
}
</style>

