<template>
  <section id="projects">
    <h2
      class="text-4xl font-bold text-black mb-4 text-center"
      data-aos="fade-up"
    >
      My Projects
    </h2>

    <div class="py-8 xl:px-16 px-4 sm:py-16 space-y-12 grid grid-cols-1 pt-10">
      <div
        v-for="element in projects"
        :key="element.title"
        data-aos="fade-up"
        class="flex flex-col md:flex-row md:items-center rounded-3xl bg-white mb-6 overflow-hidden shadow-sm"
      >
        <!-- Imagem com proporção controlada para telas médias/grandes -->
        <div class="w-full md:w-1/2 h-64 md:h-full">
          <img
            :src="element.image"
            :alt="element.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Conteúdo do Card -->
        <div class="flex flex-col justify-start p-6 space-y-6 md:w-1/2">
          <span class="bg-primary2 w-28 text-center p-2 rounded-3xl text-black text-sm">
            {{ element.category }}
          </span>

          <h3 class="uppercase font-semibold text-primary text-base">
            {{ element.title }}
          </h3>

          <p class="text-[14px] leading-[20px] text-gray-500 tracking-[0.03rem]">
            {{ element.description }}
          </p>

          <div class="flex items-center gap-3 pt-4 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
            <!-- Botão Live Preview -->
            <a
              :href="element.webURL"
              target="_blank"
              rel="noopener noreferrer"
              class="relative px-6 md:px-7 py-3 rounded-full text-white bg-primary hover:scale-105 transition-all ease-in-out w-full sm:w-max flex justify-center items-center text-sm font-medium"
            >
              Live Preview
            </a>

            <a
              :href="element.gitURL"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-primary text-primary px-6 md:px-7 py-3 rounded-full hover:scale-105 transition-all ease-in-out w-full sm:w-max flex justify-center items-center text-sm font-medium"
            >
              Code Source
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const projects = ref([
    {
        id: 1,
        image:'https://i.pinimg.com/1200x/8c/a8/35/8ca835118467e30894cc98745365085f.jpg',
        title: 'project 1',
        category: 'Web Mobile',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo aut, quae aliquam',
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        image:'https://i.pinimg.com/1200x/8c/a8/35/8ca835118467e30894cc98745365085f.jpg',
        title: 'project 2',
        category: 'Web Mobile',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo aut, quae aliquam',
        gitURL: '',
        webURL: ''
    },
    {
        id: 3,
        image:'https://i.pinimg.com/1200x/8c/a8/35/8ca835118467e30894cc98745365085f.jpg',
        title: 'project 3',
        category: 'Web App',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo aut, quae aliquam',
        gitURL: '',
        webURL: ''
    },
    {
        id: 4,
        image:'https://i.pinimg.com/1200x/8c/a8/35/8ca835118467e30894cc98745365085f.jpg',
        title: 'project 4',
        category: 'Web App',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis explicabo aut, quae aliquam',
        gitURL: '',
        webURL: ''
    }
])
</script>