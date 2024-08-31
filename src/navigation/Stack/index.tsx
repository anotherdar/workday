import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens';
import { Colors } from '../../theme';

const Stack = createStackNavigator<StackNavigationRoutes>();

export const NavigatorStack = () => {
    return <Stack.Navigator initialRouteName="home" screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: {
            backgroundColor: Colors.main,
        },
    }}>
        <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>;
};
