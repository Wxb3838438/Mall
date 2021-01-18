<template>
  <div id="home">
    <nav-top class="nav-top"
      ><h4 slot="center" class="title">购物街</h4></nav-top
    >
    <tab-control
      :control="['流行', '新款', '精选']"
      @datalist="datalist"
      v-show="showTabControl"
      ref="Tabcontrol1"
    ></tab-control>
    <better-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="scroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <swiper
        :banners="banners"
        v-if="banners"
        @SwiperImgLoad="SwiperImgLoad"
      />
      <home-rec :recommend="recommend" />
      <keep-popular />
      <tab-control
        :control="['流行', '新款', '精选']"
        @datalist="datalist"
        v-show="!showTabControl"
        ref="Tabcontrol2"
      ></tab-control>
      <goods>
        <goods-item
          v-for="(item, index) in Goods[GoodsType].list"
          :key="index"
          :goodsList="item"
        />
      </goods>
    </better-scroll>
    <back-top @click.native="backtop" v-show="isshowBackTop" />
  </div>
</template>

<script>
// 标题
import NavTop from "components/common/Nav-top/NavTop";
// 轮播图
import Swiper from "components/common/swiper/Swiper";
// 商品推荐导航栏
import TabControl from "components/common/TabControl/TabControl.vue";
// 本周推荐
import keepPopular from "components/content/keepPopular/KeepPopular";
import Goods from "components/common/GoodsList/Goods";

// 好物推荐
import HomeRec from "views/home/Homechild/HomeRec.vue";

//请求数据
import { getHomedata, Goodslist } from "network/home/home";
// import { debounce } from "common/utils";
import { itemImgLoad, showbackTop } from "common/mixin.js";
//滚动插件
import BetterScroll from "components/common/BetterScroll/BetterScroll";
import GoodsItem from "../../components/common/GoodsList/GoodsItem.vue";

export default {
  data() {
    return {
      //轮播图
      banners: null,
      //推荐好物
      recommend: null,
      //保存商品数据
      Goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      //商品类型
      GoodsType: "pop",

      showTabControl: false,
      Tabcontrol: 0,
      homeLocation: 0,
      imgLoadOffFn: null,
    };
  },
  components: {
    // 标题
    NavTop,
    // 轮播图
    Swiper,
    keepPopular,
    // 好物推荐
    HomeRec,
    TabControl,
    Goods,
    BetterScroll,
    GoodsItem,
  },
  mixins: [itemImgLoad, showbackTop],
  created() {
    //ajax 获取数据
    this.getHomedata();
    //获取推荐三个数据
    this.Goodslist("sell");
    this.Goodslist("new");
    this.Goodslist("pop");
  },
  updated() {
    //页面数据已更新
    this.$refs.scroll.refresh();
  },
  //组件活跃时
  activated() {
    // 切换路由时 保留用户当时所在的商品位置  但是好像不调用这个方法还是可以实现返回时也是当时的位置
    this.$refs.scroll.scrollTop(0, this.homeLocation, 0);
  },
  //组件离开时
  deactivated() {
    //关闭事件总线的图片加载事件
    this.$bus.$off("itemImgLoad", this.imgLoadOffFn);
    // 离开时保留用户浏览的所在位置
    this.homeLocation = this.$refs.scroll.scroll.y;
  },
  methods: {
    // 自定义业务功能
    //监听轮播图图片是否加载完成  计算当前tab-control距离顶部的高度
    SwiperImgLoad() {
      this.Tabcontrol = this.$refs.Tabcontrol2.$el.offsetTop;
    },
    // 判断当前tab-control所在的位置
    datalist(index) {
      switch (index) {
        case 0:
          this.GoodsType = "pop";
          break;
        case 1:
          this.GoodsType = "new";
          break;
        case 2:
          this.GoodsType = "sell";
          break;
      }
      this.$refs.Tabcontrol1.itemindex = index;
      this.$refs.Tabcontrol2.itemindex = index;
    },
    //点击左下角直接返回顶部
    backtop() {
      this.$refs.scroll.scrollTop(0, 0, 500);
    },
    // 判断当前位置  是否需要隐藏图标 默认值为false
    scroll(position) {
      this.isshowBackTop = -position.y > 800;
      this.showTabControl = -position.y + 46 > this.Tabcontrol;
    },
    // 上拉加载数据
    loadMore() {
      // 重新调用 商品类型请求数  传入当前所在的Goods的列表类型
      this.Goodslist(this.GoodsType);
      // 因为在scroll上拉事件中只会调用一次   需要finisPullUp方法加多一次机会
      this.$refs.scroll.finishPullUp();
    },
    //获取商品数据
    getHomedata() {
      getHomedata().then((res) => {
        //轮播图数据
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // 商品类型 请求数据
    Goodslist(type) {
      const page = this.Goods[type].page + 1;
      Goodslist(type, page).then((res) => {
        this.Goods[type].list.push(...res.data.list);
        this.Goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.nav-top {
  background-color: rgb(255, 141, 153);
}
.title {
  text-align: center;
  font-size: 16px;
  line-height: 44px;
  color: #fff;
}
.content {
  overflow: hidden;
  height: calc(100% - 93px);
}
</style>