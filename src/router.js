import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Routes from '@/components/Routes'
import HelloWorld from '@/components/HelloWorld'
import Color from '@/components/Color'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Message from '@/components/Message'
import Stuff from '@/components/Stuff'

Vue.use(Router)

export default new Router({
	mode: 'hash', //history
	routes: [
	{
		path: '/',
		name: '首页',
		component: HelloWorld,
    icon: 'ionic'
	},
  {
    path: '/iView',
    name: 'iView',
    icon: 'ios-keypad',
    component:Routes,
    children:[
    {
      path: 'Color',
      name: '色彩',
      component: Color,
      icon: 'ios-analytics'
    },{
      path: 'Icon',
      name: '图标',
      component: Icon,
      icon: 'android-favorite'
    },
    {
      path: 'Button',
      name: '按钮',
      component: Button,
      icon: 'android-radio-button-on'
    },
    {
      path: 'Form',
      name: '表单',
      component: Form,
      icon: 'ios-list'
    },
    {
      path: 'Message',
      name: '消息',
      component: Message,
      icon: 'chatbox'
    },
    {
      path: 'Stuff',
      name: '其他',
      component: Stuff,
      icon: 'android-apps'
    }]
  },{
    path: '/*',
    name: '404',
    component: NotFound,
    icon: 'alert'
  }
  ]
})
