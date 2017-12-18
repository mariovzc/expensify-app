<template>
  <div>
    <h1>hello</h1>
    <mt-range v-model="rangeValue"></mt-range>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      rangeValue: 0
    }
  },
  components: {}
}
</script>

<style>
</style>
