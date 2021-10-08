<template>
  <component :is="type" v-bind="linkProps(to)">
    <!-- 这里的component得传入to参数，子组件routerlink可以接受这个to -->
    <slot/>
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed} from "vue"
import { isExternal } from "@/utils/validate"
const props = defineProps({
  to: {
    type: String,
    require: true
  }
})

const type = computed(() => {
  if (isExternal(props.to)) {
    return 'a'
  }
  return 'router-link'
})

const linkProps = (to) => {
  if (isExternal(props.to)) {
    return {
      href: to,
      target: '_blank'
    }
  }
  return {to}
}

</script>

<style scoped>

</style>