const webpack = require('webpack');
const path = require('path');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'eval',
	entry: [
		'./ui/main.js',
		'./ui/theme/element.scss' // for global css
	],
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
			          sourceMap: true,
			          module: true,
    				  localIdentName: '[local]___[hash:base64:5]'
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
		historyApiFallback: true,
		quiet: true,
		proxy: {
			'/api/*': {
				target: 'http://127.0.0.1:5000'
			}
		}
	},
	plugins: [
		new DashboardPlugin(dashboard.setData)
    ],
    postcss: function () {
    	return [autoprefixer];
    }
}
