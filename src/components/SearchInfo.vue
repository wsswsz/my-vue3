<template>
  <div class="search-box">
    <div class="search-item"
      v-for="(item, index) in searchObj"
      :key="index"
      :style="{width: item.itemWidth || itemWidth || '33.33%'}"
      >
      <div :style="{width: item.labelWidth || '80px', paddingRight: '5px', textAlign: item.align || 'right'}" class="search-label">{{item.label}}</div>
      <el-input
        v-if="item.type == 'input'"
        v-model="item.value"
        :placeholder="item.placeholder"
        :maxlength="item.maxlength"
        @change="changeInput(item)"
      />
        <el-select
        v-else-if="item.type == 'select'"
        v-model="item.value" :filterable="item.filterable" :placeholder="item.placeholder">
        <el-option
          v-for="item1 in item.options"
          :key="item1.value"
          :label="item1.label"
          :value="item1.value">
        </el-option>
      </el-select>
    </div>
  </div>
  <div class="search-btn">
    <el-button type="primary" @click="search">查询</el-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from "vue";
import { TableObj, ColumnsObj, SearchObj } from "@/types/tableList.interface";
const props = defineProps({
  searchObj: Object,
  itemWidth: String
})

const emit = defineEmits(["changeInput", "search"])

const changeInput = (searchInfo: any) => {
  emit("changeInput", searchInfo)
}
const search = () => {
  const params = {}
  props.searchObj.map(item => {
    params[item.field] = item.value
  })
  emit("search", params)
}

</script>

<style lang="scss" scoped>
@import "scss/variables.module.scss";
.search-box {
  display: flex;
  flex-wrap: wrap;
  .search-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    .search-label {
      color: $my-label-color;
    }
    .el-select {
      width: 100%;
    }
  }
}
.search-btn {
  text-align: right;
  margin-bottom: 15px;
}
</style>