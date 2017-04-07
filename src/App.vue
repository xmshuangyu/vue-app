<template>
  <div id="app"  class="home">  
     <!--  <hello page-type="关于"></hello> -->
        <router-view >   
        </router-view>
  </div>
</template>
<script>
require('../static/reset.css');
import bus from 'bus.js'
import mainhead from '@/components/mainhead'
import secondcomponent from '@/components/secondcomponent.vue'
export default {
  name: 'app',
  components: {  mainhead  },
     data() {
    return {
      seller:{},
      state: store.state // 所有子組件通通可以利用 this.$root.state 取得該對象
    }
  },
  
}

</script>
<style scoped>
</style>
