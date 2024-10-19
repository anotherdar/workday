import { useTransactionStore } from '@src/store';
import { getTransactionsByDate, getAllTransactions, createTransaction, getTransactionById, getTransactionsBySeller, getTransactionsByProduct, deleteTransaction, updateTransaction } from '@src/db';

import { useEffect } from 'react';

interface Options {
    date?: string
}

export const useTransactions = ({ date }: Options) => {
    const { setTransactions, setCurrentTransaction, transactions, current } = useTransactionStore();

    useEffect(() => {
        async function fetchTransactions() {
            if (!date) {
                const allTransactions = await getAllTransactions();
                setTransactions(allTransactions);
                return;
            }

            const allTransactionsByDate = await getTransactionsByDate(date);

            setTransactions(allTransactionsByDate);
        }

        fetchTransactions();
    }, [date, setTransactions]);


    return {
        current,
        transactions,
        setCurrentTransaction,
        setTransactions,
        createTransaction,
        getTransactionById,
        getTransactionsBySeller,
        getTransactionsByProduct,
        deleteTransaction,
        updateTransaction,
    };
};
