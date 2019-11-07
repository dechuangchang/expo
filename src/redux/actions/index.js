
import {NAVSHOW,DEFAULTMENUKEYS,SETTINGSHOW,LANGUAGE,MENULIST} from '../constants/index';
import axios from '../../utils/ajax';
//导航缩放开关
export const toggleCollapsed = (otype) => {
    return {
        type:NAVSHOW
    }
}
export const setDefaultMenusKeys = (data) => {
  
  return {
      type:DEFAULTMENUKEYS,
      data
  }
}
export const settingChange = (data) => {
  
  return {
      type:SETTINGSHOW
  }
}
export const languageChange = (data) => {
  localStorage.setItem('language',data)
  return {
      type:LANGUAGE,
      data
  }
}

export const getMenuList = (data={}) => dispatch => {
  return axios.get(baseUrl+'/getMenu',{
    params:data
  })
  .then(res => {
    let {data,message,status} = res.data;
    
    if(status == 200){
      dispatch({
        type:MENULIST,
        data:data
      })
    }else{
      message.error(message)
      if(status=='4008'){
        window.location.href="/user.html#/login"
      }
    }
    
  })
}
