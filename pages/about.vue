<template>
  <div>
    about
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
    
  },
  // asyncData({ req, res, route, params }) {
  //   if (process.server) {
  //     console.log("login.vue asnycData %o", route);
  //     return null;
  //   }
	// },
//   computed: {
//     ...mapState(["counter", "auth"])
//   },
  mounted: function() {
    // this.$nextTick(function () {
    //   // 모든 화면이 렌더링된 후 실행합니다.
    //   // 자식 컴포넌트가 비동기로 데이터를 받아오는 경우, 부모의 mounted훅이
    //   // 마운트 된 상태를 보장하지는 않습니다.
    //   // 이때는 this.$nextTick을 이용한다면,
    //   // 모든 화면이 렌더링 된 이후에 실행되므로 마운트 상태를 보장할 수 있습니다.
    // })
  }
};
</script>
