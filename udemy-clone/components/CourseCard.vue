<template>
  <div class="flex gap-4 py-4 border-b border-gray-200 group cursor-pointer">
    <!-- 课程封面 -->
    <div class="w-[60px] h-[60px] flex-shrink-0">
      <img
        :src="course.image"
        :alt="course.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- 课程信息 -->
    <div class="flex-1 min-w-0">
      <h3 class="text-base font-bold text-gray-900 leading-tight group-hover:text-[#5624d0] transition-colors">
        {{ course.title }}
      </h3>
      <div class="flex items-center gap-2 mt-1 flex-wrap">
        <span class="bg-[#eceb98] text-[#3d3c0a] text-xs px-1.5 py-0.5 font-medium">
          热门课程
        </span>
        <span class="text-xs text-gray-500">总共 {{ course.duration }}</span>
        <span class="text-xs text-gray-500">更新日期 {{ course.updateDate }}</span>
      </div>
    </div>

    <!-- 评分和学生数 -->
    <div class="flex items-center gap-4 flex-shrink-0">
      <div class="flex items-center gap-1">
        <span class="text-sm font-bold text-gray-900">{{ course.rating }}</span>
        <svg class="w-4 h-4 text-[#b4690e]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div class="flex items-center gap-1 text-gray-500">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <span class="text-xs">{{ course.students }}</span>
      </div>
    </div>

    <!-- 价格 -->
    <div class="flex items-center gap-3 flex-shrink-0">
      <div class="text-right">
        <div class="text-base font-bold text-gray-900">US${{ course.price }}</div>
        <div class="text-xs text-gray-500 line-through">US${{ course.originalPrice }}</div>
      </div>
      <!-- 收藏按钮 -->
      <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>
