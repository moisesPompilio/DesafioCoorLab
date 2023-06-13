<template>
    <div class="container">
      <div v-if="!$store.state.FreightQuotesSpeed.value"><pre class="aviso">Nenhum dado selecionado.</pre></div>
      <div v-else>
        <div>
          <pre class="negrito">Estas são as melhores alternativas de frete que encontramos para você.</pre>
        </div>
        <div class="cards-transportadoras">
          <div class="trasportadora-detail card">
            <div class="trasportadora-icon">
              <i class="bi bi-truck"></i>
            </div>
            <div class="trasportadora-details">
              <div class="negrito">Frete com menor valor</div>
              <div>Transportadora: {{ $store.state.FreightQuotesValue.name }}</div>
              <div>Tempo estimado: {{ $store.state.FreightQuotesValue.lead_time }}</div>
            </div>
          </div>
          <div class="preço card">
            <div class="negrito">Preço:</div>
            <div>{{ $store.state.FreightQuotesValue.value }}</div>
          </div>
        </div>
        <div v-if="hasFreightQuotesSpeed" class="cards-transportadoras">
          <div class="trasportadora-detail card">
            <div class="trasportadora-icon">
              <i class="bi bi-truck"></i>
            </div>
            <div class="trasportadora-details">
              <div class="negrito">Frete com menor valor</div>
              <div>Transportadora: {{ $store.state.FreightQuotesSpeed.name }}</div>
              <div>Tempo estimado: {{ $store.state.FreightQuotesSpeed.lead_time }}</div>
            </div>
          </div>
          <div class="preço card">
            <div class="negrito">Preço:</div>
            <div>{{ $store.state.FreightQuotesSpeed.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  
  export default {
    data() {
      return {
        hasFreightQuotesSelected: false,
      };
    },
    computed: {
      hasFreightQuotesSpeed() {
        console.log(this.$store.state.FreightQuotesSpeed.value)
        return this.$store.state.FreightQuotesSpeed.value !== undefined;
      },
    },
  };
  </script>
  
  <style scoped>
  .container{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .card {
    padding: 20px;
    background-color: #e2dcdc;
  }
  
  .negrito {
    font-weight: bold;
  }
  
  .cards-transportadoras {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
  }
  
  .trasportadora-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .trasportadora-icon {
    background-color: blue;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  @media (max-width: 768px) {
    .cards-transportadoras {
      flex-direction: column;
    }
  
    .trasportadora-detail,
    .preço {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  </style>
  