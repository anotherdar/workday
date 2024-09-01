import React from 'react';
import {View, Text} from 'react-native';
import { addColor } from '../../theme/utils';
import { ThemeColors } from '../../theme';


export const HistoryScreen = () => {
  return (
    <View>
        <Text style={[addColor(ThemeColors.text)]}>History</Text>
    </View>
  );
};
