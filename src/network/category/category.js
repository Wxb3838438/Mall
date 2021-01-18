import { request } from '../requset';
export function category() {
	return request({
		url: '/category',
		params: {
		}
	});
}

export function Subcategory(maitKey) {
	return request({
		url: '/subcategory',
		params: {
			maitKey
		}
	});
}
export function categoryDetail(miniWallkey) {
	return request({
		url: '/subcategory/detail',
		params: {
			miniWallkey
		}
	});
}