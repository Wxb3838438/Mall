import { debounce } from "common/utils";
import BackTop from "components/content/BackTop/BackTop.vue";
export let itemImgLoad = {
	data() {
		return {
			imgLoadOffFn:null,
			newReresh:null,
		};
	},
	mounted() {
		//内存中的模板已挂载到页面中
		let refresh = debounce(this.$refs.scroll.refresh, 250);
		this.imgLoadOffFn = () => {
			/**
           * 解决scroll计算高度bug
           * 在Goodsitem子组件发射事件总线
           * 接收到事件之后调用scroll的重新计算高度的方法*/
			refresh();
		};
		//内存中的模板已挂载到页面中
		this.$bus.$on('itemImgLoad', this.imgLoadOffFn);
	}
};
export let showbackTop = {
	data() {
		return {
			//回到顶部
			isshowBackTop: false,
		}
	},
	components:{
		BackTop
	}
}