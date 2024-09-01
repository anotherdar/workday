import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    HomeScreen,
    WorkdayScreen,
    ProductScreen,
    SellersScreens,
    HistoryScreen,
} from '@src/screens';
import { ThemeColors } from '@src/theme';

const Stack = createStackNavigator<StackNavigationRoutes>();

export const NavigatorStack = () => {
    return <Stack.Navigator initialRouteName="home" screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: {
            backgroundColor: ThemeColors.main,
        },
    }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="workday" component={WorkdayScreen} />
        <Stack.Screen name="products" component={ProductScreen} />
        <Stack.Screen name="sellers" component={SellersScreens} />
        <Stack.Screen name="history" component={HistoryScreen} />
    </Stack.Navigator>;
};
