<template>
  <div class="backtop">
      <img src="~assets/img/backtop/backtop.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scopen>
    .backtop{
        /* width: 30px; */
        display: flex;
        position: fixed;
        right: 15px;
        bottom: 60px;
        z-index: 999;
    }
    .backtop img {
        width: 38px;
        height: 38px;
    }
</style>