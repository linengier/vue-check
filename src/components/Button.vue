<template>
  <div>
    <div style="margin:10px">
      <h3>按钮</h3>
    </div>
    <Card class='card'>
      <p slot="title">按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
      <a slot="extra" @click="disabled=!disabled">
        <Icon type="ios-loop-strong"></Icon>
        {{disabled?'启用':'禁用'}}
      </a>
      <Button :disabled='disabled'>Default</Button>
      <Button :disabled='disabled' type="primary">Primary</Button>
      <Button :disabled='disabled' type="ghost">Ghost</Button>
      <Button :disabled='disabled' type="dashed">Dashed</Button>
      <Button :disabled='disabled' type="text">Text</Button>
      <Button :disabled='disabled' type="info">Info</Button>
      <Button :disabled='disabled' type="success">Success</Button>
      <Button :disabled='disabled' type="warning">Warning</Button>
      <Button :disabled='disabled' type="error">Error</Button>
    </Card>
    <Card class='card'>
      <p slot="title">图标按钮及按钮形状</p>
      <a slot="extra" @click="circle= circle? null:'circle' ">
        <Icon type="ios-loop-strong"></Icon>
        {{circle?'方形':'圆形'}}
      </a>
      <Button type="primary" :shape="circle" icon="ios-search"></Button>
      <Button type="primary" :shape="circle" icon="ios-search">Search</Button>
      <Button type="primary" :shape="circle">Circle</Button>
      <Button type="ghost" :shape="circle" icon="ios-search"></Button>
      <Button type="ghost" :shape="circle" icon="ios-search">Search</Button>
      <Button type="ghost" :shape="circle">Circle</Button>
    </Card>
    <Card class='card'>
      <p slot="title">按钮组合及大小</p>
      <a slot="extra" @click="circle2= circle2? null:'circle' ">
        <Icon type="ios-loop-strong"></Icon>
        {{circle?'方形':'圆形'}}
      </a>
      <ButtonGroup :shape="circle2" :size='size' style='margin-bottom: 20px'>
        <Button type="primary" @click="size='large'">
          <Icon type="arrow-expand"></Icon>
          Large
        </Button>
        <Button type="primary" @click="size='default'">
          Default
        </Button>
        <Button type="primary" @click="size='small'">
          <Icon type="arrow-shrink"></Icon>
          Small
        </Button>
      </ButtonGroup>
      <Button type="primary" long :shape="circle2">Long</Button>
    </Card>
    <Card>
      <p slot="title">加载中状态</p>
      <a slot="extra" @click="loading=!loading">
        <Icon type="ios-loop-strong"></Icon>
        {{loading?'停止加载':'加载'}}
      </a>
      <Button type="primary" :loading="loading" icon="checkmark-round" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
      </Button>
    </Card>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'DButton',
  methods: {
    toLoading() {
      this.loading = true;
    },
    endLoading() {
      this.loading = false;
    }
  },
  data() {
    return {
      disabled: false,
      circle: null,
      circle2: null,
      size: 'default',
      loading: false
    }

  }
}

</script>
<style type="text/css" scoped="">
.card {
  margin: 10px 0;
}

</style>
