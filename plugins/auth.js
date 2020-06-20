export default function ({ $auth }) {
	if (!$auth.loggedIn) {
	  return
	} else {
		console.log($auth.$state.user);
	}
  
	// const username = $auth.user.username
  }