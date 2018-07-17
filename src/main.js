// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './theme.less';

Vue.config.productionTip = false
Vue.use(iView); // 组件配置使用文档 https://www.iviewui.com/
Vue.use(Vuex); // 路由配置使用文档  https://vuex.vuejs.org

const nav = {
  state: {
    mode: 'vertical', //horizontal
    theme: 'dark',
    active: '首页',
    breadActive: '首页',
    accordion: false,
    open: [],
    list: [],
  },
  mutations: {
    navOnActive(newState, active) {
      newState.active = active;
      debugLog(newState.active)
    },
    navBread(newState, bread) {
      newState.breadActive = bread;
      debugLog(newState.breadActive)
    },
    navOpenSub(newState, open) {
      newState.open = open;
      debugLog(newState.open)
    },
    navUpdate(newState, list) {
      newState.list = list;
    }
  }
}
const color = {
  state: {
    list: [{
        title: '主色',
        text: 'iView 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。',
        children: [{
            title: 'Primary',
            color: '#2d8cf0'
          },
          {
            title: 'Light Primary',
            color: '#5cadff'
          }, {
            title: 'Dark Primary',
            color: '#2b85e4'
          }
        ]
      },
      {
        title: '辅助色',
        text: '辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。',
        children: [{
            title: '信息/常用',
            text: 'Info',
            color: '#2d8cf0'
          },
          {
            title: '成功/推荐',
            text: 'Success',
            color: '#19be6b'
          }, {
            title: '警告/醒目',
            text: 'Warning',
            color: '#ff9900'
          }, {
            title: '失败/错误',
            text: 'Error',
            color: '#ed3f14'
          }
        ]
      },
      {
        title: '中性色',
        text: '中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。',
        children: [{
            title: '标题',
            text: 'Title',
            color: '#1c2438'
          },
          {
            title: '正文',
            text: 'Content',
            color: '#495060'
          }, {
            title: '辅助/图标',
            text: 'Sub Color',
            color: '#80848f'
          }, {
            title: '失效 ',
            text: 'Disabled',
            color: '#bbbec4'
          }, {
            title: '边框',
            text: 'Border',
            color: '#dddee1'
          }, {
            title: '分割线',
            text: 'Divider',
            color: '#e9eaec'
          }, {
            title: '背景',
            text: 'Background',
            color: '#f8f8f9'
          }
        ]
      }
    ]
  },
  mutations: {
    colorOnActive(newState, color) {
      debugLog(color);
    }
  }
}
const icon = {
  state: {
    title: 'Icon 图标',
    text: 'iView 的图标使用开源项目',
    link: 'https://ionicons.com/',
    linkName: 'ionicons',
    list: [
      'ionic',
      'arrow-up-a',
      'arrow-right-a',
      'arrow-down-a',
      'arrow-left-a',
      'arrow-up-b',
      'arrow-right-b',
      'arrow-down-b',
      'arrow-left-b',
      'arrow-up-c',
      'arrow-right-c',
      'arrow-down-c',
      'arrow-left-c',
      'arrow-return-right',
      'arrow-return-left',
      'arrow-swap',
      'arrow-shrink',
      'arrow-expand',
      'arrow-move',
      'arrow-resize',
      'chevron-up',
      'chevron-right',
      'chevron-down',
      'chevron-left',
      'navicon-round',
      'navicon',
      'drag',
      'log-in',
      'log-out',
      'checkmark-round',
      'checkmark',
      'checkmark-circled',
      'close-round',
      'close',
      'close-circled',
      'plus-round',
    ],

  }
}
const form = {
  state: {
    formItem: {
      age: 0,
      city: "",
      date: "",
      desc: "",
      gender: "",
      interest: [],
      mail: "",
      name: "",
      time: "",
    },
    formPush: {
      age: 24,
      city: "北京",
      date: "Thu Jul 19 2018 00: 00: 00 GMT + 0800(中国标准时间)",
      desc: "我当初为什么要设置必须输入超过二十个字?这不是为难我自己吗",
      gender: "男",
      interest: ['吃', '睡'],
      mail: "mtboom@163.com",
      name: "隔壁老王",
      time: "02:01:08",
    }
  },
  mutations: {
    formSubmit(newState, from) {
      debugLog(newState, from)
    },
    formPush(newState, from) {
      //Todo 填入数据方式
      newState.formItem.age = newState.formPush.age
      newState.formItem.city = newState.formPush.city
      newState.formItem.date = newState.formPush.date
      newState.formItem.desc = newState.formPush.desc
      newState.formItem.gender = newState.formPush.gender
      newState.formItem.interest = newState.formPush.interest
      newState.formItem.mail = newState.formPush.mail
      newState.formItem.name = newState.formPush.name
      newState.formItem.time = newState.formPush.time
    }
  }
}
const debugLog = function(log) {
  if (store.state.debug) console.log(log);
}
const store = new Vuex.Store({
  state: {
    debug: false
  },
  modules: {
    'nav': nav,
    'color': color,
    'icon': icon,
    'form': form
  }
})
// /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    //直接进入页面时触发
    debugLog('beforeCreate')
    var path = '';
    this.$route.matched.map((item, index) => {
      if (this.$route.matched.length == index + 1) {
        this.$store.commit('navOnActive', item.path || '/');
      }
      if (index == 0) {
        path += item.name
        this.$store.commit('navOpenSub',[item.path])
      } else {
        path += '-' + item.name
      }
    })
    this.$store.commit('navBread', path);
  },
  created() {
    this.$store.commit('navUpdate', router.options.routes)
    // var active = () => {
    //   var p = window.location.parse(testUrl);
    //   // for (var value of this.$store.state.nav.list) {
    //   //   if (value.link==true){}
    //   // }
    // }
  },
  beforeMount() {
    debugLog('beforeMount')
  },
  mounted() {
    debugLog('mounted')
  },
  beforeUpdate() {
    debugLog('beforeUpdate')
  },
  updated() {
    debugLog('update')
  },
  activated() {
    debugLog('activated')
  },
  deactivated() {
    debugLog('deactivated')
  },
  beforeDestroy() {
    debugLog('beforeDestroy')
  },
  destroyed() {
    debugLog('destroy')
  },
  errorCaptured() {
    debugLog('errorCaptured')
  }

})
