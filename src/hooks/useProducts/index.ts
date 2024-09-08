import { getAllProducts } from '@src/db';
import { useProductStore } from '@src/store';
import { isEmpty, search } from '@src/utils';
import { useEffect, useState } from 'react';

// products
export function useProducts() {
    const { current, products, setProducts } = useProductStore();
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await getAllProducts();

            setProducts(allProducts);
        }

        fetchProducts();
    }, [setProducts]);

    const searchProducts = async (name: string) => {
        try {
            setQuery(name);

            setProducts(products.filter(product => search(product.name, name)));

            if (isEmpty(name)) {
                const local = await getAllProducts();

                setProducts(local);
            }

        } catch (error) {
            console.error('failed with the following error', error);
        }
    };

    return {
        current,
        products,
        searchProducts,
        query,
    };
}
