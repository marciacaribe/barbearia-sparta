<script setup>
import { ref, computed } from "vue";

// Regra de funcionamento
const funcionamento = [
  {
    dia: "Segunda-feira",
    status: "Fechado",
    hora: "Sem atendimento",
    aberto: false,
  },
  { dia: "Terça-feira", status: "Aberto", hora: "09:00 - 20:00", aberto: true },
  {
    dia: "Quarta-feira",
    status: "Aberto",
    hora: "09:00 - 20:00",
    aberto: true,
  },
  {
    dia: "Quinta-feira",
    status: "Aberto",
    hora: "09:00 - 20:00",
    aberto: true,
  },
  { dia: "Sexta-feira", status: "Aberto", hora: "09:00 - 20:00", aberto: true },
  { dia: "Sábado", status: "Aberto", hora: "08:00 - 19:00", aberto: true },
  { dia: "Domingo", status: "Fechado", hora: "Sem atendimento", aberto: false },
];

// Identifica o dia atual para destacar na tabela
const diaAtualIndice = computed(() => {
  const dia = new Date().getDay();
  // Ajusta o índice (0 = Domingo na API JS, adaptado para nossa lista)
  return dia === 0 ? 6 : dia - 1;
});
</script>

<template>
  <section id="horarios" class="section section-dark">
    <div class="container text-center">
      <span class="section-subtitle">Agenda & Atendimento</span>
      <h2 class="section-title">Horários de Funcionamento</h2>

      <div class="agenda-container">
        <!-- Status em tempo real -->
        <div class="agenda-status-card">
          <i class="fa-solid fa-clock-rotate-left card-icon"></i>
          <h3>Atendimento Semanal</h3>
          <p>Confira nossa disponibilidade antes de agendar seu horário.</p>
        </div>

        <!-- Tabela / Lista de Horários Responsiva -->
        <div class="card agenda-tabela">
          <div
            v-for="(item, index) in funcionamento"
            :key="item.dia"
            class="agenda-row"
            :class="{ hoje: index === diaAtualIndice }"
          >
            <div class="agenda-dia">
              <span class="dia-nome">{{ item.dia }}</span>
              <span v-if="index === diaAtualIndice" class="badge-hoje"
                >Hoje</span
              >
            </div>

            <div class="agenda-horario">
              <span v-if="item.aberto" class="status-dot aberto"></span>
              <span v-else class="status-dot fechado"></span>
              <span :class="{ 'texto-fechado': !item.aberto }">{{
                item.hora
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
