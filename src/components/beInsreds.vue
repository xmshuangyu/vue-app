<template>
  <div class="beInsreds "  v-if="isShow"> 
   <nyhead ref="twoNav" :isA="isA" :isB="isB" :isC="isC"></nyhead>
   <div class="cotterMain white clearfix"><h1 ><span class="dt-style">{{pages}}</span>{{title}}</h1>
    <div class="t_cppBox">
    <div class="t_cppA"  v-if="isclose" >
      <span class="left"   >与投保人关系</span>
     <span class="right iconmore" @click="openSelect"><input type="text" readonly   id="betype" ref="betype"><mt-actionsheet :actions="actions" v-model="selectVisible" id="Sactionsheet" ></mt-actionsheet></span>
    </div>
  <Insured ref="Insured" v-show="equate"></Insured>
  <bbnsured ref="bnsured" v-show="bbrquate"></bbnsured>
  <div class="toubao-list " v-if="defaulthide">
    <div class="lpbg-main clearfix">
                      <div class="name"><input type="text" v-model="bbxingming" readonly></div>
                      <div class="nub-sfz">{{bbzhengjianNub}}</div>
                      <a class="remove-list" href="javascript:;">删除</a>
      </div>
  </div>
  </div>
  </div>
    <div class="toggle mt3" v-if="toggleshow">
                    <p class="clearfix">受益人：法定</p>
                    <p class="clearfix mt3">总价：<span class="price">{{proprise}}</span></p>
                    </div>
                    <div class="btn-box" ><mt-button id="myButton" type="primary"  size="large" @click="orderconfirm" ref="myButton" v-if="nextpost">保存资料</mt-button>
          <mt-button  type="primary"  size="large" @click="postconfirm" ref="myButton2" v-if="nextpostcomfig">提交订单</mt-button>
                    </div>
  <footerdb></footerdb>
  </div>
</template>
<script>
import nyhead from '@/components/nyhead'
import footerdb from '@/components/footerdb'
import Insured from '@/components/Insured'
import bbnsured from '@/components/bbnsured'
import { Actionsheet, DatetimePicker, Radio ,Button } from 'mint-ui';
export default {  
  data () {
    return {
      isA: true, 
      isB: true,
      nextpost: true,
      isC: true,
      equate:false,
      selectVisible: false,
      bbrquate:false,
      toggleshow: false,
      isclose: true,
      nextpostcomfig : false,
      defaulthide: false,
      proprise: this.$root.state.Foo.bfe,
      pages: 3,
      title:"被保人信息",
      bbzhengjianNub: this.$root.state.Fromdata.bbzhengjianNub,
      xingming: this.$root.state.Fromdata.xingming,
      bbxingming: this.$root.state.Fromdata.bbxingming,
      number: this.$root.state.Fromdata.number,
      zhengjianType: this.$root.state.Fromdata.zhengjianType,
      zhengjianNub: this.$root.state.Fromdata.zhengjianNub,
      chushengdate: this.$root.state.Fromdata.chushengdate,
      xingbie: this.$root.state.Fromdata.xingbie,
      email: this.$root.state.Fromdata.email,
       actions: [
      {
        name: '本人',
        method: this.callselect
      },
      {
        name: '父母',
        method: this.callselect2
      },
      {
        name: '朋友',
        method: this.callselect2
      },
      {
        name: '其他',
        method: this.callselect2
      }],

    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },       
  },
  components: { nyhead, footerdb, Insured, Actionsheet, DatetimePicker, Radio, bbnsured },
  methods: {
   openSelect() {
        this.selectVisible = true;
      },
      callselect() {
        this.equate = true
        this.bbrquate = false
        $("#betype").val(this.actions[0].name);   
      },
      callselect2() {
        this.bbrquate =true
        this.equate= false
        $("#betype").val(this.actions[1].name);  
        this.$refs.bnsured.bbxingming ="" 
        this.$refs.bnsured.bbzhengjianNub=""
      },
      orderconfirm() {
         this.bbrquate =false
         this.equate = false
         this.isclose = false
         this.defaulthide = true
         this.toggleshow =true   
        if(this.$refs.betype.value=="本人"){
          this.bbxingming = this.$refs.Insured.xingming
         this.bbzhengjianNub = this.$refs.Insured.zhengjianNub
        }else{
            this.bbxingming = this.$refs.bnsured.bbxingming
         this.bbzhengjianNub = this.$refs.bnsured.bbzhengjianNub
        } 
         this.$refs.myButton.$el.innerText = "提交订单"
         this.nextpost= false
         this.nextpostcomfig = true
       
      },
      postconfirm() {
      let bbxingming = this.$refs.bnsured.bbxingming||this.$refs.Insured.xingming
      let bbnumber = this.$refs.bnsured.bbnumber
      let bbzhengjianNub = this.$refs.bnsured.bbzhengjianNub||this.$refs.Insured.zhengjianNub
      let bbemail = this.$refs.bnsured.bbemail
      let bbzhengjianType = this.$refs.bnsured.bbzhengjianType
      let bbchushengdate = this.$refs.bnsured.bbchushengdate
      let bbxingbie = this.$refs.bnsured.bbxingbie

       store.setFromdatabxm(bbxingming)
       store.setFromdatabnum (bbnumber)
       store.setFromdatabzjtp (bbzhengjianType)
       store.setFromdazjbnum(bbzhengjianNub)
       store.setFromdatabcsrq (bbchushengdate)
       store.setFromdatabxb (bbxingbie) 
       store.setFromdatabbemil (bbemail) 
        this.$router.push({name:'Inrocessof',params:{
        
        }})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lpbg-main .name{width: 24%; float: left; line-height: 44px;}
.lpbg-main .nub-sfz{width: 53%; float: left; line-height: 44px;}
.lpbg-main .remove-list{width: 15%; float: right; line-height: 44px; text-align: right;}
</style>
  