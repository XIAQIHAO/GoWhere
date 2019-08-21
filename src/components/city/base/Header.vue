<template>
    <div class="header">
        <i class="iconfont icon-fanhui" @click="goback"></i>
        <h4>城市选择</h4>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
  
    methods:{
        goback(){
            this.$router.push('/')
        }
    },
  
}
</script>

<style scoped>
.header{
    position: relative;
   height: 4.4rem;
  background-color: rgb(0,172,216);
  line-height: 4.4rem;
  text-align: center;
  color: white;
  letter-spacing: .3rem;
  
}
i{
    position: absolute;
    display: block;
    left: .6rem;
}
.icon-fanhui::before{
    color: white;
    font-size: 2.1rem;
}
</style>

