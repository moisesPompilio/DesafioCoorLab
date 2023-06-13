import axios from "axios";

export const getFreightQuotesApi = async () => {
    return axios.get('http://localhost:3000/transport')
      .then(response => {
          return response.data;
      })
      .catch(error => {
        // Em caso de erro na requisição
        console.error(error);
      });
}