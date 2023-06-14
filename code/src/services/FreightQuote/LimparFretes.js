import store from "@/store";

export const LimparFretes = () => {
    store.commit("setFreightQuotesValue", {});
    store.commit("setFreightQuotesSpeed", {});
} 