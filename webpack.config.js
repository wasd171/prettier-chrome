const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

const commonPlugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(
			process.env.NODE_ENV || 'production'
		)
	}),
	new ExtractTextPlugin('styles.css'),
	new CopyWebpackPlugin([
		{
			from: 'src/manifest.json',
			to: 'manifest.json'
		},
		{
			from: 'src/options.html',
			to: 'options.html'
		},
		{
			from: 'src/icon.png',
			to: 'icon.png'
		}
	])
]
const prodPlugins = [new BabiliPlugin()]

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	entry: {
		inject: './src/inject.ts',
		options: './src/options.ts'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	watch: !isProd,
	plugins: isProd ? [...commonPlugins, prodPlugins] : commonPlugins,
	module: {
		loaders: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'resolve-url-loader']
				})
			},
			{
				test: /\.ts$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	node: {
		fs: 'empty',
		module: 'empty'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
}
