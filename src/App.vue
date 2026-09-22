<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-wrapper">
    <!-- Header Fixo no topo -->
    <Header />

    <!-- Área dinâmica onde o Vue Router renderiza a página atual -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Rodapé Fixo na base -->
    <Footer />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Garante que o Header não cubra o conteúdo */
}
</style>
