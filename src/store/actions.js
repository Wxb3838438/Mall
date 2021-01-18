// import { from } from "core-js/fn/array";
import { ADD_COUNTER, ADD_TO_CART } from './mutation-type';
export default {
	// 默认有一个参数state  就是上面的数据状态
	pushCart(context, payload) {
		return new Promise((resolve,reject) =>{
			// state.addCartList.push(payload);
		// 遍历已经添加的商品 对比每个item的id是否存在
		let oldProduct = context.state.addCartList.find((item) => {
			return item.iid === payload.iid;
		});
		// 如果遍历找到了那就将数据的count加一
		if (oldProduct) {
			// oldProduct.count += 1;
			// 如果没找到就push新的商品
			context.commit(ADD_COUNTER, oldProduct);
			resolve('当前商品数量+1')
		} else {
			payload.count = 1;
			// context.state.addCartList.push(payload);
			context.commit(ADD_TO_CART, payload);
			resolve('添加了新的商品')
			reject()
			
		}
		})
	}
};
