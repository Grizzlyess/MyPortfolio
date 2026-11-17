<template>
  <div class="w-full h-full flex flex-col">
    
    <!-- SEÇÃO 1: EDUCAÇÃO -->
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800" data-aos="fade-left">Educação</h2>
    <div class="space-y-6">
      <div v-for="element in Education" :key="element.id" data-aos="fade-left" class="flex items-center">
        <div class="w-1/4 flex justify-center">
          <img src="https://img.icons8.com/ios-glyphs/50/000000/graduation-cap--v1.png" alt="graduation" class="w-10 h-10">
        </div>
        <div class="w-3/4 pl-2">
          <h3 class="uppercase font-semibold text-primary text-xs">{{ element.title }}</h3>
          <p class="text-gray-500 text-xs mt-1">{{ element.school }}</p>
          <p class="text-gray-500 text-[10px]">{{ element.duration }}</p>
        </div>
      </div>
    </div>

    <hr class="my-6 border-gray-200">

    <!-- SEÇÃO 2: ARTIGOS  -->
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800" data-aos="fade-left">Artigos Publicados</h2>
    <div class="space-y-6 flex-1">
      
      <a 
        v-for="article in Articles" 
        :key="article.id" 
        :href="article.link" 
        target="_blank"
        data-aos="fade-left" 
        class="flex items-start group cursor-pointer"
      >
        <div class="w-1/4 flex justify-center pt-1">
          <img src="https://img.icons8.com/ios-filled/50/000000/document.png" alt="article" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110">
        </div>
        
        <div class="w-3/4 pl-2">
          <h3 class="font-semibold text-primary text-xs leading-snug group-hover:underline">{{ article.title }}</h3>
          <p class="text-gray-500 text-[10px] italic mt-1">{{ article.conference }}</p>
          <span class="inline-block bg-primary/10 text-primary text-[9px] px-2 py-0.5 rounded-full mt-1">
            {{ article.tag }}
          </span>
        </div>
      </a>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

const Education = ref([
  {
    id: 1,
    title: "Bacharelado em Ciência da Computação",
    school: "IFCE",
    duration: "2022 - 2026",
  }
]);

const Articles = ref([
  {
    id: 1,
    title: "Evasão Acadêmica e Empregabilidade: a influência do tempo de permanência na inserção profissional de egressos dos cursos de TIC do IFCE",
    conference: "ERI-ES",
    tag: "Melhor Artigo pela SBC",
    link: "https://sol.sbc.org.br/index.php/eries/article/view/38235"
  },
  {
    id: 2,
    title: "Empregabilidade e Formandos: o impacto da localização do campus na inserção profissional de egressos de cursos TIC do IFCE",
    conference: "ERBASE ",
    link: "https://sol.sbc.org.br/index.php/eries/article/view/38235"
  }

]);
</script>