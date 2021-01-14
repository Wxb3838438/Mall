<template>
  <div id="cart">
    <nav-top class="navtop" />
    <!-- <div class="common" v-if="$store.state.addCartList.length !== 0"> -->
      <cart-item />
    <!-- </div> -->
    <bottom />
  </div>
</template>

<script>
import NavTop from "./Cartchild/NavTop.vue";
import CartItem from "./Cartchild/CartShopItem.vue";
import Bottom from "./Cartchild/Bottom.vue";

// import { mapGetters } from "Vuex";

export default {
  components: { NavTop, CartItem, Bottom },
  methods: {},
  //计算属性
  computed: {
    // 两种写法 直接在Getters 拿到返回值  需要在数组注册方法
    // ...mapGetters(['cartLength','cartList']),
    //第二种是个方法起别名  也就是对象的写法
    // ...mapGetters({
    //   length: "cartLength",
    // }),
  },
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}
.navtop {
  /* position: fixed; */
  top: 0;
}
.common {
  /* height: calc(100vh - 44px); */
  /* background-color: #f0f0f0; */
  /* overflow: hidden; */
}
</style>