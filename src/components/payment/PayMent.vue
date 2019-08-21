<template>
    <div class="pay-ment" @click="off">
       <pay-info :pos="ispos" @updown="posshow"></pay-info>
    </div>
</template>
<script>

import PayInfo from './base/PayInfo'
export default {
    data(){
        return{
            ispos:false
        }
    },
    components:{
       
        PayInfo
    },
    methods:{
        off(){
            this.ispos = false;
            console.log(this.ispos);
        },
        posshow(){
            this.ispos = true
            console.log(this.ispos);
        }
    }
}
</script>
<style scoped>
.pay-ment{
    width: 100vw;
    height: 100vh;
    background-color: rgb(245, 245, 245);
}
</style>