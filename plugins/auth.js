export default function (context) {
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
		
	}

	if (process.server) {
		// redirect(app.req.originalUrl)
	} else {
		// process.browser
		// window.location.replace('/') or
		// app.router.replace(route.path)
	}
}