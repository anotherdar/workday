import React from 'react';
import {BottomSheet} from '@src/components';
import { useModals } from '@src/hooks';

export const ProductsModal = () => {
  const {isVisible, setIsVisible, isEditing} = useModals();

  return (
    <BottomSheet visible={isVisible()} title={`${isEditing() ? 'Editar' : 'Crear'} producto`} onDismiss={setIsVisible('none')} />
  );
};
