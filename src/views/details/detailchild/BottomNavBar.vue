<template>
  <div class="botton-bar">
    <div class="C-T-c">
      <div class="item-icon">
        <div class="icon"></div>
        <div class="text">客服</div>
      </div>
      <div class="item-icon">
        <div class="icon"></div>
        <div class="text">店铺</div>
      </div>
      <div class="item-icon">
        <div class="icon"></div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="buy-shop">
      <div class="item-cart-shop" @click="addCartShop">购物车</div>
      <div class="item-buy-shop">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCartShop(){
      this.$emit('addCartShop')
    }
  },
};
</script>

<style scoped>
.botton-bar {
  position: relative;
  background-color: #fff;
  bottom: 49px;
  height: 49px;
  display: flex;
}
.buy-shop,
.C-T-c {
  flex: 1;
  display: flex;
  text-align: center;
}
.item-icon:nth-child(1) .icon,
.item-icon:nth-child(2) .icon,
.item-icon:nth-child(3) .icon {
  width: 20px;
  height: 20px;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 20px;
  background-position: 0px 0px;
  margin: 3px auto;
}
.botton-bar .item-icon:nth-child(1) .icon {
  background-position: 0px -48px;
}
.botton-bar .item-icon:nth-child(2) .icon {
  background-position: 0px -88px;
}
.item-icon,
.buy-shop .item-cart-shop,
.item-buy-shop {
  flex: 1;
}
.buy-shop .item-cart-shop,
.item-buy-shop {
  line-height: 38px;
  color: #fff;
  height: 38px;
  margin: 6px 0;
}
.item-cart-shop{
  background-color: #fca100;
  border-radius: 8px 0 0 8px;
}
.item-buy-shop{
  background-color: #ff5d0a;
  border-radius: 0px 8px 8px 0px;
}
</style>