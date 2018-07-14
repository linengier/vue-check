<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <Sider>
          <Menu :theme="theme" :mode="mode" :active-name="active" :open-names="open" :accordion="accordion" width="auto" v-on:on-select="onActive">
            <template v-if="item.children" v-for="(item,index) in list">
              <Submenu :name="item.title">
                <template slot="title">
                  <Icon :type="item.icon" />
                  <span>{{ item.title }}</span>
                </template>
                <template v-for="(stuff,i) in item.children" >
                  <router-link :to='stuff.link'>
                    <MenuItem  :name="item.title+' / '+stuff.title" :title="stuff.title">
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
        <Layout>
          <Content :style="{padding: '0 16px 16px'}">
            <Breadcrumb :style="{margin: '16px 0'}">
              <BreadcrumbItem>{{active}}</BreadcrumbItem>
            </Breadcrumb>
            <Card>
              <router-view/>
            </Card>
          </Content>
        </Layout>
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
  },
  methods: {
    onActive(name) {
      this.$store.commit('onActive', name)
    }
  },
  data(){
    return{}
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
