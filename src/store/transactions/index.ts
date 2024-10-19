import { Transaction } from '@src/db/Models';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type State = {
    transactions: Transaction[];
    current: Transaction | null;
}

export type Actions = {
    setTransactions: (transactions: State['transactions']) => void;
    setCurrentTransaction: (transaction: State['current']) => void;
}

export const transactionStore = create<State & Actions>()(
    immer((set) => ({
        current: null,
        transactions: [],
        setTransactions: (transactions) =>
            set(state => {
                state.transactions = transactions;
            }),
        setCurrentTransaction: (transaction) =>
            set(state => {
                state.current = transaction;
            }),
    }))
);

// Return all the actions inside of the store
export function useTransactionStore() {
    return transactionStore((store) => ({ ...store }));
}

