import { createSeller, getAllSeller, deleteSeller, updateSeller } from '@src/db';
import { useSellerStore } from '@src/store';
import { isEmpty, search } from '@src/utils';
import { useEffect, useState } from 'react';

// products
export function useSeller() {
    const { current, sellers, setSellers, setCurrentSellers } = useSellerStore();
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        async function fetchSellers() {
            const allSellers = await getAllSeller();

            setSellers(allSellers);
        }

        fetchSellers();
    }, [setSellers]);

    const searchProducts = async (name: string) => {
        try {
            setQuery(name);

            setSellers(sellers.filter(s => search(s.name, name)));

            if (isEmpty(name)) {
                const localSellers = await getAllSeller();

                setSellers(localSellers);
            }

        } catch (error) {
            console.error('failed with the following error', error);
        }
    };

    const getSellers = async () => {
        const localSellers = await getAllSeller();

        setSellers(localSellers);
    };

    return {
        current,
        sellers,
        searchProducts,
        getSellers,
        query,
        setCurrentSellers,
        createSeller,
        deleteSeller,
        updateSeller,
    };
}
