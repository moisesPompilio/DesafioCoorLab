<template>
  <div class="container">
    <div class="card">
      <h4 class="card-header">
        <i class="bi bi-truck"></i> Melhor Frete
      </h4>
      <div class="card-body">
        <div class="fretes row">
          <div class="consulta col"><ConsultaFrete/></div>
          <div class="respostas col"><MelhoresTransportadoras/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getShippingQuoteFromApi } from "@/services/FreightQuote/getShippingQuoteFromApi";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ConsultaFrete from '../../components/ConsultaFrete.vue'
import MelhoresTransportadoras from '../../components/MelhoresTransportadoras.vue'
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
  margin-top: 30px;
}


.card-header {
  background-color: #5ec5c1;  
  padding-left: 30px;
  width: 100%;
  margin: 0;
  color: #403c3c;
}

.title img {
  width: 20px;
  margin-right: 10px;
}
.title b {
  color: #403c3c;
}
</style>
