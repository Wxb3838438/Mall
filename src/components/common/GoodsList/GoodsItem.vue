<template>
  <div class="goods-item" @click="details">
    <img :src="showImg" alt="" :title="goodsList.title" @load="itemImgLoad" />
    <p>{{ goodsList.title }}</p>
    <span class="price">
      {{ price }}
    </span>
    <span class="info">
      <img src="~assets/img/info-collction/info-collction.png" />
      {{ sale }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: {
      // type: Object,
    },
  },
  methods: {
    details() {
      this.$router.push("/details/" + this.iid);
      console.log(this.goodsList)
    },
    itemImgLoad() {
      // if (this.$route.path === '/home') {
      //发射一个时间  事件总线  就是像vuex一样的  在所有父组件都可以接收到该事件
      //但是找个$bus是未定义的  需要在min.vue 创造模型
      this.$bus.$emit("itemImgLoad");
      // console.log()
      // }else{
      // console.log('你是笨蛋')
      // }
      // console.log(this.$route)
    },
  },
  computed: {
    showImg() {
      return this.goodsList.image || this.goodsList.show.img;
    },
    iid() {
      return this.goodsList.iid || this.goodsList.item_id
    },
    price() {
      return this.goodsList.orgPrice || "￥" + this.goodsList.price;
    },
    sale() {
      return this.goodsList.sale || this.goodsList.itemSale;
    },
  },
};
</script>

<style scoped>
#Goods {
  width: 100vh;
  display: flex;
}
.goods-item {
  width: 40%;
  /* width: calc(100% - 40%); */
  height: 220px;
  padding: 10px 10px 45px 10px;
  margin: 0px 3px;
  flex: 1;
}
.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.goods-item span {
  font-size: 12px;
}
.price {
  color: rgb(255, 141, 153);
  margin-right: 30px;
}
.info img {
  width: 13px;
  height: 13px;
}
</style>