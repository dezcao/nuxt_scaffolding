// import bodyParser from 'body-parser'
const bodyParser = require('body-parser')
module.exports = {
	mode: 'universal',
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
	vue: {
		config: {
			productionTip: false,
			devtools: true
		}
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	css: [
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
	axios: {
		baseURL: 'http://localhost:3000/'
		// baseURL: 'http://13.125.206.217:3000/',
		// proxy: true
	},
	proxy: {
		// '/api/': { 
		// 	target: 'http://13.125.206.217:3000/', 
		// 	pathRewrite: {'^/api/': '/api/'}, 
		// 	changeOrigin: true }
	},
	plugins: [
		{ src: '~/plugins/axios.js' }
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
		// npm i @nuxtjs/proxy
		// '@nuxtjs/proxy'
		// '@nuxtjs/sitemap'
	],
	router: {
    // middleware: ['admin-auth']
  },
	serverMiddleware: [
		bodyParser.json(),
		// { path: '/api/auth/login', handler: '~/api/admin-login.js' }
	],
	auth: {
		// plugins: [ '~/plugins/auth.js' ], // 플러그인 필요하면 쓴다.
		strategies: {
			local: {
				// token: {
        //   property: 'access'
        // },
        // refreshToken: {
        //   property: 'refresh' // change to your refresh token property
        // },
				endpoints: {
					// login: {url: '/api/login', method: 'post', propertyName: 'token.access', altProperty: 'token.refresh'},
					// login: {url: '/api/login', method: 'post' ,propertyName: 'token.access'},
					login: {url: '/api/login', method: 'post' },
					logout: false,
					user: { url: '/api/user', method: 'get', propertyName: 'user' }
				},
				tokenRequired: false, // ture이면 JWT인 것으로 보인다. 잘 안된다.
				tokenType: false,
				// globalToken: true,
				// autoFetchUser: true
			}
		},
		redirect: {
      home: '/',
      callback: '/about',
      logout: '/'
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
			// Run ESLint on save
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
