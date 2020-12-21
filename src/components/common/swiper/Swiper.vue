<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="SwiperLoadImg" v-if="item.image">
            <img :src="item" alt="" @load="SwiperLoadImg">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <!-- <Swiper/> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props:{
    banners:{

    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // 如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
      autoplay: {
        // 每秒钟自动切换
        delay: 1000,
        // 用户操作swiper之后，是否禁止autoplay
        disableOnInteraction: false,
      },
    });
  },
  methods:{
    SwiperLoadImg(){
      this.$emit('SwiperImgLoad')
      // console.log('加载完成');
    }
  },
  computed: {
      showImg(){
        return this.banners.image || this.banners
      }
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>