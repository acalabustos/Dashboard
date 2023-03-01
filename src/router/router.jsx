import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ProductList from "../Pages/ProductList";
import ProductInfo from "../components/ProductInfo";

import {productsHandler} from "../handlers/productsHandler";  
import Form from "../components/Form";      



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <ProductList/>,
                loader: fetchProducts,
            },
            {
                path: "products",
                element: <ProductList/>,
                loader: fetchProducts,
            },
            {
                path: "products/products/:id",
                element: <ProductInfo />,
                loader: fetchProduct,
            },
            {
                path: "newProduct",
                element: <Form />,
            },
         
            {
                path: "editProduct/:id",
                element: <editProduct />,
                loader: fetchProduct
            },

        ],
    },
]);

async function fetchProducts() {
    const products = await productsHandler.loadProducts();
    return { products };
}

async function fetchProduct({ params }) {
    const product = await productsHandler.loadProduct(params.id);
    return { product };
}