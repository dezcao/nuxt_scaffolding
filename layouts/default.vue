<template>
	<div>
		<no-ssr>
			<header>
				<b-navbar toggleable="lg" type="dark" variant="info">
					<b-navbar-brand href="#">JBlog</b-navbar-brand>

					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav>
							<b-nav-item to="/" :active='$route.path == "/"'>Home</b-nav-item>
							<b-nav-item to="/admin" :active='$route.path == "/admin"'>Admin</b-nav-item>
							<b-nav-item to="/auth/write" :active='$route.path == "/auth/write"' :disabled='$store.getters.loggedIn ? false : true' >Write</b-nav-item>
						</b-navbar-nav>

						<!-- Right aligned nav items -->
						<b-navbar-nav class="ml-auto">
							<b-nav-form>
								<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
								<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
							</b-nav-form>

							<b-nav-item-dropdown right v-if="$store.getters.loggedIn">
								<!-- Using 'button-content' slot -->
								<template v-slot:button-content>
									<em>User</em>
								</template>
								<b-dropdown-item href="#" to="/about">Profile</b-dropdown-item>
								<b-dropdown-item href="#" @click="userLogout">Sign Out</b-dropdown-item>
							</b-nav-item-dropdown>

						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</header>
		
			<content>
				<nuxt />
			</content>

			<footer>
				<div>
						<b-jumbotron header="Jefferey" lead="Don’t beg anybody for anything, especially love. - T.Morrison">
							<p>This blog is made in Node.js, Nuxt.js, BootstrapVue, AWS(EC2, MariaDB)</p>
							<b-button variant="outline-success" href="https://github.com/dezcao/node_scaffolding" target="_blank">Node scaffolding</b-button>
							<b-button variant="outline-success" href="#">Nuxt scaffolding</b-button>
						</b-jumbotron>
				</div>
			</footer>
		</no-ssr>
	</div>
</template>

<script>
// import { mapState } from "vuex";
// import axios from "axios";
export default {
	data() {
		return {
		}
	},
	// asyncData({ req, res, route, params }) {
	// 서버사이드에서 실행되므로 this를 통해 클라이언트 app에 접근할 수 없다.
	//   if (process.server) {
	//     console.log("login.vue asnycData %o", route);
	//     return null;
	//   }
	// },
	// mounted: function() {
		// this.$nextTick(function () {
		//   // 모든 화면이 렌더링된 후 실행합니다.
		//   // 자식 컴포넌트가 비동기로 데이터를 받아오는 경우, 부모의 mounted훅이
		//   // 마운트 된 상태를 보장하지는 않습니다.
		//   // 이때 this.$nextTick을 이용한다면,
		//   // 모든 화면이 렌더링 된 이후에 실행되므로 마운트 상태를 보장할 수 있습니다.
		// })
	// },
	// computed: {
	// 	...mapState(["auth"])
	// },
	methods: {
		async userLogout() {
			try {
				let rs = await this.$auth.logout();
				// this.$store.dispatch('logout');
				// this.$router.push('/');
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>