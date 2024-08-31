import React from 'react';
import { Pressable, Text } from 'react-native';


export const Button: React.FC<ButtonProps> = (props) => {
    const { text } = props;
    return (
        <Pressable>
            <Text>{text}</Text>
        </Pressable>
    );
};

interface ButtonProps {
    text: string
}
