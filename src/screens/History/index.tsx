import React from 'react';
import {View, Text} from 'react-native';
import { addColor } from '../../theme/utils';
import { Colors } from '../../theme';


export const HistoryScreen = () => {
  return (
    <View>
        <Text style={[addColor(Colors.text)]}>History</Text>
    </View>
  );
};
