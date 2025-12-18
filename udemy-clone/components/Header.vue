<template>
  <header class="w-full border-b border-gray-200 p-3">
    <div class="px-2 sm:px-4 h-14 flex items-center justify-between gap-3 ">
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <NuxtLink to="/" class="flex-shrink-0" aria-label="Udemy">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Udemy"
            width="91"
            height="34"
            loading="lazy"Ï
          />
        </NuxtLink>
        <button class="hidden md:inline-flex items-center text-sm px-3 py-2 rounded hover:bg-[#efe8fa] hover:text-[#6d28d2] flex-shrink-0">
          探索
        </button>
        <div class="flex-1">
          <div class="flex items-center border border-gray-300 rounded-full h-10 bg-gray-50 focus-within:border-[#6d28d2]">
            <span class="pl-4 pr-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
              </svg>
            </span>
            <input
              type="text"
              class="flex-1 bg-transparent outline-none focus:outline-none focus-visible:outline-none appearance-none text-sm placeholder-gray-500"
              placeholder="搜索任何内容"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <nav class="hidden lg:flex items-center text-sm text-gray-700">
          <NuxtLink to="/pricing" class="px-3 py-2 hover:text-gray-900 hover:bg-[#efe8fa]  rounded"><span class="hover:text-[#6d28d2]">计划和定价</span></NuxtLink>
          <NuxtLink to="/business" class="px-3 py-2 hover:text-gray-900 hover:bg-[#efe8fa]  rounded"><span class="hover:text-[#6d28d2]">Udemy Business</span></NuxtLink>
          <NuxtLink to="/teach" class="px-3 py-2 hover:text-gray-900 hover:bg-[#efe8fa]  rounded"><span class="hover:text-[#6d28d2]">在 Udemy 上授课</span></NuxtLink>
        </nav>
        <button aria-label="购物车" class="hidden md:inline-flex items-center justify-center h-10 w-10 rounded hover:bg-gray-100">
          <img src="assets/css/icon/car.png" class="h-7 w-7" alt="">
        </button>
        <NuxtLink to="/login" class="hidden md:inline-flex px-4 py-2 border border-[#6d28d2] rounded text-sm font-bold hover:bg-[#efe8fa]">
          <span class="hover:text-[#6d28d2]">登录</span>
        </NuxtLink>
        <NuxtLink to="/signup" class="hidden md:inline-flex px-4 py-2 rounded text-sm font-bold bg-purple-600 text-white hover:bg-purple-700">
          注册
        </NuxtLink>
        <button aria-label="语言" class="hidden md:inline-flex h-10 w-10 border border-[#6d28d2] rounded items-center justify-center hover:bg-[#efe8fa]">
          <img src="assets/css/icon/lang.png" class="h-4 w-4" alt="">
        </button>
      </div>
    </div>
  </header>
</template>
