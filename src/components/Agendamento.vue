<script setup>
import { ref, computed } from "vue";

const form = ref({
  cliente: "",
  telefone: "",
  servico: "",
  data: "",
  hora: "",
  observacao: "",
});

const mensagem = ref({ text: "", tipo: "" });
const agendamentoConfirmado = ref(null);

const dataMinima = computed(() => {
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
});

const processarAgendamento = () => {
  mensagem.value = { text: "", tipo: "" };

  const dataSelecionada = new Date(`${form.value.data}T00:00:00`);
  const diaSemana = dataSelecionada.getDay(); // 0 = Domingo, 1 = Segunda

  if (diaSemana === 0 || diaSemana === 1) {
    mensagem.value = {
      text: "A Sparta atende de terça a sábado. Escolha outra data.",
      tipo: "erro",
    };
    agendamentoConfirmado.value = null;
    return;
  }

  const agendamento = { ...form.value };
  const agendamentosSalvos =
    JSON.parse(localStorage.getItem("agendamentosSparta")) || [];
  agendamentosSalvos.push(agendamento);
  localStorage.setItem(
    "agendamentosSparta",
    JSON.stringify(agendamentosSalvos),
  );

  const dataFormatada = dataSelecionada.toLocaleDateString("pt-BR");
  agendamentoConfirmado.value = {
    servico: form.value.servico,
    data: dataFormatada,
    hora: form.value.hora,
    cliente: form.value.cliente,
  };

  mensagem.value = { text: "Agendamento realizado!", tipo: "sucesso" };

  form.value = {
    cliente: "",
    telefone: "",
    servico: "",
    data: "",
    hora: "",
    observacao: "",
  };
};
</script>

<template>
  <section id="agendamento" class="section section-dark">
    <div class="container">
      <div class="text-center">
        <span class="section-subtitle">Agende seu horário</span>
        <h2 class="section-title">Agendamento de Serviços</h2>
      </div>

      <div class="agendamento-wrapper">
        <div class="card agendamento-info">
          <div class="card-icon">
            <i class="fa-solid fa-calendar-check"></i>
          </div>
          <h3 class="card-title">Escolha seu serviço</h3>
          <p class="card-text">
            Preencha seus dados, escolha o serviço, a data e o horário
            desejados. Ao confirmar, seu agendamento será registrado na tela.
          </p>

          <div class="agendamento-resumo">
            <p>
              <i class="fa-solid fa-clock"></i> Atendimento de terça a sábado
            </p>
            <p>
              <i class="fa-solid fa-calendar-days"></i> Horários disponíveis
              conforme expediente
            </p>
            <p>
              <i class="fa-solid fa-bell"></i> Confirme seu horário antes de
              comparecer
            </p>
          </div>
        </div>

        <form
          @submit.prevent="processarAgendamento"
          class="card agendamento-form"
        >
          <div class="form-group">
            <label for="cliente">Nome</label>
            <input
              v-model="form.cliente"
              type="text"
              id="cliente"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input
              v-model="form.telefone"
              type="tel"
              id="telefone"
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div class="form-group">
            <label for="servicoAgendamento">Serviço</label>
            <select v-model="form.servico" id="servicoAgendamento" required>
              <option value="">Selecione um serviço</option>
              <option value="Corte Sparta">Corte Sparta — R$ 60,00</option>
              <option value="Combo Sparta">Combo Sparta — R$ 100,00</option>
              <option value="Barba Express & Toalha">
                Barba Express & Toalha — R$ 50,00
              </option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="dataAgendamento">Data</label>
              <input
                v-model="form.data"
                type="date"
                id="dataAgendamento"
                :min="dataMinima"
                required
              />
            </div>

            <div class="form-group">
              <label for="horaAgendamento">Horário</label>
              <select v-model="form.hora" id="horaAgendamento" required>
                <option value="">Selecione</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="observacao">Observação (opcional)</label>
            <textarea
              v-model="form.observacao"
              id="observacao"
              rows="3"
              placeholder="Alguma preferência ou observação?"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-gold w-full">
            <i class="fa-solid fa-calendar-check"></i> Confirmar Agendamento
          </button>

          <div
            v-if="mensagem.text"
            class="mensagem-agendamento"
            :class="mensagem.tipo"
            role="alert"
          >
            {{ mensagem.text }}
          </div>

          <div v-if="agendamentoConfirmado" class="agendamento-confirmado">
            <strong>Agendamento realizado!</strong><br />
            {{ agendamentoConfirmado.servico }}<br />
            {{ agendamentoConfirmado.data }} às {{ agendamentoConfirmado.hora
            }}<br />
            Cliente: {{ agendamentoConfirmado.cliente }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
