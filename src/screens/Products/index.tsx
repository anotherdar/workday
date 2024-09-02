import React, { useState } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Expand, Navbar, SearchBox, Text } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { useProducts } from '@src/hooks';

export const ProductScreen = () => {
  const [query, setQuery] = useState('');
  const {products} = useProducts();

  function searchSellerByQuery(text: string) {
    setQuery(text);
  }

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
        <Expand />
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
