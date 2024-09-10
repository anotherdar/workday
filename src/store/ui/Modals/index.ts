import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

enum AppModalsIds {
    none = 'none',
    product = 'product',
    seller = 'seller',
}

const MODAL_IDS = [
    AppModalsIds.product,
    AppModalsIds.seller,
];

type ModalNames = keyof typeof AppModalsIds;

type Mode = 'edit' | 'create';

type State = {
    current: {
        id: ModalNames,
        mode: Mode,
    };
}

type Actions = {
    setCurrent: (current: State['current']) => void;
}

const modalStore = create<State & Actions>()(
    immer((set) => ({
        current: {
            mode: 'create',
            id: 'none',
        },
        setCurrent: (current) =>
            set(state => {
                state.current = current;
            }),
    }))
);

// Return all the actions inside of the store
function useModalStore() {
    return modalStore((store) => ({ ...store }));
}

export { modalStore, useModalStore, AppModalsIds, MODAL_IDS, type ModalNames, type Mode };
