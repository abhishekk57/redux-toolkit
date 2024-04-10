import { DefaultTheme, MD2DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF',
    background: '#CCC',
    text: '#000000',
    viewBg:"#fbc600"
  },
};

export const darkTheme = {
  ...MD2DarkTheme.colors,
  colors: {
    ...MD2DarkTheme.colors,
    primary: '#007AFF',
    background: '#3b3c43',
    text: '#FFFFFF',
    viewBg:"#fbc600"
  },
};