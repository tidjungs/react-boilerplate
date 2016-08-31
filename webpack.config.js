const webpack = require('webpack');
const path = require('path');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
	devtool: 'eval',
	entry: './index.js',
	output: {
		publicPath: '/static/',
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader'
				]
			}
		]
	},
	devServer: {
		quiet: true
	},
	plugins: [
		new DashboardPlugin(dashboard.setData)
    ]
}
