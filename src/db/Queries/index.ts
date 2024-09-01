// import { Q } from '@nozbe/watermelondb';
// import { database } from '../db.config';
// import { Transaction } from '../Models';

// export const getSellersByDate = async (date: string) => {
//     try {
//         const transactions = await database.collections
//             .get<Transaction>('transactions')
//             .query(Q.where('date', date))
//             .fetch();

//         const sellers = transactions.map(t => t.seller);
//         return sellers;
//     } catch (error) {
//         return [];
//     }
// };

export * from './Products';

