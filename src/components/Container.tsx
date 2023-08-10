import React from 'react';
import {View, ViewProps} from 'react-native';

interface ContainerProps extends ViewProps {}

export default function Container(props: ContainerProps) {
  return <View {...props} />;
}
