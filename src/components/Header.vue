<script setup>
import { ref } from "vue";

const menuAberto = ref(false);

const toggleMenu = () => {
  menuAberto.value = !menuAberto.value;
};

const fecharMenu = () => {
  menuAberto.value = false;
};
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo"><i class="fa-solid fa-scissors"></i> SPARTA</a>

      <button class="menu-toggle" id="menuToggle" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </button>

      <nav class="nav-menu" :class="{ active: menuAberto }">
        <a href="#inicio" class="nav-link" @click="fecharMenu">Início</a>
        <a href="#sobre" class="nav-link" @click="fecharMenu">Sobre</a>
        <a href="#servicos" class="nav-link" @click="fecharMenu">Serviços</a>
        <a href="#agendamento" class="nav-link" @click="fecharMenu"
          >Agendamento</a
        >
        <a href="#galeria" class="nav-link" @click="fecharMenu">Galeria</a>
        <a href="#contato" class="nav-link" @click="fecharMenu">Contato</a>
      </nav>

      <a
        href="https://wa.me/5500999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário!"
        target="_blank"
        class="btn btn-gold btn-header"
      >
        Agendar Horário
      </a>
    </div>
    <!-- Dentro de <nav class="nav-menu" ...> em Header.vue -->
    <nav class="nav-menu" :class="{ active: menuAberto }">
      <a href="#inicio" class="nav-link" @click="fecharMenu">Início</a>
      <a href="#sobre" class="nav-link" @click="fecharMenu">Sobre</a>
      <a href="#servicos" class="nav-link" @click="fecharMenu">Serviços</a>
      <a href="#horarios" class="nav-link" @click="fecharMenu">Horários</a>
      <!-- NOVO LINK -->
      <a href="#agendamento" class="nav-link" @click="fecharMenu"
        >Agendamento</a
      >
      <a href="#galeria" class="nav-link" @click="fecharMenu">Galeria</a>
      <a href="#contato" class="nav-link" @click="fecharMenu">Contato</a>
    </nav>
  </header>
</template>
