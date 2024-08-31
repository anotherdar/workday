import React from 'react';
import { Text as NativeText, TextStyle } from 'react-native';
import { Colors, Sizes, addColor, addFontWeight, fontSize } from '../../theme';

type TextType = React.FC<React.PropsWithChildren<TextProps>>;

export const Text: TextType = (props) => {
    const { children, color = Colors.text, fontWeight = 'bold', size = 'default' } = props;
    return (
        <NativeText style={[
            addColor(color, 'color'),
            addFontWeight(fontWeight),
            fontSize(size)]}
        >{children}</NativeText>
    );
};

export interface TextProps {
    color?: typeof Colors & string,
    fontWeight?: TextStyle['fontWeight'],
    size?: Sizes | number
}
