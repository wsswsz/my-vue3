<template>
  <div>
    <search-info
     :searchObj="tableObj.searchObj"
     :itemWidth="tableObj.itemWidth"
     @changeInput="changeInput"
     @search="search"
    ></search-info>
    <el-table
      :data="tableObj.data"
      border
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in tableObj.columns"
        :key="index"
        :prop="item.field"
        :label="item.label"
        :width="item.width">
        <template #default="scope" v-if="item.slot" v-slot="{ scope }">
          <div v-if="tableObj.showSwitch" class="switch-item">
            <span
              :class="
                scope.row.validStatus === '-1'
                  ? 'switchBtn'
                  : 'switchBtn switchBtnChecked'
              "
              @click="switchChange(scope.row)"
              :ref="'switchBtn' + JSON.stringify(scope.row)"
            ></span>
          </div>
          <slot :name="item.slot" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
   <el-pagination
      class="page-box"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tableObj.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="tableObj.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableObj.total"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, getCurrentInstance } from "vue"
import { TableObj, ColumnsObj, SearchObj, ParamsObj } from "@/types/tableList.interface"
import SearchInfo from "comps/SearchInfo.vue"
export default defineComponent({
  name: "TableList",
  props: {
    tableObj: Object
  },
  components: {
    SearchInfo
  },
  emits: ['search', 'fetchTableData', 'handleSizeChange', 'handleCurrentChange', 'switchChange'],
  setup (props, {emit}) { // props, { attrs, slots, emit }
    // 在数组件被创建之前执行，所以拿不到组件实例，也访问不了data，computed，method等
    // const state = reactive({count: 222})
    // const count = ref(1)
    // onMounted(() => {
    //   console.log("mounted")
    // })

    // const slotCollecttion = computed(() => {
    //   return props.tableObj.columns.filter((item: ColumnsObj) => {return item.slot})
    // })
    const vm = getCurrentInstance()
    const search = (params: ParamsObj) => {
      fetchTableData(params)
      emit('search', params)
    }
    const fetchTableData = (params: ParamsObj) => {
      const req = addParams(params)
       emit('fetchTableData', req)
    }
    const addParams = (params: ParamsObj) => {
      let req = params
      params.currentPage = props.tableObj.currentPage
      params.pageSize = props.tableObj.pageSize
      return req
    }
    const handleSizeChange = (pageSize: String) => {
       props.tableObj.pageSize = pageSize
      fetchTableData({})
    }
    const handleCurrentChange = (currentPage: number) => {
      props.tableObj.currentPage = currentPage
      fetchTableData({})
    }
    const changeInput = (searchInfo: any) => {
      console.log(searchInfo.value)
    }
    const switchChange = (row: any) => {
      console.log(vm)
      const switchDom = vm.refs[`switchBtn${JSON.stringify(
        row)}`];
      // switchDom.className = row.smsOper === '1' ? 'switchBtn switchBtnChecked' : 'switchBtn'
      switchDom.className =
        switchDom.className === "switchBtn"
          ? "switchBtn switchBtnChecked"
          : "switchBtn";
      const showFlag = switchDom.className === "switchBtn switchBtnChecked";
      emit("switchChange", row, showFlag);
    }
    // 组件创建时调用一次
     fetchTableData({})

  
    return {
      changeInput,
      search,
      handleSizeChange,
      handleCurrentChange,
      switchChange
    }
  }
})
</script>

<style scoped lang="scss">
  .page-box {
    margin: 10px;
  }
  .switch-item {
    display: inline-block;
    margin: 0 5px;
    .switchBtn {
      display: inline-block;
      width: 48px;
      height: 22px;
      line-height: 22px;
      border-radius: 22px;
      vertical-align: middle;
      border: 1px solid #ccc;
      background-color: #ccc;
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: #fff;
        position: absolute;
        left: 1px;
        top: 1px;
        cursor: pointer;
        -webkit-transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
        transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
      }
    }
    .switchBtnChecked {
      border: 1px solid rgb(175, 247, 172);
      background-color: rgb(100, 226, 95);
      &::after {
        left: 25px;
      }
    }
  }
</style>