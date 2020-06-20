export default function ({ $axios, store }) {
	
	if (process.server) {
		
		// $axios({
		// 	method: 'get',
		// 	url: '/api/login',
		// 	data: {
		// 		username: "jaepil",
		// 		password: "abcde"
		// 	}
		//   });
		// $axios.defaults.headers.common.method = 'get';
		// console.log('%o', $axios)
		// $axios.setHeader('Authorization', '123')
		//axios 요청이 들어올 때마다 인터셉터를 실행하고, 헤더를 설정
		// $axios.onRequest((config) => {
			
		// })
		$axios.onError(error => {
			if (error.response.status === 401 && error.response.statusText === 'invalidToken') {
			  // clear auth here (vuex, local storage, cookies) how?
			  redirect('/login')
			}
		})
	}
	if (process.client) {
		console.log('client test')
	}
	
}