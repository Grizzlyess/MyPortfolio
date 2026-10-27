<template>
  <div class="min-h-screen">
    <!-- Wrap components in suspense do handle loading -->
     <Suspense>
        <template #default>
          <div>
            
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
import LoadingSpinner from './components/LoadingSpinner.vue';
</script>