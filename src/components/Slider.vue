<template>
  <div>
    <h3 slot="title">滑块</h3>
    <Card class='card'>
      <p slot="title">按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </Card>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'DSlider',
    methods: {

    },
    data() {
      return {
      }

    }
  }

</script>
<style type="text/css" scoped="">
.card {
  margin: 10px 0;
}
</style>
