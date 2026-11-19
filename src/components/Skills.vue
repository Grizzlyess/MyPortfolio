<template>
  <section class="w-full bg-white border-y-2 border-primary/20 shadow-md py-6 my-4">
    <div class="max-w-[1300px] mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:divide-x-2 lg:divide-primary/15">
        
        <div
          v-for="group in techGroups"
          :key="group.title"
          class="flex flex-col items-center px-4"
        >
          <h3 class="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            {{ group.title }}
          </h3>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <div
              v-for="tech in group.items"
              :key="tech.name"
              class="group flex flex-col items-center justify-center gap-1 transition-transform duration-300 hover:-translate-y-1"
              :title="tech.name"
            >
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span class="text-[10px] font-medium text-gray-500 group-hover:text-primary transition-colors">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const techGroups = ref([
  {
    title: 'Dados & Business Intelligence',
    items: [
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Power BI', icon: 'https://img.icons8.com/color/48/power-bi.png' },
      { name: 'Tableau', icon: 'https://img.icons8.com/color/48/tableau-software.png' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' }
    ]
  },

    {
    title: 'Linguagens & Frameworks',
    items: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ]
  },
  {
    title: 'Bancos, Cloud & Hardware',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' }
    ]
  }
]);
</script>