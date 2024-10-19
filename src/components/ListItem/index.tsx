import { addAlignItems, addBorderRadius, addColor, addJustifyContent, addMargin, addOrientation, addPadding, ThemeColors } from '@src/theme';
import React from 'react';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Expand } from '../Divider';
import { Text } from '../Text';
import { IconButton } from '../IconButton';

export const ListItem: React.FC<ListItemProps> = (props) => {
    const {name, onDelete, onEdit, icon, onPress} = props;

    return (
        <Pressable
            onPress={onPress}
            style={[
                addPadding('extra'),
                addColor(ThemeColors.contrast),
                addBorderRadius('sm'),
                addMargin('marginBottom', 'md'),
                addOrientation('row'),
                addJustifyContent('space-between'),
                addAlignItems('center'),
            ]}
        >
            <View style={[addOrientation('row'), addAlignItems('center')]}>
                <Icon name={icon || 'package-variant-closed'} size={32} color={ThemeColors.text} />
                <Expand elementSize="xs" />
                <Text size={'extra'} fontWeight={'500'}>{name}</Text>
            </View>

            <View style={[addOrientation('row')]}>
                {onEdit && <IconButton color={ThemeColors.primary} icon="pencil" onPress={onEdit}/>}
                {(onEdit && onDelete) && <Expand elementSize="xs"/>}
                {onDelete && <IconButton color={ThemeColors.danger} icon="delete" onPress={onDelete}/>}
            </View>
        </Pressable>
    );
};

export interface ListItemProps {
    name: string,
    onEdit?: (event: GestureResponderEvent) => void;
    onDelete?: (event: GestureResponderEvent) => void;
    onPress?: (event: GestureResponderEvent) => void;
    icon?: string;
}

