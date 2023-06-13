import { getFreightQuotesApi } from "@/api/FreightQuotes/getFreightQuotesApi";
import store from "@/store";

export const getShippingQuoteFromApi = async () => {
    const freightQuotes = await getFreightQuotesApi();
    store.commit('setFreightQuotes', freightQuotes)
    store.commit('setCities', getCitiesWithoutDuplicates(freightQuotes))
}

function getCitiesWithoutDuplicates(arr) {
    const citySet = new Set();

    arr.forEach(obj => {
        citySet.add(obj.city);
    });

    const uniqueCities = Array.from(citySet);
    return uniqueCities;
}