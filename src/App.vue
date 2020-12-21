<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view></router-view>
    </keep-alive>
    <min-tab-bar />
  </div>
</template>

<script>
import minTabBar from "./components/content/minTabBar/minTabBar";
export default {
  name: "App",
  components: {
    minTabBar,
  },
  data() {
    return {
      listData: [],
    };
  },
  methods: {},
};
</script>

<style>
@import url(./assets/css/base.css);
/* #app{
  padding: 44px 0;
} */
</style>
