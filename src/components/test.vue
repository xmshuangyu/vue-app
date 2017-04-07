<template>
 <transition name="move">
  <div  class="productDetil"  ref="food" v-show="showFlag" >
   <div class="erji_title ">
  <hello page-type="产品详情"></hello> 
   <div class="return" @click="hide">
            <i class="mintui mintui-back"></i>
            返回
          </div>
    <div class="image-header white">
     <h1 class="btomLine" @click="showwdd()">{{food.name}}</h1>
     <div class="productIfmg"><div class="prdoctLeft"> <img :src="food.image" class="" width="80" height="80"></div>
    <div class="bdTtext" v-for="(rating, $index) in food.ratings" v-if="$index === z" > 
     {{rating.text}}
    </div>
    </div>
    <div class="ldz_inspage_markinfo">
      <div class="ldz_inspage_markinfo_t">促销价:<span id="price"  v-for="(rating, $index) in food.ratings" v-if="$index === z">￥ {{rating.text|formatstr}}</span>起</div>
      <div class="ldz_inspage_markinfo_td"><span>手机专享价</span></div>
    </div>
     <div class="bdtese">
       <div class="bdcdjieshao"><i class="cd"></i> <span>一分钟出单</span></div>
       <div class="bdcdjieshao"><i class="dzbd"></i><span>电子保单</span></div>
       <div class="bdcdjieshao"> <span>销量：{{food.sellCount}}</span></div>
     </div>
      </div>
      <div class="t_cppBox white"> 
     <div class="foodFinfo btomLine mb5">
       <p>{{food.info}}</p>
     </div>
     <div class="t_cppA">
       <span class="left">保险期限：</span>
       <span  class="right">{{food.rating}}</span>
     </div>
     <div class="t_cppA">
       <span class="left">被保人年龄</span>
       <span class="right">{{food.ensureChar}}</span>
     </div>
      <div    class="t_cppA mb5">
  <span v-for="(rating, $index) in food.ratings" @click="select(rating,$index,$event)" class="lvyou_type" :class="{'active':activeIndex===$index||rating.active}">{{rating.username}}</span>
    </div> 
    <div class="t_cppA mb5">
       <span class="left">保费试算</span>
         <span  v-for="(rating, $index) in food.ratings" v-if="$index === z" class="right"  >
     {{rating.text|formatstr}}
    </span>
     </div>
     <div class="t_cppA btomLine">
       <span class="left">产品详情</span>
       <span class="right iconmore" @click="toggleContent()" ></span>
     </div>
     <div class="pdtBox mb5" v-show="onlyContent">
       <ul>
         <li v-for="(yiwaish, $index) in food.yiwaish" >
         <div class="t_cppA"> 
         <span class="left">飞机意外伤害</span>
         <span class="right">{{yiwaish.feiji}}</span>
        </div>
         <div class="t_cppA"> 
         <span class="left">轨道交通意外伤害</span>
         <span class="right">{{yiwaish.gdjt}}</span>
        </div>  
         </li>
       </ul>
     </div>
      <div class="foodFinfo btomLine">
       <span >投保须知</span>
       <input type="text" @input="inputName" :value="bxjh" />
     </div>
     <div class="foodFinfo mb50" style="padding-bottom:90px;">
       {{food.tbxzhid}}
     </div>
      </div>
     
    
    </div>
      <div class="btn_toubao">
   <a  class="btn-call" >联系客服</a>
   <a class="btn-submit" @click="addpost" >立即投保</a>
   </div>
   
  </div>
  </transition>

</template>
<script>
import BScroll from 'better-scroll';
import hello from '@/components/Hello'
export default {
  data() {
    return {
      author: '234',
      articles: [],
      showFlag: false,
      onlyContent: false,
      name: this.$root.state.Foo.name,
       activeIndex: 0,
      z:0,
      teshedefult: 0
    }
  },
  props: {
       food: {
        type: Object
      },
      ratings: {
        type: Array,
        default() {
          return [];
        }
      }
    },
  filters: {
     formatstr(value) {
         return value.slice(0,4);
      }
  },
  components: { hello },
  methods: {
    inputName(e) {
          store.setFooBxjh(e.target.value)
        },
    addpost() {  
      let prodata = this.food.rating 
      let proprise = document.getElementById('price').innerHTML;
      let name = this.food.name 
      store.setFooBxjh(prodata)
      store.setFooBfe(proprise)
      store.setFooName (name)
        this.$router.push({name:'PlanConfirm',params:{
        
        }})
    },
     toggleContent() {
        this.onlyContent = !this.onlyContent;
      },
   select(rating,$index,$event) {
               this.z = $index
               const _this=this;
               this.food.ratings.forEach(function(rating){
              _this.$set(rating,'active',false);
              });
               this.activeIndex = $index
               this.$set(rating,'active',true);
               
    },
      hide() {
        this.showFlag = false;
      },
      show() {
        this.showFlag = true;
        this.onlyContent = true;

       this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } 
        });
      }
    
        }
         
}
</script>

