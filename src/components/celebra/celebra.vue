<template>
 <div class="clcbra">
   <week-top></week-top>
   <week-list :WeekList="WeekList"></week-list>
 </div>
</template>

<script>
import {getWeek} from '@/api'
import WeekTop from './base/weektop'
import WeekList from './base/weeklist'
export default {
    data(){
        return{
            WeekList:[]
        }
    },
    created(){
        this.getDate();
    },
    methods:{
        async getDate(){
             let {data:{CeleWeek}} =  await getWeek(this.$route.params.id);
            this.WeekList = CeleWeek;
            
        }
    },
    components:{
        WeekTop,
        WeekList
    }
}
</script>
<style scoped>

</style>