<script setup lang="ts"></script>

<template>
  <!-- CONTEÚDO ORIGINAL DE CONTATO E HORÁRIOS DE ATENDIMENTO -->
  <section id="contato" class="section">
    <div class="container grid grid-2">
      <div>
        <span class="section-subtitle">Onde Estamos</span>
        <h2 class="section-title">Venha nos fazer uma visita</h2>

        <div class="contato-list">
          <p>
            <i class="fa-solid fa-location-dot"></i> Av. Principal, 1000 —
            Centro, Sua Cidade - ST
          </p>
          <p><i class="fa-solid fa-phone"></i> (00) 99999-9999</p>
          <p><i class="fa-solid fa-clock"></i> Terça a Sábado: 09h às 20h</p>
        </div>

        <div class="social-links">
          <a href="#" aria-label="Instagram"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a href="#" aria-label="Facebook"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
          <a href="#" aria-label="WhatsApp"
            ><i class="fa-brands fa-whatsapp"></i
          ></a>
        </div>
      </div>

      <div class="card horarios-card">
        <h3 class="horarios-title">Horários de Atendimento</h3>
        <ul class="horarios-list">
          <li>
            <span>Segunda-feira</span> <span class="fechado">Fechado</span>
          </li>
          <li><span>Terça-feira</span> <span>09:00 - 20:00</span></li>
          <li><span>Quarta-feira</span> <span>09:00 - 20:00</span></li>
          <li><span>Quinta-feira</span> <span>09:00 - 20:00</span></li>
          <li><span>Sexta-feira</span> <span>09:00 - 20:00</span></li>
          <li><span>Sábado</span> <span>08:00 - 19:00</span></li>
          <li><span>Domingo</span> <span class="fechado">Fechado</span></li>
        </ul>
        <a
          href="https://wa.me/5500999999999"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-gold w-full mt-4"
        >
          Confirmar Disponibilidade
        </a>
      </div>
    </div>
  </section>
</template>
