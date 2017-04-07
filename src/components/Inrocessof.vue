<template>
  <div class="Inrocessof">
     <nyhead ref="twoNav" :isA="isA" :isB="isB" :isC="isC" :isD="isD"></nyhead>
      <div class="cotterMain white clearfix"><h1 ><span class="dt-style">{{pages}}</span>{{title}}</h1></div>
      <section class="outer_shadw">
    <h2>保单信息</h2>
    <div class="box_xinxi">
      <div class="c_main_line ">
        <span class="wd2 fl">保单名称</span>
        <div class="wd4 fl">
       <span class="product_name">
      {{name}} 
       </span>
        </div>
      </div>
       <div class="c_main_line ">
        <span class="wd2 fl">保单计划</span>
        <div class="wd4 fl">
       <span class="product_name">
       {{bxjh}}
       </span>
        </div>
      </div>
       <div class="c_main_line ">
        <span class="wd2 fl">起保时间</span>
        <div class="wd4 fl">
       <span class="product_name">
      {{tbtime}}
       </span>
        </div>
      </div>
      <div class="c_main_line ">
        <span class="wd2 fl">终止时间</span>
        <div class="wd4 fl">
       <span class="product_name">
      {{zbtime}}
       </span>
        </div>
      </div>
    </div>
    </section>
     <section class="outer_shadw mt3">
    <h2>投保人信息</h2>
    <div class="box_xinxi">
      <div class="c_main_line ">
        <span class="wd2 fl">投保人</span>
        <div class="wd4 fl">
       <span class="product_name">
      {{xingming}} 
       </span>
        </div>
      </div>
       <div class="c_main_line ">
        <span class="wd2 fl">证件号码</span>
        <div class="wd4 fl">
       <span class="product_name">
       {{zhengjianNub}}
       </span>
        </div>
      </div>
    </div>
    </section>
    <section class="outer_shadw mt3">
    <h2>被保人信息</h2>
    <div class="box_xinxi">
      <div class="c_main_line ">
        <span class="wd2 fl">被保人</span>
        <div class="wd4 fl">
       <span class="product_name">
      {{bbxingming}} 
       </span>
        </div>
      </div>
       <div class="c_main_line ">
        <span class="wd2 fl">证件号码</span>
        <div class="wd4 fl">
       <span class="product_name">
      {{bbzhengjianNub}}
       </span>
        </div>
      </div>
    </div>
    </section>
    <div class="btn_toubao">
   <div class="pap_ldz">
    <p>保费：{{proprise}}</p>
    <p>总计：<span class="c1 f28">{{proprise}}</span></p>
   <div class="goPay"> <mt-button  type="default"  size="small" class="blueed" @click.native="handleClick" >去支付</mt-button> </div> 
     
   </div>
    </div>
  </div>

</template>
<script>
import nyhead from '@/components/nyhead'
export default {
  
  data () {
    return {
        isA: true, 
        isB: true,
        isC: true,
        isD: true,
        pages: 4,
        title: "核对订单",
        zhengjianNub: this.$root.state.Fromdata.zhengjianNub,
        bbzhengjianNub: this.$root.state.Fromdata.bbzhengjianNub,
        name: this.$root.state.Foo.name,
        bxjh: this.$root.state.Foo.bxjh,
        proprise: this.$root.state.Foo.bfe,
        tbtime: this.$root.state.Foo.tbtime,
        zbtime: this.$root.state.Foo.zbtime,
        xingming: this.$root.state.Fromdata.xingming,
        bbxingming: this.$root.state.Fromdata.bbxingming

    }
  },
  components: { nyhead},
  methods: {
    handleClick() {
       this.$router.push({name:'Pay',params:{
        
        }})
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer_shadw h2{font-size: 16px; line-height: 31px; padding-left: 18px; position: relative;}
.c_main_line{ font-size: 12px; padding: 10px 0 10px 20px; overflow: hidden;  border-bottom: 1px solid #e5e5e5; background-color: #fff;}
.c_main_line  span{color: #999;display: inline-block;    font-size: 14px;}
.btn_toubao{padding: 10px 0; background-color: #fff; position: fixed; bottom: 0; width: 100%; border-bottom: 1px solid #e5e5e5; border-top:1px solid #e5e5e5;}
.Inrocessof{padding-bottom: 80px;}
.pap_ldz{padding-left: 20px; line-height: 22px;}
.goPay{position: absolute; right: 10px; bottom: 15px;}
.blueed{background-color: #9ecd17; color: #fff; min-width: 100px; font-size: 18px;}
</style>
