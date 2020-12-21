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
		component: Home
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/details/:iid',
		component: details
	}
];
const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;
