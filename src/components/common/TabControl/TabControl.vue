<template>
  <div class="tab-control">
      <div class="item-control" 
      v-for="(item,index) in control" 
      :key="index"
      :class="{active: itemindex === index}"
      @click="itemClick(index)"
      >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        control:{
            type: Array
        }
    },
    data() {
        return {
            itemindex: 0,
        }
    },
    methods:{
        itemClick(index){
            this.itemindex = index
            this.$emit('datalist',index)
            // console.log(this.itemindex)
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 49px;
        line-height: 49px;
        font-size: 15px;
        background-color: #fff;
    }
    .item-control{
        flex: 1;
    }
    .item-control span{
        padding: 5px;
    }
    .active {
        color: rgb(255,105,156);
    }
    .active  span{
        border-bottom: 2px solid rgb(255,105,156);
    }
</style>