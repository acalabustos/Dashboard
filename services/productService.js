const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const productsService = {
    async getProducts() {
      let response = await apiClient.get("/products");
      console.log(response.data);
      return response.data;
  
    },
}