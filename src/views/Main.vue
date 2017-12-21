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
        <i class="material-icons" slot="icon">insert_chart</i>
        <img  src="">
        Dashboard
      </mt-tab-item>
      <mt-tab-item id="expenses">
        <i class="material-icons" slot="icon">monetization_on</i>
        Expenses
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

</style>
