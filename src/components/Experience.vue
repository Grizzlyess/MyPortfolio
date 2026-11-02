<template>
<h2 class="text-4xl font-bold mb-4 text-center" data-aos="fade-right">Experience</h2>
<div class="space-y-16 py-14">
    <div class="space-y-16 py-14">
        <div v-for="element in Experience" :key="element.id" data-aos="fade-right" class="flex items-center rounded-x
            bg-white/75
            ">
                <div class="w-1/4">
                    <img src="https://img.icons8.com/ios-filled/100/lawyer.png" alt="lawyer">
                </div>
                <div class="w-3/4 pl-4">
                    <h3 class="uppercase font-semibold text-primary text-base">{{ element.title }}</h3>
                    <p class="text-gray-500">{{ element.company }}</p>
                    <p class="text-gray-500">{{ element.duration }}</p>
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
        title: 'Software Engineer Intern',
        company: 'Pagbank',
        duration: 'Jul 2025 - Jul 2026'
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'IFCE',
        duration: 'Jun 2026 - '
    },
    {
        id: 3,
        title: 'Data Analytics',
        company: 'IFCE',
        duration: 'Jan 2024 - Dec 2024'
    }
    
])
</script>