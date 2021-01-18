<template>
  <div id="detail">
    <back-nav class="topnav" @themTopY="themTopY" ref="nav"></back-nav>
    <better-scroll
      class="content"
      :pullUpLoad="true"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
    >
      <Swiper :banners="topSwiperImg" v-if="topSwiperImg" class="swiper" />

      <item-shop-info :itemInfo="itemInfo" :promotions="promotions" />
      <shop-info :shopInfo="shopInfo" v-if="shopInfo" />
      <detail-image-info :DetailImage="DetailImage" @imageLoad="imageLoad" />
      <detail-params-info
        :ParamsInfo="ParamsInfo"
        ref="ParamsInfo"
      ></detail-params-info>
      <detail-rate-info :RateInfo="RateInfo" ref="RateInfo" />
      <div class="common">
        <goods ref="Recommends">
          <goods-item
            v-for="(item, index) in Recommends.list"
            :goodsList="Recommends.list[index]"
            :key="index"
          />
        </goods>
      </div>
    </better-scroll>
    <back-top @click.native="backtop" v-show="isshowBackTop" />
    <bottom-nav-bar @addCartShop="addCartShop" />
    <!-- <toast :message="msg" :show="toastShow" /> -->
  </div>
</template>

<script>
import BackNav from "./detailchild/BackNav.vue";
import Swiper from "components/common/swiper/Swiper";
import ItemShopInfo from "./detailchild/ItemShopInfo";
import BetterScroll from "components/common/BetterScroll/BetterScroll.vue";
import ShopInfo from "./detailchild/ShopInfo";
import DetailImageInfo from "./detailchild/DetailImageInfo";
import DetailParamsInfo from "./detailchild/DetailParamsInfo";
import DetailRateInfo from "./detailchild/DetailRateInfo";
import Goods from "components/common/GoodsList/Goods.vue";
import BottomNavBar from "./detailchild/BottomNavBar";
import {
  DetailData,
  recommends,
  itemShopInfo,
  merchantInfo,
} from "network/detail/detail";
import { itemImgLoad, showbackTop } from "common/mixin";
import { debounce } from "common/utils";
import GoodsItem from "../../components/common/GoodsList/GoodsItem.vue";

// import Toast from "components/common/toast/Toast.vue";
export default {
  name: "Details",
  components: {
    BackNav,
    Swiper,
    ItemShopInfo,
    BetterScroll,
    ShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailRateInfo,
    Goods,
    BottomNavBar,
    GoodsItem,
    // Toast,
  },
  data() {
    return {
      dataiid: null,
      topSwiperImg: null,
      itemInfo: {},
      shopInfo: null,
      promotions: null,
      DetailImage: {},
      ParamsInfo: {},
      RateInfo: [],
      Recommends: [],
      themTopYs: [],
      getThemTopY: null,
      currentIndex: 0,
      // msg: "",
      // toastShow: false,
    };
  },
  mixins: [itemImgLoad, showbackTop],
  updated() {
    //页面数据已更新
  },
  created() {
    this.dataiid = this.$route.params.iid;
    DetailData(this.dataiid).then((res) => {
      // console.log(res)
      const data = res.result;
      console.log(data);
      //获取轮播图
      this.topSwiperImg = data.itemInfo.topImages;
      //抽取商品详细信息等价格信息
      this.itemInfo = new itemShopInfo(data, data.itemInfo);
      // 判断折扣是否为空
      if (data.promotions === undefined) {
        this.promotions = null;
      } else {
        this.promotions = data.promotions.list;
      }
      //抽取商家信息
      this.shopInfo = new merchantInfo(data.shopInfo);
      //获取穿着效果图片等
      this.DetailImage = data.detailInfo;
      //抽取商品参数
      this.ParamsInfo = data.itemParams;
      //抽取用户评论信息
      if (data.rate.cRate !== 0) {
        this.RateInfo = data.rate.list;
      }

      this.getThemTopY = debounce(() => {
        this.themTopYs = [];
        this.themTopYs.push(0);
        this.themTopYs.push(this.$refs.ParamsInfo.$el.offsetTop - 50);
        this.themTopYs.push(this.$refs.RateInfo.$el.offsetTop - 50);
        this.themTopYs.push(this.$refs.Recommends.$el.offsetTop - 50);
        this.$refs.scroll.refresh();
      });
    });
    //获取详情页推荐商品数据
    recommends().then((res) => {
      this.Recommends = res.data;
      console.log(this.Recommends);
    });
  },
  destroyed() {
    //已完全销毁
    //销毁 接收事件总线的方法
    this.$bus.$off("itemImgLoad", this.imgLoadOffFn);
  },
  methods: {
    themTopY(index) {
      this.$refs.scroll.scrollTop(0, -this.themTopYs[index], 200);
    },
    imageLoad() {
      this.getThemTopY();
    },
    contentScroll(position) {
      let positionY = -position.y;

      let length = this.themTopYs.length;
      //判断当前的位置是否到达需要的位置 修改nav的样式
      for (let i = 0; i < length; i++) {
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY >= this.themTopYs[i]) ||
          (i === length - 1 && positionY >= this.themTopYs[i])
        ) {
          this.currentIndex = i;
          this.$refs.nav.activeindex = this.currentIndex;
        }
      }
      this.isshowBackTop = -position.y > 800;
    },
    backtop() {
      this.$refs.scroll.scrollTop(0, 0, 500);
    },
    addCartShop() {
      const Product = {};
      Product.image = this.topSwiperImg[0];
      Product.title = this.itemInfo.title;
      Product.price = this.itemInfo.lowNowPrice;
      Product.iid = this.dataiid;
      Product.name = this.shopInfo.name;
      Product.check = true;
      Product.desc = this.itemInfo.desc;
      // console.log(this.shopInfo)
      //调用Vuex  mutations方法将数据传递到仓库里面进行处理
      this.$store.dispatch("pushCart", Product).then((res) => {
        // this.toastShow = true;
        // this.msg = res;
        // console.log(res);
        //   setTimeout(() => {
        //     this.toastShow = false;
        //   }, 2000);

        this.$toast.show(res, 2000);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  background-color: #f0f0f0;
  height: 100vh;
  z-index: 999;
  position: relative;
}
.content {
  overflow: hidden;
  height: calc(100% - 44px);
}
.topnav {
  background-color: #fff;
  position: relative;
  /* display: flex; */
}
.swiper {
  /* margin-top: 44px; */
  height: 450px;
  overflow: hidden;
}
</style>