<template>
  <div class="goods">
    <goods-item 
    v-for="(item,index) in Goods.list" 
    :key="index"
    :goodsList="item" 
    class="goodsitem"/>
    <!-- {{Goods}} -->
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  components: {
    GoodsItem
  },
  props: {
    Goods: {}
  },
  created() {
    // console.log(this.Goods);
    
  }
};
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
  }
  .goodsitem{
    margin: 0 auto;
  }
</style>