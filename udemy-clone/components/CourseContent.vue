<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Course content</h2>
        <p class="text-gray-600">31 sections • 383 lectures • 58h 35m total length</p>
      </div>
      
      <div class="space-y-2">
        <div v-for="(section, index) in courseSections" :key="index" class="border border-gray-200 rounded">
          <button 
            @click="toggleSection(index)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div>
              <h3 class="font-semibold text-gray-900">{{ section.title }}</h3>
              <p class="text-sm text-gray-600">{{ section.lectures }} lectures • {{ section.duration }}</p>
            </div>
            <svg 
              :class="{ 'rotate-180': expandedSections.includes(index) }"
              class="w-5 h-5 text-gray-400 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div v-if="expandedSections.includes(index)" class="px-6 pb-4">
            <div v-for="(lecture, lectureIndex) in section.content" :key="lectureIndex" class="flex items-center justify-between py-2 border-t border-gray-100">
              <div class="flex items-center space-x-3">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <span class="text-sm text-gray-700">{{ lecture.title }}</span>
              </div>
              <span class="text-sm text-gray-500">{{ lecture.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expandedSections = ref([])

const courseSections = [
  {
    title: "Day 1 - Working with Variables in Python to Manage Data",
    lectures: "6 lectures",
    duration: "1hr 13min",
    content: [
      { title: "What you're going to get from this course", duration: "02:30" },
      { title: "START HERE", duration: "01:15" },
      { title: "Day 1 Goals: what we will make by the end of the day", duration: "02:12" },
      { title: "Printing to the Console in Python", duration: "08:56" },
      { title: "String Manipulation and Code Intelligence", duration: "09:42" },
      { title: "The Python Input Function", duration: "07:18" }
    ]
  },
  {
    title: "Day 2 - Understanding Data Types and How to Manipulate Strings",
    lectures: "8 lectures",
    duration: "1hr 45min",
    content: [
      { title: "Day 2 Goals: what we will make by the end of the day", duration: "01:30" },
      { title: "Python Primitive Data Types", duration: "12:45" },
      { title: "Type Error, Type Checking and Type Conversion", duration: "11:23" },
      { title: "Mathematical Operations in Python", duration: "08:17" }
    ]
  },
  {
    title: "Day 3 - Control Flow and Logical Operators",
    lectures: "10 lectures", 
    duration: "2hr 15min",
    content: [
      { title: "Day 3 Goals: what we will make by the end of the day", duration: "02:00" },
      { title: "Control Flow with if / else and Conditional Operators", duration: "15:30" },
      { title: "Logical Operators", duration: "12:45" }
    ]
  }
]

const toggleSection = (index) => {
  if (expandedSections.value.includes(index)) {
    expandedSections.value = expandedSections.value.filter(i => i !== index)
  } else {
    expandedSections.value.push(index)
  }
}
</script>