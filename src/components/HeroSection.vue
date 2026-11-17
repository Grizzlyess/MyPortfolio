<template>
    <section class="relative w-full py-4 px-2 bg-transparent">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 items-stretch max-w-[1300px] mx-auto">
            
            <div class="lg:col-span-3 order-2 md:order-1 rounded-3xl p-4 bg-white border-2 border-primary/20 shadow-lg flex flex-col justify-start">
                <Experience/>
            </div>
            
            <div class="lg:col-span-6 order-1 md:col-span-2 rounded-3xl p-4 bg-white border-2 border-primary/20 shadow-lg flex flex-col justify-start relative">
                <MainHero/>
            </div>
            
            <div class="lg:col-span-3 order-3 rounded-3xl p-4 bg-white border-2 border-primary/20 shadow-lg flex flex-col justify-start w-full">
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