<template>
  <div class="goods">
    <div class="goodsitem">
      <slot></slot>
    </div>

    <!-- {{Goods}} -->
  </div>
</template>

<script>
export default {
};
</script>

<style>
.goodsitem {
  display: flex;
  flex-wrap: wrap;
}
.goodsitem {
  /* margin: 0 auto; */
}
</style>