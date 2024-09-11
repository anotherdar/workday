import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import { Text } from '../Text';
import {
    addAlignItems,
    addBorderRadius,
    addColor,
    addJustifyContent,
    addOpacity,
    addPadding,
    ThemeColors,
} from '@src/theme';


export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
    const { children, type = 'success', onPress, disabled } = props;

    const getColor = () => {
        return {
            success: ThemeColors.primary,
            danger: ThemeColors.danger,
            link: ThemeColors.main,
        }[type];
    };

    return (
        <Pressable
            style={[
                addColor(getColor()),
                addPadding(type === 'link' ? 'sm' : 'extra'),
                addBorderRadius('sm'),
                addJustifyContent('center'),
                addAlignItems('center'),
                addOpacity(disabled ? 0.5 : 1),
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text size={'extra'}>{children}</Text>
        </Pressable>
    );
};

interface ButtonProps {
    type?: ButtonTypes;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
}

type ButtonTypes = 'success' | 'danger' | 'link';
