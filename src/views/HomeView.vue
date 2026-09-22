<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- HERO SECTION ORIGINAL -->
  <section id="inicio" class="hero">
    <div class="hero-content">
      <span class="badge">Estilo & Tradição de Alto Padrão</span>
      <h1 class="hero-title">Forja o Seu Melhor Estilo</h1>
      <p class="hero-description">
        Muito mais do que um corte. Uma experiência exclusiva com atendimento de
        excelência, cerveja gelada e ambiente premium.
      </p>
      <div class="hero-buttons">
        <a
          href="https://wa.me/5500999999999?text=Olá,%20quero%20agendar!"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-gold btn-large"
        >
          <i class="fa-brands fa-whatsapp"></i> Agendar Agora
        </a>
        <RouterLink to="/servicos" class="btn btn-outline btn-large"
          >Ver Tabela de Preços</RouterLink
        >
      </div>
    </div>
  </section>
</template>
