<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1><a href="https://cn.vuejs.org/">Vue</a> & <a href="https://www.iviewui.com/">iView</a></h1>
    <h3><a :href='link'>{{title}}</a></h3>
    <template v-for='(item,index) in list'>
      <template v-if="item.children">
        <h2>{{item.title}}</h2>
      </template>
      <template v-else>
        <a :href="item.link">{{item.title}}</a>
      </template>
      <ul v-if="item.children">
        <li v-for='(stuff,i) in item.children'>
          <a :href="stuff.link" target="_blank">
            {{stuff.title}}
          </a>
        </li>
      </ul>
    </template>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Vue&iView',
      title: '前往github查看项目',
      link: 'https://github.com/mtboom/vue-check',
      list: [{
        title: "Vue",
        children: [{
          title: '文档',
          link: 'https://vuejs.org',
        }, {
          title: '论坛',
          link: 'https://forum.vuejs.org',
        }, {
          title: '社区',
          link: 'https://chat.vuejs.org',
        }, {
          title: 'Twitter',
          link: 'https://twitter.com/vuejs',
        }]
      }, {
        title: "Vue生态",
        children: [{
          title: 'vue-router',
          link: 'http://router.vuejs.org/',
        }, {
          title: 'vuex',
          link: 'http://vuex.vuejs.org/',
        }, {
          title: 'vue-loader',
          link: 'http://vue-loader.vuejs.org/',
        }, {
          title: 'awesome-vue',
          link: 'https://github.com/vuejs/awesome-vue',
        }]
      }]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 100px 0 200px 0;
}

* {
  text-align: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
