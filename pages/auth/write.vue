<template>
	<div>
		<p>글쓰기</p>
		<a href="/">write</a>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	middleware: ["auth-admin"], // 이 뷰컴포넌트에서 적용될 미들웨어
	data() {
		return {

		};
	},
	methods: {

	},
	// computed: {
	// 	...mapState(["counter", "auth"])
	// }
};
</script>
