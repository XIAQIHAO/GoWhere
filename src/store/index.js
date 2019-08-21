import Vue from 'vue'
import Vuex from 'vuex'
import { parse } from 'querystring';



Vue.use(Vuex)

export default new Vuex.Store({
    //数据仓库
    state:{
        city:[],
        citys:localStorage.getItem('city'),
        Images:{},
        weekthem:localStorage.getItem('them'),
        product:JSON.parse(localStorage.getItem("products")),
        totals:localStorage.getItem("total"),
        users:{},
        palace:localStorage.getItem("palaces")
    },
    mutations:{
        saveCity(state,value){
            state.city = value
        },
        getCity(state,value){
            state.citys = value
           localStorage.setItem("city",value)
        },
        getImages(state,value){
            state.Images = value;
        },
        getthem(state,value){
            state.weekthem = value
            localStorage.setItem("them",value)
        },
        getproduct(state,value){
            state.product = value;
            localStorage.setItem("products",JSON.stringify(value))
        },
        gettatol(state,value){
            state.totals = value;
            localStorage.setItem("total",value)
        },
        getuser(state,value){
            state.users = value
        },
        getpalace(state,value){
            state.palace = value
            localStorage.setItem("palaces",value)
        }

    }
})