<template>
<div>
  <test :name="name" @changeName="changeName"></test>
  <test1></test1>
</div>
</template>

<script setup lang="ts">
import Test from "comps/test.vue"
import Test1 from "comps/test1.vue"
import { defineProps, defineEmits, ref} from "vue"

const name = ref("John");
const changeName  = () => {
  name.value = name.value === "Jack" ? "John" : "Jack"
}
// import { ref, defineComponent } from "vue"
// export default defineComponent({
//   name: "HelloWorld",
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   setup: () => {
//     const count = ref(0)
//     return { count }
//   }
// })
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
