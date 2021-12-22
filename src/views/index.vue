<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <el-menu
        router
        :unique-opened="true"
        :default-active="pathname"
        background-color="#000C29"
        text-color="#fff"
      >
        <el-submenu
          v-for="(item, index) in navigation"
          :index="item.path"
          :key="index"
          v-router="item.path"
        >
          <template #title>
            <el-icon><Location /></el-icon>
            <span>{{ item?.meta?.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(element, index) in item.children"
              :index="element.path"
              :key="index"
              v-router="item.path"
              >{{ element?.meta?.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <span class="el-dropdown-link"> Dropdown List </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getCurrentInstance } from '@vue/runtime-core'
import { defineComponent } from 'vue'
import { Location } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    Location,
  },
  setup() {
    const instance = getCurrentInstance()
    const navigation =
      instance.appContext.config.globalProperties.$navigation()[0].children
    console.log(navigation)
    let pathname = window.location.pathname
    return {
      navigation,
      pathname,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
