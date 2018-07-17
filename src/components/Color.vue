<template>
  <Row>
    <Card v-for='(item, index) in list' class='color' :key='index'> 
      <p slot="title">{{item.title}}</p>
      <Row type="flex" :gutter="16" style="text-align:center">
        <Col v-for='(stuff,i) in item.children' v-if='item.children.length<4' :key='i' :sm='8' :xs="24">
        <Card :style='{background:stuff.color}'  >
          <p class='title'>{{stuff.title}}</p>
          <p class='title'>{{stuff.text}}</p>
          <a class='title' >{{stuff.color}}</a>
        </Card>
      </Col>
      <Col v-else :key='i' :sm='6' :xs="24" >
      <Card :style='{background:stuff.color}' style="margin-bottom: 16px">
        <template v-if='i>3' >
          <p class='title' style="color:#666">{{stuff.title}}</p>
          <p class='title' style="color:#666">{{stuff.text}}</p>
          <a class='title' style="color:#666">{{stuff.color}}</a>
        </template>
        <template v-else>
          <p class='title'>{{stuff.title}}</p>
          <p class='title'>{{stuff.text}}</p>
          <a class='title'>{{stuff.color}}</a>
        </template>
      </Card>
    </Col>
  </Row>
</Card>
</Row>
</template>
<script>
  export default {
    name: "DColor",
    data() {
      return {
        list: this.$store.state.color.list
      }
    }
  }

</script>
<style type="text/css" scoped>
.title {
  color: #fff;
}

.color {
  margin: 18px 0;
}

</style>
