<template>
  <div class="my-side-bar">
    <el-menu
    :uniqueOpened="true"
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :text-color="scssVariables.myFontColor"
    :active-text-color="scssVariables.myThemeColor">
      <side-bar-item v-for="item in routesMenu" :key="item.path" :route="item" :basePath="item.path"></side-bar-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import SideBarItem from "./SideBarItem.vue"
import { routes } from "@/router/index"
import { useRoute } from 'vue-router'
// scss命名含为xx.module.css，文件里可以用:export{}导出scss变量
import variables from "scss/variables.module.scss";

const scssVariables = ref(variables)
const handleOpen = () => {
  console.log("open")
}
const handleClose = () => {
  console.log("close")
}
const activeIndex = computed(() => {
  const route = useRoute()
  const {meta, name, path} = route;
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
});
const routesMenu = computed(() => routes.filter(item => item.meta));
</script>

<style scoped lang="scss">
.my-side-bar {
  .el-menu {
    height: 100vh;
  }
}
</style>