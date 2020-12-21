<template>
  <div id="imginfo" v-if="Object.keys(DetailImage).length !== 0">
    <div v-for="(item, indeC) in DetailImage.detailImage" :key="indeC">
      <div class="item">
        <div class="title">
          <div><hr /></div>
          <div>
            <h4>{{ item.key }}</h4>
          </div>
          <div><hr /></div>
        </div>
        <div class="img">
          <div>
            <div v-for="(imgs, index) in item.list" :key="index">
              <img :src="imgs" alt="" @load="imageLoad"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    DetailImage: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    imageLoad(){
      this.$emit('imageLoad')
    }
  }
};
</script>

<style scoped>
#imginfo {
  background-color: #fff;
  margin: 12px;
  border-radius: 10px;
  padding: 16px 13px;
}
.title {
  display: flex;
  margin-top: 10px;
  text-align: center;
  padding: 0 30px;
  margin-bottom: 10px;
}
.title div {
  flex: 1;
}
.title div:first-child,
.title div:nth-child(3) {
  padding: 10px 0px;
}
.img {
  display: flex;
}
.img img {
  width: 100%;
}
</style>