import React, {useMemo} from 'react';
import {
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import ManoText from './ManoText';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  labelProps?: React.ComponentProps<typeof ManoText>;
  color?: ColorValue;
}

export default function Button({
  disabled,
  style: overrideStyle,
  label,
  labelProps,
  color,
  ...restProps
}: ButtonProps) {
  const style = useMemo(
    () =>
      StyleSheet.flatten([
        styles.container,
        {backgroundColor: color},
        disabled && styles.disabled,
        overrideStyle,
      ]),
    [color, disabled, overrideStyle],
  );

  return (
    <TouchableOpacity {...restProps} disabled={disabled} style={style}>
      <ManoText size={16} weight="600" {...labelProps}>
        {label}
      </ManoText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
