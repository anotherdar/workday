import { addBorderRadius, addColor, addPadding, orientation, ThemeColors } from '@src/theme';
import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Expand } from '../Divider';
import { Text } from '../Text';

export const ListItem: React.FC<ListItemProps> = (props) => {
    const {name, onPress, icon} = props;

    return (
        <Pressable
            style={[
                orientation.row,
                addPadding('extra'),
                orientation.alignCenter,
                addColor(ThemeColors.contrast),
                addBorderRadius('sm'),
            ]}
            onPress={onPress}
        >
            <Icon name={icon || 'package-variant-closed'} size={24} color={ThemeColors.text} />
            <Expand elementSize="sm" />
            <Text size={'extra'} fontWeight={'500'}>{name}</Text>
        </Pressable>
    );
};

export interface ListItemProps {
    name: string,
    onPress: (event: GestureResponderEvent) => void
    icon?: string;
}

