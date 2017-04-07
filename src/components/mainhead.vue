<template>
  <div id="header">
   <header >
        <p><img class="logo" src="../assets/logo.png" alt=""></p>
    </header>
    <div class="slider"><mt-swipe :auto="4000">
  <mt-swipe-item><img v-bind:src="seller.avatar" alt="" class="backgroundimg"></mt-swipe-item>
  <mt-swipe-item><img v-bind:src="seller.avatar" alt="" class="backgroundimg"></mt-swipe-item>
  <mt-swipe-item><img v-bind:src="seller.avatar" alt="" class="backgroundimg"></mt-swipe-item>
</mt-swipe></div>
    
    </div>
</template>
<script>
// import hello from '@/components/Hello'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: []
    }
  },
   props: {
      seller: {
        type: Object
      }
    },
  components: { 
    MtSwipe: Swipe 
  }
   
  
}
</script>

<style scoped>
#header{ overflow: hidden; }
header{background-color: #895192; width: 100%; padding:  10px; position: relative;}
header img.logo {width: 200px;margin-left: 10px;vertical-align: middle;}
.slider{height: 120px;}
.dcontear.detail-img ul li{display:table-cell;width:100%;vertical-align:top}
header img.logo {
    width: 200px;
    margin-left: 10px;
    vertical-align: middle;
}
.backgroundimg{
  width: 100%;
  height: 120px;
}
</style>