<template>
  <div id="catter">
      <mainhead :seller="seller"></mainhead> 
      <list ref="goods"></list>
    </div>
  </div>
</template>
<script>
import test from '@/components/test'
import mainhead from '@/components/mainhead'
import list from '@/components/list'
import hello from '@/components/Hello'

export default {
  data() {
    return {
      author: "微信公众号 2222",
      articles: [],
      seller:{}  
    }
  },
   created(){
    this.$http.get('../api/seller').then( (response) => {
      response = response.body;   
      if (response.errno === 0){
        this.seller = response.data;
       
      }
    })
   
  },
  components: { hello, mainhead, list, test  }
/*  mounted() {
            setTimeout(() => {
              console.log(1)
                this.$router.push({
                    path: '/three'
                });
            }, 2000);
        }*/

}
</script>

<style scoped>
#catter{
  background-color: #f0f0f0;
}
</style>
