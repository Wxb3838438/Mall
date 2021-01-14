<template>
  <!-- 购物车详细商品 -->
  <div v-if="goodsitem.length !== 0" class="common">
    <div>共{{ goodsitem.length }}件商品</div>
    <better-scroll :pullUpLoad="true" class="content"
      ><div class="cartitem">
        <div class="goods" v-for="(item, index) in goodsitem" :key="index">
          <!-- 商家 -->
          <div class="merchants">
            <div class="M_title">{{ item.name }}</div>
          </div>
          <!-- 商品图片标题信息等 -->
          <div class="goodsitem">
            <!-- 选择商品 -->
            <div
              class="choose"
              :class="{ active: item.check }"
              @click="checkclick(index)"
            ></div>
            <!-- 商品信息 -->
            <div class="content_shop">
              <!-- 商品图片 -->
              <div class="img"><img :src="item.image" alt="" srcset="" /></div>
              <!-- 商品标题价格等 -->
              <div class="contentitem">
                <div class="C_title">{{ item.title }}</div>

                <div class="M_">
                  <div class="price">￥{{ item.price }}</div>
                  <div class="count">X{{ item.count }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "../../../components/common/BetterScroll/BetterScroll.vue";
// import { mapGetters } from "./vuex";
export default {
  components: { BetterScroll },
  data() {
    return {
      goodsitem: null,
    };
  },
  created() {
    //methods和data已经初始化,常用于操作数据，发起ajax请求
    this.goodsitem = this.$store.state.addCartList;
  },
  //   computed: {
  //     // 两种写法 直接在Getters 拿到返回值  需要在数组注册方法
  //     // ...mapGetters(['cartLength','cartList']),
  //     //第二种是个方法起别名  也就是对象的写法
  //     ...mapGetters({
  //       length: "cartLength",
  //     }),
  //   },
  methods: {
    checkclick(index) {
      this.goodsitem[index].check = !this.goodsitem[index].check;
      
    },
  },
};
</script>

<style scoped>
.content {
  height: calc(100% - 44px -49px);
}
.cartitem {
  background-color: #fff;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}
.goods {
  margin-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}
.merchants,
.goodsitem,
.content_shop,
.M_ {
  display: flex;
}
.M_ {
  justify-content: space-between;
}
.img img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin: 0 12px;
}
.common {
  height: calc(100vh - 44px);
  background-color: #f0f0f0;
}

.merchants {
  margin: 0px 0px 8px 10px;
}
.count {
  border: 0.5px solid #ccc;
  border-radius: 5px;
  padding: 2px;
  text-align: center;
}
.contentitem .C_title {
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.choose {
  border: 1px solid #000;
  border-radius: 50%;
  width: 38px;
  height: 15px;
}
.active {
  background-color: pink;
}
</style>