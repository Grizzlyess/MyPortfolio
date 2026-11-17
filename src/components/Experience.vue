<template>
  <div class="w-full h-full flex flex-col">
    <h2 class="text-xl font-bold mb-3 text-center text-gray-800" data-aos="fade-right">Experience</h2>
    
    <div class="space-y-4 flex-1">
      <div v-for="element in Experience" :key="element.id" data-aos="fade-right" class="flex items-center">
          
          <div class="w-1/4 flex justify-center">
              <img src="https://img.icons8.com/ios-filled/50/000000/lawyer.png" alt="lawyer" class="w-9 h-9">
          </div>
          
          <div class="w-3/4 pl-2">
              <h3 class="uppercase font-semibold text-primary text-xs">{{ element.title }}</h3>
              <p class="text-gray-500 text-xs mt-0.5">{{ element.company }}</p>
              <p class="text-gray-500 text-[10px]">{{ element.duration }}</p>
          </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const Experience = ref([
    {
        id: 1,
        title: 'Engenharia de Software Estágio',
        company: 'Pagbank',
        duration: 'Jul 2025 - Jul 2026'
    },
    {
        id: 2,
        title: 'Engenharia de Software',
        company: 'IFCE',
        duration: 'Jun 2026 - '
    },
    {
        id: 3,
        title: 'Analista/Cientista de Dados',
        company: 'IFCE',
        duration: 'Jan 2024 - Dec 2024'
    }
])
</script>