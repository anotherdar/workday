import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Expand, FAB, Navbar, SearchBox } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { Sellers } from './Modals';

export const WorkdayScreen: React.FC = () => {
  const [isSellerOpen, setIsSellerOpen] = useState<boolean>(false);

  const handleSellersModal = () => setIsSellerOpen(prev => !prev);

  return (
    <SafeAreaView style={[orientation.full]}>
      <Navbar title="Hoy" />
      {/*  */}
      <View style={[
        orientation.full,
        addPadding('extra', 'paddingHorizontal'),
        addPadding('default', 'paddingTop'),
      ]}>
        {/*  */}
        <SearchBox onChangeText={() => { }} value={''} placeHolder="Buscar vendedores" />
        <Expand elementSize="normal" />

      </View>
      <FAB onPress={handleSellersModal} />

      <Sellers visible={isSellerOpen} onDismiss={handleSellersModal}/>
    </SafeAreaView>
  );
};
