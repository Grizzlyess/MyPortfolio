<template>
  <section id="projects" class="relative w-full py-12 px-4 scroll-mt-24">
    <!-- Mesmo max-w-[1300px] das seções de cima para alinhar perfeitamente -->
    <div class="max-w-[1300px] mx-auto">
      
      <!-- Título em branco com Pacifico igual ao "Meus Serviços" -->
      <h2 
        class="font-pacifico font-normal text-3xl md:text-4xl text-white text-center mb-10 drop-shadow-md" 
        data-aos="fade-up"
      >
        Meus Projetos
      </h2>

      <!-- Grid de 3 colunas no PC (2 no tablet, 1 no celular) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          data-aos="fade-up"
          class="bg-white rounded-3xl border-2 border-primary/20 shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Imagem com altura controlada (h-48) para não ficar gigante -->
          <div class="w-full h-48 overflow-hidden bg-primary/10">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <!-- Conteúdo do card -->
          <div class="p-6 flex flex-col flex-1 justify-between">
            <div>
              <!-- Tag da categoria -->
              <span class="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                {{ project.category }}
              </span>

              <h3 class="uppercase font-bold text-primary text-lg mb-2">
                {{ project.title }}
              </h3>

              <p class="text-gray-500 text-sm leading-relaxed mb-6">
                {{ project.description }}
              </p>
            </div>

            <!-- Botões (mantendo o estilo roxo arredondado) -->
            <div class="flex items-center gap-3 mt-auto">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                class="flex-1 text-center bg-primary text-white text-xs font-semibold py-2.5 px-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Live Preview
              </a>
              <a
                v-if="project.codeUrl"
                :href="project.codeUrl"
                target="_blank"
                class="flex-1 text-center border border-primary text-primary text-xs font-semibold py-2.5 px-4 rounded-full hover:bg-primary/10 transition-colors"
              >
                Code Source
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    category: 'Fullstack Web',
    title: 'CLIC Libras',
    description: 'Plataforma colaborativa de dicionário de termos técnicos e científicos em Libras, construída com Java, Spring Boot, Vue.js e PostgreSQL.',
    image: 'https://via.placeholder.com/600x400', // Troque pelo print do projeto
    liveUrl: 'https://cliclibras.tech',
    codeUrl: 'https://github.com/Grizzlyess'
  },
  {
    id: 2,
    category: 'Fullstack Web',
    title: 'CAPI',
    description: 'Aplicação web de consumo ecológico com calculadora de pegada de carbono e consulta de Eco-Score, usando React, Node.js, Prisma e MongoDB.',
    image: 'https://via.placeholder.com/600x400', // Troque pelo print do projeto
    liveUrl: '',
    codeUrl: 'https://github.com/Grizzlyess'
  },
  {
    id: 3,
    category: 'Machine Learning',
    title: 'Car Price Prediction',
    description: 'Aplicação web para predição de preços de veículos utilizando Random Forest com Python, Scikit-Learn, Pandas e Django.',
    image: 'https://via.placeholder.com/600x400', // Troque pelo print do projeto
    liveUrl: 'https://car-price-prediction-app-3iww.onrender.com',
    codeUrl: 'https://github.com/Grizzlyess'
  }
]);
</script>