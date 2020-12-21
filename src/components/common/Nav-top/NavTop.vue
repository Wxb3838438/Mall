<template>
  <div class="nav-top">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="rigth"><slot name="rigth"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav-top{
        display: flex;
        z-index: 999;
        height: 44px;
        box-shadow: 0 3px 2px rgb(100, 100, 100,0.3);
    }
    .left,
    .rigth {
        /* flex: 1; */
        /* height: 70px; */
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>>
