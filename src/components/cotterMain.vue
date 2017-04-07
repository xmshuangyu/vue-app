<template>
	<div class="cotterMain ">
	<div class="cotterMainTop white" >
	<mt-datetime-picker ref="picker"type="date" v-model="pickerValue"   @confirm="handleConfirm" year-format="{value}年" month-format="{value} 月" date-format="{value} 日"> </mt-datetime-picker>
	<mt-datetime-picker ref="pickerD"type="date" v-model="pickerValue"   @confirm="handleConfirmd" year-format="{value}年" month-format="{value} 月" date-format="{value} 日"> </mt-datetime-picker>
		<h1 ><span class="dt-style">{{pages}}</span>{{title}}</h1>
		<div class="t_cppBox">
		<div class="t_cppA">
			<span class="left" >保险计划</span>
			<span class="right iconmore">{{bxjh}}</span>
		</div>
		<div class="t_cppA">
			<span class="left">起保时间</span>
			<span class="right iconmore" @click="openPicker"><input type="text" :value="message"  readonly unselectable="on" ></span>
		</div>
		<div class="t_cppA">
			<span class="left">终保时间</span>
			<span class="right iconmore" @click="endPicker"><input type="text" :value="endtime" readonly unselectable="on" ></span>
		</div>
		</div>
		</div>
		<div class="toggle mt3">
			<span>保费：</span>
			<span class="price">{{proprise}}</span>
		</div>
		<div class="btn-box mt3"><mt-button type="primary"  size="large" @click="gotoConfirm">马上支付</mt-button></div>
		
	</div>

</template>
<script >
 import {formatDate} from '@/common/js/date';
 import {DatetimePicker , Button} from 'mint-ui';
	export default{
		data() {
			return {
				title: '投保计划',
				pages:1,
				fooCount: 0,
				message: "2017-03-21",
				endtime:"2018-01-01",
			    ison: true,
			    name: this.$root.state.Foo.name,
				bxjh: this.$root.state.Foo.bxjh,
				proprise: this.$root.state.Foo.bfe,
				startDate:''
			}
		},
		components: {
          MtPicker: DatetimePicker,
          MtButton: Button
      },
     methods: {
      openPicker() {
        this.$refs.picker.open();
      },
       endPicker() {
        this.$refs.pickerD.open();
      },
      handleConfirm(value) {
        this.message = formatDate(value, 'yyyy-MM-dd')
    
    },
     handleConfirmd(value) {
        this.endtime = formatDate(value, 'yyyy-MM-dd')
        console.log(this.message);
        if(this.endtime<this.message){
        	alert(1);
        }
    },
    gotoConfirm(){
       this.$root.state.Foo.tbtime = this.message 
       this.$root.state.Foo.zbtime = this.endtime 
    	 this.$router.push({name:'goInsureds',params:{
        
        }})
    }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    }
		
	}
</script>
<style>
.cotterMain h1{float: left; width: 95%; border-bottom: 1px solid #dcdcdc; padding: 10px 0 10px 20px;}
.cotterMain h1 .dt-style{display: inline-block;text-align: center;background-color: #895192;width: 19px;height:19px;line-height:19px;color: #ffffff;border-radius: 100%; margin-right: 5px;}
.t_cppBox{width: 90%; padding: 0 5% 20px 5%; clear: both;}
.t_cppBox .t_cppA{padding: 10px 0; border-bottom: 1px solid #dcdcdc; display: -webkit-box;}
.t_cppBox .t_cppA span.left { color: #999;    display: inline-block; font-size: 13px;  margin-right: 20px; width: 100px; flex: 0 0 100px; ms-flex: 0 0 100px;}
.t_cppBox .t_cppA span.right{    -webkit-box-flex: 1;-ms-flex: 1;flex: 1; display: block; font-size: 15px;     color: #895192;}
.t_cppBox .t_cppA input{color: #895192; font-size: 14px;    font-family: "Microsoft YaHei",Helvetica, Arial,sans-serif;} 
.toggle{padding: 5px 10px 5px 20px;}
.toggle p{font-size: 12px;}
.toggle .price{color: #895192;font-size: 14px;font-weight: bold;}
.btn-box{padding: 5px 20px;}
.btn-box .mint-button--primary{background-color: #9ecd17!important;}
.t_cppA span input{ border: none;background-color: #fff;outline:none   }
.iconmore{background-image: url("../assets/more1.png"); background-repeat: no-repeat; background-position: right center;}
</style>