<template>
  <div>
    <app-link :to="route.path"></app-link>
    <el-submenu  :index="route.path">
        <template #title>
          <i :class="route.meta.icon"></i>
          <span>{{route.meta.title}}</span>
        </template>
        <div v-if="route.children">
          <div v-for="item in route.children" :key="item.path">
            <router-link :to="resolvePath(item.path)"  v-if="!item.children">
              <el-menu-item :index="resolvePath(item.path)">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
              </el-menu-item>
            </router-link>
          <side-bar-item v-else :route="item" :basePath="resolvePath(item.path)"></side-bar-item>
          </div>
        </div>
      </el-submenu>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
// import AppLink from "layouts/components/SideBar/AppLink.vue"
import AppLink from "./AppLink.vue"
import path from 'path-browserify'
import { isExternal } from '@/utils/validate'
const props = defineProps({
  route: Object,
  basePath: String
})
const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
  // if (routePath.indexOf('/') === 0) {
  //   return routePath
  // } else {
  //   return path.resolve(props.basePath, routePath)
  // }
}

</script>

<style scoped>

</style>