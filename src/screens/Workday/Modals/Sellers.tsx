import { BottomSheet, BottomSheetProps, ListItem } from '@src/components';
import { useNavigator, useSeller } from '@src/hooks';
import React, { FC } from 'react';
import { FlatList } from 'react-native';

type SellersProps = Pick<BottomSheetProps, 'visible' | 'onDismiss'>;

export const Sellers: FC<SellersProps> = (props) => {
    const { sellers } = useSeller();
    const navigator = useNavigator<StackNavigationRoutes>();

    const navigateToWorkday = ({ name, id }: { name: string, id: string}) => {
        return () => {
            props.onDismiss();

            navigator.navigate('detail', {
                name,
                sellerId: id,
            });
        };
    };

    return <BottomSheet title="Seleccionar vendedor" {...props}>
        <FlatList
            data={sellers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <ListItem
                    icon="account"
                    onPress={navigateToWorkday({ name: item.name, id: item.id})}
                    name={item.name}
                />;
            }}
        />
    </BottomSheet>;
};

