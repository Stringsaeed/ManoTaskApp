import React from 'react';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';

export interface ManoTextProps extends TextProps {
  tabular?: boolean;
  weight?: TextStyle['fontWeight'];
  size?: TextStyle['fontSize'];
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  color?: ColorValue;
}

export default function ManoText(props: ManoTextProps) {
  const {style, tabular, transform, weight, size, color, ...rest} = props;
  const textStyles = useTextStyle({
    style,
    tabular,
    transform,
    weight,
    size,
    color,
  });
  return <Text {...rest} style={textStyles} />;
}

const fontMapper = {
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
};

const useTextStyle = ({
  style,
  tabular,
  transform,
  weight = 'normal',
  size,
  color = '#010011',
}: ManoTextProps) => {
  const fontVariant: TextStyle['fontVariant'] = tabular ? ['tabular-nums'] : [];
  const textTransform = transform || 'none';
  const textStyles: StyleProp<TextStyle> = [
    style,
    {
      fontFamily: fontMapper[weight],
      fontVariant,
      textTransform,
      fontSize: size,
      color,
    },
  ];

  return textStyles;
};
