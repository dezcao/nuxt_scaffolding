const bodyParser = require('body-parser') // for the serverMiddleware
module.exports = {
	// mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	// vue: {
	// 	config: {
	// 		productionTip: false,
	// 		devtools: true
	// 	}
	// },
	loading: { color: '#fff' }, // Customize the progress-bar color
	css: [
	],
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		// NPM: npm i nuxt-vuex-router-sync --save-dev
		'nuxt-vuex-router-sync',
		// NPM: npm install @nuxtjs/auth --save-dev
		'@nuxtjs/auth',
		// '@nuxtjs/proxy', // npm i @nuxtjs/proxy
		// '@nuxtjs/sitemap'
	],
	// sitemap: {
	//   exclude: [
	//     '/account/**',
	//     '/account',
	//     '/admin/**',
	//     '/admin',
	//   ],
	//   routes: async () => {
	//     let baseUrl =  process.env.BASE_URL || 'http://localhost:3000/api'
	//     return await sitemapRoutes(baseUrl)
	//   }
	// },
	// proxy: {
	// 	'/api/': { 
	// 		target: 'http://13.125.206.217:3000/', 
	// 		pathRewrite: {'^/api/': '/api/'}, 
	// 		changeOrigin: true }
	// },
	axios: {
		baseURL: process.env.baseURL || 'http://localhost:3000/',
		// proxy: true
		// credentials: true,
		// retry: false
	},
	router: {
		// middleware: ['admin-login'] // 매 라우팅 마다 적용. 이걸 쓰지않고 반대로, 일부 Vue에서 선별 사용하겠음.
	},
	serverMiddleware: [
		// bodyParser.json(),
		// { path: '/api/login', handler: '~/api/admin-login.js' }
	],
	plugins: [
		// nuxt server 내에서 axios 발생시키면 거쳐감.
		// { src: '~/plugins/axios.js'},
		// { src: '~/plugins/auth.js'}
	],
	auth: {
		// plugins: [ '~/plugins/auth.js' ],
		// localStorage: true,
		// watchLoggedIn: false,
		strategies: {
			local: {
				// token: {
				//   property: 'access'
				//   expiresIn: '30m'
				// },
				// refreshToken: {
				//   property: 'refresh' // change to your refresh token property
				// },
				endpoints: {
					login: {url: '/api/login', method: 'post', propertyName: 'token.access', altProperty: 'refresh'},
					// refresh: {url: 'api/token/refresh', method: 'post', propertyName: ''},
					logout: false,
					user: { url: '/api/user', method: 'get', propertyName: 'user' }
				},
				tokenType: ''
			}
		},
		redirect: {
			home: '/auth/write', // 로그인된 후에 리다이렉트
			// login: '/admin', // 로그인이 필요하면 여기로 리다이렉트
			logout: '/', // 로그아웃 후에 리다이렉트
			// callback: '/', // 로그인 후에 특정한 요청이 있는 리다이렉트 ?? User will be redirected to this path by the identity provider after login.
		}
	},
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		// '@nuxtjs/eslint-module'
	],
	build: {
		// transpile: ['@nuxtjs/auth'],
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
			// Run ESLint on save:  npm run lint --fix
			if (ctx.isDev && ctx.isClient) {
				// config.module.rules.push({
				// 	enforce: 'pre',
				// 	test: /.(js|vue)$/,
				// 	loader: 'eslint-loader',
				// 	exclude: /(node_modules)/
				// })
			}
		}
	},

	server: {
		port: process.env.PORT || 8000
	}
}
