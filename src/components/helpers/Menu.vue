<template>
  <div>
    <a-menu
      :defaultSelectedKeys="isAuth ? ['1'] : ['5']"
      theme="dark"
      mode="inline"
    >
      <a-menu-item
        v-for="item in items"
        v-show="isAuth === item.isAuth"
        :key="item.id"
      >
        <a-icon :type="item.icon"/>
        <span
          v-text="item.name"
          class="nav-text"
        />
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  props: {
    isAdmin: {
      type: Boolean | Number,
      default: () => false
    }
  }
})
export default class App extends Vue {
  mounted() {
    //this.$store.commit('setToken', '2000')
  }

  get isAuth() {
    return this.$store.state.auth.token ? true : false
  }

  items = [
    {
      id: 1,
      name: 'Список',
      icon: 'profile',
      action: 'routeName',
      isAuth: true
    },
    {
      id: 2,
      name: 'Доска',
      icon: 'project',
      action: 'routeName',
      isAuth: true
    },
    {
      id: 3,
      name: 'Настройки',
      icon: 'tool',
      action: 'routeName',
      isAuth: true
    },
    {
      id: 4,
      name: 'Выход',
      icon: 'logout',
      action: 'routeName',
      isAuth: true
    },
    {
      id: 5,
      name: 'Вход',
      icon: 'login',
      action: 'routeName',
      isAuth: false
    },
    {
      id: 6,
      name: 'Регистрация',
      icon: 'logout',
      action: 'routeName',
      isAuth: false
    }
  ]
}
</script>