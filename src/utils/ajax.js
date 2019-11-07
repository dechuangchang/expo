
//https://blog.csdn.net/frank_come/article/details/80010611
import axios from 'axios'
import Qs from 'qs';
axios.defaults.timeout = 600000;
// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
    
      if (toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (toType(o[key]) === 'object') {
        o[key] = filterNull(o[key])
      } else if (toType(o[key]) === 'array') {
        o[key] = filterNull(o[key])
      }
    }
    return o
}

//整理数据
axios.defaults.transformRequest = (data) => {
    if(data){
        data = filterNull(data)
    }
    if(data instanceof FormData){
        return data
    }else{
        data = Qs.stringify(data);
        return data
    }
    
}


// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        if(config.method=='get'){
            config.params = filterNull(config.params)
        }
        return config;
    },
    error => {
        return Promise.reject(error.response);
    }
);

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
      if(response.data.status=='4008'){
        window.location.href="/user.html#/login"
        return null
      }
      return response;
    },
    error => {
      return Promise.reject(error.response)   // 返回接口返回的错误信息
    }
);
export default axios;