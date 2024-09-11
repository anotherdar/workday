import { database } from '../../db.config';
import { Seller } from '../../Models';

// get all the seller
export async function getAllSeller() {
    try {
        const seller = await database
            .collections
            .get<Seller>('sellers')
            .query()
            .fetch();

        return seller;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// get seller by id
export async function getSellerById(id: string) {
    try {
        const product = await database.collections.get<Seller>('sellers').find(id);
        return product;
    } catch (error) {
        return null;
    }
}

// create seller
export async function createSeller(name: string) {
    try {
        await database.write(async () => {
            await database
                .collections
                .get<Seller>('sellers')
                .create(seller => {
                    seller.name = name;
                });
        });
    } catch (error) {
        console.error('Unable to create this instance', error);
    }
}

// update seller
export async function updateSeller(id: string, name: string) {
    try {
        const seller = await getSellerById.call({ database }, id); // Fetch the product

        if (!seller) {
            return;
        }

        await database.write(async () => {
            await seller.update(s => {
                s.name = name;
            });
        });
    } catch (error) {
        console.error('Unable to complete this operation', error);
    }
}

// delete seller by id
export async function deleteSeller(id: string) {
    try {
        const seller = await getSellerById.call({ database }, id);

        if (!seller) {
            console.error('Unable to get the product by id: ', id);
            return;
        }

        await database.write(async () => {
            await seller.markAsDeleted();
            await seller.destroyPermanently();
        });
    } catch (error) {
        console.log('Unable to complete this operation', error);
    }
}

