<template>
  <div>
    <h1>store Login : {{ $store.getters.loggedIn }}</h1>
    <h1>store User : {{ $store.getters.user }}</h1>
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit" @click="userLogin">Submit</button>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
	data() {
		return {
			login: {
				username: "jaepil",
				password: "abcde"
			}
		};
	},
	methods: {
		async userLogin() {
			try {
				await this.$auth.loginWith("local", { data: this.login });
				// if (this.$store.getters.loggedIn) {
				if (this.$auth.loggedIn) {
					console.log('저 로그인 되었어요~');
					return;
				}
			} catch (error) {
				console.log(error);
			}
		},
		
	}
};
</script>
