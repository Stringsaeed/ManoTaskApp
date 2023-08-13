import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface Props extends ViewProps {
  gap?: number;
}

export default function RowWrapContainer({style, gap, ...props}: Props) {
  return <View style={[styles.container, !!gap && {gap}, style]} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
