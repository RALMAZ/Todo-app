<template>
  <a-layout class="app-layout">
    <a-layout-sider
      v-model="isCollapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo"/>
      <Menu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding: 0">
        <a-icon
          @click="isCollapsed = !isCollapsed"
          :type="isCollapsed ? 'menu-unfold' : 'menu-fold'"
          class="trigger"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '100%' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Menu from '@/components/helpers/Menu'

@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {
  get isCollapsed() {
    return this.$store.state.isCollapse
  }

  set isCollapsed(val) {
    this.$store.commit('setCollapse', val)
  }     
}
</script>

<style scoped lang="scss">
  .app-layout .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    color: white;
  }

  .app-layout .trigger:hover {
    color: #1890ff;
  }

  .app-layout .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
