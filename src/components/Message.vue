<template>
  <div>
    <Card class='card'>
      <h3 slot="title">全局通知</h3>
      <Button class='card' type="primary" @click="Minfo">显示普通提示</Button>
      <Button class='card' type="success" @click="Msuccess">显示成功提示</Button>
      <Button class='card' type="warning" @click="Mwarning">显示警告提示</Button>
      <Button class='card' type="error" @click="Merror">显示错误提示</Button>
      <Button class='card' @click="Mloading">显示加载提示</Button>
      <Button class='card' @click="Mtime">显示一个10秒的提示</Button>
      <Button class='card' @click="Mclosable">可以手动关闭的提示</Button>
    </Card>
    <Card class='card'>
      <h3 slot="title">通知提醒</h3>
      <Button class='card' type="primary" @click="Ninfo(false)">消息</Button>
      <Button class='card' type="success" @click="Nsuccess(false)">成功</Button>
      <Button class='card' type="warning" @click="Nwarning(false)">警告</Button>
      <Button class='card' type="error" @click="Nerror(false)">错误</Button>
      <Button class='card' type="primary" @click="Ninfo()">仅标题-消息</Button>
      <Button class='card' type="success" @click="Nsuccess(true)">仅标题-成功</Button>
      <Button class='card' type="warning" @click="Nwarning(true)">仅标题-警告</Button>
      <Button class='card' type="error" @click="Nerror(true)">仅标题-错误</Button>
      <Button class='card' @click="Ninfo2()">仅标题-这条消息需要手动关闭</Button>
    </Card>
    <Card class='card'>
      <h3 slot="title">对话框</h3>
      <Button class='card' type="primary" @click="Moinstance('info')">消息</Button>
      <Button class='card' type="success" @click="Moinstance('success')">成功</Button>
      <Button class='card' type="warning" @click="Moinstance('warning')">警告</Button>
      <Button class='card' type="error" @click="Moinstance('error')">错误</Button>
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
      },
      Moinstance (type) {
        const title = '标题';
        const content = '<p>提示内容</p>';
        switch (type) {
          case 'info':
          this.$Modal.info({
            title: title,
            content: content
          });
          break;
          case 'success':
          this.$Modal.success({
            title: title,
            content: content
          });
          break;
          case 'warning':
          this.$Modal.warning({
            title: title,
            content: content
          });
          break;
          case 'error':
          this.$Modal.error({
            title: title,
            content: content
          });
          break;
        }
      }
    }
  }

</script>
<style scoped>
.card {
  margin:0 0 10px;
}

</style>
