import { Q } from '@nozbe/watermelondb';
import { database } from '@src/db/db.config';
import { Transaction } from '@src/db/Models';

type TransactionData = {
    date: string,
    quantity: number,
    sellerId: string,
    productId: string,
}

export async function getAllTransactions() {
    try {
        const transactions = await database
            .collections
            .get<Transaction>('transactions')
            .query()
            .fetch();

        return transactions;
    } catch (error) {
        console.error('Unable to get all transactions', error);
        return [];
    }
}

export async function getTransactionById(id: string) {
    try {
        const transaction = await database
            .collections
            .get<Transaction>('transactions')
            .find(id);
        return transaction;
    } catch (error) {
        return null;
    }
}

export async function getTransactionsByDate(date: string) {
    try {
        const transactions = await database
            .collections
            .get<Transaction>('transactions')
            .query(Q.where('date', date))
            .fetch();

        return transactions;
    } catch (error) {
        console.log('not able to get transactions by date', error);
        return [];
    }
}

export async function createTransaction(data: TransactionData) {
    try {
        await database.action(async () => {
            await database
                .collections
                .get<Transaction>('transactions')
                .create((transaction: any) => {
                    transaction.date = data.date;
                    transaction.quantity = data.quantity;
                    transaction.seller.set(data.sellerId);
                    transaction.product.set(data.productId);
                });
        });
    } catch (error) {
        console.error('Unable to create this instance', error);
    }
}

export async function updateTransaction(id: string, quantity: number) {
    try {
        const transaction = await getTransactionById.call({ database }, id); // Fetch the product

        if (!transaction) {
            return;
        }

        await database.write(async () => {
            await transaction.update(s => {
                s.quantity = quantity;
            });
        });
    } catch (error) {
        console.error('Unable to update this instance', error);
    }
}

export async function deleteTransaction(id: string) {
    try {
        const transaction = await getTransactionById.call({ database }, id);

        if (!transaction) {
            console.error('Unable to get the transaction by id: ', id);
            return;
        }

        await database.write(async () => {
            await transaction.markAsDeleted();
            await transaction.destroyPermanently();
        });
    } catch (error) {
        console.error('Unable to remove this instance', error);
    }
}

export const getTransactionsBySeller = async (sellerId: string, date: string): Promise<Transaction[]> => {
    try {
        const transactions = await database.collections
        .get('transactions')
        .query(Q.where('seller_id', sellerId), Q.where('date', date))
        .fetch();

        return transactions as Transaction[];
    } catch (error) {
        console.error('Unable to get transactions by seller and date', error);
        return [];
    }
};

export const getTransactionsByProduct = async (productId: string): Promise<Transaction[]> => {
    try {
        const transactions = await database.collections
        .get('transactions')
        .query(Q.where('product_id', productId))
        .fetch();

    return transactions as Transaction[];
    } catch (error) {
        console.error('Unable to get transactions by product', error);
        return [];
    }
};
