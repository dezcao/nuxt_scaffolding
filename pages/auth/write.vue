<template>
	<div>
		<p>글쓰기</p>
	</div>
</template>

<script>
export default {
	middleware: 'admin-login', // 이 뷰컴포넌트에서 적용될 미들웨어 (권한체크)
	data() {
		return {
		};
	},
	methods: {
	},
};
</script>
