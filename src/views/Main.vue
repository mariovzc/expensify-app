<template>
  <div>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="dashboard">
        <dashboard></dashboard>
      </mt-tab-container-item>
      <mt-tab-container-item id="expenses">
        <expenses></expenses>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="dashboard">
        <i class="material-icons custom-icon" slot="icon">insert_chart</i>
        Dashboard
      </mt-tab-item>
      <mt-tab-item id="expenses">
        <i class="material-icons custom-icon" slot="icon">monetization_on</i>
        Gastos
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Dashboard from '@/Dashboard'
import Expenses from '@/Expense'
export default {
  name: 'Main',
  data () {
    return {
      selected: 'dashboard'
    }
  },
  components: {
    Dashboard,
    Expenses
  }
}
</script>

<style>
.mint-tabbar{
  position: fixed;
  box-shadow: 0px 1px 1px #BCBDC2
}
.mint-tab-item{
  background-color: #403E53;
  color: #BCBDC2;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color: #5C5A70 !important;
  color: whitesmoke;
}
.custom-icon{
  font-size: 1.6rem;
}
.mint-tab-item-label{
  font-weight: bold;
  font-size: .7rem;
}
</style>
