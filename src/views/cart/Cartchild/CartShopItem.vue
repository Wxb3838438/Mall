<template>
  <better-scroll class="content" :pullUpLoad="true" :probeType="3" ref="scroll">
    <div class="shop" v-for="(item, index) in goodsitem" :key="index">
      <div class="choose" @click="checkclick(index)">
        <div class="choose-item" :class="{ active: item.check }"></div>
      </div>
      <div class="imag"><img :src="item.image" alt="" srcset="" /></div>
      <div class="title">
        <p>{{ item.title }}</p>
        <span>{{ item.desc }}</span>
        <div class="text">
          <div>{{ item.price }}</div>
          <div>{{ item.count }}</div>
        </div>
      </div>
    </div>
  </better-scroll>
</template>

<script>
import BetterScroll from "components/common/BetterScroll/BetterScroll.vue";
export default {
  components: { BetterScroll },
  data() {
    return {
      goodsitem: null,
    };
  },
  created() {
    this.goodsitem = this.$store.state.addCartList;
    // this.$refs.scroll.refresh();
  },

  methods: {
    checkclick(index) {
      this.goodsitem[index].check = !this.goodsitem[index].check;
    },
  },
 
};
</script>

<style scoped>
.text {
  display: flex;
  justify-content: space-between;
  margin: 18px 16px;
}
.title p,
.title,
span {
  white-space: nowrap;
  overflow: hidden;
  /* width: 220px; */
  text-overflow: ellipsis;
  margin: 8px 8px;
}
.choose-item {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
}
.imag img {
  width: 90px;
  height: 120px;
  border-radius: 12px;
}
.title {
  flex: 4;
}
.choose {
  /* flex: 1; */
  margin: 50px 10px;
}
.imag {
  /* flex: 2; */
}
.content {
  height: calc(100% - 44px - 49px - 44px);
  margin-bottom: 30px;
  overflow: hidden;
}
.shop {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
}
.active {
  background-color: red;
}
</style>