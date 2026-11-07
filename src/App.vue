<template>
  <div class="min-h-screen">
     <Suspense>
        <template #default>
          <!-- 
            Adicionadas classes: 
            bg-cover (cobre tudo), bg-center (centraliza), bg-fixed (não rola com a página), 
            bg-primary2 (cor de fundo caso a imagem demore a carregar)
          -->
          <div 
            class="bg-cover bg-center bg-fixed bg-no-repeat bg-primary2 min-h-screen flex flex-col"
            :style="{ backgroundImage: `url(${backgroundImg})` }"
          >
            <NavBar/>
            <HeroSection/>
            <Skills/>
            <Services/>
            <Projects/>
            <ContactMe/>
            <Footer/>
            <BackToTop/>
          </div>
        </template>

        <template #fallback>
          <div class="flex justify-center items-center min-h-screen">
              <LoadingSpinner/>
          </div>
        </template>
     </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import backgroundImg from './assets/background1.jpg';

AOS.init({ duration: 2000 , delay: 200 });
import LoadingSpinner from './components/LoadingSpinner.vue';

const NavBar = defineAsyncComponent(()=>import('./components/NavBar.vue'))
const HeroSection = defineAsyncComponent(()=>import('./components/HeroSection.vue'))
const Skills = defineAsyncComponent(()=>import('./components/Skills.vue'))
const Services = defineAsyncComponent(()=>import('./components/Services.vue'))
const Projects = defineAsyncComponent(()=>import('./components/Projects.vue'))
const ContactMe = defineAsyncComponent(()=>import('./components/ContactMe.vue'))
const Footer = defineAsyncComponent(()=>import('./components/Footer.vue'))
const BackToTop = defineAsyncComponent(()=>import('./components/BackToTop.vue'))
</script>