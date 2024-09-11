import { addColor, createCircle, orientation, sizes, ThemeColors } from '@src/theme';
import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const IconButton: React.FC<IconButtonProps> = ({ icon, color, size, onPress }) => {
    const generateIcon = () => {
        return typeof icon === 'string' ?
            <Icon name={icon} size={sizes.default} color={color || ThemeColors.text} /> : icon;
    };

    return <Pressable onPress={onPress} style={[[orientation.allCenter, createCircle(size || 42), addColor(ThemeColors.main)]]}>
        {generateIcon}
    </Pressable>;
};

export interface IconButtonProps {
    icon: string | React.ReactNode,
    color?: string,
    size?: number,
    onPress: (event: GestureResponderEvent) => void
}
