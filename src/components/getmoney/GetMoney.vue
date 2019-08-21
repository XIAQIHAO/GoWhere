<template>
    <div class="get-money">
        <money-top></money-top>
        <money-body></money-body> 
    </div>
</template>
<script>
import MoneyTop from './base/MoneyTop'
import MoneyBody from './base/MoneyBody'
export default {
    data(){
        return{

        }
    },
    components:{
        MoneyTop,
        MoneyBody
    }
}
</script>
<style scoped>
.get-money{
    height: 100vh;
    background-color: rgb(245, 245, 245);
}
</style>