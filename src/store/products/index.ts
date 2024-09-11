import { Product } from '@src/db/Models';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    products: Product[];
    current: Product | null;
}

type Actions = {
    setProducts: (products: State['products']) => void;
    setCurrentProduct: (product: State['current']) => void;
}

export const productStore = create<State & Actions>()(
    immer((set) => ({
        current: null,
        products: [],
        setProducts: (products) =>
            set(state => {
                state.products = products;
            }),
        setCurrentProduct: (product) =>
            set(state => {
                state.current = product;
            }),
    }))
);

// Return all the actions inside of the store
export function useProductStore() {
    return productStore((store) => ({ ...store }));
}

