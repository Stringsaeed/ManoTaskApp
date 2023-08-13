import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export default function Spacer({style: overrideStyle, ...props}: ViewProps) {
  const style = StyleSheet.flatten([styles.container, overrideStyle]);

  return <View {...props} style={style} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
