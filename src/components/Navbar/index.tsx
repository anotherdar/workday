import { addColor, addPadding, orientation, sizes, ThemeColors } from '@src/theme';
import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Expand, Text } from '@src/components';
import { useNavigator } from '@src/hooks';

export const Navbar: React.FC<NavbarProps> = (props) => {
    const { goBack } = useNavigator<StackNavigationRoutes>();
    const { left, title } = props;

    const navigateBack = () => goBack(['home']);

    return (
        <View style={[orientation.row, orientation.alignCenter, orientation.spread]}>
            <View style={[orientation.row, orientation.alignCenter]}>
                <Pressable
                    onPress={navigateBack}
                    style={[
                        addColor(ThemeColors.contrast),
                        addPadding('extra'),
                    ]}>
                    <Icon name="arrow-left" color={ThemeColors.text} size={sizes.default} />
                </Pressable>
                <Expand elementSize="sm" />
                <Text size="extra">{title}</Text>
            </View>
            {left && <Pressable
                onPress={left.onPress}
                style={[
                    addPadding('extra'),
                    addColor(ThemeColors.contrast),
                ]}
            >
                <Icon name={left.icon || 'dots-vertical'} color={ThemeColors.text} size={sizes.default} />
            </Pressable>}
        </View>
    );
};

export interface NavbarProps {
    left?: {
        icon?: string,
        onPress: () => void
    };
    title: string
}
