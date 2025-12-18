<template>
  <div class="relative">
    <!-- 占位元素，防止内容跳动 -->
    <div v-if="isSticky" class="w-[340px] h-[600px]"></div>

    <!-- 价格卡片 -->
    <div
      :class="[
        'w-[340px] bg-white border border-gray-200 shadow-lg transition-all duration-300',
        isSticky ? 'fixed top-[72px] z-40' : 'relative',
      ]"
      :style="isSticky ? { right: stickyRight + 'px' } : {}"
    >
      <!-- 视频预览区域 - 滚动后隐藏 -->
      <div
        class="relative overflow-hidden transition-all duration-300"
        :class="isSticky ? 'h-0 opacity-0' : 'h-[190px] opacity-100'"
      >
        <img
          src="https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg"
          alt="Course Preview"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <button
            class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <svg
              class="w-8 h-8 text-gray-800 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <span
          class="absolute bottom-2 left-2 text-white text-sm bg-black/70 px-2 py-1 rounded"
        >
          预览此课程
        </span>
      </div>

      <!-- 标签页 -->
      <div class="flex border-b border-gray-200">
        <button
          :class="[
            'flex-1 py-3 text-sm font-medium',
            activeTab === 'personal'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500',
          ]"
          @click="activeTab = 'personal'"
        >
          个人
        </button>
        <button
          :class="[
            'flex-1 py-3 text-sm font-medium',
            activeTab === 'team'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500',
          ]"
          @click="activeTab = 'team'"
        >
          团队
        </button>
      </div>

      <!-- 个人标签页内容 -->
      <div v-if="activeTab === 'personal'" class="p-4 flex flex-col gap-2">
        <div class="flex items-center gap-1 w-full">
          <svg
            class="w-4 h-4 text-[#6d28d2]"
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
          <p class="text-xs text-gray-600">此高级课程包含在方案中</p>
        </div>

        <!-- 价格区域 - 滚动后隐藏大价格 -->
        <div
          class="overflow-hidden transition-all duration-300"
          :class="isSticky ? 'h-0 opacity-0' : 'h-auto opacity-100'"
        >
          <div class="flex items-baseline gap-2 mb-1">
            <span class="text-3xl font-bold text-black">US$19.99</span>
            <span class="text-gray-500 line-through text-sm">US$109.99</span>
            <span class="text-gray-700 text-sm">82% 折扣</span>
          </div>
        </div>

        <!-- 滚动后显示的简化价格 -->
        <div
          class="overflow-hidden transition-all duration-300"
          :class="isSticky ? 'h-auto opacity-100' : 'h-0 opacity-0'"
        >
          <div class="flex items-baseline gap-2 mb-1">
            <span class="text-gray-500 line-through text-sm">US$109.99</span>
            <span class="text-gray-700 text-sm">82% 折扣</span>
          </div>
        </div>

        <div class="flex items-center gap-1">
          <img src="@/assets/css/icon/alram.png" class="w-4 h-4" alt="" />
          <p class="text-red-600 text-sm">此优惠价格仅剩 8 小时！</p>
        </div>

        <button
          class="w-full bg-[#6d28d2] hover:bg-[#8710d8] text-white font-bold py-3 rounded mb-2 transition-colors"
        >
          添加至购物车
        </button>

        <button
          class="w-full border border-[#6d28d2] hover:bg-[#efe8fa] font-bold py-3 rounded mb-4 transition-colors text-[#6d28d2]"
        >
          立即购买
        </button>

        <p class="text-xs text-[#2a2b3f] text-center mb-1">30 天退款保证</p>
        <p class="text-xs text-[#2a2b3f] text-center mb-4">完整的永久访问权</p>

        <div class="flex justify-center gap-3 text-xs text-gray-600 mb-4">
          <button
            class="px-3 py-2 rounded hover:bg-[#e8e8ea] underline decoration-[#6d28d2]"
          >
            分享
          </button>
          <button
            class="px-2 py-2 rounded hover:bg-[#e8e8ea] underline decoration-[#6d28d2]"
          >
            将该课程作为礼物赠送
          </button>
          <button
            class="px-3 py-2 rounded hover:bg-[#e8e8ea] underline decoration-[#6d28d2]"
          >
            使用优惠券
          </button>
        </div>

        <!-- 优惠券输入 -->
        <div class="p-3 flex flex-col gap-2">
          <div
            class="border border-dashed border-[#6d28d2] p-2 flex flex-col gap-2"
          >
            <p class="text-xs text-gray-600">
              <span class="text-base text-[#9194ac] font-bold">CM251218G1</span>
              <span class="text-gray-400">已用</span>
            </p>
            <p class="text-xs text-[#9194ac]">Udemy 优惠券</p>
          </div>

          <div class="flex gap-2">
            <input
              type="text"
              placeholder="输入优惠券"
              class="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-purple-500 text-[#9194ac]"
            />
            <button
              class="bg-[#a435f0] hover:bg-[#8710d8] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              应用
            </button>
          </div>
        </div>

        <!-- 订阅区域 -->
        <div class="border-t border-gray-200 mt-4 pt-4">
          <p
            class="text-center text-gray-500 text-xs mb-2 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[calc(50%-20px)] before:h-px before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[calc(50%-20px)] after:h-px after:bg-gray-300"
          >
            或
          </p>
          <h3 class="font-medium text-xl mb-2 text-black">
            订阅 Udemy 的热门课程
          </h3>
          <p class="text-[14px] text-gray-600 mb-3">
            通过个人方案订阅，获得这门课程以及 26000 多门我们精选好评的课程。
            <a
              href="#"
              class="text-[#6d28d2] font-medium underline decoration-[#af72fd]"
              >了解更多</a
            >
          </p>
          <button
            class="w-full border border-[#6d28d2] hover:bg-[#efe8fa] text-[#6d28d2] font-bold py-3 rounded mb-2 transition-colors"
          >
            开始订阅
          </button>
          <div class="flex flex-col items-center gap-2">
            <p class="text-xs text-[#595c73] text-center">每月 US$19.00 起售</p>
          <p class="text-xs text-[#595c73] text-center">随时取消</p>
          </div>
        </div>
      </div>

      <!-- 团队标签页内容 -->
      <div v-if="activeTab === 'team'" class="p-4">
        <div class="mb-4">
          <span class="text-2xl font-bold">Udemy</span>
          <span class="text-2xl text-[#a435f0]"> business</span>
        </div>

        <p class="text-sm text-gray-700 mb-4">
          让您的团队随时随地访问 30000 多门 Udemy 热门课程。
        </p>

        <button
          class="w-full bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold py-3 rounded mb-6 transition-colors"
        >
          试用 Udemy Business
        </button>

        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-sm text-gray-700"
              >面向用户数为 2 人或以上的团队</span
            >
          </div>
          <div class="flex items-start gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-sm text-gray-700"
              >30000 个以上需求最高的全新课程</span
            >
          </div>
          <div class="flex items-start gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-sm text-gray-700">学习互动工具</span>
          </div>
          <div class="flex items-start gap-3">
            <svg
              class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-sm text-gray-700">SSO 和 LMS 集成</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeTab = ref("personal");
const isSticky = ref(false);
const stickyRight = ref(0);

const calculateStickyRight = () => {
  const maxWidth = 1280;
  const windowWidth = window.innerWidth;
  const padding = 32;

  if (windowWidth >= maxWidth) {
    stickyRight.value = (windowWidth - maxWidth) / 2 + padding;
  } else {
    stickyRight.value = padding;
  }
};

const onScroll = () => {
  isSticky.value = window.scrollY > 250;
};

const onResize = () => {
  calculateStickyRight();
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  calculateStickyRight();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onResize);
});
</script>
