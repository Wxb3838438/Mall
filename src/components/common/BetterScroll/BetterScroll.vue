<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
// import PullDown from '@better-scroll/pull-down'

// Bscroll.use(PullDown)
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //内存中的模板已挂载到页面中
    this.scroll = new Bscroll(this.$refs.wrapper, {
      // pullUpLoad: true,
      // scrollbar: true,
      // pullDownRefresh: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.scroll && this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      // console.log(this.scroll);
      this.scroll && this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTop(x, y, time = 300) {
      // console.log('你好啊')
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
      // console.log('day')
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
/* .scroll {
    height: 100%;
} */
</style>