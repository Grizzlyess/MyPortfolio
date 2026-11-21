<template>
  <section id="services" class="relative w-full py-12 px-4 scroll-mt-24">
    <div class="w-full max-w-[1600px] mx-auto px-4">
      
        <h2 
        class="font-pacifico font-normal text-3xl md:text-4xl text-white text-center mb-10 drop-shadow-md" 
        data-aos="fade-up"
        >
        Meus Serviços
        </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          data-aos="fade-up"
          class="bg-white rounded-3xl p-6 border-2 border-primary/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <img :src="service.icon" :alt="service.name" class="w-8 h-8" />
          </div>

          <!-- Título e descrição -->
          <h3 class="uppercase font-bold text-primary text-base mb-2">
            {{ service.name }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    id: 1,
    icon: 'https://img.icons8.com/ios-filled/50/805EBF/source-code.png',
    name: 'Desenvolvimento Backend',
    description: 'Criação de APIs REST robustas, microsserviços e integrações escaláveis com Java, Spring Boot e bancos de dados relacionais.'
  },
  {
    id: 2,
    icon: 'https://img.icons8.com/ios-filled/50/805EBF/web-design.png',
    name: 'Desenvolvimento Frontend',
    description: 'Interfaces modernas, responsivas e focadas na experiência do usuário utilizando Vue.js, TypeScript e Tailwind CSS.'
  },
  {
    id: 3,
    icon: 'https://img.icons8.com/ios-filled/50/805EBF/combo-chart.png',
    name: 'Análise de Dados & BI',
    description: 'Tratamento, modelagem e visualização de dados estratégicos com Python, SQL, Power BI e Tableau.'
  },
  {
    id: 4,
    icon: 'https://img.icons8.com/ios-filled/50/805EBF/smartphone-tablet.png',
    name: 'Desenvolvimento Mobile',
    description: 'Aplicativos multiplataforma com Flutter, suporte offline-first e sincronização em nuvem.'
  },
  {
    id: 5,
    icon: 'https://img.icons8.com/ios-filled/50/805EBF/cloud.png',
    name: 'Cloud & Deploy',
    description: 'Containerização com Docker e publicação de aplicações web em ambientes como Google Cloud, Cloudflare e Render.'
  },
  {
    id: 6,
    icon: 'https://img.icons8.com/ios-filled/50/805EBF/figma.png',
    name: 'UI/UX Design',
    description: 'Prototipação de wireframes e interfaces acessíveis no Figma, unindo identidade visual e usabilidade.'
  }
]);
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style>