// 推荐好物
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      // type
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 15px 5px 20px 5px;
  border-bottom: 5px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 3px;
}
 .recommend-item span{
   display: block;
 }
</style>