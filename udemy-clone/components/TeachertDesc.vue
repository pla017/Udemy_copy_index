<template>
<div class="w-full flex flex-col gap-3">
    <div class="text-2xl font-medium text-gray-900">讲师</div>
    <div class="flex flex-col gap-2">
        <a href="#" class="text-xl font-medium text-[#6d28d2] hover:text-[#5624d0] underline decoration-[#6d28d2]">Dr. Angela Yu, Developer and Lead Instructor</a>
        <span class="text-gray-700 text-md">Developer and Lead Instructor</span>
        <div class="flex items-center gap-2">
            <div class="w-[130px] h-[130px] rounded-full overflow-hidden">
                <img src="https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg" alt=""></img>
            </div>
            <div class="flex flex-col items-center gap-2">
            <div class="flex items-start justify-start gap-3 w-full">
                <span>+</span>
                <span class="text-gray-700 text-sm">4.7 讲师评分</span>
            </div>
            <div class="flex items-start justify-start gap-3 w-full">
                <span>+</span>
                <span class="text-gray-700 text-sm">1024859 条评论</span>
            </div>
            <div class="flex items-start justify-start gap-3 w-full">
                <span>+</span>
                <span class="text-gray-700 text-sm">3345161 名学生</span>
            </div>
            <div class="flex items-start justify-start gap-3 w-full">
                <span>+</span>
                <span class="text-gray-700 text-sm">8 门课程</span>
            </div>
            </div>
          
        </div>

        <div class="text-gray-700 leading-relaxed space-y-4">
        <!-- 第一段 -->
        <p>
          Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp,
          <strong class="font-bold text-gray-900">the only course you need</strong> to learn to code with Python. With
          <strong class="font-bold text-gray-900">over 500,000 5 STAR reviews</strong>
          and a 4.8 average, my courses are some of the
          <strong class="font-bold text-gray-900">HIGHEST RATED</strong> courses in the history of Udemy!
        </p>

        <!-- 第二段 -->
        <p>
          <strong class="font-bold text-gray-900">100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.</strong>
        </p>

        <!-- 第三段 -->
        <p>
          At 60+ hours, this Python course is without a doubt the
          <strong class="font-bold text-gray-900">most comprehensive</strong> Python course available anywhere online. Even if you have
          <strong class="font-bold text-gray-900">zero</strong> programming experience, this course will take you from
          <strong class="font-bold text-gray-900">beginner to professional</strong>. Here's why:
        </p>

        <!-- 展开时显示的项目符号列表 -->
        <ul v-if="isExpanded" class="space-y-3 ml-4">
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              The course is taught by the <strong class="font-bold text-gray-900">lead instructor</strong>
              at the App Brewery, London's <strong class="font-bold text-gray-900">best in-person programming Bootcamp</strong>.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              The course has been updated and you'll be learning the latest tools and technologies used at large
              companies such as Apple, Google and Netflix.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              This course doesn't cut any corners, there are beautiful
              <strong class="font-bold text-gray-900">animated explanation videos</strong> and tens of
              <strong class="font-bold text-gray-900">real-world projects</strong> which you will get to build.
              e.g. Tinder auto swiper, Snake game, Blog Website, LinkedIn Auto Submit Job Application
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              The curriculum was developed over a period of <strong class="font-bold text-gray-900">2 years</strong>,
              with comprehensive student testing and feedback.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              We've taught over 600,000 students how to code and many have gone on to
              <strong class="font-bold text-gray-900">change their lives</strong> by becoming professional developers or starting their own tech startup.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              You'll save yourself <strong class="font-bold text-gray-900">over $12,000</strong> by enrolling,
              and still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming Bootcamp.
            </span>
          </li>

          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              The course is <strong class="font-bold text-gray-900">constantly updated</strong> with new content,
              with new projects and modules determined by students - that's you!
            </span>
          </li>
        </ul>

        <!-- 显示更多/更少按钮 - 始终在底部 -->
        <div class="pt-2">
          <button
            @click="toggleExpanded"
            class="flex items-center gap-2 text-[#5624d0] hover:text-[#401b9c] font-medium text-sm transition-colors"
          >
            <span>{{ isExpanded ? '显示更少' : '显示更多' }}</span>
            <svg
              :class="{ 'rotate-180': isExpanded }"
              class="w-4 h-4 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
        
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const isExpanded = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>
<style scoped lang='scss'>
</style>
