import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Expand, Menu, Text } from '@src/components';
import { addPadding, orientation } from '@src/theme';

export const HomeScreen: React.FC = () => {
    return <SafeAreaView style={[orientation.full]}>
        <View style={[orientation.full, addPadding('default')]}>
            <Text>Panaderia</Text>
            <Expand />
            <ScrollView>
                <Menu />
            </ScrollView>
        </View>
    </SafeAreaView>;
};
