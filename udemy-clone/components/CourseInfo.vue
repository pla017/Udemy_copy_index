<template>
  <div class="w-full border border-[#e5e7eb] rounded-md p-4">
    <div class="text-2xl font-medium text-gray-900">您将会学到</div>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div class="flex items-center" v-for="value in descList" :key="value">
        <img src="@/assets/css/icon/bingo.png" class="w-10- h-9" alt="" />
        <span class="text-gray-700 text-sm leading-relaxed"
          >{{ value }}</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const descList = ref([
  "You will master the Python programming language by building 100 unique projects over 100 days.",
  "You will be able to program in Python professionally",
  "Create a portfolio of 100 Python projects to apply for developer jobs",
  "Be able to use Python for data science and machine learning",
  "Build GUIs and Desktop applications with Python",
  "You will learn automation, game, app and web development, data science and machine learning all using Python.",
  "You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
  "Be able to build fully fledged websites and web apps with Python",
  "Build games like Blackjack, Pong and Snake using Python",
]);
</script>
