<template>
  <div class="bbnsured" ref="bnsured">
    <div class="t_cppA">
      <span  class="left">姓名</span>
      <span><input type="text" placeholder="请输入你的姓名"  unselectable="on" v-model="bbxingming"></span>
    </div>
    <div class="t_cppA">
      <span class="left" >手机号码</span>
      <span><input type="text" placeholder="请输入你的手机号码"  unselectable="on" v-model="bbnumber"></span>
    </div>
    <div class="t_cppA">
      <span class="left" >证件类型</span>
      <span class="right iconmore" @click="openSheet"><input type="text" readonly  nselectable="on"  id="zhengjianType"  :value="actions[bbzhengjianType].name"> <mt-actionsheet :actions="actions" v-model="sheetVisible" id="actionsheet" ></mt-actionsheet></span>
    </div>
    <div class="t_cppA">
      <span class="left" >证件号码</span>
      <span><input type="text" placeholder="请输入你的证件号码"  unselectable="on" v-model="bbzhengjianNub" ></span>
    </div>
    <div class="t_cppA">
      <span class="left" >出生日期</span>
      <span class="right iconmore" @click="openPicker"><input type="text" placeholder="出生日期"  unselectable="on"  :value="bbchushengdate"  ></span>
      <mt-datetime-picker ref="pickercsrq" type="date" v-model="pickerValue"   @confirm="handleConfirm" year-format="{value}年" month-format="{value} 月" date-format="{value} 日"> </mt-datetime-picker>
    </div>
    <div class="t_cppA">
      <span class="left" >性别</span>
      <span class="radioBox right"> <mt-radio align="left"  v-model="bbxingbie" :options="options" ></mt-radio></span>
    </div>
     <div class="t_cppA">
      <span  class="left">邮箱</span>
      <span><input type="text" placeholder="请输入你的邮箱"  unselectable="on" v-model="bbemail"></span>
    </div>
  </div>
</template>

<script>
 import {formatDate} from '@/common/js/date';
import { Actionsheet, DatetimePicker, Radio ,Button } from 'mint-ui';
export default {
  data () {
    return {
      sheetVisible: false,
      message: "",
      bbxingming: this.$root.state.Fromdata.bbxingming,
      bbnumber: this.$root.state.Fromdata.bbnumber,
      bbzhengjianType: this.$root.state.Fromdata.bbzhengjianType,
      bbzhengjianNub: this.$root.state.Fromdata.bbzhengjianNub,
      bbchushengdate: this.$root.state.Fromdata.bbchushengdate,
      bbxingbie: this.$root.state.Fromdata.bbxingbie,
      bbemail: this.$root.state.Fromdata.bbemail,
      actions: [
      {
        name: '身份证',
        method: this.callselect
      },
      {
        name: '护照',
        method: this.callselect2
      }]
     
    }
  },
 
  components: {
          MtSheet: Actionsheet,
          MtPicker: DatetimePicker,
          Mtradio: Radio,
           MtButton: Button
      },
  methods: {
   
     openPicker() {
        this.$refs.pickercsrq.open();
      },
       handleConfirm(value) { 
        let datenow =new Date(value);
       this.bbchushengdate = formatDate(datenow, 'yyyy-MM-dd'); 
       
    },
    openSheet() {
        this.sheetVisible = true;
      },
      callselect() {
        let _thatname = $("#actionsheet").find("li:first-child").text();  
        this.bbzhengjianType = 0
        let bbzhengjianType = this.bbzhengjianType
      },
      callselect2() {
        let _thatname = $("#actionsheet").find("li:last-child").text();
          this.bbzhengjianType = 1
          let bbzhengjianType =  this.bbzhengjianType     
      },
  },
  created() {
    this.options = ['男', '女'];
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Insured h1{float: left;margin: 10px 0 10px 5%; width: 95%; border-bottom: 1px solid #dcdcdc; padding: 10px 0}
.Insured h1 .dt-style{display: inline-block;text-align: center;background-color: #895192;width: 19px;height:19px;line-height:19px;color: #ffffff;border-radius: 100%; margin-right: 5px;}
.radioBox{overflow: hidden; display: inline-block; width: 180px;    vertical-align: middle;}
</style>
