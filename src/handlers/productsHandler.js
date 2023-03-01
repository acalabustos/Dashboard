import { productService } from "../../services/productService";      



export const productsHandler = {
    addProduct(newProduct){
        if (!newProduct) {
            return;
        }

        let newProductStructure = {
           /*  "id": "" , */
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

},
deleteProduct(id){
    return productService.deleteProduct(id);
},
updateProduct(id, updatedProduct){
    if (!updatedProduct) {
        return;
    }

    let updatedProductStructure = {
        "name": updatedProduct.title,
        "description": updatedProduct.description,
        "category": updatedProduct.category,
        "brand":updatedProduct.brand,
        "condicition":updatedProduct.condition,
        "price": updatedProduct.price,
        "image": updatedProduct.image
    }

    return productService.updateProduct(id, updatedProductStructure);
}

}  