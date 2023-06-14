<template>
  <div class="container">
    <div class="card">
      <h4 class="card-header"><i class="bi bi-truck"></i> Melhor Frete</h4>
      <div class="card-body">
        <div class="fretes">
          <div class="consulta"><ConsultaFrete /></div>
          <div class="transportadoras"><MelhoresTransportadoras /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShippingQuoteFromApi } from "@/services/FreightQuote/getShippingQuoteFromApi";
import "bootstrap-icons/font/bootstrap-icons.css";
import ConsultaFrete from "../../components/ConsultaFrete.vue";
import MelhoresTransportadoras from "../../components/MelhoresTransportadoras.vue";
export default {
  components: {
    ConsultaFrete,
    MelhoresTransportadoras,
  },
  data() {
    const appName = "";

    return {
      appName,
    };
  },
  async created() {
    await getShippingQuoteFromApi();
  },
  methods: {
    methodFoo() {
      console.log(this.appName);
    },
  },
};
</script>

<style scoped>


.container {
  margin-top: 20px;
  padding: 0 30px;
  min-height: 60vh;
}

.card {
  border-radius: 15px;
}

.card-header {
  background-color: #9fbac8;
  padding-left: 30px;
  width: 100%;
  margin: 0;
  color: #403c3c;
}

.fretes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
}
.consulta {
  width: 65%;
  margin: 0;
  margin: 0;
}

.transportadoras {
  width: 100%;
  margin: 0;
}
@media (max-width: 1068px) {
  .consulta {
    width: 80%;
    margin: 0;
  }
  .fretes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
  }
}

@media (max-width: 1068px) {
  .consulta {
    width: 100%;
    margin: 0;
  }
  .fretes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
  }
}

</style>
