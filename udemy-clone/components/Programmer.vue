<template>
  <div class="w-full border border-[#6d28d2] p-4">
    <h2 class="text-2xl font-medium text-gray-900">The Complete Programmer</h2>
    <div
      class="w-full flex gap-3 relative mt-3 mb-4"
      v-for="(value, index) in 5"
      :key="value"
    >
      <img
        src="https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg"
        alt=""
        class="aspect-video object-cover"
      />

      <div
        class="rounded-full shadow-md absolute bottom-[-30px] left-[90px] bg-white p-2 z-20"
        v-if="index !== 4"
      >
        <img src="@/assets/css/icon/add.png" alt="" class="w-8 h-8" />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-2">
          <div class="text-xl font-medium text-gray-800">
            iOS & Swift - The Complete iOS App Development Bootcamp
          </div>
          <span class="text-sm text-gray-500"
            >Dr. Angela Yu, Developer and Lead Instructor</span
          >
          <!-- rate -->
          <div class="flex items-center gap-2">
            <span class="text-sm font-bold text-[#b4690e]">4.6</span>
            <span class="text-[#f3ca8c]">★★★★★</span>
            <span class="text-sm text-gray-500">(95,869)</span>
          </div>
          <div class="flex items-center gap-2">
            <div
              class="flex items-center gap-1 bg-[#5624d0] text-white rounded-md p-1"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span class="text-xs">高级</span>
            </div>
            <div
              class="flex items-center gap-1 bg-[#c2e9eb] text-[#0d5261] text-[11px] px-1.5 py-0.5 font-medium rounded-md"
            >
              <span class="text-xs">热门课程</span>
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-500 flex flex-col items-end gap-1">
          <span class="text-base font-bold text-gray-900"> US¥24.99</span>
          <span class="text-xs line-through">US$119.99</span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between w-full mt-10">
      <div class="flex items-center gap-2">
        <span class="text-xl text-gray-700">总计：</span>
        <span class="text-xl font-bold text-gray-900">US$24.99</span>
        <span class="text-xs text-gray-500 line-through">US$329.97</span>
      </div>
      <button class="bg-[#6d28d2] hover:bg-[#8710d8] text-white font-bold py-3 px-6 rounded mb-2 transition-colors">
        <span>全部添加至购物车</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss"></style>
