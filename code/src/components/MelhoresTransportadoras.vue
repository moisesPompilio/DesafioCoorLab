<template>
  <div class="container">
    <div v-if="!$store.state.FreightQuotesSpeed.value">
      <pre class="aviso">Nenhum dado selecionado.</pre>
    </div>
    <div v-else>
      <div>
        <pre class="negrito">
Estas são as melhores alternativas de frete que encontramos para você.</pre
        >
      </div>
      <div class="cards-transportadoras">
        <div class="trasportadora-detail card-frete">
          <div class="trasportadora-icon">
            <i class="bi bi-coin"></i>
          </div>
          <div class="trasportadora-details">
            <div class="negrito">Frete com menor valor</div>
            <div>
              Transportadora: {{ $store.state.FreightQuotesValue.name }}
            </div>
            <div>
              Tempo estimado: {{ $store.state.FreightQuotesValue.lead_time }}
            </div>
          </div>
        </div>
        <div class="preço card-frete">
          <div class="negrito">Preço:</div>
          <div>{{ $store.state.FreightQuotesValue.value }}</div>
        </div>
      </div>
      <div class="cards-transportadoras">
        <div class="trasportadora-detail card-frete speed">
          <div class="trasportadora-icon" id="icon-speed">
            <i class="bi bi-clock-history"></i>
          </div>
          <div class="trasportadora-details">
            <div class="negrito">Frete com menor valor</div>
            <div>
              Transportadora: {{ $store.state.FreightQuotesSpeed.name }}
            </div>
            <div>
              Tempo estimado: {{ $store.state.FreightQuotesSpeed.lead_time }}
            </div>
          </div>
        </div>
        <div class="preço card-frete speed" id="speed-preço">
          <div class="negrito">Preço:</div>
          <div>{{ $store.state.FreightQuotesSpeed.value }}</div>
        </div>
      </div>
    </div>
    <button
      v-if="$store.state.FreightQuotesSpeed.value"
      class="btn btn-primary"
      @click="limpaDados()"
      id="limpar"
    >
      Limpar
    </button>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";
import { LimparFretes } from "@/services/FreightQuote/LimparFretes";

export default {
  data() {
    return {
      hasFreightQuotesSelected: false,
    };
  },
  computed: {
    hasFreightQuotesSpeed() {
      return this.$store.state.FreightQuotesSpeed.value !== undefined;
    },
  },
  methods: {
    limpaDados() {
      LimparFretes();
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.card-frete {
  padding: 20px;
  background-color: #e2dcdc;
  border-radius: 10px;
}

.negrito {
  font-weight: bold;
  font-size: 15px;
}

i {
  color: #232323;
}

.cards-transportadoras {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
}

.trasportadora-detail {
  margin-right: 10px;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.trasportadora-icon {
  background-color: #9fbac8;
  border-radius: 10px 0px 0 10px;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  color: white;
}
#icon-speed {
  background-color: #7997a5;
}
.trasportadora-icon i {
  font-size: 35px;
}
.trasportadora-details {
  display: flex;
  padding: 10px 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 15px;
}
.preço {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 0 10px;
  align-self: stretch;
}

.speed {
  background-color: #e9f2e9;
}

#limpar {
  position: absolute;
  bottom: 10px;
  right: 20px;
}

@media (max-width: 1024px) {
  .speed {
    margin-bottom: 2rem;
  }
  #limpar {
    position: absolute;
    margin-top: 15px;
    bottom: 10px;
    right: auto;
  }
}

@media (max-width: 768px) {

  .card {
    padding: 20px;
    background-color: #e2dcdc;
    border-radius: 10px;
  }

  .cards-transportadoras {
    padding: auto;
  }

  .trasportadora-detail {
    width: 50%;
  }
  .preço {
    width: 25%;
    flex-direction: column;
    align-items: center;
  }

  .speed {
    margin-bottom: 2rem;
  }

}
</style>
