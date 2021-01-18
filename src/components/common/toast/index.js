import Toast from './Toast';

const obj = {};
//当这个函数执行时  整个vue会作为参数传过来
obj.install = function(vue) {
	// 1 创建组件构造器
	const toastContrustor = vue.extend(Toast);
	// 2 new的方式 根据组件构造器 可以创建出来一个组件对象
	const toast = new toastContrustor();
	// 3 将组建对象 手动挂载到某一个元素上
	toast.$mount(document.createElement('div'));
	// 4 toast.$el 对应的就是div
	document.body.appendChild(toast.$el);

	vue.prototype.$toast = toast;
};

export default obj;
