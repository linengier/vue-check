import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Color from '@/components/Color'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
	
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
  },{
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
	]
})
