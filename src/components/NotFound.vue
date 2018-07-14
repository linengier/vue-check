<template>
  <Card style='text-align: center;'>
      <div class='circle'>
        <b>404</b>
      </div>
      <h1 style="color:#ff9900;padding:0 0 100px;">该页面已经飞到了宇宙</h1>
  </Card>
</template>
<script type="text/javascript">
export default {
  name: "NotFound"
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
