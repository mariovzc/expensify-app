<template>
  <div>
    <header-app title="Dashboard"></header-app>
    <div class="container">
      <div class="chart-container">
        <h2></h2>
        <byCategoryChart/>
      </div>
      <div class="chart-container">
        <last6MonthsChart/>
      </div>
      <div class="chart-container">
        <accumulated/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/Header'

import Last6MonthsChart from '../charts/last6months'
import ByCategoryChart from '../charts/byCategory'
import Accumulated from '../charts/Accumulated'

export default {
  components: {
    HeaderApp,
    Last6MonthsChart,
    ByCategoryChart,
    Accumulated
  }
}
</script>
<style lang="scss">

 .container{
   margin-top: 4rem;
   margin-bottom: 6rem;
   .chart-container{
     margin-top: 10px;
   }
 }

</style>
