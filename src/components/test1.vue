<template>
  <div>
    {{state.count}}--{{count}}
    <div @click="$store.commit('add')">{{$store.state.counter}}</div>
     <el-button>默认按钮</el-button>
     <el-input v-model="count" placeholder="请输入内容"></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import axios from "axios"

export default defineComponent({
  name: "test1",
  props: {
    words: String
  },
  setup () { // 在数组件被创建之前执行，所以拿不到组件实例，也访问不了data，computed，method等
    const state = reactive({count: 222})
    const count = ref(1)
    // console.log(count) // count.value才是1，但是在html模板里面是会自动浅解，直接写count就行不用写.value
    // axios.post("api/getBaseInfo").then(res => {
    //   console.log(res.data)
    // })
    axios.post("api/getTest").then(res => {
      console.log(res.data)
    })
    

    return {
      state,
      count
    }
  }
})
</script>

<style scoped>

</style>