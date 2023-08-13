import React from 'react';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {theme} from 'themes';

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

const useTextStyle = ({
  style,
  tabular,
  transform,
  weight = 'normal',
  size,
  color = theme.colors.text,
}: ManoTextProps) => {
  const fontVariant: TextStyle['fontVariant'] = tabular ? ['tabular-nums'] : [];
  const textTransform = transform || 'none';
  const textStyles: StyleProp<TextStyle> = [
    style,
    {
      fontFamily: theme.fonts[weight],
      fontVariant,
      textTransform,
      fontSize: size,
      color,
    },
  ];

  return textStyles;
};
