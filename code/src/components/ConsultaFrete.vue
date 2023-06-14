<template>
  <div class="card">
    <form @submit.prevent="buscarFrete()">
      <fieldset>
        <legend class="negrito">
          <i class="bi bi-map"></i> Insira o destino e o peso
        </legend>
        <div class="mb-3">
          <label for="selectCidade" class="form-label negrito">Destino</label>
          <select
            class="form-select"
            id="selectCidade"
            v-model="cidade"
            required
          >
            <option disabled selected value="">Selecione um destino</option>
            <option
              v-for="cidade in $store.state.Cities"
              :key="cidade"
              :value="cidade"
            >
              {{ cidade }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="peso" class="form-label negrito">Peso</label>
          <input
            type="number"
            id="peso"
            v-model="peso"
            class="form-control"
            placeholder="Peso da carga em Kg"
            required
          />
        </div>
        <div class="center">
          <button type="submit" class="btn btn-primary">Analisar</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { BuscarFretes } from "@/services/FreightQuote/BuscarFretes";
import { LimparFretes } from "@/services/FreightQuote/LimparFretes";
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  components: {},
  data() {
    const peso = "";
    const cidade = "";

    return {
      peso,
      cidade,
    };
  },
  methods: {
    buscarFrete() {
      LimparFretes()
      BuscarFretes(this.cidade, this.peso);
    },
  },
};
</script>
<style scoped>
.btn-primary{
  background-color:  #9fbac8;
  color: #292828;
  padding: 5px 50px;
  border: none;
  margin-top: 30px;
}
.card {
  display: flex;
  justify-content: center;
  background-color: #e2dcdc;
  padding: 80px 20px;
  align-self: stretch;
  min-height: 72vh;
}
.negrito {
  font-weight: bold;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
