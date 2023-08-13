import {DefaultTheme} from '@react-navigation/native';

const theme = {
  colors: {
    primary: '#e71233',
    text: '#010011',
    background: '#fff',
    onPrimary: '#fff',
  },
  navigation: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme,
      background: '#fff',
    },
  } as unknown as typeof DefaultTheme,
  fonts: {
    '100': 'BricolageGrotesque-Regular',
    '200': 'BricolageGrotesque-Regular',
    '300': 'BricolageGrotesque-Regular',
    '400': 'BricolageGrotesque-Regular',
    '500': 'BricolageGrotesque-Medium',
    '600': 'BricolageGrotesque-SemiBold',
    '700': 'BricolageGrotesque-Bold',
    '800': 'BricolageGrotesque-Bold',
    '900': 'BricolageGrotesque-Bold',
    bold: 'BricolageGrotesque-Bold',
    normal: 'BricolageGrotesque-Regular',
  },
};

export default theme;
