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

	$axios.onRequest(config => {
		console.log('Making request to ', config.url);
	})

	$axios.onResponse(res => {
		if (res.data) {
		}
	})
  
	$axios.onError(error => {
	  const code = parseInt(error.response && error.response.status)
	  if (code === 400) {
		redirect('/') // 에러페이지 아직 안만들어 놓음.
	  }
	})

}
