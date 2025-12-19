<template>
  <div class="w-full flex flex-col gap-5">
    <!-- 浏览相关主题 -->
    <div class="w-full flex flex-col gap-5">
      <div class="text-2xl font-medium text-gray-900">浏览相关主题:</div>
      <div class="w-full flex items-center gap-2">
        <button
          class="flex items-center text-sm px-3 py-2 rounded hover:bg-[#f6f7f9] border border-gray-300 font-bold"
        >
          Python
        </button>
        <button
          class="flex items-center text-sm px-3 py-2 rounded hover:bg-[#f6f7f9] border border-gray-300 font-bold"
        >
          编程语言
        </button>
        <button
          class="flex items-center text-sm px-3 py-2 rounded hover:bg-[#f6f7f9] border border-gray-300 font-bold"
        >
          编程语言
        </button>
      </div>
    </div>
    <!-- 本课程包括 -->
    <div class="w-full flex flex-col gap-5">
      <div class="text-2xl font-medium text-gray-900">本课程包括:</div>

      <div class="grid grid-cols-2 gap-4">
        <!-- 左列 -->
        <div class="flex flex-col gap-3">
          <!-- 52 小时长的随选视频 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m2 4h10a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3z"
              />
            </svg>
            <span class="text-sm text-gray-700">52 小时长的随选视频</span>
          </div>

          <!-- 23 个代码练习 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span class="text-sm text-gray-700">23 个代码练习</span>
          </div>

          <!-- 作业 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span class="text-sm text-gray-700">作业</span>
          </div>

          <!-- 230 篇文章 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span class="text-sm text-gray-700">230 篇文章</span>
          </div>
        </div>

        <!-- 右列 -->
        <div class="flex flex-col gap-3">
          <!-- 164 个可下载资源 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span class="text-sm text-gray-700">164 个可下载资源</span>
          </div>

          <!-- 在移动设备和电视上访问 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span class="text-sm text-gray-700">在移动设备和电视上访问</span>
          </div>

          <!-- 结业证书 -->
          <div class="flex items-center gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0"
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
            <span class="text-sm text-gray-700">结业证书</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 代码练习 -->
    <div class="bg-[#f6f7f9] p-5 rounded-md grid grid-cols-[1fr_2fr] gap-4">
      <div class="flex flex-col items-center justify-center gap-10">
        <div class="flex flex-col items-start gap-5">
          <p class="text-2xl font-medium text-gray-900">代码练习</p>
          <div class="text-start"
            >本课程包括我们更新的代码练习，因此您可以在学习过程中演练所掌握的技能。</div
          >
          <NuxtLink to="#" class="underline underline-color-[#007bff] text-[#6d28d2] hover:text-[#6d28d2]">查看演示</NuxtLink>
        </div>
      </div>
      <img
        src="https://www.udemy.com/staticx/udemy/js/webpack/coding-exercises-demo-preview-desktop.2957bed27c3ae43a02824b61ad9cda03.png"
        alt=""
      />
    </div>
  </div>
</template>
