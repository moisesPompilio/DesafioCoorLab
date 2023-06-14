import store from "@/store";

export const ClearFreightQuotes = () => {
    store.commit("setFreightQuotesSmallValue", {});
    store.commit("setFreightQuotesSpeed", {});
} 