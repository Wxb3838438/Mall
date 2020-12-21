// import { from } from "core-js/fn/array";
import {request} from '../requset'

export function getHomedata(){
    return request({
        url:'/home/multidata'
    })
}
// http://152.136.185.210:7878
export function Goodslist(type,page){
    return request({
        url:'http://152.136.185.210:7878/api/m5/home/data',
        params:{
            type,
            page
        }
    })
}
