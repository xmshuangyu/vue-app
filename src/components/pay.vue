<template>
  <div class="PayContont" >

  <nyhead ref="twoNav" :isA="isA" :isB="isB" :isC="isC" :isD="isD" :isE="isE"></nyhead>
  <div class="cotterMain white clearfix"><h1 ><span class="dt-style">{{pages}}</span>{{title}}</h1></div>

  <div class="c_main_line"> 
  <img src="../assets/wx.png" alt="">
<div class="payRadio"><i style="color: #f00; font-size:12px;">推荐</i>
  <input type="radio" id="one" value="微信" v-model="picked" class="mint-radio-input">
<label for="one" class="mint-radio-core"></label>
</div> 
  </div>
  <div class="c_main_line"> 
 <img src="../assets/zfbzx.png" alt=""> 
 <div class="payRadio">
<input type="radio" id="two" value="支付宝" v-model="picked" class="mint-radio-input"> 
<label for="two" class="mint-radio-core"></label>
 </div>

  </div>
<!-- <span>Picked: {{ picked }}</span> -->
<div class="toggle ">
      <p class="wxtip">  温馨提示：无支付宝/财付通账号，使用银联卡或信用卡也可去支付   </p> 

       </div>
      <div class="btn-box"> 
       <mt-button  type="primary"  size="large"  @click="payClick"  >马上支付</mt-button>
       </div>
       <mt-popup v-model="popupVisible"  >
         <div name="kooodend" class="picker-modle">选择用{{picked}}支付{{proprise}}</div>
       </mt-popup>
         <footerdb></footerdb>
  </div>


</template>
<script>
import nyhead from '@/components/nyhead'
import footerdb from '@/components/footerdb'
import { Actionsheet, DatetimePicker, Radio ,Button ,Popup} from 'mint-ui';
export default {
  data () {
    return {
      isA: true,
      isB: true,
      isC: true,
      isD: true,
      isE: true,
      pages: 5,
      title:"付款",
      picked: "微信",
      popupVisible: false,
       proprise: this.$root.state.Foo.bfe,
   
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    
  },
  components: { nyhead , footerdb, Actionsheet, DatetimePicker, Radio, Popup  },
  methods: {
    payClick(){
      this.popupVisible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c_main_line{padding: 10px 20px;background-color: #fff; border-bottom: 1px solid #dcdcdc; position: relative;}
.c_main_line img{width: 50%; max-width: 330px;}
.payRadio{position: absolute; right: 40px; top:20px;}
.payRadio input[type="radio"]{display: none;opacity: 0;}
.wxtip{color: #F00; margin: 10PX 0 0 0; line-height: 22PX;}
.picker-modle{ width: 200px; line-height: 22px; padding: 20px; border-radius: 15px;}
</style>
  