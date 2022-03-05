/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				main: "#2196f3",
				alt: "#1787e0",
			},
			keyframes: {
				"landing-hero": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10%)" },
				},
				"landing-arrow": {
					"45%, 65%": { transform: "translate(-50%, -30%)" },
					"55%, 75%": { transform: "translate(-50%, 0)" },
				},
				"article-arrow": {
					"0%, 50%, 100%": { transform: "translateX(0)" },
					"25%, 75%": { transform: "translateX(30%)" },
				},
				"gallery-flash": {
					"0%, 40%": { opacity: "1" },
					"100%": { width: "200%", height: "200%", opacity: "0" },
				},
				"discount-background": {
					"0%, 100%": {
						"background-image": "url('../img/discount-background1.jpg')",
					},
					"50%": {
						"background-image": "url('../img/discount-background2.jpg')",
					},
				},
			},
			animation: {
				"landing-hero": "landing-hero 1.5s ease-in-out infinite",
				"landing-arrow": "landing-arrow 1.5s ease-in-out infinite",
				"article-arrow": "article-arrow 1s ease-in-out infinite",
				"gallery-flash": "gallery-flash 0.25s linear",
				"discount-background": "discount-background 5s linear infinite",
			},
		},
	},
};
