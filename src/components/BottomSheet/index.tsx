import React, {FC, PropsWithChildren} from 'react';
import {Modal, Pressable, View} from 'react-native';
import {
  addAlignItems,
  addColor,
  addDirection,
  addFlex,
  addJustifyContent,
  addPadding,
  addRadius,
  ThemeColors,
} from '@src/theme';
import { Text } from '../Text';
import { IconButton } from '../IconButton';

export const BottomSheet: FC<PropsWithChildren<BottomSheetProps>> = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onDismiss}>
      <Pressable
        onPress={props.onDismiss}
        style={[
          addColor('rgba(0,0,0,.5)'),
          addFlex(1),
          addJustifyContent('flex-end'),
        ]}>
        <Pressable onPress={e => e.stopPropagation()}>
          {/* Header  */}
          {!props.disableHeader && <View
            style={[
              addColor(ThemeColors.contrast),
              addDirection('row'),
              addAlignItems('center'),
              addJustifyContent('space-between'),
              addPadding('default', 'paddingHorizontal'),
              addPadding('extra', 'paddingVertical'),
              addRadius('borderTopLeftRadius', 'extra'),
              addRadius('borderTopRightRadius', 'extra'),
            ]}>
            <Text fontWeight="500" size={'extra'}>
              {props.title}
            </Text>

            <IconButton onPress={props.onDismiss} icon="close" />
          </View>}
          {/*  */}
          <View
            style={[
              addPadding('default', 'paddingHorizontal'),
              addPadding('extra', 'paddingVertical'),
              addColor(ThemeColors.main),
            ]}>
            {props.children}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export interface BottomSheetProps {
  title?: string;
  icon?: string | React.ReactNode;
  onDismiss: () => void;
  visible: boolean;
  disableHeader?: boolean;
}
