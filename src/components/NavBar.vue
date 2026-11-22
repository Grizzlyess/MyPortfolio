<template>
  <header class="w-full text-white text-sm relative">
    
    <!-- LINHA SUPERIOR -->
    <div class="bg-[#431259] flex items-center justify-between px-4 py-3">
      
      <!-- Logo e Local -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/" class="text-2xl font-bold font-mono pt-1 flex items-baseline hover:border-white border border-transparent p-1">
          <span class="text-[#B3BEFF]">&lt;</span>Maria<span class="text-[#B3BEFF]">/&gt;</span>
        </RouterLink>
        
        <div class="hidden sm:flex flex-col leading-tight cursor-pointer hover:border-white border border-transparent p-1">
          <span class="text-[#CCDCFF] text-xs">Localização</span>
          <span class="font-bold">Aracati - CE</span>
        </div>
      </div>

      <!-- Barra de Pesquisa de Skills/Projetos -->
      <div class="hidden md:flex flex-1 mx-6 rounded overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#805EBF]">
        <select class="bg-gray-100 text-black px-3 py-2 border-r border-gray-300 text-xs outline-none hover:bg-gray-200 cursor-pointer">
          <option>Skills</option>
          <option>Projetos</option>
        </select>
        <input 
          type="text" 
          placeholder="Buscar tecnologias (Vue, Java, Spring, SQL)..." 
          class="flex-1 px-3 py-2 text-black outline-none w-full" 
        />
        <button class="bg-[#805EBF] hover:bg-[#60308C] px-4 flex items-center justify-center transition-colors">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" class="w-5 h-5" alt="search"/>
        </button>
      </div>

      <!-- Links Profissionais -->
      <div class="flex items-center space-x-3 md:space-x-4">
        
        <!-- GitHub -->
        <a href="https://github.com/Grizzlyess" target="_blank" aria-label="GitHub" class="flex items-center cursor-pointer hover:border-white border border-transparent p-1">
          <svg class="w-7 h-7 text-white md:hidden" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <div class="hidden md:flex flex-col leading-tight text-center">
            <span class="text-[#CCDCFF] text-xs">Repositórios</span>
            <span class="font-bold">GitHub</span>
          </div>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/mcbatista/" target="_blank" aria-label="LinkedIn" class="flex items-center cursor-pointer hover:border-white border border-transparent p-1">
          <svg class="w-7 h-7 text-white md:hidden" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <div class="hidden md:flex flex-col leading-tight text-center">
            <span class="text-[#CCDCFF] text-xs">Conexões</span>
            <span class="font-bold">LinkedIn</span>
          </div>
        </a>

        <!-- Botão Currículo -->
        <a href="/resume.pdf" download aria-label="Currículo" class="flex items-center cursor-pointer hover:border-white border border-transparent p-1 relative">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/open-resume.png" class="w-8 h-8 md:mr-1" alt="resume"/>
          <span class="font-bold mt-2 hidden md:block">Currículo</span>
        </a>

      </div>
    </div>

    <!-- LINHA INFERIOR -->
    <div class="bg-[#511F73] flex items-center px-4 py-2 space-x-1 overflow-x-auto whitespace-nowrap">
      
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="flex items-center font-bold hover:border-white border border-transparent p-1 mr-2 cursor-pointer"
      >
        <img src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png" class="w-5 h-5 mr-1" alt="menu"/>
        Menu
      </button>

      <RouterLink 
        to="/" 
        exact-active-class="border-white font-bold text-[#CCDCFF]"
        class="hover:border-white border border-transparent p-1 px-2"
      >
        Início
      </RouterLink>

      <RouterLink 
        to="/programacao" 
        active-class="border-white font-bold text-[#CCDCFF]"
        class="hover:border-white border border-transparent p-1 px-2"
      >
        Programação
      </RouterLink>

      <RouterLink 
        to="/dados" 
        active-class="border-white font-bold text-[#CCDCFF]"
        class="hover:border-white border border-transparent p-1 px-2"
      >
        Dados
      </RouterLink>

      <RouterLink 
        to="/eventos" 
        active-class="border-white font-bold text-[#CCDCFF]"
        class="hover:border-white border border-transparent p-1 px-2"
      >
        Eventos & Relatos
      </RouterLink>

      <a 
        href="#contact" 
        @click.prevent="goToContact"
        class="hover:border-white border border-transparent p-1 px-2 hidden md:block cursor-pointer"
      >
        Fale Comigo
      </a>
      
    </div>

    <!-- MENU DROPDOWN MOBILE -->
    <div v-if="isMenuOpen" class="md:hidden bg-[#431259] p-4 absolute w-full z-20 flex flex-col space-y-3 shadow-lg border-t border-[#60308C]">
      <RouterLink to="/" class="text-white hover:text-[#B3BEFF]" @click="isMenuOpen = false">Início</RouterLink>
      <RouterLink to="/programacao" class="text-white hover:text-[#B3BEFF]" @click="isMenuOpen = false">Programação</RouterLink>
      <RouterLink to="/dados" class="text-white hover:text-[#B3BEFF]" @click="isMenuOpen = false">Dados</RouterLink>
      <RouterLink to="/eventos" class="text-white hover:text-[#B3BEFF]" @click="isMenuOpen = false">Eventos & Relatos</RouterLink>
      <a href="#contact" class="text-white hover:text-[#B3BEFF]" @click.prevent="goToContact">Fale Comigo</a>
    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isMenuOpen = ref(false);
const router = useRouter();

const goToContact = () => {
  isMenuOpen.value = false;
  router.push({ path: '/', hash: '#contact' });
};
</script>