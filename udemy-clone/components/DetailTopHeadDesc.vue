<template>
  <section class="w-full bg-[#17171d] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <!-- 右侧价格卡片 -->
      <div class="hidden lg:block absolute right-8 top-6">
        <PriceCard />
      </div>

      <div class="max-w-[760px]">
        <div
          class="text-xs text-gray-300 mb-4 flex items-center flex-wrap gap-2"
        >
          <NuxtLink to="/" class="hover:text-white text-[#c0c4fc]"
            >开发</NuxtLink
          >
          <span>›</span>
          <NuxtLink to="/" class="hover:text-white text-[#c0c4fc]"
            >编程语言</NuxtLink
          >
          <span>›</span>
          <NuxtLink to="/" class="hover:text-white text-[#c0c4fc]"
            >Python</NuxtLink
          >
        </div>
        <h1 class="text-3xl md:text-5xl font-bold mb-3">
          100 Days of Code™: The Complete Python Pro Bootcamp
        </h1>
        <p class="text-base md:text-lg text-gray-300 mb-4">
          Master Python by building 100 projects in 100 days. Learn data
          science, automation, build websites, games and apps!
        </p>
        <div class="flex items-center gap-3 mb-4">
          <span
            class="inline-flex items-center py-1 rounded-lg p-2 bg-[#c2e9eb] border border-[#34343b] text-xs text-[#195261]"
          >
            畅销课程
          </span>
        </div>
        <div class="text-sm text-gray-300 mb-3">
          创建者
          <NuxtLink to="#" class="text-[#c0c4fc] hover:text-purple-300">
            Dr. Angela Yu, Developer and Lead Instructor
          </NuxtLink>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"
              />
            </svg>
            <span>上次更新日期：2023/12</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="assets/css/icon/lang_white.png" class="h-4 w-4" alt="" />
            <span>英语</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h10"
              />
            </svg>
            <span>字幕：简体中文、英语</span>
          </div>
          <NuxtLink class="text-[#c0c4fc] underline" to="#"> 还有27 </NuxtLink>
        </div>

        <!-- 评分信息条 - 在黑白交界处 -->
        <div class="mt-6 mb-[-70px] relative z-10">
          <div
            class="bg-white border border-gray-300 flex overflow-hidden rounded-lg w-full items-stretch"
          >
            <!-- 左侧紫色区域 -->
            <div
              class="bg-[#5624d0] p-6 w-[90px] flex flex-col items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white mb-1"
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
              <span class="text-white text-xs font-medium">高级</span>
            </div>

            <!-- 中间文字区域 -->
            <div class="flex-1 flex items-center px-4 py-3 border-r border-gray-300">
              <div>
                <div class="text-sm text-gray-800">
                  通过 Udemy 方案访问 26,000 多门最受好
                </div>
                <div class="text-sm text-gray-800">
                  评的课程。<a
                    href="#"
                    class="text-[#5624d0] hover:text-[#401b9c] underline font-medium"
                    >查看计划和定价</a
                  >
                </div>
              </div>
            </div>

            <!-- 评分区域 -->
            <div
              class="px-8 border-r border-gray-300 flex flex-col items-center justify-center self-stretch"
            >
              <div class="text-2xl font-bold text-gray-900">4.7</div>
              <div class="flex text-[#b4690e] text-sm">★★★★☆</div>
              <div class="text-xs text-gray-500 underline">404,303 ratings</div>
            </div>

            <!-- 学生数区域 -->
            <div class="px-8 flex flex-col items-center justify-center self-stretch">
              <svg
                class="w-6 h-6 text-gray-600 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div class="text-xl font-bold text-gray-900">1,707,035</div>
              <div class="text-xs text-gray-500">学习者</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 滚动时显示的顶部导航条 -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-full opacity-0"
    >
      <div
        v-if="showCompact"
        class="fixed top-0 left-0 right-0 z-50 bg-[#17171d] border-b border-[#2a2a30] shadow-lg"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="h-14 flex items-center justify-between">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <span
                class="inline-flex items-center px-2 py-1 rounded bg-[#eceb98] text-[11px] text-[#3d3c0a] font-medium flex-shrink-0"
              >
                畅销课程
              </span>
              <span class="text-sm font-bold truncate">
                100 Days of Code™: The Complete Python Pro Bootcamp
              </span>
              <div
                class="hidden md:flex items-center gap-2 text-xs text-gray-300 flex-shrink-0"
              >
                <span class="text-[#f3ca8c] font-bold">4.7</span>
                <span class="text-[#f3ca8c]">★★★★★</span>
                <NuxtLink to="#" class="text-[#c0c4fc] hover:text-purple-300"
                  >(404303个评分)</NuxtLink
                >
                <span class="text-gray-400">1707035 名学生</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const showCompact = ref(false);
const onScroll = () => {
  showCompact.value = window.scrollY > 80;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
