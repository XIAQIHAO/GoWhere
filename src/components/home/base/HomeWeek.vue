<template>
    <div class="weekend">
       <h3>周末去哪儿</h3>
       <div class="wrap" v-for='items in message' :key='items.id'>
        <router-link :to="{name:'Celebra',params:{id:items.id}}" class="img-wrap">
           <img :src="items.imgUrl" alt="去哪儿网" srcset="" @click="them(items)">
        </router-link>
        <div class="info">
            <p class="product-name">{{items.name}}</p>
            <p class="product-desc">{{items.desc}}</p>
        </div>
       </div>
        </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['message'],
    methods:{
        them(value){
            this.$store.commit("getthem",value.name)
            
        }
    }
}
</script>
<style scoped>
.weekend{
    height: 20rem;
    background-color: seagreen;
}
.weekend>h3{
    background-color: rgb(245, 245, 245);
    padding:1rem;
    box-sizing: border-box;
}
.wrap>.img-wrap>img{
    height: 16.5rem;
    vertical-align: top;
    width: 100%;
}
.info{
    padding: .8rem 1rem;
}
.info>p:first-child{
    color: black;
    margin-bottom: .5rem;
    font-size: 1.7rem;
}
.info>p:last-child{
    font-size: 1.3rem;
}
</style>


