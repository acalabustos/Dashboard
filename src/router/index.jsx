import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import ProductList from '../pages/ProductList';
import NotFound from "../pages/NotFound";
import { productsHandler } from "../handlers/productsHandler";
import ProductInfo from "../components/ProductInfo";
import Root from "./Root";
import DescriptionProduct from "../Pages/DescriptionProduct";

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
                        path: '/productList',
                        element: <ProductList />,
                        loader: fetchProducts

                    },
                    {
                        path: '/DescriptionProduct',
                        element: <DescriptionProduct />,
                    },
                    /*    {
                           path:'/ProductInfo/:id',
                           element: <ProductInfo/>,
                           loader: fetchProduct
                       },
    */
                ]
            },

        ]
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
