<template>
  <div class="w-full flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <img src="@/assets/css/icon/start.png" alt="" class="w-6 h-6" />
      <span class="text-2xl font-medium text-gray-900"
        >4.7 课程评分 405K 评分</span
      >
    </div>

    <div class="w-full grid grid-cols-2 grid-rows-2 gap-4">
      <div class="flex flex-col gap-2" v-for="value in 4" :key="value">
        <!-- underline -->
        <div class="w-full h-[1px] bg-gray-200"></div>
        <!-- desc -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <!-- avatar -->
            <div
              class="w-10 h-10 rounded-full bg-[#18181d] flex items-center justify-center"
            >
              <span class="text-white text-sm font-medium">AY</span>
            </div>
            <!-- name -->
            <div class="text-sm font-medium text-gray-900">
              <span>John Doe</span>
              <div class="flex items-center gap-1">
                <div class="flex text-[#b4690e] text-sm">★★★★☆</div>
                <span class="text-gray-500 text-sm">1周前</span>
              </div>
            </div>
          </div>
          <button>:</button>
        </div>

        <!-- content -->
        <div class="text-sm text-gray-700">
          <span>
            I had never known how to code and did not know it was something that
            would really catch my interest, but after messing around with some
            "Vibe" coding, I really wanted to learn
          </span>
        </div>

        <div
          class="text-sm font-medium hover:bg-[#efe8fa] w-[80px] rounded-md p-2 cursor-pointer underline decoration-[#6d28d2]"
        >
          显示更多
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-700">有帮助吗？</span>
          <img
            src="@/assets/css/icon/dianz copy.png"
            alt=""
            class="w-4 h-4 cursor-pointer"
          />
          <img
            src="@/assets/css/icon/buxihuan.png"
            alt=""
            class="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped lang="scss"></style>
