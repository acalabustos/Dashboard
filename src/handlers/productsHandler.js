import { productService } from "../../services/productService";      



export const productsHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = {
            "name": newProduct,
            "id": "",
            "header": newHeader,
            "description": newDescription ,
            "price": newPrice
        }

        productService.submitProduct(product);
        return product;
    }

    /*loadProducts(){
        return productService.getProducts();
    },

    loadProducts(id){
        return productService.getProducts(id);

}*/
}  