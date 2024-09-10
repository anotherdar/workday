import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Expand, ListItem, Navbar, SearchBox, FAB, Empty } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { useModals, useProducts } from '@src/hooks';
import { isEmpty } from '@src/utils';
import { ProductsModal } from './ProductsModal';

export const ProductScreen = () => {
  const { products, query, searchProducts } = useProducts();
  const { setIsVisible } = useModals();

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
              return <ListItem name={item.name} onPress={() => { }} />;
            }}
          />}
          {isEmpty(products) && <Empty />}
        </View>
      </View>
      <FAB onPress={setIsVisible('product')} />

      <ProductsModal />
    </SafeAreaView>
  );
};
