import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { BottomSheet, Button, Expand, Text } from '@src/components';
import { useModals, useProducts } from '@src/hooks';
import { addBorderRadius, addColor, addFontWeight, addPadding, fontSize, ThemeColors } from '@src/theme';

export const ProductsModal: React.FC<ProductModalProps> = ({ refresh }) => {
  const { isVisible, setIsVisible, isMode } = useModals();
  const { createProduct, setCurrentProduct, updateProduct, current } = useProducts();

  const [name, setName] = useState<string>('');

  const getUserInput = (text: string) => setName(text);

  useEffect(() => {
    if (current) {
      setName(current.name);
    }
  }, [current]);

  const handleMainAction = useCallback(async () => {
    if(isMode('edit') && current) {
      await updateProduct(current.id, name);

      setCurrentProduct(null);
    }

    if(isMode('create')) {
      await createProduct(name);
    }
    // clear the local state
    setName('');
    // refresh products
    refresh();
    // hide the modal
    setIsVisible('none')();

  }, [isMode, name, setIsVisible, refresh, createProduct, current, updateProduct, setCurrentProduct]);

  return (
    <BottomSheet visible={isVisible()} title={`${isMode('edit') ? 'Editar' : 'Crear'} producto`} onDismiss={setIsVisible('none')}>
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

//
interface ProductModalProps {
  refresh: () => Promise<void>
}
