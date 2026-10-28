<!-- Responsive Menu -->
<div
  :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent md:flex md:justify-betwe'
        isMenuOpen ? 'block' : 'hidden',
    ]"
>
    <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-y-0 font-medium">
        <li v-for="item in Menu" :key="item.name">
            <a :href="item.href"
            class="block transition hover:text-primary ease-linear text-2xl md:text-sm lg:text-lg text-white md:text-black"
            @click="scrollToSection(item.href)"
            >
                {{ item.name }}
            </a>
        </li>
    </ul>
</div>
