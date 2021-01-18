<template>
  <div id="category">
    <nav-top class="nav-top"><div slot="center">分类</div></nav-top>
    <div class="main">
      <better-scroll
        class="scroll-left"
        :pullUpLoad="true"
        ref="scroll"
        :probeType="3"
      >
        <category-left-title
          v-for="(item, index) in categoryTitle"
          :key="index"
          @click.native="titleclick(index, item)"
          :class="{ active: categoryIndex == index }"
          >{{ item.title }}</category-left-title
        >
      </better-scroll>
      <better-scroll
        class="scroll-right"
        :pullUpLoad="true"
        :probeType="3"
        ref="scrollR"
      >
        <category-right-sub
          :SubList="categorySubList"
          @imgLoad="categoryImgLoad"
        >
        </category-right-sub>
        <goods>
          <goods-item
            v-for="(item, index) in categoryShopItem"
            :key="index"
            :goodsList="categoryShopItem[index]"
          />
        </goods>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import NavTop from "components/common/Nav-top/NavTop.vue";
import BetterScroll from "components/common/BetterScroll/BetterScroll.vue";
import Goods from "components/common/GoodsList/Goods.vue";
import GoodsItem from "components/common/GoodsList/GoodsItem.vue";

import { debounce } from "common/utils.js";

import {
  category,
  Subcategory,
  categoryDetail,
} from "network/category/category";

import CategoryLeftTitle from "./categoryChild/categoryLeftTitle.vue";
import CategoryRightSub from "./categoryChild/categoryRightSub.vue";

export default {
  components: {
    NavTop,
    BetterScroll,
    CategoryLeftTitle,
    CategoryRightSub,
    Goods,
    GoodsItem,
  },
  data() {
    return {
      categoryTitle: null,
      categoryIndex: 0,
      categorySubList: null,
      categoryKey: null,
      categoryDetail: null,
      categoryShopItem: null,
    };
  },
  created() {
    //methods和data已经初始化,常用于操作数据，发起ajax请求
    category().then((res) => {
      let data = res.data.category;
      this.categoryTitle = data.list;
      //进来先获取正在流行的key值 然后发送请求
      this.categoryKey = data.list[0].maitKey;
      console.log(this.categoryDetail);
      this.Subcategory(this.categoryKey);
      //请求详情商品
      categoryDetail(data.list[0].miniWallkey).then((res) => {
        this.categoryShopItem = res;
        // console.log(res);
      });
    });
  },
  methods: {
    titleclick(index, key) {
      this.categoryIndex = index;
      this.categoryKey = key.maitKey;
      // 点击请求相应数据 调用请求数据方法
      this.Subcategory(key);
      this.categoryDetail = key.miniWallkey;
      categoryDetail(this.categoryDetail).then((res) => {
        this.categoryShopItem = res;
      });
    },
    Subcategory() {
      //请求商品数据
      Subcategory(this.categoryKey).then((res) => {
        this.categorySubList = res.data.list;
      });
    },
    //图片加载发送过来的事件
    categoryImgLoad() {
      let refreshR = debounce(this.$refs.scrollR.refresh);
      refreshR();
    },
  },
  updated() {
    let refresh = debounce(this.$refs.scroll.refresh);
    refresh();
  },
};
</script>

<style scoped>
.nav-top {
  background-color: rgb(255, 141, 153);
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 18px;
}
.main {
  height: calc(100vh - 93px);
  display: flex;
  margin-top: 4px;
}
.main .scroll-left {
  background-color: #eee;
  overflow: hidden;
  height: 100%;
  flex: 1;
}
.main .scroll-right {
  flex: 3;
  /* background-color: #000; */
  overflow: hidden;
  height: 100%;
}
.active {
  background-color: #fff;
  border-left: 2px solid red;
  color: red;
}
</style>