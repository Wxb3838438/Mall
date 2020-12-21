<template>
  <div id="shopInfo">
    <div class="logInfo">
      <div class="logo">
        <img :src="shopInfo.logo" alt="" />
      </div>
      <div class="name">
        <h5>{{ shopInfo.name }}</h5>
      </div>
    </div>
    <div class="info">
      <div class="grade">
        <div class="shopdata">
          <div>
            <div>{{ shopInfo.cSells | SellsFilter(shopInfo.cSells) }}</div>
            <div>总销量</div>
          </div>
          <div>
            <div>{{ shopInfo.cGoods }}</div>
            <div>全部宝贝</div>
          </div>
        </div>
        <div class="gradeInfo">
          <div v-for="(item, index) in shopInfo.score" :key="index">
            {{ item.name }}
            <span
              :style="{
                color: item.isBetter === true ? 'red' : 'green',
                width: '25px',
              }"
              >{{ item.score }}</span
            >
            <span
              :style="{
                'background-color': item.isBetter === true ? 'red' : 'green',
                margin: '3px',
              }"
              >{{ item.isBetter === true ? "高" : "低" }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="shop-btn"><div class="enter-shop">进店逛逛</div></div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {
          // logo:
        };
      },
    },
  },
  created() {
    //methods和data已经初始化,常用于操作数据，发起ajax请求
    // console.log(this.itemInfo)
  },
  filters: {
    SellsFilter(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    },
  },
};
</script>

<style scoped>
#shopInfo {
  margin: 12px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 13px;
}
.info,
.logInfo {
  display: flex;
}
.logo {
  flex: 0;
}
.logo img {
  border-radius: 5px;
  width: 40px;
  height: 40px;
}
.name {
  padding: 0 12px;
  flex: 1;
  font-size: 20px;
  line-height: 42px;
}
.grade {
  flex: 2;
  font-size: 12px;
  padding: 3px;
  display: flex;
}
.grade .gradeInfo span {
  font-size: 13px;
  color: #fff;
  display: inline-block;
}
.shopdata,
.gradeInfo,
.shopdata div {
  flex: 2;
}
.gradeInfo {
  text-align: center;
}
.shopdata {
  display: flex;
  text-align: center;
  border-right: 2px solid #eee;
  padding: 13px 0;
}
.shopdata div {
  /* line-height: 30px; */
}
.shop-btn .enter-shop{
  border-radius: 5px;
  padding: 10px;
  background-color: #eee;
  text-align: center;
  width: 65px;
  margin: 10px auto;
  color: #000;
  font-size: 13px;
}
</style>>
