<template>
    <section class="relative w-full p-4 bg-transparent">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            
            <div class="col-span-1 order-2 md:order-1 lg:order-1 rounded-3xl p-5 bg-white border-2 border-primary/20 shadow-lg">
                <Experience/>
            </div>
            
            <div class="col-span-1 order-1 md:col-span-1 lg:col-span-2 rounded-3xl p-6 bg-white border-2 border-primary/20 shadow-lg flex flex-col justify-center">
                <MainHero/>
            </div>
            
            <div class="col-span-1 order-3 md:order-3 lg:order-3 rounded-3xl p-5 bg-white border-2 border-primary/20 shadow-lg w-full">
                <Education/>
            </div>

        </div>
    </section>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const MainHero = defineAsyncComponent(()=>import('./MainHero.vue'));
const Experience = defineAsyncComponent(()=>import('./Experience.vue'));
const Education = defineAsyncComponent(()=>import('./Education.vue'));
</script>