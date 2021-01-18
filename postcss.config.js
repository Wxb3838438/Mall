module.exports = {
	plugins: {
		// ...
		'postcss-px-to-viewport': {
			unitToConvert: 'px', //需要转换的单位 默认为px
			viewportWidth: 375, //设计稿的视口宽度
			unitPrecision: 5, //单位转换后保留的精度 也就是小数
			propList: [ '*' ], //需要转换的vw的css属性 比如一些font-size 等属性 通配符*则全部转换
			viewportUnit: 'vw',//指定转换的视口单位 建议使用vw
			fontViewportUnit: 'vw',//指定字体的视口单位 
			selectorBlackList: [],//可以指定不需要转换的css选择器 不会转换视口单位 保持原来的px单位
			minPixelValue: 1,//如果小于1px的单位则不需要转换
			mediaQuery: false,//媒体查询的单位是否需要转化单位
			replace: true,
			exclude: undefined,//忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件如果值是一个正则表达式，那么匹配这个正则的文件会被忽略如果传入的值是一个数组，那么数组里的值必须为正则
			include: undefined,//如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)如果值是一个正则表达式，将包含匹配的文件，否则将排除该文件如果传入的值是一个数组，那么数组里的值必须为正则
			landscape: false,
			landscapeUnit: 'vw',//横屏时使用的单位
			landscapeWidth: 568//横屏时使用的视口宽度
		}
	}
};
