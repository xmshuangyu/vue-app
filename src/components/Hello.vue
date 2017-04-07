<template>
  <div class="hello">
   
    <h2 v-text="pageType" class="title">Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
            pageType: String
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
    height: 46px;
    background-color: #895192;
    width: 100%;
    position: relative;
    line-height: 46px;
}
.title{text-align: center; font-size: 16px; color: #fff; font-weight: normal;}
</style>
