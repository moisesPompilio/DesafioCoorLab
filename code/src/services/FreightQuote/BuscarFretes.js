import store from "@/store";

export const BuscarFretes = (cidade, peso) => {
  const freightQuotes = store.state.FreightQuotes;
  const freightQuotesCidade = freightQuotes.filter(
    (freightQuote) => freightQuote.city == cidade
  );
  console.log(freightQuotesCidade);

  if (freightQuotes.length < 1) {
    throw new Error("Infelizmente não temos transportadora para essa cidade");
  }

  const tipoCusto = peso > 100 ? "cost_transport_heavy" : "cost_transport_light";

  const freightQuotesSmallValue = encontrarMenorValor(freightQuotesCidade, tipoCusto);
  store.commit("setFreightQuotesValue", montarFreightQuote(peso, freightQuotesSmallValue));

  const freightQuotesSpeed = encontrarMenorValor(freightQuotesCidade, "lead_time");
  store.commit("setFreightQuotesSpeed", montarFreightQuote(peso, freightQuotesSpeed));
};

const encontrarMenorValor = (objetos, propriedade) => {
  return objetos.reduce((menorObjeto, objeto) => {
    const valorObjeto = converterParaNumero(objeto[propriedade]);
    const valorMenorObjeto = converterParaNumero(menorObjeto[propriedade]);
    return valorObjeto < valorMenorObjeto ? objeto : menorObjeto;
  });
};

const montarFreightQuote = (peso, frete) => {
  const stringValueFrete = frete[peso > 100 ? "cost_transport_heavy" : "cost_transport_light"];
  const valueFrete = converterParaNumero(stringValueFrete);
  frete.value = `R$ ${(valueFrete * peso).toFixed(2).replace(".", ",")}`;
  return frete;
};

const converterParaNumero = (stringNumero) => {
  return parseFloat(stringNumero.replace(/[^\d.]/g, ""));
};
