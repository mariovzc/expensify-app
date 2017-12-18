<template>
  <div>
    <mt-header fixed :title="title"></mt-header>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss">
header {
  height: 3.7em !important;
  .mint-header-title{
    font-weight: 500;
    font-size: 1.6em
  }
}
</style>
