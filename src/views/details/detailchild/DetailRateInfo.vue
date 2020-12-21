<template>
  <div id="rateinfo" v-if="RateInfo.length !== 0">
    <div class="rate-title">
      <div>用户评论</div>
      <div>更多</div>
    </div>
    <div v-for="(item, index) in RateInfo" :key="index">
      <div class="rate">
        <div>
          <img :src="item.user.avatar" alt />
        </div>
        <div>{{ item.user.uname }}</div>
      </div>
      <div class="content">
        {{ item.content }}
      </div>
      <div class="created-style">
        <div class="created">
          {{ item.created | createdtime(item.created) }}
        </div>
        <div class="style">{{ item.style }}</div>
      </div>
      <div class="images">
        <img
          :src="images"
          alt=""
          v-for="(images, index) in item.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    RateInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    createdtime(value) {
      //将时间戳转换成Date对象
      const date = new Date(value * 1000);
      //讲date进行格式化
      return formatDate(date, "yyyy-MM-dd-hh-ss");
    },
  },
};
</script>

<style scoped>
#rateinfo {
  border-radius: 10px;
  margin: 10px;
  background-color: #fff;
  padding: 10px;
}
.rate-title {
  padding: 5px 3px 8px 3px;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: space-between;
}
.rate {
  margin-top: 10px;
  display: flex;
}
.rate > div img {
  width: 50px;
  border-radius: 10px;
  margin-right: 12px;
}
.rate div {
  line-height: 50px;
}
.content {
  padding: 5px;
  margin-bottom: 10px;
  color: rgba(75, 73, 73, 0.63);
}
.created-style {
  display: flex;
  color: rgba(75, 73, 73, 0.63);
}
.created {
  margin-right: 16px;
}
.images{
  display: flex;
  margin-top: 15px;
}
.images img{
  width: 115px;
  height: 115px;
  margin: 5px;
}
</style>