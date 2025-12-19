<template>
  <div class="w-full space-y-4">
    <div class="flex items-center gap-2">
      <span class="text-2xl font-medium text-[#6d28d2]"
        >Dr. Angela Yu, Developer and Lead Instructor</span
      >
      <span class="text-2xl text-gray-700 font-medium">的更多课程</span>
    </div>

    <!-- course list -->
    <div class="w-full grid grid-cols-3 gap-4">
      <course v-for="value in 3" />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss"></style>
