<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuAberto = ref(false);

const fecharMenu = () => {
  menuAberto.value = false;
};
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <RouterLink to="/" class="logo" @click="fecharMenu">SPARTA</RouterLink>

      <button
        class="menu-toggle"
        @click="menuAberto = !menuAberto"
        aria-label="Abrir Menu"
      >
        <i class="fa-solid fa-bars"></i>
      </button>

      <nav class="nav-menu" :class="{ active: menuAberto }">
        <RouterLink to="/" class="nav-link" @click="fecharMenu"
          >Início</RouterLink
        >
        <RouterLink to="/sobre" class="nav-link" @click="fecharMenu"
          >Sobre</RouterLink
        >
        <RouterLink to="/servicos" class="nav-link" @click="fecharMenu"
          >Serviços</RouterLink
        >
        <RouterLink to="/agendamento" class="nav-link" @click="fecharMenu"
          >Agendamento</RouterLink
        >
        <RouterLink to="/galeria" class="nav-link" @click="fecharMenu"
          >Galeria</RouterLink
        >
        <RouterLink to="/contato" class="nav-link" @click="fecharMenu"
          >Contato</RouterLink
        >
      </nav>

      <RouterLink to="/agendamento" class="btn btn-gold btn-header"
        >Agendar</RouterLink
      >
    </div>
  </header>
</template>

<style scoped>
/* O Vue Router aplica automaticamente esta classe no link da rota atual */
.nav-link.router-link-active {
  color: var(--primary-gold);
  border-bottom: 2px solid var(--primary-gold);
}
</style>
