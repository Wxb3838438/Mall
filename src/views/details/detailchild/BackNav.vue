<template>
  <nav-top class="navback">
    <div slot="left" @click="back" class="back">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="titledetail">
      <div v-for="(item, index) in navdata" :key="index" class="titleitem" :class="{active: index === activeindex}" @click="itemclick(index)">
        {{ item }}
      </div>
    </div>
  </nav-top>
</template>

<script>
import NavTop from "components/common/Nav-top/NavTop";
export default {
  components: {
    NavTop,
  },
  data() {
    return {
      navdata: ["商品", "参数", "评论", "推荐"],
      activeindex:0
    };
  },
  methods: {
      itemclick(index){
        this.activeindex = index;
        this.$emit('themTopY',index)
      },
      back(){
        this.$router.back()
      }
  },
};
</script>

<style scope>
.titledetail {
  height: 100%;
  display: flex;
}
.titleitem {
  text-align: center;
  font-size: 16px;
  line-height: 44px;
  flex: 1;
}
.active {
    color: rgb(255,105,156);
}
.back img{
  width: 30px;
  height: 30px;
  padding: 6px;
}
</style>