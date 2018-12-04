<template>
  <div id="report">
    <div >
      <p>記事一覧</p>
    </div>
    <ul class="report-lineup" v-for="item in reverseReport" v-bind:key="item.id">
      <li><img src="" alt=""><p>{{ item["title"]["rendered"] }}</p></li>
    </ul>
  </div>
</template>

<script>
import JsonData from '../../assets/JSON/info.json'

export default {
  data() {
    return {
      report: []
    }
  },
  mounted() {
    this.report = JsonData["記事"]
  },
  computed: {
    reverseReport() {
      return this.report.slice().reverse();
    }
  }
}
</script>

<style scoped lang="scss">
.report-lineup{
  list-style: none;
  li{
    img{
      display: block;
      width: 300px;
      height:200px;
      background: #908888;
    }
  }
}

</style>
