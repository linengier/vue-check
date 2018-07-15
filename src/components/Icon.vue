<template>
  <div>
    <div style='margin:10px'>
      <h3>{{title}}</h3>
      <p>{{text}} - <a :href="link"> {{linkName}}</a></p>
    </div>
    <Row type="flex" justify="space-between" style="text-align:center">
      <Col v-for='(item,index) in list' span='8' :key='index'>
      <Card style='margin:10px'>
        <Icon :type="item" size="40" />
        <h3>{{item}}</h3>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'DIcon',
  data() {
    return {
      title: this.$store.state.icon.title,
      text: this.$store.state.icon.text,
      link: this.$store.state.icon.link,
      linkName: this.$store.state.icon.linkName,
      list: this.$store.state.icon.list
    }
  }
}

</script>
