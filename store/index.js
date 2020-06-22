export const state = () => ({
	auth: {
		loggedIn: false,
		user: null
	}
})

export const mutations = {
	// 이곳에서 state.route를 사용하고 싶으면 nuxt-vuex-router-sync 라이브러리 활성화 필요함.
	SET_LOGIN(state, user) {
		state.auth.loggedIn = true;
		state.auth.user = user;
	},
	LOG_OUT(state) {
		state.auth.loggedIn = false;
		state.auth.user = null;
	}
}

export const getters = {
	user(state) {
		return state.auth.user;
	},
	loggedIn(state) {
		return state.auth.loggedIn;
	}
}

export const actions = {
	nuxtServerInit: async ({ commit }, { req }) => {
		// 서버 시작시점에서 수행할 작업
	},

	// [[ nuxtjs/auth를 사용하면 이것은 필요없음. ]]
	async login({ commit }, payload) {
		// context에서 꺼낼 수 있는 요소들 {state, getters, dispatch, commit}
		console.log('login payload %o', payload);
		console.log('login payload %s', process.env.baseURL);
		// const { data } = await this.$axios.$post(process.env.baseURL+'/api/login', payload);
		// const {token, user} = data;
		// if (!token) {
		// 	throw new Error('로그인에 실패했습니다.')
		// }
		// localStorage.setItem('accessToken', token.access);
		// localStorage.setItem('refreshToken', token.refresh);
		// commit('SET_LOGIN', user);
	},

	// [[ nuxtjs/auth를 사용하면 이것은 필요없음. ]]
	async logout({ commit, getters }) {

		// let payload = {
		// 	user: getters('user'),
		// 	token: localStorage.getItem('accessToken')
		// }
		// const { data } = await this.$axios.$delete(process.env.baseURL+'/api/logout', payload);
		// commit('LOG_OUT');
	}
}