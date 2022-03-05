/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const path = require("path");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "src/js/app.js"),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	watch: false,
	watchOptions: {
		ignored: /node_modules/i,
		poll: 200,
		aggregateTimeout: 200,
	},
};
