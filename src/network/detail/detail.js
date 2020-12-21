import { request } from '../requset';
export function DetailData(iid) {
	return request({
		url: 'http://152.136.185.210:7878/api/m5/detail',
		params: {
			// type,
			iid
		}
	});
}
export function recommends() {
	return request({
		url: 'http://152.136.185.210:7878/api/m5/recommend'
	});
}
export class itemShopInfo {
	constructor(result, itemInfo) {
		//标题
		this.title = itemInfo.title;
		// 价格
		this.price = itemInfo.price;
		// 折前价格
		this.lowPrice = itemInfo.lowPrice;
		//几折
		this.discountDesc = itemInfo.discountDesc;
		// 收藏 销量数
		this.columns = result.columns.slice(0, 2);
		this.columns.splice(3, 0, result.shopInfo.services[2].name);
		
		this.services = result.shopInfo.services.slice(0, 3);

		this.desc = itemInfo.desc

	}
}
export class merchantInfo {
	constructor(shopInfo) {
		this.score = shopInfo.score;
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		//商品总数
		this.cGoods = shopInfo.cGoods
		//总销量
		this.cSells = shopInfo.cSells
		// 粉丝数
		this.cFans = shopInfo.cFans
		// 店铺链接
		this.allGoodsUrl = shopInfo.allGoodsUrl
	}
}
