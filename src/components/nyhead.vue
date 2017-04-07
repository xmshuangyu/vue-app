<template>
  <div class="nyhead"> 
  <div class="pathback" onclick="window.history.go(-1)"><i class="mintui mintui-back"></i>返回</div>
    <h2  class="title">{{msg}}</h2>
    <div class="status">
  <div class="status_line clearfix">
        <div class="line"></div>
        <div class="statusflex status_x">
          <span :class="{ 'on': isA}"></span>
        </div>
        <div class="statusflex status_t" ref="twoNav">
           <span :class="{'on': isB}"></span>
        </div>
        <div class="statusflex status_b">
           <span :class="{'on': isC}"></span>
        </div>
        <div class="statusflex status_h">
         <span :class="{'on': isD}"></span>
        </div>
        <div class="statusflex status_f">
          <span :class="{'on': isE}"></span>
        </div>
      </div>
  <div class="status_name clearfix">
        <div class="statusflex status_x">
          <p class="">选计划</p>
        </div>
        <div class="statusflex">
          <p>投保人信息</p>
        </div>
        <div class="statusflex">
          <p>被保人信息</p>
        </div>
        <div class="statusflex">
          <p>核对订单</p>
        </div>
        <div class="statusflex status_f">
          <p>付款</p>
        </div>
      </div>
</div>
  </div>
</template>

<script>

export default {
  name: 'nyhead',
  data () {
    return {
      msg: '填写投保资料'
     
    }
  },
  props: {
    isA:{
       type: Boolean,
       default: true
    },
    isB:{
       type: Boolean,
       default: false
    },
    isC:{
       type: Boolean,
       default: false
    },
    isD:{
       type: Boolean,
       default: false
    },
    isE:{
       type: Boolean,
       default: false
    }
  },
  components: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{ height: 46px; background-color: #895192;width: 100%;position: relative;line-height: 46px;}
.title{text-align: center; font-size: 16px; color: #fff; font-weight: normal;}
.pathback{position: absolute; left: 20px; top:17px; z-index:100;  color:#fff;}
.status{height:60px;width:90%;padding:20px 5% 0px 5%;}
.line{width:100%;height:5px;border-radius:10px;background-color:#895192;position:absolute;z-index:1;top:5px}
.status_name{height:35px;line-height:35px}
.status_line,.status_name{text-align: center; position:relative;}
.status_jt{height:10px}
.statusflex{width:25%;float: left;position:relative;z-index:2;height: 15px;}
.status_name p{font-size:0.8rem;text-align: center;}
.statusflex span{display:none;background-color:#895192;border-radius: 100%;height:15px;width:15px;text-align: center;margin:0 auto;position:relative}
.statusflex span:before{content:"";background: #fff;border-radius: 100%;display:block;width:11px;height:11px;position:absolute;top:2px;left:2px}
.statusflex span:after{content:"";background: #895192;border-radius: 100%;display:block;width:7px;height:7px;position:absolute;top:4px;left:4px}
.jt{width:0px;border-bottom:10px solid #fff;border-left:8px solid transparent;border-right: 8px solid transparent;margin:0 auto;display:none;}
.status_x{width:12.5%;}
.status_f{width:12.5%;}
.status_x span{text-align: left;margin:0;}
.status_x p{text-align: left;}
.status_x .jt{margin:0}
.status_f span{float: right;}
.status_f p{text-align: right;}
.status_f .jt{float: right;}
.statusflex .on{display:block}
.status_x p.on{color: #895192;}
.statusflex span.on{display:block}

</style>
