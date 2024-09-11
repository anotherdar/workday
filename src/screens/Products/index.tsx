import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Expand, ListItem, Navbar, SearchBox, FAB, Empty } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { useModals, useNotifications, useProducts } from '@src/hooks';
import { isEmpty } from '@src/utils';
import { ProductsModal } from './ProductsModal';
import { Product } from '@src/db';

export const ProductScreen = () => {
  const { products, query, searchProducts, getProducts, setCurrentProduct, deleteProduct } = useProducts();
  const { setIsVisible } = useModals();
  const { dismissNotification, displayNotification } = useNotifications();

  const setActualProduct = (product: Product) => {
    return () => {
      setCurrentProduct(product);

      setIsVisible('product', 'edit')();
    };
  };

  const deleteCurrentProduct = (product: Product) => {
    return () => {
      displayNotification({
        visible: true,
        type: 'asking',
        title: `Estas seguro que quieres eliminar ${product.name}?`,
        action: async () => {
          await deleteProduct(product.id);

          await getProducts();

          dismissNotification();
        },
      });

    };
  };

  return (
    <SafeAreaView style={[orientation.full]}>
      <Navbar title="Productos" />
      {/*  */}
      <View style={[
        orientation.full,
        addPadding('extra', 'paddingHorizontal'),
        addPadding('default', 'paddingTop'),
      ]}>
        {/*  */}
        <SearchBox onChangeText={searchProducts} value={query} placeHolder="Buscar productos" />
        <Expand elementSize="normal" />
        <View style={[orientation.full]}>
          {!isEmpty(products) && <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ListItem name={item.name} onDelete={deleteCurrentProduct(item)} onEdit={setActualProduct(item)} />;
            }}
          />}
          {isEmpty(products) && <Empty />}
        </View>
      </View>
      <FAB onPress={setIsVisible('product')} />

      <ProductsModal refresh={getProducts} />
    </SafeAreaView>
  );
};
