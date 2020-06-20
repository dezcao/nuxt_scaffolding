
export default async function ({ req, store, redirect, error }) {
	// // let { data } = await this.$axios.$post('/apis/login', { id, pw })
	// auth 확인 - 모든 클라이언트 사이드.
	if (store.state.auth.loggedIn) {
		// return redirect('/')
	}
	// if (!store.state.authUser) {
	//   return redirect('/login')
	// }
	// ctx.store.dispatch("setUser", response);
}