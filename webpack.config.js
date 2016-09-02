const webpack = require('webpack');
const path = require('path');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

const autoprefixer = require('autoprefixer');

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
			},  {
			    test: /\.css$/,
			    loaders: [
			      'style-loader',
			      'css-loader'
			    ]
			},  {
			    test: /\.scss$/,
			    exclude: /node_modules/,
			    loaders: [
			      'style-loader',
			      {
			        loader: 'css-loader',
			        query: {
			          sourceMap: true
			        }
			      },
			      {
			        loader: 'sass-loader',
			        query: {
			          outputStyle: 'expanded',
			          sourceMap: true
			        }
			      }
			    ]
			}
		]
	},
	devServer: {
		quiet: true
	},
	plugins: [
		new DashboardPlugin(dashboard.setData)
    ],
    postcss: function () {
    	return [autoprefixer];
    }
}
