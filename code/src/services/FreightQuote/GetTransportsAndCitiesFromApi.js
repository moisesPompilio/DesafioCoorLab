import { getFreightQuotesApi } from "@/api/FreightQuotes/getFreightQuotesApi";
import store from "@/store";

export const GetTransportsAndCitiesFromApi = async () => {
    const transports = await getFreightQuotesApi();
    store.commit('setTransports', transports)
    store.commit('setCities', getCitiesWithoutDuplicates(transports))
}

function getCitiesWithoutDuplicates(arr) {
    const citySet = new Set();

    arr.forEach(obj => {
        citySet.add(obj.city);
    });

    const uniqueCities = Array.from(citySet);
    return uniqueCities;
}