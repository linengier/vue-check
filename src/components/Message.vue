<template>
  <div>
    <div style="margin:10px">
      <h2>通知</h2>
    </div>
    <Card class='card'>
      <div style="margin:10px">
        <h3>全局通知</h3>
      </div>
      <Button type="primary" @click="Minfo">显示普通提示</Button>
      <Button type="success" @click="Msuccess">显示成功提示</Button>
      <Button type="warning" @click="Mwarning">显示警告提示</Button>
      <Button type="error" @click="Merror">显示错误提示</Button>
      <Button @click="Mloading">显示加载提示</Button>
      <Button @click="Mtime">显示一个10秒的提示</Button>
      <Button @click="Mclosable">可以手动关闭的提示</Button>
    </Card>
    <Card class='card'>
      <div style="margin:10px">
        <h3>通知提醒</h3>
      </div>
      <p style="margin:10px">标题+文本</p>
      <Button @click="Ninfo(false)">消息</Button>
      <Button @click="Nsuccess(false)">成功</Button>
      <Button @click="Nwarning(false)">警告</Button>
      <Button @click="Nerror(false)">错误</Button>
      <p style="margin:10px">仅标题</p>
      <Button @click="Ninfo()">消息</Button>
      <Button @click="Nsuccess(true)">成功</Button>
      <Button @click="Nwarning(true)">警告</Button>
      <Button @click="Nerror(true)">错误</Button>
      <p style="margin:10px">仅标题</p>
      <Button @click="Ninfo2()">这条消息需要手动关闭</Button>
    </Card>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'DMessage',
  data() {
    return {}
  },
  methods: {
    Minfo() {
      this.$Message.info('这是一条普通提示');
    },
    Msuccess() {
      this.$Message.success('这是一条成功提示');
    },
    Mwarning() {
      this.$Message.warning('这是一条警告提示');
    },
    Merror() {
      this.$Message.error('这是一条错误提示');
    },
    Mloading() {
      const msg = this.$Message.loading({
        content: 'Loading...',
        duration: 0
      });
      setTimeout(msg, 3000);
    },
    Mclosable() {
      this.$Message.info({
        content: '点右边可以关闭我',
        duration: 10,
        closable: true
      });
    },
    Mtime() {
      this.$Message.info({
        content: '我将会在十秒后消失',
        duration: 10
      });
    },
    Ninfo(nodesc) {
      this.$Notice.info({
        title: '这是标题',
        desc: nodesc ? '' : '这里是提示文本'
      });
    },
    Ninfo2(nodesc) {
      this.$Notice.info({
        title: '这是标题',
        desc: '这个提醒需要手动关闭',
        duration: 0
      });
    },
    Nsuccess(nodesc) {
      this.$Notice.success({
        title: '这是标题',
        desc: nodesc ? '' : '这里是提示文本'
      });
    },
    Nwarning(nodesc) {
      this.$Notice.warning({
        title: '这是标题',
        desc: nodesc ? '' : '这里是提示文本'
      });
    },
    Nerror(nodesc) {
      this.$Notice.error({
        title: '这是标题',
        desc: nodesc ? '' : '这里是提示文本'
      });
    }
  }
}

</script>
<style scoped>
.card {
  margin: 10px 0 10px 0;
}

</style>
