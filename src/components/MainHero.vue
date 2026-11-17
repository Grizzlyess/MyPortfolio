<template>
    <section class="relative w-full h-full flex items-center" data-aos="zoom-in-up">
    <div class="w-full px-2 sm:px-6 lg:px-4 max-w-screen-xl mx-auto relative">
        
        <!-- Grid de 12 colunas em vez de 2 -->
        <div class="grid lg:grid-cols-12 gap-2 relative w-full items-center">
            
            <!-- LADO ESQUERDO: TEXTOS (Ocupa 5 colunas) -->
            <div class="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
                <h1 class="pt-2 font-bold text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-gray-800">
                    Hi, I'm <br>
                    <span class="text-primary">Maria Clara</span>
                </h1>
                <p class="text-gray-500 pt-6 mx-auto lg:mx-0 max-w-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id ex dolores hic ullam in reprehenderit
                </p>
            </div>
            
            <!-- LADO DIREITO: IMAGEM (Ocupa 7 colunas - ganha muito mais espaço livre) -->
            <div class="lg:col-span-7 flex justify-center items-center relative w-full">
                <figure class="relative w-full flex justify-center items-center z-10">
                    <img 
                        src="../assets/perfil.png" 
                        alt="Hero Picture" 
                        class="w-full h-auto object-contain transform scale-110 origin-center drop-shadow-md"
                    />
               </figure>
            </div>
            
        </div>
    </div>
</section>
</template>

<script setup>
</script>