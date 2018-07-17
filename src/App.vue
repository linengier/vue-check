<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Sider breakpoint="sm" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed" class="sider">
          <span class="trigger" @click='isCollapsed=!isCollapsed'>
            <Icon v-show='isCollapsed' type="ios-arrow-right"/>
            <Icon v-show='!isCollapsed' type="ios-arrow-left"/>
          </span>
          <Menu ref='side_menu' :theme="theme" :mode="mode" :active-name="active" :open-names="open" :accordion="accordion" width="auto" >
            <template v-if="item.children" v-for="(item,index) in list">
              <Submenu :name="item.path">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{ item.name }}</span>
                </template>
                <template v-for="(stuff,i) in item.children">
                  <router-link :to="item.path+'/'+stuff.path">
                    <MenuItem :name="item.path+'/'+stuff.path" :title="stuff.name">
                    <Icon :type="stuff.icon" /> {{ stuff.name }}
                    </MenuItem>
                  </router-link>
                </template>
              </Submenu>
            </template>
            <template v-else>
              <router-link :to='item.path'>
                <MenuItem :name="item.path" :title="item.name" :link="item.path">
                <Icon :type="item.icon" />
                <span>{{ item.name }}</span>
                </MenuItem>
              </router-link>
            </template>
          </Menu>
        </Sider>
        <Content :style="{padding: '0 16px 16px'}" :class="menuitemClasses">
          <Breadcrumb :style="{margin: '16px 0'}" >
            <BreadcrumbItem>{{breadActive}}</BreadcrumbItem>
          </Breadcrumb>
          <router-view/>
        </Content>
      </Layout>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    menuitemClasses() {
      return [
        this.isCollapsed ? '' : 'collapsed-menu'
      ]
    }
  },
  watch: {
    // 对路由变化作出响应...
    '$route' (to, from) {
      var path = '';
      to.matched.map((item, index) => {
        if (to.matched.length == index + 1) {
          this.$store.commit('navOnActive', item.path || '/');
        }
        if (index == 0) {
          path += item.name
        } else {
          path += '-' + item.name
        }
      })
      this.$store.commit('navBread', path);
      this.open=this.$store.state.nav.open
      this.active=this.$store.state.nav.active
      this.breadActive=this.$store.state.nav.breadActive
    }
  },
  data() {
    return {
      theme: this.$store.state.nav.theme,
      mode: this.$store.state.nav.mode,
      active: this.$store.state.nav.active,
      breadActive:this.$store.state.nav.breadActive,
      open: this.$store.state.nav.open,
      accordion: this.$store.state.nav.accordion,
      list: this.$store.state.nav.list,
      isCollapsed: false,
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
<style type="text/css" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
}

.sider {
  position:fixed;
  height: 100vh;
  left: 0;
  z-index: 9999;
  overflow: 'auto'
}

.collapsed-menu {
  margin-left: 200px;
}

.trigger {
  position: absolute;
  bottom:0;
  right:0;
  text-align: center;
  width: 25px;
  height: 49px;
  margin-right: -25px;
  line-height: 49px;
  background: #2d8cf0;
  color: #fff;
  font-size: 18px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}

</style>
