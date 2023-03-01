import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic";

import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import DescriptionProduct from '../pages/DescriptionProduct';
import ProductList from '../pages/ProductList';
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
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
                        path: '/DescriptionProduct',
                        element: <DescriptionProduct />,
                        
                    },    
                    {
                        path: '/ProductList/id',
                        element: <ProductList />,
                        
                    }, 
                ]
            },
         
        ]
    },   
]);
