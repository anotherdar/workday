import { Seller } from '@src/db';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type State = {
    sellers: Seller[];
    current: Seller | null;
}

type Actions = {
    setSellers: (sellers: State['sellers']) => void;
    setCurrentSellers: (current: State['current']) => void;
}

export const sellersStore = create<State & Actions>()(
    immer((set) => ({
        current: null,
        sellers: [],
        setSellers: (sellers) =>
            set(state => {
                state.sellers = sellers;
            }),
        setCurrentSellers: (current) =>
            set(state => {
                state.current = current;
            }),
    }))
);

// Return all the actions inside of the store
export function useSellerStore() {
    return sellersStore((store) => ({ ...store }));
}

