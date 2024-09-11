import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheet, Button, Expand, Text } from '@src/components';
import { useNotificationStore } from '@src/store';
import { addAlignItems, addPadding, ThemeColors } from '@src/theme';
import { View } from 'react-native';

export const NotificationContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { notification } = useNotificationStore();

  return (
    <>
        <BottomSheet disableHeader visible={notification.visible} onDismiss={notification.cancel}>
            <View style={[addAlignItems('center'), addPadding('xl')]}>
                <Icon name="information" size={130} color={ThemeColors.primary} />
                <Expand elementSize="sm"/>
                <Text fontWeight={'400'} align="center">{notification.title}</Text>
            </View>
            <Expand elementSize="xs"/>
            <View>
                <Button onPress={notification.action}>
                    Continuar
                </Button>
                <Expand elementSize="sm"/>
                <Button type="link" onPress={notification.cancel}>
                    Cancelar
                </Button>
            </View>
        </BottomSheet>
        {children}
    </>
  );
};
