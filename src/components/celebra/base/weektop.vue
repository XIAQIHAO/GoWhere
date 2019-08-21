<template>
    <div class="weektop">
        <div class="header" :style="fixed">
            <span>{{this.$store.state.weekthem}}</span>
            <i class="iconfont icon-fanhui" @click="back"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         fixed:{}   
        }
        
    },
    methods:{
        back(){
            this.$router.back();
        },
        handle(){
            let scrollTop = document.documentElement.scrollTop;
            this.fixed = scrollTop>100?{position:'fixed',top:'0',left:'0',width:'100%',opacity:(scrollTop-40)/100}:{}
        }
    },
    mounted(){
        window.addEventListener("scroll",this.handle)
    }
}
</script>
<style scoped>
.header{
    height: 4rem;
    background-color: rgb(0,172,216);
    line-height: 4rem;
    text-align: center;
    color: white;

}
.header>i{
    display: inline-block;
    position: absolute;
    left: 1rem;
}

</style>