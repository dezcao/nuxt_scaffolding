<template>
	<div>
		<header>
			<b-nav tabs align="left">
				<b-nav-item to="/" :active='$route.path == "/"'>Home</b-nav-item>
				<b-nav-item to="/about" :active='$route.path == "/about"'>About</b-nav-item>
				<b-nav-item to="/admin" :active='$route.path == "/admin"'>Admin</b-nav-item>
				<b-nav-item to="/auth/write" :active='$route.path == "/auth/write"'>write</b-nav-item>
			</b-nav>
		</header>
		<content>
			<nuxt />
		</content>
		<footer>
			<div>
				<b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {

	}
}
</script>