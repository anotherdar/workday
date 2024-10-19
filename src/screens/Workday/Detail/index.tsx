import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { FAB, Navbar } from '@src/components';
import { addPadding, orientation } from '@src/theme';
import { RouteProp, useRoute} from '@react-navigation/native';

export const WorkdayDetailScreen: React.FC = () => {
  const { params: { name }} = useRoute<RouteProp<Search<WorkdayDetailsParams>>>();

  return (
    <SafeAreaView style={[orientation.full]}>
      <Navbar
        title={name}
        // to allow users to open the Sellers modal
        left={{
          onPress: () => {},
          icon: 'account',
        }}
      />
      {/*  */}
      <View style={[
        orientation.full,
        addPadding('extra', 'paddingHorizontal'),
        addPadding('default', 'paddingTop'),
      ]}>
        {/* add FLat list fo all the transactions */}
      </View>
      {/* add total widget */}

      {/* add products to the state */}
      <FAB onPress={() => {}} />

    </SafeAreaView>
  );
};
