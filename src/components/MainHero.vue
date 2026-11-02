<template>
    <section class="relative w-full">
    <NavBar />
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-2 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
            <div class="lg:py-6">
                <div class="text-center lg:text-left">
                    <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl">
                        Hi, I'm <br>
                        <span class="text-primary">Maria Clara</span>
                    </h1>
                </div>
                <p class="text-gray-500 pt-8 text-center lg:text-left mx-auto max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id ex dolores hic ullam in reprehenderit
                </p>

                <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                    <button class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                        <span class='absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out
                        bg-primary border-2 border-transparent
                        '></span>
                        <span class="relative flex items-center justify-center ">Hire Me</span>
                    </button>
                    <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                        <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                            <div class="svg-container">
                                <svg
                                    class="download-icon"
                                    width="18"
                                    height="22"
                                    viewBox="0 0 18 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path class="download-arrow"
                                    d="M13 9L9 13M9 13L5 9M9 13V1"
                                    stroke="#0CA7ff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ></path>
                                    <path
                                    d="M1 17V18C1 18.7956 1.31607 19.5587 1.878768 20.1213C2.4129
                                    20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                                    20.1213C16.6839 19.5587 17 18.7956 17 18V17
                                    "
                                    stroke="#0CA7ff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    ></path>
                                </svg>
                                <div class="download-loader hidden"></div>
                            </div>
                            <a href="/resume.pdf" download="resume.pdf" class="pl-2 text-primary"> Download resume</a>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    </div>
</section>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const NavBar = defineAsyncComponent(()=>import('./NavBar.vue'));
</script>