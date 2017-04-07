<template>
  <div class="goInsureds "> 
   <nyhead ref="twoNav" :isA="isA" :isB="isB" ></nyhead>
    <div class="cotterMain white clearfix">
    <h1 ><span class="dt-style">{{pages}}</span>{{title}}</h1>
      <div class="t_cppBox">
    <Insured ref="Insured"></Insured>
    </div>
     <div class="btn-box"><mt-button type="primary"  size="large"  @click="appnextstep">还差一步，加油</mt-button></div>
    </div>
   
   <footerdb></footerdb>
  </div>
</template>
<script>
import nyhead from '@/components/nyhead'
import footerdb from '@/components/footerdb'
import Insured from '@/components/Insured'
import bus from 'bus.js'

export default {
  
  data () {
    return {
      title: '投保人信息',
      pages: 2,
      isA: true, //当isA改变时，将更新class   //当isB改变时，将更新class
      isB: true

    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
    
    
  },
  components: { nyhead, footerdb, Insured},
  methods: {
    appnextstep() {
      let xingming = this.$refs.Insured.xingming
      let number = this.$refs.Insured.number
      let zhengjianNub = this.$refs.Insured.zhengjianNub
      let email = this.$refs.Insured.email
      let zhengjianType = this.$refs.Insured.zhengjianType
      let chushengdate = this.$refs.Insured.chushengdate
      let xingbie = this.$refs.Insured.xingbie

       store.setFromdataxm(xingming)
       store.setFromdatanum (number)
       store.setFromdazjnum(zhengjianNub)
       store.setFromdataemil (email)
       store.setFromdatazjtp (zhengjianType)
       store.setFromdatacsrq (chushengdate)
       store.setFromdataxb (xingbie)
    this.$router.push({name:'beInsreds',params:{
        
        }})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  