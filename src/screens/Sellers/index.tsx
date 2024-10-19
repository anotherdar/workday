import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Expand, ListItem, Navbar, SearchBox, FAB, Empty } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { useModals, useNotifications, useSeller } from '@src/hooks';
import { isEmpty } from '@src/utils';
import {  Seller } from '@src/db';
import { SellerModal } from './SellersModal';

export const SellersScreens = () => {
  const { sellers, query, setCurrentSellers, deleteSeller, searchSellers, getSellers} = useSeller();
  const { setIsVisible } = useModals();
  const { dismissNotification, displayNotification } = useNotifications();

  const setActualSeller = (seller: Seller) => {
    return () => {
      setCurrentSellers(seller);

      setIsVisible('seller', 'edit')();
    };
  };

  const deleteCurrentSeller = (seller: Seller) => {
    return () => {
      displayNotification({
        visible: true,
        type: 'asking',
        title: `Estas seguro que quieres eliminar ${seller.name}?`,
        action: async () => {
          await deleteSeller(seller.id);

          await getSellers();

          dismissNotification();
        },
      });

    };
  };

  return (
    <SafeAreaView style={[orientation.full]}>
      <Navbar title="Vendedores" />
      {/*  */}
      <View style={[
        orientation.full,
        addPadding('extra', 'paddingHorizontal'),
        addPadding('default', 'paddingTop'),
      ]}>
        {/*  */}
        <SearchBox onChangeText={searchSellers} value={query} placeHolder="Buscar vendedores" />
        <Expand elementSize="normal" />
        <View style={[orientation.full]}>
          {!isEmpty(sellers) && <FlatList
            data={sellers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ListItem icon="account" name={item.name} onDelete={deleteCurrentSeller(item)} onEdit={setActualSeller(item)} />;
            }}
          />}
          {isEmpty(sellers) && <Empty />}
        </View>
      </View>
      <FAB onPress={setIsVisible('seller')} />

      <SellerModal />
    </SafeAreaView>
  );
};
