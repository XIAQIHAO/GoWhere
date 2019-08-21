import axios from 'axios'
//请求home组件的数据接口
axios.interceptors.response.use(result => result.data);
//=>设置响应拦截器：分别在响应成功和失败的时候做一些拦截处理（在执行成功后设定的方法之前，先会执行拦截器中的方法）



export let getHome = ()=>{
return axios.get('/static/mork/index.json')
}
export let getCities = ()=>{
    return axios.get('/static/mork/city.json')
}
export let getImg =(id)=>{
    return axios.get('/static/mork/detail/'+id+'.json')
}
export let getWeek = (id)=>{
    return axios.get('/static/mork/celebra/'+id+'.json');
}