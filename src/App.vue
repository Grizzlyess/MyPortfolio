<template>
  <div class="min-h-screen">
    <Suspense>
      <template #default>
        <div
          class="bg-cover bg-center bg-fixed bg-no-repeat bg-primary2 min-h-screen flex flex-col"
          :style="{ backgroundImage: `url(${backgroundImg})` }"
        >
          <NavBar />

          <main class="flex-1">
            <RouterView />
          </main>

          <Footer />
          <BackToTop />
        </div>
      </template>

      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import backgroundImg from './assets/background2.jpg';
import LoadingSpinner from './components/LoadingSpinner.vue';

AOS.init({ duration: 2000, delay: 200 });

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('./components/BackToTop.vue'));
</script>