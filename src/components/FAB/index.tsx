import { addColor, addPadding, createCircle, orientation, sizes, ThemeColors } from '@src/theme';
import React from 'react';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const FAB: React.FC<FabProps> = ({ onPress }) => {
  return (
    <View style={[orientation.allCenter, addPadding('default')]}>
      <Pressable onPress={onPress} style={[orientation.allCenter, createCircle(64), addColor(ThemeColors.contrast)]}>
        <Icon name="plus" size={sizes.xl} color={ThemeColors.text} />
      </Pressable>
    </View>
  );
};

export interface FabProps {
  onPress: (event: GestureResponderEvent) => void;
}
