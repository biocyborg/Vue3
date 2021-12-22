<template>
  <div>
    <el-button @click="test" type="primary">主要按钮</el-button>
    <div>{{ formatMobile('17700000000') }}</div>
    <div class="box"></div>
  </div>
</template>

<script>
import { getCurrentInstance } from '@vue/runtime-core'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()
    const { formatMobile } =
      instance.appContext.config.globalProperties.$filters
    return {
      formatMobile,
    }
  },
})
</script>

<style lang="less"></style>

<style lang="stylus">
.box
  height: 10000vh
</style>
