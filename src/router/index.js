import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'

import HelloWorld from '@/components/HelloWorld'
import Color from '@/components/Color'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Form from '@/components/Form'
import Message from '@/components/Message'
import Stuff from '@/components/Stuff'

Vue.use(Router)

export default new Router({
	mode: 'history', //hash
	routes: [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/Color',
		name: 'Color',
		component: Color
	},
  {
    path: '/Icon',
    name: 'Icon',
    component: Icon
  },
  {
    path: '/Button',
    name: 'Button',
    component: Button
  },
  {
    path: '/Form',
    name: 'Form',
    component: Form
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message
  },
  {
    path: '/Stuff',
    name: 'Stuff',
    component: Stuff
  },{
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
	]
})
