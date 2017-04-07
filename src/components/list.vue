<template>
<div id="goodsList" >  
<div class="paroduct_box mt3">
       <div class="product_nav_rt "   id="slide-tab" >
          <ul ref="menu" v-bind:style="mapStyle">
             <li  v-for="(item, $index) in goods" @click="selectStyle (item,$index,$event) " :class="{'active':activeIndex===$index||item.active}"  ><a  @click="show($index)">{{item.name}}</a><!-- {{index}} --></li>
          </ul>
       </div>  
    </div> 
    
    <div class="tb-p-list" ref="productList">
        <div class="p-list mc" id="p-list"  ref="foods" >
            <ul v-for="(item, $index) in goods"  v-show="$index === i" ref="foodList" >
                <li v-for="food in item.foods"  @click="selectFood(food,$event)" >
                <a>
                 
                <h6>{{food.name}}</h6>
                <span class="t">
               好评率{{food.rating}}
                </span>
                 <span class="t">
                月售{{food.sellCount}}
                </span>
                <span class="block_span mt1" ><i class="price">{{food.price}}</i>元起</span>
                </a>
                 <div class="now_tb"><span class="btn">立即投保</span></div>
                </li>
            </ul>
        </div>
         <test :food="selectedFood" ref="food"></test> 
    </div>
   
</div>             
</template>
<script>
import test from '@/components/test'
import BScroll from 'better-scroll'  
import $ from 'jquery'
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
      activeIndex: 0,
      i: 0,
      selectedFood: {},
      goods:[]
   
    }
  },
     components: { test },
      created( ){
       this.$http.get('../api/goods').then( (response) => {
      response = response.body; 
      if (response.errno === 0){  
        this.goods = response.data; 
         this.$nextTick( function() { 
             this.ulWidth();
             this._initScroll();
      })
      }

    })
      
     },
     methods: {
       show (index) {
      this.i = index;
    },
     selectFood(food, event) {
        this.selectedFood = food;
        this.$refs.food.show();
       
      },
      selectStyle:function(item,$index,$event){
        if(!event._constructed){
              return         
             }  
               const _this=this;
               this.goods.forEach(function(item){//遍历items

              _this.$set(item,'active',false);
              });
               this.activeIndex = $index
               this.$set(item,'active',true);//这里item是正在点击的栏目，处于被选中状态
             
                /*this.$nextTick( function() { 
             this._initScroll()
      })      */
            },
        ulWidth() {
           let list = this.$refs.menu.children
           let listnub = list.length
           let listwidth = list[0].offsetWidth
           this.$refs.menu.style.width = listwidth*listnub + 'px'
     },
       _initScroll () {         // 2 函数声明
       this.menuScroll = new BScroll(document.querySelector('#slide-tab'), {
        click: true,
        scrollX: true,
        starX: 0
       })
      /* this.menuScroll = new BScroll(this.$refs.productList, {
        click: true,
        scrollY: true
       })*/
      }
      }   
}
</script>

<style scoped>

.product_nav_left {   float: left;    margin-top: 2px;}
.product_nav_left a{width: 40px; display: block; text-align: center;     padding: 4px 0; border-bottom: 2px solid #fff; }
.product_nav_left a span{font-size: 14px; display: block; height: 100%; border-right: 1px solid #ccc; height: 100%;}
.paroduct_box a.actvice{ border-bottom: 2px solid #8c7fee; color: #8c7fee; }
.paroduct_box{background-color: #fff;overflow: hidden; margin: 15px 0 0 0 }
.product_nav_rt{  overflow: hidden;height: 37px;} 
.product_nav_rt ul  li{ float: left; text-align: center;  display:block;}
.product_nav_rt ul  li.active a{border-bottom:2px solid #8c7fee; color: #8c7fee;}
.product_nav_rt ul  li.unactive{ }
.product_nav_rt ul  li a {  padding:10px; display: block; font-size: 16px;  position: relative; border-bottom:2px solid #fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width: 70px; }
.tb-p-list {position: absolute; width: 100%;background-color: #f0f0f0;}
.tb-p-list .p-list ul li{margin: 10px 0; background: #fff;     display: -webkit-box;display: -ms-flexbox;display: flex}
.p-list li a {display:block;overflow:hidden;padding:10px; line-height: 20px;     position: relative; -webkit-box-flex: 1;-ms-flex: 1;flex: 1;width: 184px; }
.tb-p-list .p-list ul li h6{ font-size: 16px;  font-weight: normal;}
.tb-p-list .p-list ul li span{display: block; font-size: 12px;}
.tb-p-list .p-list ul li span i{font-size: 20px;   color: #dd434d}
.now_tb{ padding-top: 45px;-webkit-box-flex: 1;-ms-flex: 1 ;flex: 1;}
.now_tb span{font-size: 16px!important;}
.mt1{margin: 10px 0 0 0}
</style>