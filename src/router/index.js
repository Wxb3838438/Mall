import Vue from 'vue';
import VueRouter from 'vue-router';

// 解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

// 安装插件
Vue.use(VueRouter);

const Home = () => import('../views/home/home');
const Cart = () => import('../views/cart/cart');
const Category = () => import('../views/category/category');
const Profile = () => import('../views/profile/profile');
const details = () => import('../views/details/Details');
//创建路由对象
const routes = [
	{
		path: '',
		redirect: 'home'
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: '首页'
		}
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			title: '分类'
		}
	},
	{
		path: '/category',
		component: Category,
		meta: {
			title: '购物车'
		}
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			title: '我的'
		}
	},
	{
		path: '/details/:iid',
		component: details,
		meta: {
			title: '详情'
		}
	}
];
const router = new VueRouter({
	routes,
	mode: 'history'
});
//路由守卫
// next必须进行调用
router.beforeEach((to, from, next) => {
	document.title = to.matched[0].meta.title;
	console.log(to);
	next();
});
export default router;
