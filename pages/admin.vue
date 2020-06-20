<template>
  <div>
    <h1>auth Login : {{ $auth.loggedIn }}</h1>
    <h1>auth User : {{ $auth.user }}</h1>
    <h1>store Login : {{ $store.state.auth.loggedIn }}</h1>
    <h1>sotre User : {{ $store.state.auth.user }}</h1>
    <h1>token : {{ $store.state.auth.token }}</h1>

    <form @submit="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

		<button @click="$auth.logout()">logout</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  // middleware: ['auth'], // 이 뷰컴포넌트에서 적용될 미들웨어
  data() {
    return {
      login: {
        username: "jaepil",
        password: "abcde"
      }
    };
  },
  mounted() {
    // console.log(this.$auth)
  },
//   async asyncData(context) {
//     // let rs = await axios.get('http://13.125.206.217:3000/api/login');
//     // console.log(rs.data);
//     // console.log(rs.data);
//     // let { response } = await axios.get('dataURL', {}, { headers: {"Authorization" : `Bearer ${context.app.$auth.getToken('local')}`} })
//     // return { token: rs.data.token }
//   },
  methods: {
    async userLogin() {
      try {
        // let rs = await axios.get('http://localhost:3000/api/login');
        // console.log(rs);
        let rs = await this.$auth.loginWith("local", { data: this.login });

        // this.$store.dispatch(, {});
        // this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    async userLogout() {
      try {
        // let rs = await axios.get('http://localhost:3000/api/login');
        // console.log(rs);
        let rs = await this.$auth.logout();

        // this.$store.dispatch(, {});
        // this.$router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
