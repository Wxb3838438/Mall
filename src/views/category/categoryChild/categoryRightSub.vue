<template>
  <div class="sub">
    <div class="item" v-for="(item, index) in SubList" :key="index">
      <img :src="item.image" alt="" @load="imgLoad" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    SubList: {
      //   type: Object,
      //   default() {
      //     return {};
      //   },
    },
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    },
  },
};
</script>

<style scoped>
.sub {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-size: 12px;
}
.item {
  margin: 8px 6.85px;
}
img {
  width: 80px;
  height: 80px;
}
</style>