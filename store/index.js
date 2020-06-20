export const state = () => ({
	counter: 0,
	// auth: {
	// 	loggedIn: false,
	// 	strategy: null,
	// 	token: null,
	// 	user: null
	// }
})

export const mutations = {
	increment(state) {
		// console.log('mutations increment ', state.route);// npm i nuxt-vuex-router-sync, nuxt.config.js/modules : 'nuxt-vuex-router-sync'
		state.counter++
	},
	// SET_AUTH(state, rs) {
	// 	state.auth = rs;
	// },
	// LOG_OUT(state) {
	// 	state.auth = {
	// 		loggedIn: false,
	// 		strategy: null,
	// 		token: null,
	// 		user: null
	// 	}
	// }
}

export const getters = {
	counter(state) {
		return state.counter;
	},
	// user(state) {
	// 	return state.auth.user;
	// },
	// loggedIn(state) {
	// 	return state.auth.loggedIn;
	// }
}

export const actions = {
	nuxtServerInit: async ({ commit }, { req }) => {
		commit('increment');
	},
	// async login({ commit }, payload) {
	// 	// context {state, getters, dispatch, commit}
	// 	console.log('login payload %o', payload);
	// 	const ip = await this.$axios.$get('http://icanhazip.com')
	// 	console.log(ip);
	// 	let auth = {
	// 		IP: ip,
	// 		token: `${ip}`,
	// 		loggedIn: true,
	// 		user: {
	// 			name: 'jaepil',
	// 			age: 45
	// 		}
	// 	}
	// 	commit('SET_AUTH', auth);
	// 	localStorage.setItem('authToken', auth.token);

	// 	// let { data } = await this.$axios.$post('/apis/login', { id, pw })
	// 	// if (!data.id) {
	// 	// 	throw new Error('로그인에 실패했습니다.')
	// 	// }
	// },
	// async logout({ commit }) {
	// 	commit('LOG_OUT');
	// }
}