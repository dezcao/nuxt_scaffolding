export default async function (context) {
	const {
		app,
		store,
		route,
		params,
		query,
		env,
		isDev,
		isHMR,
		redirect,
		error,
		$axios
	} = context;

	if (!store.state.auth.loggedIn) {
		redirect('/')
	}
}
