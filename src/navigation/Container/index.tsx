import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from '../Stack';

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <NavigatorStack />
        </NavigationContainer>
    );
};
