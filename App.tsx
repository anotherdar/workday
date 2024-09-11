import React from 'react';
import { RootNavigation } from './src/navigation/Container';
import { StatusBar } from 'react-native';
import { ThemeColors } from './src/theme';
import { NotificationContainer } from '@src/containers';

export const App: React.FC = () => {
  return <>
    <StatusBar backgroundColor={ThemeColors.main} barStyle={'light-content'} />
    <NotificationContainer>
      <RootNavigation />
    </NotificationContainer>
  </>;
};

