<template>
  <div>
    <mt-header fixed :title="title">
      <mt-button v-if="action" @click="$emit('save')" slot="right">
        <i class="material-icons custom-icon" slot="icon">add</i>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: ['title', 'action']
}
</script>

<style lang="scss">
header {
  background-color: #4E4B5C !important;
  height: 3.7em !important;
  .mint-header-title{
    font-weight: 500;
    font-size: 1.6em
  }
  .custom-icon{
    font-size: 2em;
  }
}
</style>
