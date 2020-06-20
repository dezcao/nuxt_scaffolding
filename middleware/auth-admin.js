export default async function({$auth, redirect, store, next}) {
	let user = $auth.user;
	// if(user && user.admin) {
	if(user) {
		console.log('ok u ok');
	  // let the user in
	} else {
	//   store.dispatch('snackbar/setSnackbar', {color: 'error', text: "You must be an admin to view that page."})
	  redirect('/')
	}
  }