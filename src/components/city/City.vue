<template>
    <div class="city">
      <Header></Header>
      <Search :mes="filterCity"></Search>
      <Cities :hot='hotCities' :city='cities'></Cities>
    </div>
</template>
<script>
import {getCities} from '@/api'
import Header from './base/Header'
import Search from './base/Search'
import Cities from './base/Cities'
export default {
    data(){
        return{
        cities:[],
        hotCities:[],
        filterCity:[]
        }
    },
    components:{
        Header,
        Search,
        Cities
    },
    created(){
        this.getData();
        // this.$store.commit("saveCity",this.cities);
      
       
    },
    methods:{
       async getData(){
         let {data:{city,hotCities,filterCity}} = await getCities();
         this.cities = city;
         this.hotCities = hotCities;
         this.filterCity = filterCity;
        }
    }
}
</script>

<style scoped>

</style>

