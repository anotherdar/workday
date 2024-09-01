import { addBorderRadius, addColor, addPadding, fontSize, orientation, sizes, ThemeColors } from '@src/theme';
import React, { useRef } from 'react';
import { Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Expand } from '../Divider';

export const SearchBox: React.FC<SearchBoxProps> = (props) => {
    const {placeHolder, value, onChangeText} = props;
    const ref = useRef<TextInput | null>(null);

    function setInputRef(el: TextInput | null) {
        ref.current = el;
    }

    function focusInput() {
        ref.current?.focus();
    }

    return (
        <Pressable
            onPress={focusInput}
            style={[
                orientation.row,
                addBorderRadius('1xl'),
                addColor(ThemeColors.contrast),
                orientation.alignCenter,
                addPadding('normal', 'paddingHorizontal'),
            ]}>
            <Icon name="magnify" size={sizes.default} color={ThemeColors.placeholder} />
            <Expand elementSize="xs" />
            <TextInput
                ref={setInputRef}
                placeholder={placeHolder}
                placeholderTextColor={ThemeColors.placeholder}
                style={[
                    addColor(ThemeColors.text, 'color'),
                    fontSize('normal'),
                ]}
                value={value}
                onChangeText={onChangeText}
            />
        </Pressable>
    );
};

interface SearchBoxProps {
    placeHolder: string,
    value: string;
    onChangeText: (text: string) => void
}

