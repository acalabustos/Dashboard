import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const productService = {
    async getProducts() {
      let response = await apiClient.get("/products");
      console.log(response.data);
      return response.data;
    },

    async getProduct(id) {
      let response = await apiClient.get("products/" + id);
      let product = response.data;
      return product;
  },
    async submitProduct(newProduct){
        await apiClient.post("/products", newProduct)
    },
    async deleteProduct(id){
      await apiClient.delete("products/" + id)
  },
  async updateProduct(id, updatedProduct){
      await apiClient.patch("/products/" + id, updatedProduct)
  }
}
