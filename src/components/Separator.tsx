import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Separator() {
  return <View style={styles.sep} />;
}

const styles = StyleSheet.create({
  sep: {marginBottom: 8},
});
