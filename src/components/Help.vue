<template>
  <div>
    Help
  </div>
</template>

<script setup lang="ts">
// script setup的写法，编译的时候render函数是在setup函数的作用域里面
import { defineProps, defineEmits} from "vue"
const props = defineProps({
  name: String
})

const emit = defineEmits(["changeName"])

</script>

<style scoped>

</style>