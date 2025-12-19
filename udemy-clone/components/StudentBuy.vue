<template>
  <div class="w-full flex flex-col gap-4">
    <div class="text-2xl font-medium text-gray-900">学生还购买了</div>
    <div class="w-full flex flex-col gap-4">
        <CourseItem  v-for="value in 4" />
    </div>
    <div class="w-full flex justify-center items-center border border-[#6d28d2] rounded-md p-3 hover:bg-[#efe8fa] transition-colors cursor-pointer">
        <button class="text-sm font-medium text-[#6d28d2]">显示更多</button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss"></style>
