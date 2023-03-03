import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import ProductList from '../pages/ProductList';
import NotFound from "../pages/NotFound";
import { productsHandler } from "../handlers/productsHandler";
import ProductInfo from "../components/ProductInfo";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />, 
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Home />, 
                    },
                    {
                        path: '/CreateProduct',
                        element: <CreateProduct />,
                    },
                    {
                        path: "/productInfo/:id",
                        element: <ProductInfo />,
                        loader: fetchProduct
                        
                    },    
                    {
<<<<<<< HEAD
                        path: '/ProductList',
                        element: <ProductList />,
                        loader: fetchProducts
=======
                        path: '/productList',
                        element: <ProductList />,
                        loader: fetchProducts
                        
>>>>>>> feature/route
                    }, 

                ]
            },
         
        ]
    },   
]);

<<<<<<< HEAD

=======
>>>>>>> feature/route
async function fetchProducts() {
    const products = await productsHandler.loadProducts();
    return { products };
}

async function fetchProduct({ params }) {
    const product = await productsHandler.loadProduct(params.id);
    return { product };
<<<<<<< HEAD
}
=======
}
>>>>>>> feature/route
