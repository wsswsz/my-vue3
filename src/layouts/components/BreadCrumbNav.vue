<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item
      v-for="item in navList"
      :key="item.path"
      :to="{ path: item.path }"
    >
    <span v-if="item.noJump">{{item.meta.title}}</span>
    <a @click.prevent="handleJump(item)">{{item.meta.title}}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'
let navList = ref([])
const route = useRoute()
const router = useRouter()
const getBreadCrumb = () => {
  navList.value = route.matched.filter(item => item.meta && item.meta.title) //ref包裹的数据，赋值应该给到value属性
}
const handleJump = (item) => {
  const { path, redirect } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(path)
}


getBreadCrumb()
watch(route, getBreadCrumb)


</script>

<style scoped>

</style>