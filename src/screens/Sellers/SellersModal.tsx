import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { BottomSheet, Button, Expand, Text } from '@src/components';
import { useModals, useSeller } from '@src/hooks';
import { addBorderRadius, addColor, addFontWeight, addPadding, fontSize, ThemeColors } from '@src/theme';

export const SellerModal: React.FC = () => {
  const { isVisible, setIsVisible, isMode } = useModals();
  const { current, createSeller, setCurrentSellers, updateSeller, getSellers} = useSeller();

  const [name, setName] = useState<string>('');

  const getUserInput = (text: string) => setName(text);

  useEffect(() => {
    if (current) {
      setName(current.name);
    }
  }, [current]);

  const handleMainAction = useCallback(async () => {
    if(isMode('edit') && current) {
      await updateSeller(current.id, name);

      setCurrentSellers(null);
    }

    if(isMode('create')) {
      await createSeller(name);
    }
    // clear the local state
    setName('');
    // refresh products
    await getSellers();
    // hide the modal
    setIsVisible('none')();

  }, [isMode, name, setIsVisible, getSellers, createSeller, current, updateSeller, setCurrentSellers]);

  return (
    <BottomSheet visible={isVisible()} title={`${isMode('edit') ? 'Editar' : 'Crear'} vendedor`} onDismiss={setIsVisible('none')}>
      <View style={[addPadding('extra', 'paddingVertical')]}>
        <Text size={'normal'}>Nombre</Text>
        <Expand elementSize={'xs'} />
        <View
          style={[
            addBorderRadius('sm'),
            addColor(ThemeColors.contrast),
            addPadding('sm'),
          ]}>
          <TextInput
            placeholderTextColor={ThemeColors.placeholder}
            style={[
              addColor(ThemeColors.text, 'color'),
              fontSize('normal'),
              addFontWeight('600'),
            ]}
            value={name}
            onChangeText={getUserInput}
          />
        </View>
        <Expand />
        {/* CTA */}
        <Button onPress={handleMainAction} disabled={!name}>
          Guardar
        </Button>
      </View>
    </BottomSheet>
  );
};

