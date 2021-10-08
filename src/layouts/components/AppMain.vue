<template>
  <div class="my-app-main">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in" @after-enter="transitionComplete">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, Transition } from "vue"
import Api from '@/utils/request'

export default defineComponent({
  setup () {
    console.log("setup方法会在组件创建之前调用")
    console.log(Api)
    Api.getBaseInfo().then(res => {
      console.log(res)
    })
    const transitionComplete = () => {
      console.log(11111111)
    }

    return {
      transitionComplete
    }
  },
  components: {
    Transition
  }
})
</script>

<style scoped lang="scss">
.my-app-main {
  padding: 5px;
  min-height: calc(100vh - 40px);
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>