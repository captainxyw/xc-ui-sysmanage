import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_list = (page,size,params) =>{
  //将这个对象数据瓶装成key-value串
  let queryString = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/cms/page/list/'+page+'/'+size + "?" + queryString);
}


