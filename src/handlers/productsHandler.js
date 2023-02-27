import { productService } from "../../services/productService";      



export const productsHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = {
            "id": "" ,
            "name": newProduct.name,
            "description": newProduct.description,
            "category": newProduct.category,
            "brand":newProduct.brand,
            "condicition":newProduct.condition,
            "price": newProduct.price,
        }

        return productService.submitProduct(newProductStructure);   
    },

    loadProducts(){
        return productService.getProducts();
    },

    loadProduct(id){
        return productService.getProducts(id);

}
}  