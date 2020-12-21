<template>
  <div class="Tab-bar-itme" @click="itmeClick">
    <!-- 定义插槽 而且这个有名字的插槽只能插图片 -->
    <div v-if="isActive">
      <slot name="bar-icon"></slot>
    </div>
    <div v-else>
      <slot name="bar-icon-active"></slot>
    </div>
    <div class="tab-bar-text" :class="{active:isActive }">
      <slot name="bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: false,
    };
  },
  props:{
      link:String
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    }
  },
  methods:{
      itmeClick(){
          // console.log(this.link)
          // console.log(this.isActive)
          this.$router.push(this.link)
      }
  }
};
</script>

<style>
#Tab-bar .Tab-bar-itme {
  text-align: center;
  height: 49px;
  flex: 1;
}
#Tab-bar .Tab-bar-itme img {
  margin-top: 5px;
  width: 18px;
  height: 18px;
  margin-bottom: 2px;
  vertical-align: bottom;
}
.active {
  color: red;
}
</style>