<template>
  <footer class="w-full bg-gradient-to-r from-white via-pink-50 to-purple-50 border-t-2 border-primary/20 mt-12 overflow-hidden">
    <!-- Grid de 3 colunas no desktop + md:pr-20 para o botão de voltar ao topo não cobrir o gatinho -->
    <div class="w-full max-w-[1600px] mx-auto px-6 py-4 md:pr-20 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
      
      <!-- Esquerda: Logo + <Maria/> -->
      <div class="flex justify-center md:justify-start">
        <a href="#" class="flex items-center gap-3 group">
          <img 
            :src="logoImg" 
            alt="Logo Maria Clara" 
            class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
          />
          <span class="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            &lt;Maria/&gt;
          </span>
        </a>
      </div>

      <!-- Meio: Texto centralizado -->
      <div class="text-center">
        <p class="text-primary font-semibold text-sm">
          © {{ currentYear }} Maria Clara. All rights reserved.
        </p>
      </div>

      <!-- Gato -->
        <div class="flex justify-center md:justify-end self-end -mb-4">
        <img 
            :src="gatoImg" 
            alt="Gatinho" 
            class="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 drop-shadow-sm"
        />
        </div>

    </div>
  </footer>
</template>

<script setup>
import logoImg from '../assets/logo.png'; 
import gatoImg from '../assets/gato.png';

const currentYear = new Date().getFullYear();
</script>