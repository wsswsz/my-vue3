<template>
  <div class="my-navbar">
    <bread-crumb-nav class="left-fix"></bread-crumb-nav>
    <div class="right-fix">
      <el-dropdown>
        <div class="el-dropdown-link">
          <div class="avatar-wrapper">
            <div>
              <user-filled class="my-icon"/>
            </div>
            <div>
              <!-- [Vue warn]: Failed to resolve component: el-svg-icon  -->
              <!-- <el-svg-icon>
                <user-filled color="#2acaee"/>
              </el-svg-icon> -->
            </div>
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/layouts/home">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <router-link to="/layouts/home">
              <el-dropdown-item>子页</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { UserFilled, CaretBottom } from "@element-plus/icons"
import BreadCrumbNav from './BreadCrumbNav.vue'

export default defineComponent({
  setup () {
    

    return {
    }
  },
  components: {
    UserFilled,
    CaretBottom,
    BreadCrumbNav
  }
})
</script>


<style scoped lang="scss">
@import "scss/variables.module.scss";
.my-navbar {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid $my-border-color;
  padding: 5px;
  overflow: hidden;
  .left-fix {
    float: left;
  }
  .el-breadcrumb {
    line-height: 40px;
  }
  .right-fix {
    float: right;
    .avatar-wrapper {
      div{
        // float: left;
        width:40px;
      }
    }
  }
  .my-icon {
    color: $my-theme-color;
    cursor: pointer;
  }
}
</style>