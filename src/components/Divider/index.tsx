import { addPadding, Padding, Sizes } from '@src/theme';
import React from 'react';
import { View } from 'react-native';

export const Expand: React.FC<ExpandProps> = (props) => {
    const { type = 'padding', size, elementSize = 'extra' } = props;

    return (
        <View style={addPadding(elementSize, type, size)} />
    );
};

export interface ExpandProps {
    elementSize?: Sizes,
    type?: Padding,
    size?: number,
}
