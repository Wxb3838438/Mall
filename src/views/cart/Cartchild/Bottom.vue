<template>
  <div class="centent">
    <div class="bottom">
      <div class="choose" @click="chooseAll">
        <div class="choose-item" :class="{ active: setAll }"></div>
        <div class="checkall">全选</div>
      </div>

      <!-- 结算 -->
      <div class="settlement">
        <div class="total">合计：{{ totalprice }}</div>
        <div class="settlement_item" @click="calcClick">结算({{ shopAlllength }})</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // 直接当做普通属性调用不加括号
    // 任何data中数据变化立即重新计算
    // 计算属性会缓存
    totalprice() {
      //计算总价
      return (
        "$" +
        this.$store.state.addCartList
          .filter((item) => {
            return item.check;
          })
          .reduce((value, item) => {
            return value + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    //计算当前选中的商品个数
    shopAlllength() {
      return this.$store.state.addCartList.filter((item) => {
        return item.check;
      }).length;
    },
    setAll() {
      // if (this.shopAlllength == 0) {
      //   return false
      // }
      //判断当前数据是否为0  如果为零返回false
      if (this.shopAlllength === 0) return false;
      //查找数组中的check 有没有为false的如果有 返回false  如果没有返回true
      return !this.$store.state.addCartList.find((item) => {
        return !item.check;
      });
    },
  },
  methods: {
    chooseAll() {
      if (this.setAll) {
        //当前全部选中
        //进入执行条件  循环当前数组 check改成false
        this.$store.state.addCartList.forEach((item) => {
          item.check = false;
        });
        //如果有些没有被选中 那么就变成全部选中
      } else {
        this.$store.state.addCartList.forEach((item) => {
          item.check = true;
        });
      }
    },
    calcClick(){    
      if (!this.setAll) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
};
</script>

<style scoped>
.choose {
  display: flex;
}
.choose-item {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 10px 10px 0 5px;
}
.active {
  background-color: red;
}
.centent {
  position: fixed;
  bottom: 49px;
  background-color: #fff;
}
.bottom {
  line-height: 44px;
  height: 44px;
  border-top: 0.5px solid #eee;
  padding: 2px 0;
}
.bottom,
.settlement {
  display: flex;
}
.settlement {
  flex: 1;
}
.settlement_item {
  background-color: red;
  color: #fff;
  padding: 0 23px;
  border-radius: 12px;
}
</style>