<template>
  <header class="w-full text-white text-sm">
    
    <!-- LINHA SUPERIOR (Tom mais escuro: #431259) -->
    <div class="bg-[#431259] flex items-center justify-between px-4 py-3">
      
      <!-- Logo e Local -->
      <div class="flex items-center space-x-4">
        <a href="#" class="text-2xl font-bold font-mono pt-1 flex items-baseline hover:border-white border border-transparent p-1">
          <!-- Tags num tom mais claro para contrastar com o fundo escuro -->
          <span class="text-[#B3BEFF]">&lt;</span>Maria<span class="text-[#B3BEFF]">/&gt;</span>
        </a>
        
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

      <!-- Links Profissionais (Direita) -->
      <div class="flex items-center space-x-2 md:space-x-4">
        <!-- GitHub -->
        <a href="https://github.com/Grizzlyess" target="_blank" class="flex flex-col leading-tight cursor-pointer hover:border-white border border-transparent p-1 hidden sm:flex text-center">
          <span class="text-[#CCDCFF] text-xs">Repositórios</span>
          <span class="font-bold">GitHub</span>
        </a>
        
        <!-- LinkedIn -->
        <a href="#" class="hidden lg:flex flex-col leading-tight cursor-pointer hover:border-white border border-transparent p-1 text-center">
          <span class="text-[#CCDCFF] text-xs">Conexões</span>
          <span class="font-bold">LinkedIn</span>
        </a>
        
        <!-- Botão Currículo -->
        <a href="/resume.pdf" download class="flex items-center cursor-pointer hover:border-white border border-transparent p-1 relative">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/open-resume.png" class="w-8 h-8 mr-1" alt="resume"/>
          <span class="font-bold mt-2 hidden md:block">Currículo</span>
        </a>
      </div>
    </div>

    <!-- LINHA INFERIOR (Menu de Navegação - Tom intermédio escuro: #511F73) -->
    <div class="bg-[#511F73] flex items-center px-4 py-2 space-x-1 overflow-x-auto whitespace-nowrap">
      
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="flex items-center font-bold hover:border-white border border-transparent p-1 mr-2"
      >
        <img src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png" class="w-5 h-5 mr-1" alt="menu"/>
        Menu
      </button>

      <!-- Âncoras do Portfólio -->
      <a href="#experience" class="hover:border-white border border-transparent p-1 px-2" @click="scrollToSection('#experience')">Experience</a>
      <a href="#education" class="hover:border-white border border-transparent p-1 px-2" @click="scrollToSection('#education')">Education</a>
      <a href="#skills" class="hover:border-white border border-transparent p-1 px-2" @click="scrollToSection('#skills')">Skills</a>
      <a href="#projects" class="hover:border-white border border-transparent p-1 px-2 hidden sm:block" @click="scrollToSection('#projects')">Projetos Recentes</a>
      <a href="#contact" class="hover:border-white border border-transparent p-1 px-2 hidden md:block" @click="scrollToSection('#contact')">Fale Comigo</a>
      
    </div>

    <!-- Dropdown Mobile (Tom mais escuro: #431259) -->
    <div v-if="isMenuOpen" class="md:hidden bg-[#431259] p-4 absolute w-full z-20 flex flex-col space-y-3 shadow-lg border-t border-[#60308C]">
      <a href="#experience" class="text-white hover:text-[#B3BEFF]" @click="scrollToSection('#experience')">Experience</a>
      <a href="#education" class="text-white hover:text-[#B3BEFF]" @click="scrollToSection('#education')">Education</a>
      <a href="#skills" class="text-white hover:text-[#B3BEFF]" @click="scrollToSection('#skills')">Skills</a>
      <a href="#projects" class="text-white hover:text-[#B3BEFF]" @click="scrollToSection('#projects')">Projects</a>
      <a href="#contact" class="text-white hover:text-[#B3BEFF]" @click="scrollToSection('#contact')">Contact</a>
    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section){
        section.scrollIntoView({ behavior : 'smooth'})
    }
}
</script>