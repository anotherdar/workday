import { getAllProducts } from '@src/db';
import { useProductStore } from '@src/store';
import { useEffect } from 'react';

// products
export function useProducts() {
    const { current, products, setProducts } = useProductStore();

    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await getAllProducts();

            setProducts(allProducts);
        }

        fetchProducts();
    }, [setProducts]);

    return {
        current, products,
    };
}
