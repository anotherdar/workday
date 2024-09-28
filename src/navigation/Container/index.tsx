import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorStack } from '../Stack';
import BootSplash from 'react-native-bootsplash';

export const RootNavigation = () => {
    const hideSplashScreen = () => BootSplash.hide({
        fade: true,
    });

    return (
        <NavigationContainer onReady={hideSplashScreen}>
            <NavigatorStack />
        </NavigationContainer>
    );
};
