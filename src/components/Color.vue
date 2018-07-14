<template>
  <div>
    <Card v-for='(item, index) in list' class='color' :key='index'>
      <h3>{{item.title}}</h3>
      <p>{{item.text}}</p>
      <Row type="flex" justify="space-between" style="text-align:center">
        <Col v-for='(stuff,i) in item.children' v-if='item.children.length<4' span='6' :key='i'>
        <Card :style='{background:stuff.color}' >
          <div>
            <p class='title'>{{stuff.title}}</p>
            <p class='title'>{{stuff.text}}</p>
            <a class='title'>{{stuff.color}}</a>
          </div>
        </Card>
        </Col>
        <Col v-else-if='item.children.length>4' span='3' :key='i'>
        <Card :style='{background:stuff.color}' >
          <div v-if='i>3'>
            <p class='title' style="color:#666">{{stuff.title}}</p>
            <p class='title' style="color:#666">{{stuff.text}}</p>
            <a class='title' style="color:#666">{{stuff.color}}</a>
          </div>
          <div v-else>
            <p class='title'>{{stuff.title}}</p>
            <p class='title'>{{stuff.text}}</p>
            <a class='title'>{{stuff.color}}</a>
          </div>
        </Card>
        </Col>
        <Col v-else span='4' :key='i'>
        <Card :style='{background:stuff.color}' >
          <div>
            <p class='title'>{{stuff.title}}</p>
            <p class='title'>{{stuff.text}}</p>
            <a class='title'>{{stuff.color}}</a>
          </div>
        </Card>
        </Col>
      </Row>
    </Card>
  </div>
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
  padding: 8px;
  margin: 18px;
}

</style>
