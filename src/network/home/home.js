// import { from } from "core-js/fn/array";
import {request} from '../requset'

export function getHomedata(){
    return request({
        url:'http://123.207.32.32:8000/home/multidata'
    })
}
// http://152.136.185.210:7878
export function Goodslist(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
