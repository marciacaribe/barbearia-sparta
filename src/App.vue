<script setup>
import Header from "./components/Header.vue";
import Horarios from "./components/Horarios.vue";
import Servicos from "./components/Servicos.vue";
import Agendamento from "./components/Agendamento.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <!-- Seções existentes (Hero, Sobre, Servicos...) -->

  <Horarios />
  <!-- 2. ADICIONAR SEÇÃO DE HORÁRIOS -->

  <Agendamento />

  <!-- Galeria, Contato, Footer... -->

  <!-- HERO SECTION -->
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
          class="btn btn-gold btn-large"
        >
          <i class="fa-brands fa-whatsapp"></i> Agendar Agora
        </a>
        <a href="#servicos" class="btn btn-outline btn-large"
          >Ver Tabela de Preços</a
        >
      </div>
    </div>
  </section>

  <!-- SOBRE NÓS -->
  <section id="sobre" class="section section-dark">
    <div class="container grid grid-2">
      <div class="sobre-info">
        <span class="section-subtitle">Sobre a Sparta</span>
        <h2 class="section-title">
          Tradição artesanal com o dinamismo moderno
        </h2>
        <p class="text-muted">
          A Sparta Barbershop nasceu para resgatar a essência do cuidado
          masculino tradicional sem abrir mão do conforto contemporâneo. Nossos
          profissionais são especialistas em cortes clássicos, tendências
          urbanas e tratamentos completos para a barba.
        </p>
        <p class="text-muted">
          Aqui você encontra um espaço projetado para relaxar, alinhar o visual
          e desfrutar de um bom café espresso ou cerveja trincando por nossa
          conta.
        </p>

        <div class="stats-grid">
          <div class="stat-item">
            <h3>100%</h3>
            <p>Pontualidade</p>
          </div>
          <div class="stat-item">
            <h3>+5k</h3>
            <p>Atendimentos</p>
          </div>
          <div class="stat-item">
            <h3>4.9/5</h3>
            <p>Avaliação</p>
          </div>
        </div>
      </div>
      <div class="sobre-img">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
          alt="Barbearia"
        />
      </div>
    </div>
  </section>

  <Servicos />

  <Agendamento />

  <!-- GALERIA DE FOTOS -->
  <section id="galeria" class="section section-dark">
    <div class="container text-center">
      <span class="section-subtitle">Portfólio</span>
      <h2 class="section-title">Ambiente & Resultados</h2>
      <div class="grid grid-4 galeria-grid">
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80"
          alt="Corte 1"
        />
        <img
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80"
          alt="Corte 2"
        />
        <img
          src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80"
          alt="Espaço"
        />
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80"
          alt="Barba"
        />
      </div>
    </div>
  </section>

  <!-- CONTATO & LOCALIZAÇÃO -->
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
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      <div class="card horários-card">
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
          class="btn btn-gold w-full mt-4"
        >
          Confirmar Disponibilidade
        </a>
      </div>
    </div>
  </section>

  <Footer />
</template>