<style scoped>
.productDetil{position: fixed ; left: 0 ;top: 0 ;bottom: 0 ;z-index: 30 ; width: 100% ;background: #fff ;transform: translate3d(0, 0, 0) ;}
.productDetil.move-enter-active{ -webkit-transition: all 0.2s linear;transition: all 0.2s linear;}
.productDetil.move-leave-active{-webkit-transition: all 0.2s linear;transition: all 0.2s linear;}
.image-header{margin-bottom: 10px; }
.productDetil.move-enter{-webkit-transform: translate3d(100%, 0, 0);  transform: translate3d(100%, 0, 0);}
.productDetil.move-leave-active {-webkit-transform: translate3d(100%, 0, 0);  transform: translate3d(100%, 0, 0);}
.return {position: absolute; top: 17px;left: 20px;color: #fff; z-index: 100;}

.prdoctLeft{-webkit-box-flex: 0;-ms-flex: 0 0 160px;flex: 0 0 160px;width: 160px;  text-align: center;}
.erji_title{background: #f2f2f2;}
 .erji_title h1{    padding: 10px 20px 10px 20px;font-weight: bold; font-size: 16px;}
 .productIfmg{width: 100%;display: -webkit-box; border-bottom: 1px solid #dcdcdc;}
 .productRight{-webkit-box-flex: 1; -ms-flex: 1;flex: 1;}
 .bdTtext{-webkit-box-flex: 1; -ms-flex: 1; flex: 1; line-height: 90px; padding-left:3px;color: #895192;;font-weight: bold; font-size: 24px; border-left: 1px solid #dcdcdc; text-align: center;}
 .bdtese{width: 100%;display: -webkit-box;    background: #fdfdfd;}
  .bdtese .bdcdjieshao{-webkit-box-flex: 1;-ms-flex: 1; flex: 1;text-align: center;     padding: 5px 0 5px 5px; font-size: 12px; color: #999; vertical-align: middle;}
.ldz_inspage_markinfo{width: 100%; overflow: hidden;    border-bottom: 1px solid #F8F8F8;}
.bdtese .bdcdjieshao span {display: inline-block; line-height: 30px;}
.bdtese .bdcdjieshao i{width: 30px; height: 28px; display: inline-block; vertical-align: middle; background-repeat: no-repeat;  }
.bdtese .bdcdjieshao i.cd{background-image: url("../assets/1.png");   background-size: 28px;    }
.bdtese .bdcdjieshao i.dzbd{background-image: url("../assets/dz.png");  background-size: 18px;     }
.ldz_inspage_markinfo_t{float: left;margin-right: 10px;font-size: 12px;margin-top: 4px;color: #999; padding:10px 10px 10px 20px;}
.ldz_inspage_markinfo_t span{color:#895192; margin-right: 5px;}
.ldz_inspage_markinfo_td{float: right;margin-right: 20px;padding:15px 10px 10px 20px;}
.ldz_inspage_markinfo_td span{background:#895192; font-size: 12px; color: #fff; padding: 5px; }
.foodFinfo{padding:10px 0 0 0;line-height: 33px; font-size: 14px; }
.lvyou_type{    display: inline-block;padding: 10px 20px;border-radius:45px;border: 1px solid #dedede; margin-right: 10px; font-size: 12px;}
.arrowdown{float: right; margin-right: 10px;}
.lvyou_type.active{background-color: #895192; color: #ffffff;}
.btn_toubao{padding: 10px;  position: fixed; bottom: 0; width: 100%; border-bottom: 1px solid #e5e5e5; border-top:1px solid #e5e5e5; margin-top: 60px; display: -webkit-box; background-color: #ffffff;}
.btn_toubao a.btn-call{-webkit-box-flex: 1;-ms-flex: 1; flex: 1;text-align: center;  display: block; border-radius: 45px; height: 42px; line-height: 42px; border:1px solid #dcdcdc;margin-right:5px; }
.btn_toubao a.btn-submit{-webkit-box-flex: 10px 0;-ms-flex: 10px 0; flex: 10px 0;text-align: center;  display: block; border-radius: 45px; height: 42px; line-height: 42px; border:1px solid #895192; margin-right:18px; width: 51%; background-color: #895192; color: #ffffff;}
</style>