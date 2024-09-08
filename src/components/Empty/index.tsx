import React from 'react';
import {View} from 'react-native';
import { addPadding, orientation, sizes, ThemeColors } from '@src/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../Text';

export const Empty = () => {
  return (
    <View style={[orientation.allCenter, orientation.full]}>
        <View style={[addPadding('extra'), orientation.allCenter]}>
            <Icon name="package-variant-closed" size={sizes['3xl']} color={ThemeColors.text} />
            <Text align="center">No hay resultados para mostrar</Text>
        </View>
    </View>
  );
};

