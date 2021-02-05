const path = require('path');
const {
	override,
	addLessLoader,
	addPostcssPlugins,
	fixBabelImports,
	addWebpackAlias,
} = require('customize-cra');
// 打包配置
const addCustomize = () => (config) => {
	if (process.env.NODE_ENV === 'production') {
		// 关闭sourceMap
		config.devtool = false;
	}
	return config;
};
// 跨域配置
const devServerConfig = () => (config) => {
	return {
		...config,
		// 服务开启gzip
		// compress: true,
		// proxy: {
		// 	'/api': {
		// 		target: 'xxx',
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/api': '/api',
		// 		},
		// 	},
		// },
	};
};
module.exports = {
	webpack: override(
		fixBabelImports('import', {
			libraryName: 'antd',
			style: 'css',
		}),
		addWebpackAlias({
			['@']: path.resolve(__dirname, 'src/'),
		}),
		addLessLoader({
			javascriptEnabled: true,
			modifyVars: { '@brand-primary': '#752ea4' },
			localIdentName: '[local]--[hash:base64:5]', // 自定义 CSS Modules 的 localIdentName
		}),
		addPostcssPlugins([
			require('postcss-pxtorem')({
				rootValue: 75,
				propList: ['*'],
				minPixelValue: 2,
				// selectorBlackList: ['am-'],
			}),
		]),
		addCustomize()
	),
};
