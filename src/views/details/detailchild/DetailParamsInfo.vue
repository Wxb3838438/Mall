<template>
  <div id="params" v-if="Object.keys(ParamsInfo).length !== 0">
    <div class="rule">
      <div>{{ParamsInfo.rule.key}}</div>
      <table v-for="(tebles, index) in ParamsInfo.rule.tables" :key="index">
        <tr v-for="(tr, indeC) in tebles" :key="indeC">
          <td v-for="(td, indeV) in tr" :key="indeV">{{td}}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <div>{{ParamsInfo.info.key}}</div>
      <table>
        <tr v-for="(info, index) in ParamsInfo.info.set" :key="index">
          <td class="info-key">{{info.key}}</td>
          <td>{{info.value}}</td>
        </tr>
      </table>
    </div>
    <!-- {{ParamsInfo.rule.tables}} -->
  </div>
</template>

<script>
export default {
  props: {
    ParamsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
#params {
  margin: 12px;
  background-color: #fff;
  text-align: left;
  padding: 10px;
  border-radius: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
table > tr {
  width: 100%;
}
table,
th,
td {
  border: 0.5px solid #c6c6c6;
}
table td {
  padding: 5px 13px;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
}
.rule table,.info table{
  margin: 10px auto;
}
.info-key {
  color: rgb(230, 49, 109);
  width: 60px;
}
</style>