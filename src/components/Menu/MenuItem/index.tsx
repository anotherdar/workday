import { Text } from '@src/components';
import { addBorderRadius, addColor, addMargin, addPadding, orientation, sizes, ThemeColors } from '@src/theme';
import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {name, icon} = props;

  return (
    <Pressable key={name} style={[
        orientation.row,
        orientation.alignCenter,
        addColor(ThemeColors.contrast),
        addPadding('xl'),
        addMargin('marginBottom', 'default'),
        addBorderRadius('sm'),
    ]}>
        <Icon name={icon} size={sizes['2xl']} color={ThemeColors.text} />
        <View style={addPadding('sm')} />
        <Text size={'extra'}>{name}</Text>
    </Pressable>
  );
};

export interface MenuItemProps extends Menu {}
