<template>
  <div class="w-full flex items-start gap-4 py-4 border-b border-gray-100 group cursor-pointer ">
    <!-- 课程封面 -->
    <img
      src="https://img-c.udemycdn.com/course/50x50/6413585_ec1f_2.jpg"
      alt=""
      class="w-16 h-16 rounded-md"
    />
    
    <!-- 课程信息 -->
    <div class="flex-1 min-w-0">
      <h3 class="text-base font-bold text-gray-900 ">
        Complete 2025 Python Bootcamp: Learn Python from Scratch
      </h3>
      <div class="flex items-center gap-2 mt-1.5 flex-wrap">
        <span class="bg-[#c2e9eb] text-[#0d5261] text-[11px] px-1.5 py-0.5 font-medium rounded-md">
          热门课程
        </span>
        <span class="text-xs text-[#206241] font-bold after:content-['â—'] after:text-[0.6rem] after:mx-1">总共 17.5 小时</span>
        <span class="text-xs text-gray-400">•</span>
        <span class="text-xs text-gray-600">更新日期 2025/1111</span>
      </div>
    </div>

    <!-- 评分 -->
    <div class="flex items-center gap-1 flex-shrink-0">
      <span class="text-sm font-bold text-[#b4690e]">4.6</span>
      <svg class="w-4 h-4 text-[#b4690e]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>

    <!-- 学生数 -->
    <div class="flex items-center gap-1 flex-shrink-0">
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      <span class="text-xs text-gray-600">34,578</span>
    </div>

    <!-- 价格 -->
    <div class="flex flex-col items-end flex-shrink-0">
      <span class="text-base font-bold text-gray-900">US$14.99</span>
      <span class="text-xs text-gray-500 line-through">US$19.99</span>
    </div>

    <!-- 收藏按钮 -->
    <button class="w-9 h-9 rounded-full border border-[#6d28d2] flex items-center justify-center hover:bg-[#efe8fa] transition-colors flex-shrink-0">
      <img src="@/assets/css/icon/aixin.png" class="w-5 h-5 text-[#6d28d2]" alt="">
    </button>
  </div>
</template>

<script setup>
</script>
