<template>
  <div class="app-container">
    <!-- <div class="my-sidebar-container">
      <side-bar></side-bar>
    </div>
    <div>
      <div class="my-navbar">
        <nav-bar></nav-bar>
      </div>
      <div class="my-main-container">
        <app-main></app-main>
      </div>
    </div> -->
    <el-container>
      <el-aside width="300px" class="my-side-container">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <nav-bar></nav-bar>
        <div class="my-main-container">
          <app-main></app-main>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AppMain from "./components/AppMain.vue"
import SideBar from "./components/SideBar/SideBar.vue"
import NavBar from "./components/NavBar.vue"
</script>

<style scoped lang="scss">
.app-container {
  .el-main {
    padding: 0px;
  }
}
</style>