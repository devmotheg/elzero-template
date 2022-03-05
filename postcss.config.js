/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

const tailwindcss = require("tailwindcss"),
	autoprefixer = require("autoprefixer"),
	cssnano = require("cssnano");

module.exports = {
	plugins: [cssnano, autoprefixer, tailwindcss],
};
