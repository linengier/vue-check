<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Sider breakpoint="md" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed" class="sider">
          <Menu :theme="theme" :mode="mode" :active-name="active" :open-names="open" :accordion="accordion" width="auto" @on-select="onActive">
            <template v-if="item.children" v-for="(item,index) in list">
              <Submenu :name="item.title">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{ item.title }}</span>
                </template>
                <template v-for="(stuff,i) in item.children">
                  <router-link :to='stuff.link'>
                    <MenuItem :name="item.title+' / '+stuff.title" :title="stuff.title">
                    <Icon :type="stuff.icon" /> {{ stuff.title }}
                    </MenuItem>
                  </router-link>
                </template>
              </Submenu>
            </template>
            <template v-else>
              <router-link :to='item.link'>
                <MenuItem :name="item.title" :title="item.title" :link="item.link">
                <Icon :type="item.icon" />
                <span>{{ item.title }}</span>
                </MenuItem>
              </router-link>
            </template>
          </Menu>
        </Sider>
        <Content :style="{padding: '0 16px 16px'}" :class="menuitemClasses">
          <span class="trigger" @click='isCollapsed=!isCollapsed'><i class="ivu-icon ivu-icon-navicon-round"></i></span>
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>{{active}}</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    theme() { return this.$store.state.nav.theme },
    mode() { return this.$store.state.nav.mode },
    active() { return this.$store.state.nav.active },
    open() { return this.$store.state.nav.open },
    accordion() { return this.$store.state.nav.accordion },
    list() { return this.$store.state.nav.list },
    menuitemClasses() {
      return [
        this.isCollapsed ? '' : 'collapsed-menu'
      ]
    }
  },
  methods: {
    onActive(name) {
      this.$store.commit('navOnActive', name)
    }
  },
  data() {
    return {
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
  overflow: 'auto'
}

.collapsed-menu {
  margin-left: 200px;
}

.trigger {
  display: block;
  float:left;
  text-align: center;
  width: 25px;
  height: 49px;
  margin-right: 15px;
  margin-left: -16px;
  line-height: 49px;
  background: #495060;
  color: #fff;
  font-size: 18px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  -webkit-transition: background 0.3s ease;
  transition: background 0.3s ease;
}

</style>
