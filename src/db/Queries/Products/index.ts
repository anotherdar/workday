import { database } from '../../db.config';
import { Product } from '../../Models';

// get all the products
export async function getAllProducts() {
    try {
        const products = await database.collections.get<Product>('products').query().fetch();

        // const products = await database
        //     .collections
        //     .get<Product>('products')
        //     .query()
        //     .fetch();

        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// get product by id
export async function getProductById(productId: string) {
    try {
        const product = await database.collections.get<Product>('products').find(productId);
        return product;
    } catch (error) {
        return null;
    }
}

// create product
export async function createProduct(name: string) {
    try {
        await database.write(async () => {
            await database
                .collections
                .get<Product>('products')
                .create(product => {
                    product.name = name;
                });
        });
    } catch (error) {
        console.error('Unable to create this instance', error);
    }
}

// update product
export async function updateProduct(productId: string, newName: string) {
    try {
        const product = await getProductById.call({ database }, productId); // Fetch the product

        if (!product) {
            return;
        }

        await database.write(async () => {
            await product.update(p => {
                p.name = newName;
            });
        });
    } catch (error) {
        console.error('Unable to complete this operation', error);
    }
}

// delete product by id
export async function deleteProduct(productId: string) {
    try {
        const product = await getProductById.call({ database }, productId);

        if (!product) {
            console.error('Unable to get the product by id: ', productId);
            return;
        }

        await database.write(async () => {
            await product.markAsDeleted(); // Mark as deleted (soft delete)
            await product.destroyPermanently(); // Permanently delete the product from the database
        });
    } catch (error) {
        console.log('Unable to complete this operation', error);
    }
}
