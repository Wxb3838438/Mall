<template>
  <div class="title">
    <nav-top><div slot="center">购物车</div></nav-top>
  </div>
</template>

<script>
import NavTop from "components/common/Nav-top/NavTop.vue";
export default {
  components: { NavTop },
};
</script>

<style scoped>
.title {
  background-color: rgb(255, 141, 153);
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 18px;
}
</style>