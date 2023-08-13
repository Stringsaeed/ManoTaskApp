import React, {useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export default function Container({
  style: overrideStyle,
  ...restProps
}: ViewProps) {
  const style = useMemo(
    () => [styles.container, overrideStyle],
    [overrideStyle],
  );

  return <View {...restProps} style={style} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
