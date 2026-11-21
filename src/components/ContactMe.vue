<template>
  <section id="contact" class="relative w-full py-12 scroll-mt-24">
    <div class="w-full max-w-[1600px] mx-auto px-4">
      
      <h2 
        class="font-pacifico font-normal text-3xl md:text-4xl text-white text-center mb-10 drop-shadow-md" 
        data-aos="fade-up"
      >
        Fale Comigo
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-right">
          <a
            v-for="item in contactInfo"
            :key="item.title"
            :href="item.link || undefined"
            :target="item.link ? '_blank' : undefined"
            class="bg-white rounded-3xl border-2 border-primary/20 shadow-lg p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            :class="{ 'cursor-pointer': item.link }"
          >
            <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <span v-html="item.icon" class="w-6 h-6"></span>
            </div>
            <h3 class="font-bold text-gray-800 text-sm mb-1">{{ item.title }}</h3>
            <p class="text-gray-500 text-xs break-words w-full">{{ item.value }}</p>
          </a>
        </div>

        <div 
          class="lg:col-span-7 bg-white rounded-3xl border-2 border-primary/20 shadow-lg p-6 md:p-8 flex flex-col justify-center" 
          data-aos="fade-left"
        >
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">Nome</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  class="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">E-mail</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  class="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1.5 ml-1">Mensagem</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Escreva sua mensagem aqui..."
                class="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
            </div>

            
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <p v-if="status === 'success'" class="text-green-600 text-xs font-semibold">
                Mensagem enviada com sucesso!
              </p>
              <p v-else-if="status === 'error'" class="text-red-500 text-xs font-semibold">
                Erro ao enviar. Tente novamente ou use o e-mail ao lado.
              </p>
              <span v-else></span>

              <button
                type="submit"
                :disabled="status === 'sending'"
                class="w-full sm:w-auto bg-primary text-white text-sm font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
              >
                {{ status === 'sending' ? 'Enviando...' : 'Enviar Mensagem' }}
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const status = ref('');

const handleSubmit = async () => {
  status.value = 'sending';

  try {
    const response = await fetch('https://formspree.io/f/xzeraeqq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      status.value = 'success';
      form.value = { name: '', email: '', message: '' }; 
    } else {
      status.value = 'error';
    }
  } catch (err) {
    status.value = 'error';
  }
};

const contactInfo = ref([
  {
    title: 'Localização',
    value: 'Fortaleza - CE, Brasil',
    link: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`
  },
  {
    title: 'E-mail',
    value: 'mariaclarab316@gmail.com',
    link: 'mailto:seu-email@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`
  },
  {
    title: 'LinkedIn',
    value: 'Conecte-se comigo',
    link: 'https://www.linkedin.com/in/mcbatista/', 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
  },
  {
    title: 'GitHub',
    value: '@Grizzlyess',
    link: 'https://github.com/Grizzlyess',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
  }
]);
</script>

<style scoped>
.font-pacifico {
  font-family: 'Pacifico', cursive;
}
</style>