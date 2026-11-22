<template>
  <div>
    <HeroSection />
    <Skills />
    <Services />
    <Projects />
    <ContactMe />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const HeroSection = defineAsyncComponent(() => import('../components/HeroSection.vue'));
const Skills = defineAsyncComponent(() => import('../components/Skills.vue'));
const Services = defineAsyncComponent(() => import('../components/Services.vue'));
const Projects = defineAsyncComponent(() => import('../components/Projects.vue'));
const ContactMe = defineAsyncComponent(() => import('../components/ContactMe.vue'));
</script>