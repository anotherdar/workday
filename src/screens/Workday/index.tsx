import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Expand, Navbar, SearchBox } from '@src/components';
import { addPadding, orientation } from '@src/theme';

export const WorkdayScreen: React.FC = () => {
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

    </SafeAreaView>
  );
};
