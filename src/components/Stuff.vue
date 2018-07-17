<template>
  <Row  :gutter="16">
    <Col :sm='12' :xs="24">
    <Card class='color'>
      <h3 slot="title">标签</h3>
      <Tag checkable color="blue">标签一</Tag>
      <Tag checkable color="green">标签二</Tag>
      <Tag checkable color="red">标签三</Tag>
      <Tag checkable color="yellow">标签四</Tag>
    </Card>
    <Card class='color'>
      <h3 slot="title">头像</h3>
      <Avatar icon="person" />
      <Avatar>U</Avatar>
      <Avatar>USER</Avatar>
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
      <Avatar style="background-color: #87d068" icon="person" />
      <Badge count="1">
        <Avatar shape="square" icon="person" />
      </Badge>
    </Card>
    <Card class='color'>
      <h3 slot="title">时间轴</h3>
      <Timeline>
        <TimelineItem>
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">1984年</p>
          <p class="content">发布 Macintosh</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2007年</p>
          <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2010年</p>
          <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2011年10月5日</p>
          <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem>
      </Timeline>
    </Card>
    <Card class='color'>
      <h3 slot="title">步骤条</h3>
      <Steps :current="2" direction="vertical">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
    </Card>
    <Card class='color'>
      <h3 slot="title">滑块</h3>
      <Slider v-model="valueSlider1" />
      <Slider v-model="valueSlider2" range/>
      <Slider v-model="valueSlider1" :step="5" show-stops />
    </Card>
  </Col>
  <Col :sm='12' :xs="24">
  <Card class='color'>
    <h3 slot="title">评分</h3>
    <Rate allow-half show-text v-model="valueHalf" />
  </Card>
  <Card class='color' :style='{background:color}'>
    <h3 slot="title">颜色选择器</h3>
    <ColorPicker v-model="color" recommend alpha />
  </Card>
  <Card class='color'>
    <h3 slot="title">上传</h3>
    <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或拖拽上传</p>
      </div>
    </Upload>
  </Card>
  <Card class='color'>
    <h3 slot="title">走马灯</h3>
    <Carousel v-model="valueLoop" loop>
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
  </Card>
  <Card class='color'>
    <h3 slot="title">进度</h3>
    <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="wrong"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="25" hide-info></Progress>
  </Card>
  <Card class='color'>
    <h3 slot="title">分页</h3>
    <Page :total="100" show-total></Page>
  </Card>
  <Card class='color'>
    <h3 slot="title">提示</h3>
    <Tooltip content="Top Left text" placement="top-start">
      <Button>左上</Button>
    </Tooltip>
    <Tooltip placement="top">
        <Button>多行提示</Button>
        <div slot="content">
            <p>这里能自定义文本</p>
            <p><i>还有其他样式</i></p>
        </div>
    </Tooltip>
    <Tooltip content="Top Right text" placement="top-end">
      <Button>右上</Button>
    </Tooltip>
  </Card>
</Col>
<BackTop></BackTop>
</Row>
</template>
<script type="text/javascript">
  export default {
    name: 'DStuff',
    data() {
      return {
        valueText: 3,
        valueHalf: 2.5,
        color: '#fff',
        valueLoop: 1,
        valueSlider1: 10,
        valueSlider2: [10, 20]
      }
    }
  }

</script>
<style type="text/css" scoped>
.color {
  margin: 18px 0;
}

.demo-carousel {
  background: #506b9e;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
}

</style>
