<template>
  <div class="PlanConfirm"  v-if="isShow"> 
   <nyhead :isA="isA" :isB="isB"></nyhead>
   <cotterMain></cotterMain>
   <footerdb></footerdb>
  </div>
</template>
<script>
import nyhead from '@/components/nyhead'
import footerdb from '@/components/footerdb'
import cotterMain from '@/components/cotterMain'
import bus from 'bus.js'

export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App8',
      author: '123',
      isA: true,
      isB: false

    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    
  },
  components: { nyhead, footerdb, cotterMain }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{padding: 10px 0}
.footer p{font-size: 14px; text-align: center;}
</style>
  