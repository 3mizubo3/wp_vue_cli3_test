<template>
  <div class="all_wrap">
    <div class="contents_wrap">
        <header class="page-header">
          <h1><a href=""><img src="" alt="">Any School</a></h1>
          <div class="menu">
            <p class="menu_item"><a href="">Any Schoolとは</a></p>
            <p class="menu_item"><a href="">活動報告</a></p>
            <p class="menu_item info"><a href="">お問い合わせ</a></p>
          </div>
        </header>
        <main>
        <section class="top">
          <h2 class="top_title">きみは、ひとりしかいない。<br>きみは、ひとりじゃない。</h2>
          <p class="top_text">
            記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト<br>
            記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト<br>
            記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト<br>
            記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト記事テキスト<br>
          </p>
        </section>
        <section class="news">
          <h3 class="common_title">News</h3>
          <p class="common_text">エニースクールの最新情報</p>
          <table class="news_table contents_item" border="1" rules="rows">
            <tr class="news_list" v-for="(item,index) in reverseNews" v-bind:key="item.id">
              <th>{{ item["date"] }}</th>
              <th>{{ item["title"]["rendered"]}}</th>
            </tr>
          </table>
        </section>

        <section class="report">
          <h3 class="common_title">Report</h3>
          <p class="common_text">エニースクールの活動報告</p>
          <div class="contents_item movie">
            <div class="movie_item"><a href=""><img src="../assets/img/info1.jpg" alt=""></a></div>
            <div class="movie_item"><a href=""><img src="../assets/img/info2.jpg" alt=""></a></div>
          </div>
          <ul class="contents_item report_group" v-for="item in reverseReport" v-bind:key="item.id">
            <li class="report_list"><a href=""><img src="" alt=""><p>{{ item["title"]["rendered"] }}</p></a></li>
          </ul>
          <p class="seemore">もっとみる</p>
        </section>
        </main>

        <section class="sponsor">
          <h3 class="common_title">Sponsor</h3>
          <p class="common_text">エニースクールの活動報告</p>
          <ul class="contents_item sponsor_group">
            <li class="sponsor_list"><a href=""><img src="" alt="">dentsu</a></li>
            <li class="sponsor_list"><a href=""><img src="" alt="">dentsu</a></li>
            <li class="sponsor_list"><a href=""><img src="" alt="">dentsu</a></li>
          </ul>
        </section>

        <footer class="page-footer">
          <p class="copyright"><small>@2018 Any School</small></p>
          <ul class="footer_group">
            <li class="footer_item sns"><a href="">twitter</a></li>
            <li class="footer_item sns"><a href="">facebook</a></li>
            <li class="footer_item pagetop"><a href="">pagetop</a></li>
          </ul>
        </footer>
      </div>
  </div>
</template>

<script>
import JsonData from '../assets/JSON/info.json'

export default {
  data() {
      return {
        news: [],
        report: [],
    }
  },
  mounted() {
    this.news = JsonData["ニュース"]
    this.report = JsonData["記事"]
  },
  computed: {
    reverseNews() {
      return this.news.slice(-2).reverse();
    },
    reverseReport() {
      return this.report.slice(-6).reverse();
    }
  }
}
</script>


<style scoped src="../assets/css/app.scss" lang="scss">

</style>
