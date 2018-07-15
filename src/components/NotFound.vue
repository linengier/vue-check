<template>
  <Card style='text-align: center;'>
      <div class='circle' @click='changeText' >
        <router-link to='NotFound'>
          <b>{{page}}</b>
        </router-link>
      </div>
      <h1 style="color:#ff9900;padding:0 0 100px;">{{text}}</h1>
  </Card>
</template>
<script type="text/javascript">
export default {
  name: "NotFound",
  data(){
    return {
      text:'该页面已被时间收束',
      page:'404'
    }
  },
  methods:{
    changeText(state){
      const time=new Date()
      this.page=time.getMilliseconds();
      this.text='你变更了时间线'
    }
  }
}
</script>
<style type="text/css" scoped>
  .circle{
    display: block;
    margin:100px auto;
    width:300px;
    height: 300px;
    border-radius: 300px;
    background: #ed3f14;
    overflow: hidden;
  }
  .circle b{
    display: block;
    background: #fff;
    color:#ed3f14;
    font-size: 100px;
    width: 250px;
    line-height:250px;
    border-radius: 250px;
    margin:25px auto;
  }
</style>
