<template>
  <div>
    <table-list
      :tableObj="tableObj"
      @fetchTableData="fetchTableData">
        <template v-slot:actionBtn="slotProps">
          <el-button type="primary" @click="goDetail(slotProps)">查看详情</el-button>
        </template>
      </table-list>
  </div>
</template>

<script setup lang="ts">
// script setup的写法，编译的时候render函数是在setup函数的作用域里面
import { defineProps, defineEmits, reactive} from "vue"
// 引用组件
import TableList from "comps/TableList.vue"
// 引用服务接口
import Api from '@/utils/request'

const props = defineProps({
  name: String
})
const tableObj = reactive({
  itemWidth: '33.33%',
  total: 0,
  pageSize: 10,
  currentPage: 1,
  searchObj: [
    {
      type: "input",
      label: "名字",
      field: "name",
      value: ""
    },
     {
      type: "input",
      label: "年龄",
      field: "age",
      value: ""
    },{
      type: "input",
      label: "电话",
      field: "phone",
      value: ""
    },
     {
      type: "select",
      label: "省份",
      field: "provinceCode",
      value: "",
      options: [
        {value: '01', label: '广东'},
        {value: '02', label: '湖南省'}
      ]
    },
     {
      type: "input",
      label: "备注",
      field: "remark",
      value: ""
    }
  ],
  columns: [
    {
      field: "name",
      label: "名字",
      width: 100
    },
    {
      field: "age",
      label: "年龄",
      width: 100
    },
    {
      field: "address",
      label: "住址"
    },
    {
      field: "action",
      label: "操作",
      slot: "actionBtn"
    }
  ],
  data:[]
})

const emit = defineEmits([])
const fetchTableData = (params: ParamsObj) => {
  fetchData(params).then(res => {
    console.log(res)
    tableObj.data = res.data
    tableObj.total = res.total
  })
}

const fetchData = async (params: any) => {
  const res = await Api.getUserInfo(params)
  return res
}

const goDetail = (row: any) => {
  console.log(row)
}






</script>

<style scoped>

</style>