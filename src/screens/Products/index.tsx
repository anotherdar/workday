import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Navbar, SearchBox } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { getAllProducts } from '@src/db';

export const ProductScreen = () => {
  const [query, setQuery] = useState('');

  function searchSellerByQuery(text: string) {
    setQuery(text);
  }

  useEffect(() => {
    async function init() {
      // createProduct('pan riso');

      const products = await getAllProducts();

      console.log('>>>>', products);
    }

    init();
  }, []);

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
        <SearchBox onChangeText={searchSellerByQuery} value={query} placeHolder="Buscar productos" />
      </View>
    </SafeAreaView>
  );
};
