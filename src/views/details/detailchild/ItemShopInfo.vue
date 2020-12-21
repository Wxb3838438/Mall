<template>
  <div class="shopinfo" v-if="Object.keys(itemInfo).length !== 0">
    <div class="full" v-if="promotions">
      <span
        class="fullitem"
        v-for="(item, index) in promotions"
        :key="index"
        >{{ item }}</span
      >
      <!-- <div>{{promotions}}</div> -->
    </div>
    
    <div class="title">
      <h5>{{ itemInfo.title }}</h5>
    </div>
    <div class="price">
      <div>{{ itemInfo.price }}</div>
      <div>{{ itemInfo.lowPrice }}</div>
      <div v-if="itemInfo.discountDesc">{{ itemInfo.discountDesc }}</div>
    </div>
    <div class="columns">
      <div v-for="(item, index) in itemInfo.columns" :key="index">
        {{ item }}
      </div>
      <!-- <div>{{itemInfo.columns}}</div> -->
    </div>
    <div class="services">
      <div v-for="(item, index) in itemInfo.services" :key="index">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    promotions:{
      type:Array,
      default(){
        return []
      }
    }
  },
};
</script>

<style scoped>
.shopinfo {
  border-radius: 10px;
  margin: 10px;
  /* height: 200px; */
  background-color: #fff;
  padding: 10px;
  /* z-index: 999; */
}
.full,
.price {
  display: flex;
}
.fullitem {
  justify-content: flex-start;
  padding: 3px 5px;
  border: 0.3px solid red;
  color: red;
  font-size: 8px;
  margin: 0 3px;
  border-radius: 3px;
}
.price,
.title {
  margin-top: 10px;
}
.price div {
  margin-left: 4px;
}
.price div:nth-child(1) {
  color: red;
  font-size: 22px;
}
.price div:nth-child(2) {
  font-size: 12px;
  color: #858181;
  text-decoration: line-through;
  line-height: 38px;
}
.price div:nth-child(3) {
  font-size: 14px;
  border-radius: 4px;
  background-color: #ec8f59;
  height: 18px;
  padding: 3px;
  color: #fff;
}
.columns {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #858181;
  padding-bottom: 8px;
  border-bottom: 0.5px solid #858181;
}
.services {
  padding: 12px 0;

  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
.services img {
  width: 12px;
  height: 12px;
  /* margin-top: 1px; */
  line-height: 12px;
}
</style>