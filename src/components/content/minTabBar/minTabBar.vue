<template>
 <Tab-bar>
      <Tab-bar-itme link="/home">
        <img slot="bar-icon" src="~assets/img/tabBar/home_active.svg" alt="" />
        <img slot="bar-icon-active" src="~assets/img/tabBar/home_active.png" alt="" />
        <div slot="bar-text">首页</div>
      </Tab-bar-itme>
      <Tab-bar-itme link="/category">
        <img slot="bar-icon" src="~assets/img/tabBar/category_active.svg" alt="" />
        <img slot="bar-icon-active" src="~assets/img/tabBar/category_active.png" alt="" />
        <div slot="bar-text">分类</div>
      </Tab-bar-itme>
      <Tab-bar-itme link="/cart">
        <img slot="bar-icon" src="~assets/img/tabBar/shopcart_active.svg" alt="" />
        <img slot="bar-icon-active" src="~assets/img/tabBar/shopcart_active.png" alt="" />
        <div slot="bar-text">购物车</div>
      </Tab-bar-itme>
      <Tab-bar-itme link="/profile">
        <img slot="bar-icon" src="~assets/img/tabBar/home_active.svg" alt="" />
        <img slot="bar-icon-active" src="~assets/img/tabBar/home_active.png" alt="" />
        <div slot="bar-text">我的</div>
      </Tab-bar-itme>
    </Tab-bar>
</template>

<script>
import TabBarItme from "components/common/tabBar/Tab-bar-itme.vue";
import TabBar from "components/common/tabBar/Tab-bar.vue";
export default {
  components: {
    // Tab
    
    // TabBarItme
    TabBar,
    TabBarItme,
  },
};
</script>

<style>
</style>